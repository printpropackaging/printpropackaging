import './globals.css';
import Navbar from '@/components/Global/Navbar';
import Footer from '@/components/Global/Footer';
import Tawk from '@/components/Tawk/Tawk';

export const metadata = {
  title: 'Custom Boxes Wholesale - Manufacturer and Supplier in USA',
  description: 'PrintPro Packaging is a leading company that prints and packages custom boxes for Retail, CBD, Cosmetics, Food, Gifts, etc in USA. Get free Quote!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="./favicon.svg" type="image/svg" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@4.3.0/fonts/remixicon.css"
          rel="stylesheet"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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