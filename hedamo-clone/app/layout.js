import { Figtree } from "next/font/google";
import ThemeRegistry from './theme/ThemeRegistry';
import "./globals.css";

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-figtree",
});

export const metadata = {
  title: "Hedamo",
  description: "Michelin Guide style clone with Hedamo content",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          {children}
        </ThemeRegistry>
      </body>
    </html>
  );
}

