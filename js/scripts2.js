function getRandomNumber(min = 0, max = 100){
    return Math.round(Math.random() * (max - min) + min);
}

const wrapper = document.querySelector("#wrapper");

let cRed = getRandomNumber(0, 255),
    cGreen = getRandomNumber(0, 255),
    cBlue = getRandomNumber(0, 255);

let hRed = cRed.toString(16),
    hGreen = cGreen.toString(16), 
    hBlue = cBlue.toString(16);

wrapper.style.backgroundColor = `rgb(${cRed}, ${cGreen}, ${cBlue})`;
wrapper.innerText = `Красный: ${hRed}; Зеленый: ${hGreen}; Синий: ${hBlue}`;