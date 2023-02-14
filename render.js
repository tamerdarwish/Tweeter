let Renderer = function () {
    let renderPosts = function (posts) {
       // $(".comment").empty()

        $("#posts").empty()
        
        
        for (let post of posts) {
            
            $("#posts").append(`<div class="post" id="${post.id}">${post.text} </div>`)
            $("#"+ post.id ).append(`<div class="delete" id="delete-${post.id}"> Delete Post </div>`)
            
            for(let comment of post.comments){

                $("#"+ post.id ).append(`<div class="comment" id="${comment.id}"> ${comment.text} <p class="comment-delete" id="delete-${comment.id}"> X </p></div>`)
                /*$("#"+ comment.id ).append(`<p class="comment-delete" id="delete-${comment.id}"> X </p>`)*/
            }
            $("#"+ post.id ).append(`<div class="add-comment-container" id=add-comment-${post.id}></div>`)
            $("#add-comment-"+ post.id ).append(`<input class="comment-input" placeholder="Add comment.."></input>`)
            $("#add-comment-"+ post.id).append(`<button class="comment-button ">Comment</button>`)

        }
    }

    return {
        renderPosts,
    }
} 

