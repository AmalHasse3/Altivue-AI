import "./globals.css";

export const metadata = {
  title: "Altivue AI",
  description: "Enterprise Intelligence OS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
