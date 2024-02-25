const countdown = () => {
    //End Date

    const countDownDate = new Date("October 26, 2024 00:00:00").getTime()

    //Date Now

    const now = new Date().getTime()

    //Time between End date and now

    const distance = countDownDate - now

    //time expressions

    const seconds = 1000
    const minutes = seconds * 60
    const hours = minutes * 60
    const days = hours * 24

    let timeDays = Math.floor(distance / days)
    let timeHours = Math.floor((distance % days)/ hours)
    let timeMinutes = Math.floor((distance % hours) / minutes)
    let timeSeconds = Math.floor((distance % minutes) / seconds)

    //When seconds, minutes, and hours below 10 add "0"

    timeHours = timeHours < 10 ? "0" + timeHours: timeHours
    timeMinutes = timeMinutes < 10 ? "0" + timeMinutes: timeMinutes
    timeSeconds = timeSeconds < 10 ? "0" + timeSeconds: timeSeconds

    //Add to HTML

    document.getElementById("days").innerHTML = timeDays
    document.getElementById("hours").innerHTML = timeHours
    document.getElementById("minutes").innerHTML = timeMinutes
    document.getElementById("seconds").innerHTML = timeSeconds 
}

setInterval(countdown, 1000)

function toggleMenu(){
    menuList.classList.add("menu-container");
    showMenu.classList.remove("showMenu");
    hideMenu.classList.remove("close-menu");
}


function closeMenu(){
    hideMenu.classList.add("close-menu");
}





