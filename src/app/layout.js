import "./globals.css";

export const metadata = {
  title: "Smartbyte Ltd. — Employee Portfolio",
  description: "Employee portfolio for Smartbyte Ltd.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
