const issueCount = document.getElementById("issueCount");
 

 const allCardContainer = document.getElementById("issuesContainer");
 let issueALLCard = [];


function filterBtn(id){
    const tabAll = document.getElementById("tabAll");
    const tabOpen = document.getElementById("tabOpen");
    const tabClosed = document.getElementById("tabClosed");



    tabAll.classList.remove("bg-blue-700","text-white");
    tabOpen.classList.remove("bg-blue-700","text-white");
    tabClosed.classList.remove("bg-blue-700","text-white");

    
    const getId = document.getElementById(id);
    getId.classList.add("bg-blue-700","text-white")

   
} 
