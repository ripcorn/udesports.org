window.addEventListener("scroll",() =>{
    document.getElementById("stars").style.left = `${window.scrollY * 0.25}px`
    document.getElementById("moon").style.top = `${window.scrollY * 1.05}px`
    document.getElementById("mountains_behind").style.top = `${window.scrollY * 0.5}px`
    document.getElementById("mountains_front").style.top = `${window.scrollY * 0}px`
    document.getElementById("ud").style.marginRight = `${window.scrollY * 4}px`
    document.getElementById("ud").style.marginTop = `${window.scrollY * 1.5}px`
    document.getElementById("btn").style.marginTop = `${window.scrollY * 1.5}px`
    document.querySelector("header").style.top = `${window.scrollY * 0.5}px`
})


