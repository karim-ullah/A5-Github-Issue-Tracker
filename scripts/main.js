const issueCount = document.getElementById('issue-counter')
// console.log(issueCount);


const loadAllIssues = ()=>{
    const url = "https://phi-lab-server.vercel.app/api/v1/lab/issues"
    fetch(url)
    .then(res => res.json())
    .then(issues => {
        displayAllIssues(issues.data)
        issueCount.innerText = issues.data.length 
    })
}
const loadDataForOpen = ()=>{
    const url = "https://phi-lab-server.vercel.app/api/v1/lab/issues"
    fetch(url)
    .then(res => res.json())
    .then(issues => {
        dataForOpen(issues.data) 
    })
}
const loadDataForClosed = ()=>{
    const url = "https://phi-lab-server.vercel.app/api/v1/lab/issues"
    fetch(url)
    .then(res => res.json())
    .then(issues => {
        dataForClosed(issues.data) 
    })
}



const displayAllIssues = (issues) =>{
    const cardContainer = document.getElementById('card-container')
    cardContainer.innerHTML ="";
    issues.forEach(issueItem => {
        
        // console.log(issue.title);
        
        const newDiv = document.createElement('div')
        newDiv.innerHTML = `
        
        <div class="shadow-md rounded-2xl border-t-5 border-[${issueItem.status === 'open'? '#00A96E' : '#A855F7'}] hover:cursor-pointer">

                <div class="cardHeader flex justify-between items-center px-4 pt-4">
                    <img src="${issueItem.status === 'open' ? './assets/Open-Status.png' : './assets/closestatus.png'}" alt="status image" />
                    <button class="bg-[#FEECEC] text-[#EF4444] px-8 py-1 rounded-full">${issueItem.priority.toUpperCase()}</button>
                </div>

                <div class="cardBody p-4 space-y-3">
                    <h2 class="font-semibold text-lg line-clamp-1">${issueItem.title}</h2>
                    <p class="text-sm text-[#64748B] line-clamp-2">${issueItem.description}</p>
                    <div class="flex gap-1 items-center">
                        <button class="bg-[#FEECEC] text-[#EF4444] px-8 py-1 rounded-full">Bug</button>
                        <button class="bg-[#FFF8DB] text-[#D97706] px-8 py-1 rounded-full">Help wanted</button>
                    </div>
                    
                </div>
                <hr class="border-[#E4E4E7]">
                <div class="cardFooter p-4">
                    <p class="text-sm text-[#64748B]">#1by ${issueItem.author}</p>
                    <p class="text-sm text-[#64748B]">${new Date(issueItem.createdAt).toLocaleDateString()}</p>
                </div>
            </div>
        
        
        `
        cardContainer.appendChild(newDiv)
        
        
    })
    
}

loadAllIssues()



//get all data

const dataForOpen = (issues)=>{
    const allissues = issues
    const openIssues = allissues.filter(item => item.status === 'open')
    issueCount.innerText = openIssues.length
    // console.log(openIssues);
    displayAllIssues(openIssues)
    
    
}
const dataForClosed = (issues)=>{
    const allissues = issues
    const closedIssues = allissues.filter(item => item.status === 'closed')
    issueCount.innerText = closedIssues.length
    // console.log(closedIssues);
    displayAllIssues(closedIssues)
    
    
}



// btnremove active

const activeTab = (e) => {
//   console.log(e.target);

  const btns = document.querySelectorAll(".btn");
  btns.forEach((btn) => {
    btn.classList.remove("active");
  });
  e.target.classList.add("active");
};


