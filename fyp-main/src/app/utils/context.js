'use client';
import { createContext,useState} from 'react'
import { useEffect } from "react";
import { useRouter } from 'next/navigation';

// context/AuthContext.js
// import { useRouter } from 'next/router';

export const  Context = createContext();
// const AuthContext = createContext();

const AppContext =({children}) => {

    const [categories, setCategories] = useState();
    const [articles,setArticles, ] = useState();
    const [sliders, setSliders] = useState();
    const [singleArticle,setSingleArticle] =useState();
    const [about, setAbout] = useState();
    const [toggle, setToggle] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const router = useRouter();
    const location = useRouter();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const login = (token) => {
    localStorage.setItem('token', token);
    setIsAuthenticated(true);
    router.push('/AddArticle');
  };

 

    return (
        <Context.Provider
        value={{
            
            articles,
            categories,
            sliders,
            singleArticle,
            about,
            toggle,
            isAuthenticated, 
            login, 


            setArticles, 
           setCategories, 
            setSliders,   
            setAbout,    
            setToggle,   
           setSingleArticle,           

        }}
    >
        {children}
    </Context.Provider>
        );
};




export default AppContext;