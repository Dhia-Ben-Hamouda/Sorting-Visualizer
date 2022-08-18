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

startBtn.addEventListener("click" , ()=>{
  switch(algorithm.innerHTML)
  {
    case "Insertion Sort":
      break;
    case "Selection Sort":
      break;
    case "Bubble Sort":
      bubbleSort();
      break;
    case "Merge Sort":
      break;
    default:
      break;
  }
})

async function bubbleSort()
{
  let bars = document.getElementsByClassName("bar");
  for(let i=0;i<heights.length;i++)
  {
    for(let j=0;j<heights.length-i-1;j++)
    {
      for(k=0;k<heights.length;k++)
      {
        if(k != j && k!= j+1  && k < heights.length - 1 - i)
        {
          bars[k].style.background = "linear-gradient(45deg , rgb(30, 144, 255) , rgba(30, 144, 255 , 0.75) )"
        }
      }

      if(heights[j] > heights[j+1])
      {
        let aux = heights[j];
        heights[j] = heights[j+1];
        heights[j+1] = aux;

        bars[j].style.height = heights[j]+"px";
        bars[j+1].style.height = heights[j+1]+"px";

        bars[j].style.background = "linear-gradient(45deg , rgb(255, 0, 0) , rgba(255, 0, 0 , 0.75) )";
        bars[j+1].style.background = "linear-gradient(45deg , rgb(255, 0, 0) , rgba(255, 0, 0 , 0.75) )";

        if(j+1 == heights.length - 1 - i)
        {
          bars[j+1].style.background = "linear-gradient(45deg , rgb(0, 255, 0) , rgba(0, 255, 0 , 0.75) )";
        }
      }
      await sleep(20);
    }
  }
  for(let i=0;i<heights.length;i++)
  {
    bars[i].style.background="linear-gradient(45deg , rgb(0, 255, 0) , rgba(0, 255, 0 , 0.75) )";
  }
}

function randomNumber(min , max)
{
  return Math.floor(Math.random() * (max - min ) + min );
}

function exist(arr , num)
{
  for(let i=0;i<arr.length;i++)
  {
    if(arr[i] === num)
    {
      return true;
    }
  }
  return false;
}

function fillArray()
{
  for(let i=0;i<numberOfBars;i++)
  {
    while(true)
    {
      var random = randomNumber(100,550);
      if(!exist(heights ,random))
      {
        break;
      }
    }
    heights.push(random);
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

function sleep(ms)
{
  return new Promise((r)=>setTimeout(r,ms));
}

fillArray();
renderBars(heights);

