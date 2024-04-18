import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import "./Search.css";
import useFetch from "../../hooks/useFetch ";
import Link from "next/link";

const Search = ({ setSearchModal }) => {
    const [query, setQuery] = useState("");
    // const navigate = useNavigate();

    const onChange = (e) => {
        setQuery(e.target.value);
    };

    let { data } = useFetch(
        // `/api/articles?populate=*&?filters[desc][title][$contains]=${query}`
                `/api/articles?populate=*&filters[title][$contains]=${query}`

    );

    if (!query.length) {
        data = null;
    }

    return (
        <div className="search-modal">
            <div className="form-fieldSR">
                <input
                    autoFocus
                    type="text"
                    placeholder="Search for products"
                    value={query}
                    onChange={onChange}
                />
                <MdClose
                    className="close-btnSR"
                    onClick={() => setSearchModal(false)}
                />
            </div>
            <div className="search-result-content">
                {!data?.data?.length && (
                    <div className="start-msg">
                        Start typing to see products you are looking for.
                    </div>
               )} 
                <div className="search-results">
                    {data?.data?.map((item) => (
                       <Link href={`/Articles/${item?.attributes?.title}`}
                            className="search-result-item"
                            key={item.id}
                            onClick={() => {
                                // navigate("/Article/" + item.id);
                                // navigate("/Article/" + item.id);

                                setSearchModal(false);
                            }}
                        >
                            
                            <div className="SRimage-container">
                                <img
                                // src={Img1}
                                    src={
                                        process.env.NEXT_PUBLIC_API_URL +item?.attributes?.image?.data?.attributes.url
                                    }
                                />
                            </div>
                            <div className="prodSR-details">
                                <span className="nameSR">
                                  
                                    {item.attributes.title}
                                </span>
                                <span className="descSR">
                                    
                                    {item.attributes.desc}
                                </span>
                            </div>
                        </Link>
                 ))} 
                </div>
            </div>
        </div>
    );
};

export default Search;