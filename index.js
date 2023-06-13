let heading=document.querySelector("h1")
let header=heading.closest("header")
header.style.borderBottom="5px solid grey"

// let heading=document.querySelector("h1").closest("header")
// heading.classList.add("borderGray")

const info=document.querySelector(".info")
const infoPack=document.querySelector(".info-package")
const packageTitle=document.querySelectorAll(".package-title")

if(info.contains(infoPack)){
    packageTitle.forEach(item=> item.previousElementSibling.style.border="5px solid #072F5F")
}

let label=document.querySelectorAll("label")

label.forEach(item=>{
    if(item.matches(".mild")){
        item.style.borderBottom="2px solid yellow"
    }
    else if(item.matches(".intense")){
        item.style.borderBottom="2px solid orange"
    }
    else{
        item.style.borderBottom="2px solid red"
    }
})

const navList=document.querySelector(".nav-list")
const siteMap=document.querySelector(".site-map")
navList.childNodes.forEach(item=>{
    let clone=item.cloneNode(true)
    siteMap.appendChild(clone)
})