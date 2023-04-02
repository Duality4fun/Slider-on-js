import {images, sectionsArr, divImgChair } from './initialData.js';
function changeImageAndRelativeContent(index) {
    let currentObj = images[index];
    sectionsArr[0].textContent = currentObj.city 
    sectionsArr[1].textContent = currentObj.apartamentArea    
    sectionsArr[2].textContent = currentObj.repairTime    
    divImgChair.style.backgroundImage = `url(${images[index].url})`;
    divImgChair.setAttribute('alt', `${images[index].alt}`);
    }

export {changeImageAndRelativeContent}