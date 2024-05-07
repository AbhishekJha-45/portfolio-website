import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@components/common/Header";
import dynamic from "next/dynamic";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import { Suspense } from "react";
import Loading from "./loading";
import Error from "./error";
const Footer = dynamic(() => import("@components/common/Footer"));

const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ErrorBoundary FallbackComponent={<Error />}>
          <Suspense fallback={<Loading />}>
            <Header />
            {children}
            <Footer />
          </Suspense>
        </ErrorBoundary>
      </body>
    </html>
  );
}
