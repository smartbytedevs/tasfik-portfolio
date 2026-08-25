import "./globals.css";

export const metadata = {
  title: "Tasfik Bin Osman | Business Research Manager",
  description: "This is the portfolio of Tasfik Bin Osman, a Business Research Manager.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
