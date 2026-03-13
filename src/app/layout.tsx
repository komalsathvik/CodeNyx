import "@/app/index.css";

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
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
