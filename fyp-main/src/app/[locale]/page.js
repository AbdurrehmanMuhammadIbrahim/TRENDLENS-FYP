import AppContext from "../utils/context"; 
import Home from "./Home/page"
import { useTranslations } from "next-intl";
import { IntlProvider } from 'react-intl';

 const Page = () => {
  const t = useTranslations("Home");
  return (
    <main>
      {/* <AppContext> */}
        {/* <div> {t("title")}</div> */}
      <Home/>
      {/* </AppContext> */}
    </main>
  );
}
export default Page;
