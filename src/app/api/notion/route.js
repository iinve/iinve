import { Client } from "@notionhq/client";

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

export async function POST(req) {
  try {
    const body = await req.json();
    const response = await notion.pages.create({
      parent: {
        database_id: process.env.NOTION_DATABASE_ID,
      },
      properties: {
        Name: {
          title: [
            {
              text: { content: body.name },
            },
          ],
        },
        Email: {
          email: body.email,
        },
        Number: {
          number: Number(body.number),
        },
        Message: {
          rich_text: [
            {
              text: { content: body.message },
            },
          ],
        },
        Date: {
          date: {
            start: body.eventDate,
          },
        },
        Time: {
          date: {
            start: new Date().toISOString(),
          },
        },
      },
    });

    return Response.json({ success: true, data: response });
  } catch (error) {
    console.error(error);
    return Response.json({ success: false, error: error.message });
  }
}
