let menu = document.querySelector('#menu-bars');
menu.onclick = () => {

  searchIcon.classList.remove('fa-times');
  searchForm.classList.remove('active');
}

let searchIcon = document.querySelector('#search-icon');
let searchForm = document.querySelector('.search-form');

searchIcon.onclick = () => {
  searchIcon.classList.toggle('fa-times');
  searchForm.classList.toggle('active');
}

window.onscroll = () => {
  searchIcon.classList.remove('fa-times');
  searchForm.classList.remove('active');
}

function addComment() {
  const commentText = document.getElementById("comment-text").value.trim();
  if (commentText !== "") {
    const commentContainer = document.getElementById("comments-container");
    const commentElement = document.createElement("div");
    commentElement.classList.add("comment");
    commentElement.innerHTML = `<p>${commentText}</p>`;
    commentContainer.appendChild(commentElement);
    document.getElementById("comment-text").value = "";
  } else {
    alert("Please enter a comment.");
  }
}