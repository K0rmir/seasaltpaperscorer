import { Inter } from "next/font/google";
import "./globals.css";
import GameProvider from "@/context/GameContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sea, Salt & Paper Scorer",
  description: "Made by Kormir",
};

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <GameProvider>
        <body className={inter.className}>{children}</body>
      </GameProvider>
      
    </html>
  );
}
