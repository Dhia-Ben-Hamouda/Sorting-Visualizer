const container = document.querySelector(".container");
const algorithm = document.querySelector(".algorithm");
const startBtn = document.querySelector(".start");
const btns = document.querySelectorAll(".btn");
const icon = document.querySelector(".icon");
let numberOfBars = 80;
const heights = [];

if(window.innerWidth < 650)
{
  numberOfBars = 50;
}

// event listeners for buttons

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    algorithm.innerHTML = e.target.value;
  })
})

startBtn.addEventListener("click", () => {
  disableButtons();
  switch (algorithm.innerHTML) {
    case "Insertion Sort":
      insertionSort();
      break;
    case "Selection Sort":
      selectionSort();
      break;
    case "Bubble Sort":
      bubbleSort();
      break;
    default:
      break;
  }
})

icon.addEventListener("click" , ()=>{
  let btns = Array.from( document.getElementsByTagName("button") );
  let test = 1;

  btns.forEach((btn)=>{
    if(btn.disabled === true)
    {
      test = 0;
    }
  })
  
  if(test === 0)
  {
    return;
  }

  fillArray();
  renderBars(heights);
})

// bubble sort implementation

async function bubbleSort() 
{
  let bars = document.getElementsByClassName("bar");
  for (let i = 0; i < heights.length; i++) 
  {
    for (let j = 0; j < heights.length - i - 1; j++)
    {
      for (k = 0; k < heights.length; k++) 
      {
        if (k != j && k != j + 1 && k < heights.length - i) 
        {
          bars[k].style.background = "linear-gradient(45deg , rgb(30, 144, 255) , rgba(30, 144, 255 , 0.75) )";
        }
      }

      if (heights[j] > heights[j + 1]) {
        let aux = heights[j];
        heights[j] = heights[j + 1];
        heights[j + 1] = aux;

        bars[j].style.height = heights[j] + "px";
        bars[j + 1].style.height = heights[j + 1] + "px";

        bars[j].style.background = "linear-gradient(45deg , rgb(255, 0, 0) , rgba(255, 0, 0 , 0.75) )";
        bars[j + 1].style.background = "linear-gradient(45deg , rgb(255, 0, 0) , rgba(255, 0, 0 , 0.75) )";
      }
      if (j + 1 == heights.length - 1 - i) {
        bars[j + 1].style.background = "linear-gradient(45deg , rgb(0, 255, 0) , rgba(0, 255, 0 , 0.75) )";
      }
      await sleep(10);
    }
  }
  for (let i = 0; i < heights.length; i++) 
  {
    bars[i].style.background = "linear-gradient(45deg , rgb(0, 255, 0) , rgba(0, 255, 0 , 0.75) )";
  }
  enableButtons();
}

// insertion sort implementation

async function insertionSort() 
{
  let bars = document.getElementsByClassName("bar");
  let j;
  let v;

  for(let i=1;i<heights.length;i++)
  {
    j=i;
    v=heights[i];

    while(  j>0  && v < heights[j-1] )
    {
      heights[j] = heights[j-1];
      bars[j].style.background = "red";
      bars[j].style.height = bars[j-1].style.height;
      j--;
      await sleep(25);

      for(k=0;k<heights.length;k++)
      {
        if(k != j)
        {
          bars[k].style.background = "linear-gradient(45deg , rgb(30, 144, 255) , rgba(30, 144, 255 , 0.75) )";
        }
      }
    }
    heights[j]=v;
    bars[j].style.height = `${heights[j]}px`;
  }

  for(let i=0;i<heights.length;i++)
  {
    bars[i].style.background = "linear-gradient(45deg , rgb(0, 255, 0) , rgba(0, 255, 0 , 0.75) )";
  }
  enableButtons();
}

// selection sort implementation

async function selectionSort()
{
  let aux;
  let min;
  let bars = document.getElementsByClassName("bar");

  for(let i=0;i<heights.length-1;i++)
  {
    min = i;
    for(let j=i+1;j<heights.length;j++)
    {
      if(heights[j] < heights[min])
      {
        for(let k=0;k<heights.length;k++)
        {
          bars[k].style.background = "linear-gradient(45deg , rgb(30, 144, 255) , rgba(30, 144, 255 , 0.75) )";
        }
        min = j;
        bars[min].style.background="red";
      }
    }
    aux = heights[min];
    heights[min]=heights[i];
    heights[i]=aux;

    bars[min].style.height = `${heights[min]}px`;
    bars[i].style.height = `${heights[i]}px`;

    await sleep(100);
  }

  for(let i=0;i<heights.length;i++)
  {
    bars[i].style.background = "linear-gradient(45deg , rgb(0, 255, 0) , rgba(0, 255, 0 , 0.75) )";
  }
  enableButtons();
}

// function to generate a random number 

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

// function to check wheather a number exists in an array

function exist(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      return true;
    }
  }
  return false;
}

// function to fill array with random numbers

function fillArray() {
  while(heights.length > 0 )
  [
    heights.pop()
  ]

  for (let i = 0; i < numberOfBars; i++) {
    while (true) {
      if(window.innerWidth < 650)
      {
        var random = randomNumber(75, 400);
      }
      else
      {
        var random = randomNumber(100, 550);
      }
      
      if (!exist(heights, random)) {
        break;
      }
    }
    heights.push(random);
  }
}

// function to render bars to the screen

function renderBars(heights) {
  container.innerHTML = "";
  for (let i = 0; i < heights.length; i++) {
    let bar = document.createElement("div");
    bar.classList.add("bar");
    bar.style.height = `${heights[i]}px`
    container.appendChild(bar);
  }
}

// function to disable buttons

function disableButtons()
{
  let btns = Array.from( document.getElementsByTagName("button") );

  btns.forEach((btn)=>{
    btn.disabled = true;
  })
}

// function to enable buttons

function enableButtons()
{
  let btns = Array.from( document.getElementsByTagName("button") );

  btns.forEach((btn)=>{
    btn.disabled = false;
  })
}

// sleep function

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

fillArray();
renderBars(heights);