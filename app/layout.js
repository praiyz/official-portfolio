import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

// Correct initialization of the fonts
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "PRAIYZ-PORTFOLIO",
  description: "Portfolio created with love by praiyz  name: Olatunji Praise occupation:Full Stack Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth ">
      <body className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden  dark:bg-darkTheme dark:text-white`}>
        {children}
      </body>
    </html>
  );
}
