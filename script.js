const container = document.querySelector(".container");
const algorithm = document.querySelector(".algorithm");
const startBtn = document.querySelector(".start");
const btns = document.querySelectorAll(".btn");
const numberOfBars = 80;
const heights = [];


btns.forEach((btn)=>{
  btn.addEventListener("click" , (e)=>{
    algorithm.innerHTML = e.target.value;
  })
})

function randomNumber(min , max)
{
  return Math.floor(Math.random() * (max - min ) + min );
}

function fillArray()
{
  for(let i=0;i<numberOfBars;i++)
  {
    heights.push(randomNumber(100,550));
  }
}

function renderBars(heights)
{
  for(let i=0;i<heights.length;i++)
  {
    let bar = document.createElement("div");
    bar.classList.add("bar");
    bar.style.height = `${heights[i]}px`
    container.appendChild(bar);
  }
}

fillArray();
renderBars(heights);

console.log(heights);