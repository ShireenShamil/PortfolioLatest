import Image from "next/image";
import { Outfit, Ovo } from "next/font/google";
import { assets } from "@/assets/assets"; // Make sure you import your assets
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-outfit",
});

const ova = Ovo({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-ovo",
});

export const metadata = {
  title: "Portfolio - Shireen Shamil",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.className} ${ova.className} antialiased leading-8 overflow-x-hidden dark:bg-darkTheme dark:text-white relative`}
      >
        {/* Global blurred background image - hidden in dark mode */}
        <div className="fixed inset-0 -z-10 dark:hidden">
          <Image
            src={assets.bgHeader} // your background image from assets
            alt="Background"
            fill
            className="object-cover blur-md opacity-90"
            priority
          />
        </div>

        {/* Dark mode fallback background */}
        <div className="fixed inset-0 -z-10 hidden dark:block bg-darkTheme" />

        {children}
      </body>
    </html>
  );
}
