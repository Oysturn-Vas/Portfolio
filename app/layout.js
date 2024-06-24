import { Toaster } from "react-hot-toast";
import "./globals.css";

export const metadata = {
  title: "Oysturn Vas",
  description: "Portfolio Website of Oysturn Xavier Vas"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
