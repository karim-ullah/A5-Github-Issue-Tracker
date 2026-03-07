const issueCount = document.getElementById('issue-counter')
// console.log(issueCount);

const loadSearch = () =>{
     const serachInput = document.getElementById('search-input')
     const searchValue = serachInput.value.toLowerCase().trim()
     const url = `https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=${searchValue}`
     fetch(url)
     .then(res => res.json())
     .then(issue => {
        displayAllIssues(issue.data)
        issueCount.innerText = issue.data.length
     })
     
}

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

const loadSingleIssue = (id) =>{
    const url = `https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`
    fetch(url)
    .then(res => res.json())
    .then(issue => {
        displaySingleIssue(issue.data)
    })
    
}


const displaySingleIssue = (issue) =>{
    const modalContainer = document.getElementById('my_modal_5')
    modalContainer.innerHTML = `
    
    <div class="modal-box space-y-3">
    <h3 class="text-lg font-bold">${issue.title}</h3>
    <div>
        <button class="bg-[#00A96E] text-white px-4 rounded-full">${issue.status}</button>
        <span>・Opened by ${issue.author}・${new Date(issue.createdAt).toLocaleDateString()}</span>
    </div>
    <div class="flex gap-1 items-center">
        ${showLabel(issue.labels)}
    </div>

    <p class="py-4 font-semibold">${issue.description}</p>

    <div class="flex gap-16 bg-[#F8FAFC] p-5 rounded-2xl">
        <div>
            <p class="text-[#64748B]">Assignee:</p>
            <h3 class="font-bold text-lg">${issue.assignee ? issue.assignee : 'Not Found'}</h3>
        </div>
        <div>
            <p class="text-[#64748B]">Priority:</p>
            <button class="bg-[#EF4444] text-white px-5 py-2 rounded-full">${issue.priority.toUpperCase()}</button>
        </div>
    </div>

    <div class="modal-action">
      <form method="dialog">
        <!-- if there is a button in form, it will close the modal -->
        <button class="btn btn-primary">Close</button>
      </form>
    </div>
  </div>
    
    `
    my_modal_5.showModal()
}



const displayAllIssues = (issues) =>{
    const cardContainer = document.getElementById('card-container')
    cardContainer.innerHTML ="";
    issues.forEach(issueItem => {
        
        // console.log(issue.title);
        
        const newDiv = document.createElement('div')
        newDiv.innerHTML = `
        
        <div onclick = "loadSingleIssue(${issueItem.id})" class="shadow-md rounded-2xl border-t-5 border-[${issueItem.status === 'open'? '#00A96E' : '#A855F7'}] hover:cursor-pointer">

                <div class="cardHeader flex justify-between items-center px-4 pt-4">
                    <img src="${issueItem.status === 'open' ? './assets/Open-Status.png' : './assets/closestatus.png'}" alt="status image" />
                    <button class="${issueItem.priority === "high" ? "bg-[#FEECEC] text-[#EF4444]" : issueItem.priority === "medium" ? "bg-[#FFF6D1] text-[#D97706]" : "bg-[#EEEFF2] text-[#9CA3AF]" } px-8 py-1 rounded-full">
                    ${issueItem.priority.toUpperCase()}
                    </button>
                </div>

                <div class="cardBody p-4 space-y-3">
                    <h2 class="font-semibold text-lg line-clamp-1">${issueItem.title}</h2>
                    <p class="text-sm text-[#64748B] line-clamp-2">${issueItem.description}</p>
                    <div class="flex gap-2 items-center">
                        ${showLabel(issueItem.labels)}
                        
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

// function for showing labels

const showLabel = (labels) =>{
    
    const labelEl = labels.map(label => `<button class="${label === 'bug' ? 'bg-[#FEECEC]' : label === 'help wanted'? 'bg-[#FFF8DB]' : label === 'enhancement' ? 'bg-amber-200' : label === 'documentation' ? 'bg-purple-100' : 'bg-purple-50' } cursor-pointer border-1 border-[#FDE68A] text-[#D97706] text-sm px-2 py-1 rounded-full line-clamp-2">${label === 'bug' ? '<i class="fa-solid fa-bug"></i>' : label === 'help wanted'? '<i class="fa-solid fa-life-ring"></i>' : label === 'enhancement' ? '<i class="fa-solid fa-angles-up"></i>' : '<i class="fa-solid fa-face-grin-tongue"></i>'  } ${label}</button>`)
    return labelEl.join(" ")
}

//function for open and closed data

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


