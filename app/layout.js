import "./globals.css";
import Navbar from "@/components/Global/Navbar";
import Footer from "@/components/Global/Footer";
import Tawk from "@/components/Tawk/Tawk";
import { OrganizationSchema } from "@/components/SEO/StructuredData";
import {
  CoreWebVitalsOptimization,
  AnalyticsTracking,
} from "@/components/SEO/AdvancedMetadata";

export const metadata = {
  title: {
    default:
      "Custom Boxes Wholesale - Manufacturer and Supplier in USA | PrintPro Packaging",
    template: "%s | PrintPro Packaging",
  },
  description:
    "PrintPro Packaging is a leading company that prints and packages custom boxes for Retail, CBD, Cosmetics, Food, Gifts, etc in USA. Get free Quote!",
  keywords: [
    "custom boxes wholesale",
    "custom packaging",
    "packaging manufacturer",
    "custom boxes USA",
    "retail packaging",
    "CBD packaging",
    "cosmetics packaging",
    "food packaging",
    "gift boxes",
    "printpro packaging",
  ],
  authors: [{ name: "PrintPro Packaging" }],
  creator: "PrintPro Packaging",
  publisher: "PrintPro Packaging",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://printpropackaging.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://printpropackaging.com",
    title: "Custom Boxes Wholesale - Manufacturer and Supplier in USA",
    description:
      "PrintPro Packaging is a leading company that prints and packages custom boxes for Retail, CBD, Cosmetics, Food, Gifts, etc in USA. Get free Quote!",
    siteName: "PrintPro Packaging",
    images: [
      {
        url: "/Logo.png",
        width: 1200,
        height: 630,
        alt: "PrintPro Packaging - Custom Boxes Wholesale",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Boxes Wholesale - Manufacturer and Supplier in USA",
    description:
      "PrintPro Packaging is a leading company that prints and packages custom boxes for Retail, CBD, Cosmetics, Food, Gifts, etc in USA. Get free Quote!",
    images: ["/Logo.png"],
    creator: "@printpropackaging",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="./favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/Logo.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* Optimized font loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />

        {/* Icon fonts */}
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@4.3.0/fonts/remixicon.css"
          rel="stylesheet"
        />

        {/* Core Web Vitals Optimization */}
        <CoreWebVitalsOptimization />

        {/* Analytics */}
        <AnalyticsTracking />

        {/* Structured Data */}
        <OrganizationSchema />
      </head>
      <body>
        <Navbar />
        <Tawk />
        {children}
        <Footer />
      </body>
    </html>
  );
}
