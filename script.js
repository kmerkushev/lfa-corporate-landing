
let cards=document.querySelectorAll(`.program__link`);let addClass=(event)=>{event.currentTarget.classList.add('moved');}
let removeClass=(event)=>{event.currentTarget.classList.remove('moved');}
for(let i=0;i<cards.length;i++){cards[i].addEventListener(`mouseover`,addClass);cards[i].addEventListener(`mouseout`,removeClass);}
let heroScreenImg=document.querySelector(`.hero-screen__img`);let moveHeroImg=()=>{setTimeout(()=>{heroScreenImg.classList.add(`hero-screen__img--slide`)},100);};window.addEventListener("load",moveHeroImg);