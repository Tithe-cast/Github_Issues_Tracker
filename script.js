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
filterBtn("tabAll");




const bugAndHelpLabels = (labels) => {

    let newArr = labels.map((label) => {

        let icon = "";

        if (label === "bug") {
            icon = `<i class="fa-solid fa-bug"></i>`;
        }

        if (label === "help wanted") {
            icon = `<i class="fa-solid fa-handshake"></i>`;
        }

        if (label === "enhancement") {
            icon = `<i class="fa-solid fa-wand-magic-sparkles"></i>`;
        }

        return `<span class="flex items-center gap-1 font-semibold text-[10px] px-2 py-[2px] rounded-2xl border
                ${label === "bug" ? "bg-red-100 text-red-400" :
                label === "help wanted" ? "bg-gray-100 text-[#f59e0b]" :
              "bg-[#defce8] text-[#00a96e]"}"> ${icon} ${label.toUpperCase()} </span>  `;


    });

    return newArr.join(" ");

};

const allIssuesApi = async () => {
    removeSpinner(true);

    const res = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues");
    const data = await res.json();
    issueALLCard = data.data;

    displayAllIssuesData(issueALLCard);

   removeSpinner(false);

}
