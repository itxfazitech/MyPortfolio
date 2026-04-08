export default function manifest() {
  return {
    name: "Faizan Arif — Full Stack Developer",
    short_name: "Faizan Arif",
    description:
      "Portfolio of Faizan Arif, Full Stack Developer in Pakistan specialising in SaaS, ERP, LMS, web, mobile & desktop apps.",
    start_url: "/",
    display: "standalone",
    background_color: "#050816",
    theme_color: "#3b82f6",
    icons: [
      {
        src: "/dp/dp.png",
        sizes: "any",
        type: "image/png",
        purpose: "any maskable",
      },
    ],
  };
}
