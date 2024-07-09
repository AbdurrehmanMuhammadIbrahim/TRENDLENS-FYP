
// import { Inter } from "next/font/google";
import "../globals.css";
import Header from "../components/Header/page";
import Footer from "../components/Footer/page";
import AppContext from "../utils/context";
import {NextIntlClientProvider, useTranslations,useMessages} from 'next-intl';
// import { useTranslations } from "next-intl"; 
// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Trend-Lens MultiLingual News Website",
  description: "MultiLingual News Website",

};

export default function RootLayout({ children,locale }) {
  const messages = useMessages();

  return (
    <html lang="en">
      <body >
      <NextIntlClientProvider locale={locale} messages={messages}>
      <AppContext value={{ locale }}>
        <Header/>
        {children}
        <Footer locale={locale}/>
        </AppContext>
        </NextIntlClientProvider>
        </body>
    </html>
  );
}
