import { Inter } from "next/font/google";
import "./globals.css";
import TransitionProvider from "@/components/transitionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Stefano Esposito - Portfolio Web App",
    description: "Explore the dynamic and interactive portfolio of Stefano Esposito, showcasing innovative frontend and full-stack projects in a beautifully animated experience.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  );
}
