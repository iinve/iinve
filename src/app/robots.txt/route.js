// app/robots.txt/route.ts

export async function GET() {
  const body = `
User-agent: *
Allow: /

Sitemap: https://iinve.com/sitemap.xml
  `.trim();

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}
