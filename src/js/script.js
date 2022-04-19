const cardContainer = [...document.querySelectorAll('.container__contributors')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

cardContainer.forEach((item, i) => {
    let containerDimension = item.getBoundingClientRect();
    let containerWidth = containerDimension.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    }) 

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})