import "./globals.css";

export const metadata = {
  title: "PB4P",
  description: "Brands & culture",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}