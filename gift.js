let giftChosen = false;

const gifts = document.querySelectorAll('.gift');
const popup = document.getElementById('popup');
const surpriseImg = document.getElementById('surprise-img');

gifts.forEach(gift => {
  gift.addEventListener('click', () => {

    if (giftChosen) return;

    giftChosen = true;

    const imgPath = gift.getAttribute('data-img');
    surpriseImg.src = imgPath;

    popup.style.display = "flex";
  });
});

function closePopup(){
  popup.style.display = "none";
}


/* ======================
   Floating Hearts
====================== */

const heartImages = [
  'img/heart1.png',
  'img/heart2.png',
  'img/heart3.png'
];

function createHeart(){
  const heart = document.createElement('div');
  heart.classList.add('heart');

  const size = Math.random()*30 + 30;
  heart.style.width = size + 'px';
  heart.style.height = size + 'px';
  heart.style.left = Math.random()*100 + 'vw';
  heart.style.backgroundImage = `url(${heartImages[Math.floor(Math.random()*heartImages.length)]})`;
  heart.style.animationDuration = (Math.random()*5 + 5) + 's';

  heartsContainer.appendChild(heart);

  setTimeout(()=>{
    heartsContainer.removeChild(heart);
  }, 10000);
}

setInterval(createHeart, 500);
