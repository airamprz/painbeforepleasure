import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Archivo_Black } from "next/font/google";

const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "Pain Before Pleasure",
  description: "Brands & culture",
};
export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="h-screen bg-black text-white grid grid-rows-[auto,1fr,auto] overflow-hidden">
        <Navbar fontClass={archivoBlack.className} />

        <main className="min-h-0 overflow-hidden">
          {children}
        </main>

        <Footer fontClass={archivoBlack.className} />
      </body>
    </html>
  );
}
