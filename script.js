"use strict";

const library = [];
const addBookBtn = document.querySelector(".add-book");
const bookMenu = document.querySelector(".book-menu");
const dialogBookForm = document.querySelector(".add-book-form");
const addConfirmBtn = document.getElementById("add-confirm");
let currentID = 0;

function createBookCard(title, author, pages, imgUrl) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.imgUrl = imgUrl;
  this.id = ++currentID;

  const card = document.createElement("div");
  const description = document.createElement("div");
  const readBtn = document.createElement("button");
  const deleteBtn = document.createElement("button");
  const image = document.createElement("img");
  const authorText = document.createElement("div");
  const titleText = document.createElement("div");

  authorText.textContent = `by ${author}`;
  titleText.textContent = title;
  image.src = imgUrl;
  readBtn.textContent = "Unread";
  deleteBtn.textContent = "Delete";

  card.appendChild(image);
  card.setAttribute("id", `${currentID}`);
  card.classList.add("card");
  description.classList.add("description");
  readBtn.classList.add("read-state");
  deleteBtn.classList.add("delete-btn");
  description.appendChild(titleText);
  description.appendChild(authorText);
  description.appendChild(readBtn);
  description.appendChild(deleteBtn);
  card.appendChild(description);
  bookMenu.appendChild(card);

  readBtn.addEventListener("click", () => {
    readBtn.textContent === "Unread"
      ? (readBtn.textContent = "read")
      : (readBtn.textContent = "Unread");
  });

  deleteBtn.addEventListener("click", () => {
    bookMenu.removeChild(card);
    for (let i = 0; i < library.length; i++) {
      if (library[i].id === this.id) {
        library.splice(i, 1);
        break;
      }
    }
  });
}

addBookBtn.addEventListener("click", () => {
  dialogBookForm.showModal();
});

addConfirmBtn.addEventListener("click", () => {
  event.preventDefault();
  const title = document.getElementById("title");
  const author = document.getElementById("author");
  const numberPage = document.getElementById("page-number");
  const imgUrl = document.getElementById("img-url");

  if (
    title.value === "" ||
    author.value === "" ||
    numberPage.value === "" ||
    imgUrl.value === ""
  ) {
    alert("Not a valid book, please try again!");
    return;
  }

  const book = new createBookCard(
    title.value,
    author.value,
    numberPage.value,
    imgUrl.value
  );

  library.push(book);
  console.log(book);

  title.value = "";
  author.value = "";
  numberPage.value = "";
  imgUrl.value = "";
  dialogBookForm.close();
});

// createBookCard(
//   "sick",
//   "do",
//   55,
//   "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1691777485i/194802722.jpg"
// );
