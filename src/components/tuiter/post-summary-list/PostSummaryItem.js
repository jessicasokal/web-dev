import "../explore.css";

const PostSummaryItem = (
    {
        post = {
            "topic": "Web Development",
            "userName": "ReactJS",
            "time": "2h",
            "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
            "image": "reactjs.png"
        }
    }
) => {
    return (
        <>
    <div className="list-group-item">
        <div className="row pe-0 me-0">
            <div className="col-10">
                <div className="wd-topic-text">{post.topic}</div>
                <div className="wd-subject-text ">{post.userName + ' '}
                <i className="fa-solid fa-circle-check"></i>
                <span className="wd-topic-text wd-not-bold"> - {post.time}</span>
                </div>
                <div className="wd-subject-text">{post.title}</div>
            </div>
            <div className="col-2 pt-2 pb-1 ">
                <img src={post.image} className="wd-small-pictures float-end" alt=""/>
            </div>
        </div>
    </div>
        </>
);
}

export default PostSummaryItem;
