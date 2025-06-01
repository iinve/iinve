import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

async function uploadFileToSupabase(supabase, file, bucket, folder) {
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);
  const fileExtension = file.name.split(".").pop().toLowerCase();
  const timestamp = Date.now();
  const randomString = Math.floor(Math.random() * 1e6).toString(36);
  const uniqueName = `${timestamp}-${randomString}.${fileExtension}`;
  const filePath = folder ? `${folder}/${uniqueName}` : uniqueName;

  const { error } = await supabase.storage
    .from(bucket)
    .upload(filePath, buffer, {
      contentType: file.type,
      upsert: false,
    });

  if (error) {
    console.error("Storage upload error:", error);
    throw new Error(`Failed to upload file: ${error.message}`);
  }

  const {
    data: { publicUrl },
  } = supabase.storage.from(bucket).getPublicUrl(filePath);

  return publicUrl;
}

export async function POST(request) {
  try {
    const supabase = createRouteHandlerClient({ cookies });
    const {
      data: { session },
    } = await supabase.auth.getSession();

    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const formData = await request.formData();
    const storageBucket = "digital-wall-assets";
    const fileMap = {};
    const formValues = {};

    // Process formData into fileMap and formValues
    for (const [key, value] of formData.entries()) {
      if (value instanceof File && value.size > 0) {
        try {
          const publicUrl = await uploadFileToSupabase(
            supabase,
            value,
            storageBucket,
            "uploads"
          );
          fileMap[key] = publicUrl;
        } catch (error) {
          fileMap[key] = null;
        }
      } else {
        formValues[key] = value;
      }
    }

    const digitalWallId = formValues.digitalWallId;
    const categories = JSON.parse(formValues.categories || "[]");
    const daily_prices = JSON.parse(formValues.daily_prices || "[]");
    const offers = JSON.parse(formValues.offers || "{}");
    const spotlightRaw = JSON.parse(formValues.spotlight || "{}");
    const productsRaw = JSON.parse(formValues.products || "[]");
    const bannersRaw = JSON.parse(formValues.banners || "[]");
    const newArrivalsRaw = JSON.parse(formValues.newArrivals || "[]");
    const company_details = JSON.parse(formValues.company_details || "{}");
    const theme = JSON.parse(formValues.theme || "{}");
    const social_links = JSON.parse(formValues.social_links || "{}");

    company_details.logo =
      fileMap["logo"] || formValues["logo"] || company_details.logo || null;

    const spotlight = {
      ...spotlightRaw,
      image:
        fileMap["spotlight_image"] ||
        formValues["spotlight_image"] ||
        spotlightRaw.image ||
        null,
    };

    const products = productsRaw.map((p, i) => {
      const key = `products[${i}][image]`;
      return {
        ...p,
        image: fileMap[key] || formValues[key] || p.image || null,
      };
    });

    const banners = bannersRaw.map((b, i) => {
      const key = `banners[${i}][image]`;
      return {
        ...b,
        image: fileMap[key] || formValues[key] || b.image || null,
      };
    });

    const newArrivals = newArrivalsRaw.map((n, i) => {
      const key = `newArrivals[${i}][image]`;
      return {
        ...n,
        image: fileMap[key] || formValues[key] || n.image || null,
      };
    });

    const wallData = {
      spotlight,
      categories,
      products,
      banners,
      new_arrivals: newArrivals,
      offers,
      updated_at: new Date().toISOString(),
      user_id: session.user.id,
      wall_slug: formValues.wall_slug,
      shop_name: formValues.shop_name,
      template: formValues.template,
      daily_prices,
      company_details,
      theme,
      social_links,
    };

    let dbOperation;

    if (digitalWallId) {
      const { data: existingWall, error: fetchError } = await supabase
        .from("digital_wall")
        .select("id")
        .eq("id", digitalWallId)
        .eq("user_id", session.user.id)
        .single();

      if (fetchError || !existingWall) {
        return NextResponse.json(
          { error: "Permission denied or wall not found" },
          { status: 403 }
        );
      }

      dbOperation = supabase
        .from("digital_wall")
        .update(wallData)
        .eq("id", digitalWallId)
        .select();
    } else {
      wallData.created_at = new Date().toISOString();
      dbOperation = supabase.from("digital_wall").insert(wallData).select();
    }

    const { data, error } = await dbOperation;

    if (error) {
      console.error("Supabase DB error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({
      success: true,
      message: digitalWallId
        ? "Wall updated successfully"
        : "Wall created successfully",
      data,
    });
  } catch (error) {
    console.error("Server error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
