import {dotsSpan, articlesUnoderedList, imgArr, articleArr} from './initialData.js';
import {changeImageAndRelativeContent} from './utilForChangeImgAndContent.js'

let clickedIndex = 0;
function changeBrightnessDotsAndArtikles(index) {
    changeImageAndRelativeContent(index)
    for (let i = 0; i <= 2; i++) {
        i !== index 
        ? imgArr[i].src = './icon/dimPoint.svg'
        : imgArr[i].src = './icon/brightPoint.svg'; 
        i !== index 
        ? articleArr[i].style.color = 'rgba(255, 255, 255, 0.3)' 
        : articleArr[i].style.color = '#E3B873' 
    }
}

dotsSpan.addEventListener('click', (evt)=>{
    clickedIndex = imgArr.indexOf(evt.target)
    changeBrightnessDotsAndArtikles(clickedIndex)
})
articlesUnoderedList.addEventListener('click', (evt)=>{
    evt.preventDefault();
    clickedIndex = articleArr.indexOf(evt.target)
    changeBrightnessDotsAndArtikles(clickedIndex)
})

export {changeBrightnessDotsAndArtikles, clickedIndex}