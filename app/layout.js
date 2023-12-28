import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ThemeContextProvider } from "./context/ThemeContext";
import ThemeProvider from "./providers/ThemeProviders";
import AuthProvider from "./providers/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Blog App",
  description: "TechWithNaga Blog App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="overflow-scroll bg-softBgColor ">
        <AuthProvider>
          <ThemeContextProvider>
            <ThemeProvider>
              <div className="relative max-w-screen-2xl ml-auto mr-auto px-20 max-2xl:max-w-screen-xl max-xl:max-w-screen-lg max-lg:px-5 ">
                <Navbar></Navbar>
                {children}
                <Footer></Footer>
              </div>
            </ThemeProvider>
          </ThemeContextProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
