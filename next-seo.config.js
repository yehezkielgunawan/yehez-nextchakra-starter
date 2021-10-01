/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  title: "yehez-nextchakra-starter",
  titleTemplate: "%s | yehez-nextchakra-starter",
  defaultTitle: "yehez-nextchakra-starter",
  description:
    "Yehezkiel Gunawan's personalized Next.js + chakra-ui + TypeScript starter template",
  canonical: "https://yehez-nextchakra-starter.yehezgun.com",
  openGraph: {
    url: "https://yehez-nextchakra-starter.yehezgun.com",
    title: "yehez-nextchakra-starter",
    description: "Next.js + chakra-ui + TypeScript template",
    type: "website",
    images: [
      {
        url: "https://yehez-og-image.yehezgun.com/**yehez-nextchakra-starter**.yehezgun.com.png?theme=dark&md=1&fontSize=50px&images=https%3A%2F%2Fres.cloudinary.com%2Fyehez%2Fimage%2Fupload%2Fv1630987481%2FYG_logo_trg6fp.png&widths=150&heights=150",
        alt: "yehez-nextchakra-starter.yehezgun.com og-image",
      },
    ],
    site_name: "yehez-nextchakra-starter",
  },
  twitter: {
    handle: "@handle",
    site: "@site",
    cardType: "summary_large_image",
  },
  additionalLinkTags: [
    {
      rel: "icon",
      href: "/assets/yehez_avatar.png",
    },
  ],
};

export default defaultSEOConfig;
