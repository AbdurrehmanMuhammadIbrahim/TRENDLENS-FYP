import Link from "next/link";
import "./category.css";

const Category = ({ categories }) => {
    // const navigate = useNavigate();
    return (
        <div className="read-by-category" >
          <div className='cat-head '>

<div className='latest-cat'>
  All Categories
</div>



</div>
                <div className="categories">
                {categories?.data?.map((item) => (
                 <div key={item.id}
                            className="category"
                        // onClick={() => navigate(`/category/${item.id}`)}
                     
                        >
                              
 <img className="cat_img"
                                src={
                                    process.env.NEXT_PUBLIC_API_URL +
                                    item.attributes.cat_img?.data?.attributes.url
                                } />
                     


                     <Link className="cat_link" href={`/Category/${item?.attributes.title}`}>


                            <div className="cat_btn">{item?.attributes.title}</div>
                            </Link>
                        </div>
       
       ))}
                    </div>
        
        </div>
    );
};

export default Category;