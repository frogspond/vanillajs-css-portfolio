const pageTurnBtn = document.querySelectorAll('.next-btn');
pageTurnBtn.forEach((el, index) => {
  el.onclick = () => {
    const pageId = el.getAttribute('data-page');
    const pageTurn = document.getElementById(pageId);
    console.log(pageId, pageTurn.style.zIndex);

    if (pageTurn.classList.contains('turn')) {
      pageTurn.classList.remove('turn');
      setTimeout(() => {
        pageTurn.style.zIndex = 20 - index;
      }, 500);
    } else {
      pageTurn.classList.add('turn');
      setTimeout(() => {
        pageTurn.style.zIndex = 20 + index;
      }, 500);
    }
  };
});

const pages = document.querySelectorAll('.book-page.page-right');

let totalPages = pages.length;
let pageNumber = 0;
function reverseIndex() {
  pageNumber--;
  if (pageNumber < 0) {
    pageNumber = totalPages - 1;
  }
}

//opening animation
const coverRight = document.querySelector('.cover.cover-right');
const pageLeft = document.querySelector('.book-page.page-left');
setTimeout(() => {
  coverRight.classList.add('turn');
}, 2000);

setTimeout(() => {
  coverRight.style.zIndex = -1;
}, 2800);

setTimeout(() => {
  coverRight.style.zIndex = -1;
}, 2800);

pages.forEach((_, index) => {
  setTimeout(() => {
    reverseIndex();
    pages[pageNumber].classList.remove('turn');

    setTimeout(() => {
      reverseIndex();
      pages[pageNumber].style.zIndex = 10 + index;
    }, 500);
  }, (index + 1) * 200 + 2100);
});
