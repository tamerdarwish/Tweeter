
const tweeter = Tweeter()
const renderer = Renderer()

renderer.renderPosts(tweeter.getPosts())
$("#post").on("click",function(){
   
    tweeter.addPost($("input").val())
    renderer.renderPosts(tweeter.getPosts())
})

$(document).on('click','.delete', function(){
    let postIDToRemove = $(this).closest('.post').attr('id')
    tweeter.removePost(postIDToRemove)
    renderer.renderPosts(tweeter.getPosts())
  });

  $(document).on('click','.comment-button', function(){
    let postID = $(this).closest('.post').attr('id')
    let commentText = $(this).closest("div").find('.comment-input').val()
    tweeter.addComment(postID,commentText)
    renderer.renderPosts(tweeter.getPosts())
  });

  $(document).on('click','.comment-delete', function(){
    let postID = $(this).closest('.post').attr('id')
    let commentID = $(this).closest('.comment').attr('id')
    tweeter.removeComment(postID,commentID)
    renderer.renderPosts(tweeter.getPosts())
  });

