

let Renderer = function () {
    let renderPosts = function (posts) {
        $("#posts").empty()

        for (let post of posts) {
            postsRender(post)

            for (let comment of post.comments) {

                commentsRender(post, comment)
            }
            commentsInputsRender(post)
        }
    }


    postsRender = function (post) {
        $("#posts").append(`<div class="post" id="${post.id}">${post.text} </div>`)
        $("#" + post.id).append(`<div class="delete" id="delete-${post.id}"> Delete Post </div>`)
    }

    commentsRender = function (post, comment) {
        $("#" + post.id).append(`<div class="comment" id="${comment.id}"> ${comment.text} <p class="comment-delete" id="delete-${comment.id}"> X </p></div>`)

    }
    commentsInputsRender = function (post) {
        $("#" + post.id).append(`<div class="add-comment-container" id=add-comment-${post.id}></div>`)
        $("#add-comment-" + post.id).append(`<input class="comment-input" placeholder="Add comment.."></input>`)
        $("#add-comment-" + post.id).append(`<button class="comment-button ">Comment</button>`)
    }

    return {
        renderPosts,
    }
} 