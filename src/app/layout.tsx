import "@/app/index.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="https://code-nyx.tech/favicon.ico" />
        <title>CodeNyx | 36-Hour Hackathon</title>
      </head>
      <body>
        <SmoothScrollProvider>
          <div className="bg-black min-h-screen text-white font-body selection:bg-white selection:text-black">
            <Navbar />
            <div id="root">{children}</div>
            <Footer />
            <Analytics />
            <SpeedInsights />
          </div>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
