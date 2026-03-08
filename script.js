function openPage(pageId){

const pages=document.querySelectorAll('.page')

pages.forEach(p=>p.style.display='none')

document.querySelector('.hero').style.display='none'

document.getElementById(pageId).style.display='block'

window.scrollTo({top:0,behavior:'smooth'})

}

function goHome(){

const pages=document.querySelectorAll('.page')

pages.forEach(p=>p.style.display='none')

document.querySelector('.hero').style.display='block'

window.scrollTo({top:0,behavior:'smooth'})

}
