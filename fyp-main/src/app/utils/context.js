'use client';
import { createContext,useState} from 'react'
import { useEffect } from "react";
import { useRouter } from 'next/navigation';

export const  Context = createContext();

const AppContext =({children}) => {
    const [categories, setCategories] = useState();
    const [articles,setArticles, ] = useState();
    const [sliders, setSliders] = useState();
    const [singleArticle,setSingleArticle] =useState();
    const [about, setAbout] = useState();
    const [toggle, setToggle] = useState(true);
    // const [contact,setContact]= useState();
    // const [Singblog,setSingBlog] = useState();
    // const [Singpublications,setSingPublications] = useState();
    const location = useRouter();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);


    return (
        <Context.Provider
        value={{
            
            articles,
            categories,
            sliders,
            singleArticle,
            about,
            toggle,
            // contact,
            // Singblog,
            // Singpublications,

            setArticles, 
           setCategories, 
            setSliders,   
            setAbout,    
            setToggle,   
        //    setContact,          
           setSingleArticle,           
        //    setSingPublications

        }}
    >
        {children}
    </Context.Provider>
        );
};




export default AppContext;