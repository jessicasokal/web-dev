const PostSummaryItem = (post) => {
    return (`
    <div class="list-group-item">
        <div class="row pe-0 me-0">
            <div class="col-10">
                <div class="wd-topic-text">${post.topic}</div>
                <div class="wd-subject-text ">${post.userName}
                <i class="fa-solid fa-circle-check"></i></i>
                <span class="wd-topic-text wd-not-bold">- ${post.time}</span>
                </div>
                <div class="wd-subject-text">${post.title}</div>
            </div>
            <div class="col-2 pt-2 pb-1 ">
                <img src=${post.image} class="wd-small-pictures float-end"/>
            </div>
        </div>
    </div>
`);
}

export default PostSummaryItem;
