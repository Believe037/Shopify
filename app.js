
const bellMenuBtn = document.querySelector(".bell-div");

const bellMenu = document.querySelector(".bell-menu")

const profileMenuBtn = document.querySelector(".profile-name")

const profileMenu = document.querySelector('.profile-menu')

const trialBar = document.querySelector('.trial-bar')

const trialDeleteBtn = document.querySelector('.deleteBtn')

const allRadioDiv = document.querySelector(".all-radio-section")

const collapseBtn = document.querySelector(".setupCollapseBtn")





bellMenuBtn.addEventListener("click", function(e){
  bellMenu.classList.toggle("hidden")
  profileMenu.classList.add("hidden")

  
  
  e.preventDefault();
})

profileMenuBtn.addEventListener("click", function(e){
  profileMenu.classList.toggle("hidden")
  bellMenu.classList.add("hidden")

 
  e.preventDefault()
})

// close dropdown by clicking aside

document.addEventListener('click', function(e){
  if(!bellMenu.contains(e.target) && !bellMenuBtn.contains(e.target)){
    bellMenu.classList.add("hidden")
  }
})

document.addEventListener('click', function(e){
  if(!profileMenu.contains(e.target) && !profileMenuBtn.contains(e.target)){
    profileMenu.classList.add("hidden")
  }
})


// close Trial Bar

trialDeleteBtn.addEventListener('click', function(e){

  trialBar.classList.add('hidden')
  e.preventDefault() 
})

// collapse Setup guide frame


let count = 0;

collapseBtn.addEventListener('click', function(e){

  count++
  if(count % 2 !== 0){

    allRadioDiv.classList.add('noDisplay');
    collapseBtn.innerHTML = `<path fill-rule="evenodd" clip-rule="evenodd" d="M9.71967 12.4697C10.0126 12.1768 10.4874 12.1768 10.7803 12.4697L14.25 15.9393L17.7197 12.4697C18.0126 12.1768 18.4874 12.1768 18.7803 12.4697C19.0732 12.7626 19.0732 13.2374 18.7803 13.5303L14.7803 17.5303C14.4874 17.8232 14.0126 17.8232 13.7197 17.5303L9.71967 13.5303C9.42678 13.2374 9.42678 12.7626 9.71967 12.4697Z" fill="#4A4A4A"/>`
  } else {
    allRadioDiv.classList.remove('noDisplay');
    
    collapseBtn.innerHTML = `<path fill-rule="evenodd" clip-rule="evenodd" d="M18.5303 16.2803C18.2374 16.5732 17.7626 16.5732 17.4697 16.2803L14 12.8107L10.5303 16.2803C10.2374 16.5732 9.76256 16.5732 9.46967 16.2803C9.17678 15.9874 9.17678 15.5126 9.46967 15.2197L13.4697 11.2197C13.7626 10.9268 14.2374 10.9268 14.5303 11.2197L18.5303 15.2197C18.8232 15.5126 18.8232 15.9874 18.5303 16.2803Z" fill="#4A4A4A"/>`
  }

  e.preventDefault()
})


const stepReveal = document.querySelectorAll(".hideBg");



stepReveal.forEach((item, index) => {
  item.addEventListener('click', (e) => {
    
  
  
    item.classList.remove("hideBg")

    item.firstElementChild.nextElementSibling.lastElementChild.classList.remove("noDisplay");
    item.firstElementChild.nextElementSibling.lastElementChild.previousElementSibling.classList.remove("noDisplay");
  
    
    // close any other
    for(i=0;i<stepReveal.length;i++){
      if(i !== index){

        stepReveal[i].classList.add("hideBg")
        stepReveal[i].firstElementChild.nextElementSibling.lastElementChild.previousElementSibling.classList.add("noDisplay");

        stepReveal[i].firstElementChild.nextElementSibling.lastElementChild.classList.add("noDisplay");
      }
    }

    e.preventDefault()
  })
  

})


const radioBtn = document.querySelectorAll(".radio");
const radioSvg = document.querySelectorAll(".radio-svg");
let increaseProgress = 0;
let progressNumber = 0;

radioSvg.forEach((item) => {
  item.addEventListener('click', function(e){
    increaseProgress += 14.4;
    progressUI.style.width = increaseProgress;

    progressNumber++;
    progressNumUI.textContent = progressNumber;
    
    console.log(increaseProgress)
    item.classList.add('noDisplay');
    item.nextElementSibling.classList.remove('noDisplay');

    setTimeout(() => {
      item.nextElementSibling.nextElementSibling.classList.remove('noDisplay');
      item.nextElementSibling.classList.add('noDisplay');


    }, 3000)
  })
})



const radioHover = document.querySelectorAll('.svg-circle');
const checkSvg = document.querySelectorAll('.check')
const progressUI = document.querySelector(".progress");
const progressNumUI = document.getElementById("progress-num");
//  console.log(radioBtn)

// mouse enter
radioBtn.forEach((item) => {

  item.addEventListener('mouseenter', function(e){
    item.firstElementChild.firstElementChild.classList.add("svg-circle")

    e.preventDefault()
  })

  })



  radioBtn.forEach((item) => {

    item.addEventListener('mouseleave', function(e){
      item.firstElementChild.firstElementChild.classList.remove("svg-circle");

      
  
      e.preventDefault()
    })
  
    })

// TO UNCHECK THE RADIO BTN

    checkSvg.forEach((item) => {
      item.addEventListener('click', function(e){
        increaseProgress -= 14.4;
        progressUI.style.width = increaseProgress;

        progressNumber--;
        progressNumUI.textContent = progressNumber;
        
        console.log(increaseProgress)
        item.classList.add("noDisplay")
        item.parentElement.firstElementChild.classList.remove('noDisplay')
    
        e.preventDefault()
      })
    })


    

    