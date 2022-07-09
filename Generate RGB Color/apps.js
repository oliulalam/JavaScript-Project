// project requirement:

// change the background color by generating rbg color clicking a button

//steps

//step 1 - create onlod handler

window.onload = () =>{
    main();
}

function main(){

    const root =document.getElementById('root')
    const btn =document.getElementById('change-btn')

    btn.addEventListener('click', function (){
        const bgColor = generateRGBColor();
        root.style.background = bgColor;
    });

}
//step 2 - rnadom color generator function
function generateRGBColor(){

    const red = Math.floor(Math.random()* 255);
    const green = Math.floor(Math.random()* 255);
    const blue = Math.floor(Math.random()* 255);

    return `rgb(${red}, ${green}, ${blue})`
    
}

//steo 3 -collect all necessary reference


//step 4 - handle the click event 
