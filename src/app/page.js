import AppContext from "./utils/context"; 
import Home from "./Home/page"

 const Page = () => {
  return (
    <main>
      <AppContext>
      <Home/>
      </AppContext>
    </main>
  );
}
export default Page;
