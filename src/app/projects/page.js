import ProjectsSection from "@components/ProjectsSection";
export const metadata = {
  metadataBase: new URL("https://abhishek-portfolio-website.vercel.app/"),
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  generator: "Next.js",
  title: "Abhishek | Projects",
  applicationName: "Portfolio Website",
  referrer: "origin-when-cross-origin",
  keywords: ["Next.js", "React", "JavaScript"],
  authors: "Abhishek",
  creator: "Abhishek",
  publisher: "Abhishek",
  openGraph: {
    title: "Abhishek | Projects",
    description: "Abhishek Projects",
    type: "website",
    publishedTime: "2023-01-01T00:00:00.000Z",
    author: "Abhishek",
    url: "https://abhishek-portfolio-website.vercel.app/",
    siteName: "Abhishek Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhishek | Projects",
    description: "Abhishek Projects",
    siteId: "1467726470533754880",
    creator: "@nextjs",
    creatorId: "1467726470533754880",
    images: ["https://abhishek-portfolio-website.vercel.app/og.png"],
  },
};
export default function page() {
  const loading = true;

  return (
    <main className="flex min-h-screen flex-col bg-[#121212] overflow-hidden">
      <div className="container mx-auto lg:px-14 px-5 py-4 mt-24">
        <ProjectsSection />
      </div>
    </main>
  );
}
