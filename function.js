function clickbtn(){

    // let btn = document.getElementById('btn');
    let min= document.getElementById("min");
    let max= document.getElementById("max");
    let text= document.getElementById("text");
    const minNumber = parseInt(min.value); 
    const maxNumber = parseFloat(max.value); 

    let randomNumber = minNumber + (maxNumber-minNumber)*Math.random();
    let randomNumber1 = Math.floor(randomNumber);
   
    text.innerText = randomNumber1;
}