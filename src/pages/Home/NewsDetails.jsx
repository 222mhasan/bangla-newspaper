
const NewsDetails = ({ NewsDetails }) => {

    const { _id, others_info, rating, total_view, title } = NewsDetails || {};
    console.log();

    return (
        <div>
            <h2>{title}</h2>
            <p>Rating: {rating}</p>
        </div>
    );
};

export default NewsDetails;