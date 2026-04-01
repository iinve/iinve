// import { ImageResponse } from "@vercel/og";
// import supabase from "lib/supabase";

// // Font loading utility
// async function loadGoogleFont(font, text) {
//   try {
//     const url = `https://fonts.googleapis.com/css2?family=${font}&text=${encodeURIComponent(text)}`;
//     const css = await (await fetch(url)).text();
//     const resource = css.match(/src: url\((.+?)\) format\('(opentype|truetype)'\)/);

//     if (resource) {
//       const response = await fetch(resource[1]);
//       if (response.ok) return await response.arrayBuffer();
//     }
//     console.warn("Could not load font, falling back");
//     return null;
//   } catch (err) {
//     console.error("Font load error:", err);
//     return null;
//   }
// }

// export async function GET(req) {
//   try {
//     const { searchParams } = new URL(req.url);
//     const slug = searchParams.get("slug");

//     const { data, error } = await supabase
//       .from("digital_wall")
//       .select("*")
//       .eq("wall_slug", slug);

//     const wall = data?.[0];

//     if (!wall) {
//       return new Response("Wall not found", { status: 404 });
//     }

//     const fontName = "Red+Rose"; // URL encoded format for Google Fonts
//     const fontDisplayName = "Red Rose";
//     const companyName = wall?.company_details?.name || "Untitled Company";
//     const logo = wall?.company_details.logo ?? null;
//     const themeColor = wall?.theme?.theme_color || "#fff";
//     const fontData = await loadGoogleFont(fontName, companyName);

//     return new ImageResponse(
//       (
//         <div
//           style={{
//             width: "100%",
//             height: "100%",
//             backgroundColor: themeColor,
//             display: "flex", // crucial
//             position: "relative",
//             flexDirection: "column",
//             alignItems: "center",
//             justifyContent: "center",
//           }}
//         >
//           {/* Background layer */}
//           <img
//             src="https://res.cloudinary.com/dttvg5xil/image/upload/v1747123545/og_background_vp0xmj.png"
//             alt="Background"
//             width="1200"
//             height="630"
//             style={{
//               position: "absolute",
//               top: 0,
//               left: 0,
//               width: "100%",
//               height: "100%",
//               objectFit: "cover",
//               zIndex: 2,
//             }}
//           />

//           {/* Foreground content */}
//           <div
//             style={{
//               position: "relative",
//               borderRadius: "15px",
//               padding: "30px",
//               zIndex: 4,
//               display: "flex",
//               flexDirection: "column",
//               maxWidth: "80%",
//               margin: '50px auto',
//               alignItems: "center",
//               justifyContent: "center",
//             }}
//           >

//             {wall?.company_details?.logo && (
//               <div
//                 style={{
//                   width: 250,
//                   height: 200,
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   marginBottom: "50px",
//                   background: "#fff",
//                   borderRadius: "10px",
//                   padding: '20px 40px'
//                 }}
//               >
//                 <img
//                   src={wall.company_details.logo}
//                   alt="Logo"
//                   width={200}
//                   height={200}
//                   style={{
//                     objectFit: "contain",
//                     display: "block",
//                     borderRadius: "10px"
//                   }}
//                 />
//               </div>
//             )}
//             <div
//               style={{
//                 fontSize: 60,
//                 fontFamily: fontData ? "Red Rose" : "sans-serif",
//                 color: wall.theme.highlight_color,
//                 textAlign: 'center',
//                 fontWeight: 'bold',
//                 marginBottom: '10px'
//               }}
//             >
//               Exclusive Offers
//             </div>
//             <div
//               style={{
//                 fontSize: 50,
//                 fontFamily: fontData ? "Red Rose" : "sans-serif",
//                 color: wall.theme.content_color,
//                 textAlign: 'center',
//                 fontWeight: 'bold',
//               }}
//             >
//               {wall.spotlight.text}
//             </div>

//           </div>
//         </div>
//       ),
//       {
//         width: 1200,
//         height: 630,
//         fonts: fontData
//           ? [
//             {
//               name: fontDisplayName,
//               data: fontData,
//               style: "normal",
//             },
//           ]
//           : [],
//         headers: {
//           "Content-Type": "image/png",
//           "Cache-Control": "no-store",
//         },
//       }
//     );
//   } catch (error) {
//     console.error("OG Error:", error);
//     return new Response("Failed to generate image", { status: 500 });
//   }
// }

// export const dynamic = "force-dynamic";
