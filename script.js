const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            document.querySelectorAll(".animated-text")[0].classList.add("fadeInLeft");
            document.querySelectorAll(".animated-text")[1].classList.add("fadeInRight");
        }
    })
})

observer.observe(document.querySelector(".animated-text"));