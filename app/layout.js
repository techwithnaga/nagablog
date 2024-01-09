import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ThemeContextProvider } from "./context/ThemeContext";
import ThemeProvider from "./providers/ThemeProviders";
import AuthProvider from "./providers/AuthProvider";
import QueryProvider from "./providers/QueryProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Blog App",
  description: "TechWithNaga Blog App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="overflow-scroll">
        <AuthProvider>
          <ThemeContextProvider>
            <QueryProvider>
              <ThemeProvider>
                <div className="flex flex-col min-h-screen ml-auto mr-auto px-20 max-2xl:max-w-screen-xl max-lg:px-5 ">
                  <Navbar></Navbar>
                  {children}

                  <Footer></Footer>
                </div>
              </ThemeProvider>
            </QueryProvider>
          </ThemeContextProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
