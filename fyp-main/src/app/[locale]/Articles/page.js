import "./articles.css";
import Article from "./Article/page";

const Articles = ({ articles, innerPage, headingText }) => {
    return (
        <div className="articles-container">
            {!innerPage && <div className="sec-heading">{headingText}</div>}
            <div className="articles">
                {articles?.data?.map((item) => (
                    <Article
                        key={item.id}
                        id={item.id}
                        data={item.attributes}
                    />
                ))}
            </div>

        </div>
    );
};

export default Articles;