import AppContext from "../utils/context"; 
import Home from "./Home/page"
import { useTranslations } from "next-intl";
import { IntlProvider } from 'react-intl';

 const Page = () => {
  const t = useTranslations("Home");
  return (
    <main>
      <Home/>
    </main>
  );
}
export default Page;
