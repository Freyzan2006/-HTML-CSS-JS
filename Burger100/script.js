const product = {
    plainBurger: {
        name: 'GAMBURGER',
        price: 10000,
        kkal: 200,
        amount: 0,
        get Summ() {
            return this.price * this.amount
        },
        get kkalSum() {
            return this.kkal * this.amount
        }
    },
    freshBurger: {
        name: 'GAMBURGER Fresh',
        price: 20500,
        kkal: 300,
        amount: 0,
        get Summ() {
            return this.price * this.amount
        },
        get kkalSum() {
            return this.kkal * this.amount
        }
    },
    freshCombo: {
        name: 'GAMBURGER Combo',
        price: 31900,
        kkal: 500,
        amount: 0,
        get Summ() {
            return this.price * this.amount
        },
        get kkalSum() {
            return this.kkal * this.amount
        }
    }
}

const btn = document.querySelectorAll(".main__product-btn");

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', function () {
        plusOrMinus(this);
    })
}

function plusOrMinus(el) {
    const parant = el.closest('.main__product'),
        num = parant.querySelector('.main__product-num'),
        price = parant.querySelector('.main__product-price'),
        kkal = parant.querySelector('.main__product-kcall'),
        parantId = parant.getAttribute('id'),
        attribute = el.getAttribute('data-symbol')

        if (attribute == "+" && product[parantId].amount < 10) {
            product[parantId].amount++;
        } else if (attribute == "-" && product[parantId].amount > 0) {
            product[parantId].amount--;
        }

        num.innerHTML = product[parantId].amount;
        price.innerHTML = product[parantId].Summ;
        kkal.innerHTML = product[parantId].kkalSum;
}





const header__timer = document.querySelector(".header__timer"),
header__timer_extra = header__timer.querySelector(".header__timer-extra")

let num = 0;
const AnimationLVL = setInterval(() => {
    if (num < 100) {
        num += 1
        header__timer_extra.innerHTML = num;
    } else {
        clearInterval(AnimationLVL)
        console.log("STOP")
    }
}, 30)
    
   
    




