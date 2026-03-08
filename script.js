function scrollToSection(id){

document.getElementById(id).scrollIntoView({
behavior:"smooth"
})

}


const timelineItems = document.querySelectorAll(".timeline-item")

const observer = new IntersectionObserver(entries =>{

entries.forEach(entry =>{

if(entry.isIntersecting){

entry.target.classList.add("show")

}

})

})


timelineItems.forEach(item=>{
observer.observe(item)
})
