const Tweeter = function () {
   

    const _posts = [
        {
            text: "First post!",
            id: "p1",
            comments: [
                { id: "c1", text: "First comment on first post!" },
                { id: "c2", text: "Second comment on first post!!" },
                { id: "c3", text: "Third comment on first post!!!" }
            ]
        },
        {
            text: "Aw man, I wanted to be first",
            id: "p2",
            comments: [
                { id: "c4", text: "Don't wory second poster, you'll be first one day." },
                { id: "c5", text: "Yeah, believe in yourself!" },
                { id: "c6", text: "Haha second place what a joke." }
            ]
        },
        {
            text: "Aw man, I wanted to be first",
            id: "p3",
            comments: [
                
            ]
        },
    ]

    let postIdCounter = _posts.length
    let commentIdCounter 

    const getPosts = () => _posts

    let addPost = function (myText) {
        postIdCounter++

        let newPost = {
            
            text: myText,
            id: "p"+postIdCounter,
            comments: [],

        };

        _posts.push(newPost)
       // Renderer.renderPosts(getPosts())
        //postIdCounter++
    }

    let removePost = function (postID) {
        for (let post of _posts) {
            if (post.id == postID) {
                _posts.splice(_posts.indexOf(post),1)
            }
        }
        return getPosts()
    }

    let addComment = function (postID, commentText) {

        for (let post of _posts) {
            commentIdCounter = post.comments.length
            commentIdCounter++
            if (post.id == postID) {
                let newComment = {
                    id: "c"+commentIdCounter,
                    text: commentText,
                };
                post.comments.push(newComment)
            }
        }
       
    }

    let removeComment = function (postID, commentID) {
        for(let post of _posts){
            if(post.id == postID){
                for(let comment of post.comments){
                    if(comment.id == commentID){
                        post.comments.splice(post.comments.indexOf(comment),1) 
                    }
                }
            }
        }

    }



    return {
        getPosts:getPosts,
        addPost:addPost,
        removePost:removePost,
        addComment,
        removeComment
    }
}