var tl = gsap.timeline();
var main = document.querySelector("#nav i")
var cursor = document.querySelector("#full i")

tl.to("#full", {
    right:0,
    duration : 0.4,
})
tl.from("#full h4", {
    x:150,
    opacity:0,
    duration: 0.5,
    stagger: 0.3,
})
tl.from("#full i", {
    opacity: 0,
    x:150,
    duration:0.5,
})
tl.pause()
main.addEventListener("click", ()=>{
    tl.play()
})
cursor.addEventListener("click",()=>{
    tl.reverse()
})