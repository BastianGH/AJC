window.onload = init;

function init() {
  fetchData();
}

function fetchData() {
  fetch("https://dummyjson.com/posts") // Envoie de la requète
    .then(function (response) {
      // Récupération de la réponse
      return response.json(); // Transformation en JSON (asynchrone aussi)
    })
    .then(function (res) {
      renderPost(res.posts);
      document.getElementById("loader").style.display = "none";
    });
}

function renderPost(posts) {
  const postContainer = document.getElementById("post-container");
  postContainer.innerHTML = "";

  for (post of posts) {
    postContainer.appendChild(createPost(post));
  }
}

function createPost(post) {
  const postCard = document.getElementById("post-template").cloneNode(true);
  const titleAuthor = postCard.querySelector("[prop=author]");

  postCard.setAttribute("id", post.id);
  titleAuthor.setAttribute("id", post.userId);

  postCard.querySelector("[prop=title]").innerText = post.title;
  postCard.querySelector("[prop=body]").innerText = post.body;
  postCard.querySelector("[prop=views]").innerText += post.views;
  postCard.querySelector("[prop=Likes]").innerText += post.reactions.likes;
  postCard.querySelector("[prop=Dislikes]").innerText +=
    post.reactions.dislikes;

  const postTags = postCard.querySelector("[prop=tags]");

  for (tag of post.tags) {
    let newTag = document.createElement("span");
    newTag.innerText = tag;
    postTags.appendChild(newTag);
  }

  postCard.addEventListener("click", () => {
    displayInfos(post.id, post.userId);
  });
  return postCard;
}

function displayInfos(id, userId) {
  console.log(id);
  console.log(userId);
}

async function fetchUser(id) {
  const user = await fetch(`https://dummyjson.com/users/${id}`)
    .then(function (response) {
      return response.json();
    })
    .then(function (res) {
      userNames = {
        firstName: res.firstName,
        lastName: res.lastName,
      };
      return userNames;
    });

  return user;
}

function fetchComments(id) {
  fetch(`https://dummyjson.com/comments/${id}`).then(function (response) {
    return response.json();
  });
}
