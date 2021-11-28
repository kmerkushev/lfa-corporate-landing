
let particlesList=document.querySelectorAll(`.particle`);let particles=[];let leftCoordinates=[];let topCoordinates=[];let depth=[0.3,1,0.5,0.5,0.3,1,0.3,0.3,1,0.3];const DELTA=40;let formatPyramid=document.querySelector(`.format__pyramid`);let formatRing=document.querySelector(`.format__ring`);let imageClock=document.querySelector(`.image-block__clock`)
let imageCards=document.querySelector(`.image-block__cards`);let guaranteesPyramid=document.querySelector(`.guarantees__pyramid`);let programsRing=document.querySelector(`.programs__ring`);let studentsPyramid=document.querySelector(`.students__pyramid`);let orderPyramid=document.querySelector(`.order__pyramid`);let orderRing=document.querySelector(`.order__ring`);let supportPyramid=document.querySelector(`.support__pyramid`);let setDefault=()=>{for(let i=0;i<particlesList.length;i++){leftCoordinates[i]=+window.getComputedStyle(particlesList[i]).left.slice(0,-2);topCoordinates[i]=+window.getComputedStyle(particlesList[i]).top.slice(0,-2);particlesList[i].style.left=+window.getComputedStyle(particlesList[i]).left.slice(0,-2)+`px`;particlesList[i].style.top=+window.getComputedStyle(particlesList[i]).top.slice(0,-2)+`px`;}}
let move=(e)=>{let clientWidth=document.documentElement.clientWidth;let clientHeight=document.documentElement.clientHeight;let speedX=DELTA/clientWidth;let speedY=DELTA/clientHeight;let x=e.clientX;let y=e.clientY;let moveObjects=()=>{for(let i=0;i<particlesList.length;i++){particlesList[i].style.left=leftCoordinates[i]+speedX*x*depth[i]+`px`;particlesList[i].style.top=topCoordinates[i]+speedY*y*depth[i]+`px`;}}
setTimeout(moveObjects,100);}
setDefault();window.addEventListener("mousemove",move);window.addEventListener("resize",setDefault);