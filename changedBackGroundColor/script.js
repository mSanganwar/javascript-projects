const btn = document.getElementById("btn");

const rColor = function(number){
 return Math.floor(Math.random() * (number + 1));
}

btn.addEventListener("click", ()=>{

    const bChange = `rgb(${rColor(255)} ${rColor(255)} ${rColor(255)})`;

    const toChangeBox = document.getElementById("changeBckg");
    toChangeBox.style.backgroundColor = bChange

    //to change background Color

    // document.body.style.backgroundColor = bChange;

})