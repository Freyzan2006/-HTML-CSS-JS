// DOM

const sec = document.querySelector('.s'),
    min = document.querySelector('.m'),
    hour = document.querySelector('.h'),
    hours = document.querySelector('.hours'),
    minut = document.querySelector('.minutes')

function clock(){
    const time = new Date()
    secArr = time.getSeconds() * 6,
        minArr = time.getMinutes() * 6 ,
        hourArr = time.getHours() * 30
    
    sec.style.transform = `rotate(${secArr}deg)`
    sec.style.transition = `1s step-start`  // linear
    min.style.transform = `rotate(${minArr}deg)`
    hour.style.transform = `rotate(${hourArr}deg)`
    

    setTimeout(() => clock(), 50)
    hours.innerHTML= time.getHours() < 10 ? '0' + time.getHours() : time.getHours()
    minut.innerHTML= time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes()
}

clock()


const tabsContentItem = document.querySelectorAll(".tabsContentItem"),
    tabsItem = document.querySelectorAll('.tabsItem')

for (let i = 0; i <tabsItem.length; i++) {
    tabsItem[i].addEventListener('click', function() {
        for (let j = 0; j < tabsItem.length; j++) {
            tabsItem[j].classList.remove('active')
            tabsContentItem[j].classList.remove('active')
        }
        tabsItem[i].classList.add('active')
        tabsContentItem[i].classList.add('active')
    })
}


const btn = document.querySelector('.stopwatch__btn'),
    watchSec = document.querySelector('.stopwatch__seconds'),
    watchMin = document.querySelector('.stopwatch__minutes'),
    watchHour = document.querySelector('.stopwatch__hours'),
    span = document.querySelector('.tabsLink__span')


btn.addEventListener('click', function() {
    if (btn.innerHTML == 'start') {
        btn.innerHTML = 'stop'
        SecendMer()
        span.classList.add('active')
    } else if (btn.innerHTML == 'stop') {
        btn.innerHTML = 'clear'
        span.classList.add('active_clear')
    } else if (btn.innerHTML == 'clear') {
        btn.innerHTML = 'start'
        SecendMer()
        span.classList.remove('active')
        span.classList.remove('active_clear')
    }
})


var SecendMer_horus = 0
var SecendMer_minets = 0
var SecendMer_sec = 0
function SecendMer() { 
    if (btn.innerHTML == 'stop') {
        if (watchSec.innerHTML >= 59) {
            watchMin.innerHTML += 1
            SecendMer_sec = 0
        } else if (watchMin.innerHTML >= 59) {
            watchHour.innerHTML += 1
            SecendMer_minets = 0
        }
        
        SecendMer_sec += 1

        watchSec.innerHTML = SecendMer_sec

        setTimeout(() => {
            SecendMer()
        }, 1000)
    } else if (btn.innerHTML == 'start') {
        watchSec.innerHTML = 0
        watchMin.innerHTML = 0
        watchHour.innerHTML = 0

        SecendMer_sec = 0
        SecendMer_minets = 0
        SecendMer_horus = 0
        return
    }
}