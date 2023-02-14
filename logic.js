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

    findPostIndex = function(postID){
        for (let post of _posts) {
            if (post.id == postID) {
              return _posts.indexOf(post)
            }
        }
        return -1
    }

    let _postIdCounter = _posts.length
    let _commentIdCounter 

    const getPosts = () => _posts

    let addPost = function (myText) {
        _postIdCounter++

        let newPost = {
            
            text: myText,
            id: "p"+_postIdCounter,
            comments: [],

        };

        _posts.push(newPost)
    }

    let removePost = function (postID) {
        let postIndex = findPostIndex(postID)
        _posts.splice(postIndex,1)
        return getPosts()
    }

    let addComment = function (postID, commentText) {

        for (let post of _posts) {
            _commentIdCounter = post.comments.length
            _commentIdCounter++
            if (post.id == postID) {
                let newComment = {
                    id: "c"+_commentIdCounter,
                    text: commentText,
                };
                post.comments.push(newComment)
            }
        }
       
    }

    let removeComment = function (postID, commentID) {

        let postIndex = findPostIndex(postID)
        let post = _posts[postIndex]
        for(let comment of _posts[postIndex].comments){
            if(comment.id == commentID){
                post.comments.splice(post.comments.indexOf(comment),1) 
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