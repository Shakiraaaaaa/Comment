document.getElementById("button").addEventListener("click", function () {
    document.body.style.backgroundColor = "lightcoral";
})
document.getElementById("button-1").addEventListener("click", function () {
    document.body.style.backgroundColor = "lightgreen"
})
document.getElementById("button-2").addEventListener("click", function () {
    document.body.style.backgroundColor = "lightpink"
})
document.getElementById("button-3").addEventListener("click", function () {
    document.body.style.backgroundColor = "lightblue"
})
document.getElementById("button-4").addEventListener("click", function () {
    document.body.style.backgroundColor = "lightgray"
})
document.getElementById("button-5").addEventListener("click", function () {
    document.body.style.backgroundColor = "skyblue"
})


document.getElementById("submit-comment").addEventListener("click", function () {
    let commentBox = document.getElementById("new-comment");
    console.log(commentBox);

})

//comment box
document.getElementById("submit-comment").addEventListener("click", function () {
    //get user comment
    let commentBox = document.getElementById("new-comment");
    let userComment = commentBox.value;
    //create comment
    let newComment = document.createElement("p");
    newComment.innerText = commentBox.value;
    //append the child
    let commentContainer = document.getElementById("comment-container");
    commentContainer.appendChild(newComment);
    commentBox.value = "";

})