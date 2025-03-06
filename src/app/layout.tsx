import Header from "@/components/header/header";
import "./globals.css";
import Footer from "@/components/footer/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>

        <Header />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
