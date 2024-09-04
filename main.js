let curretINdex = 2;

const images = document.querySelectorAll('.slider-image')

function ShoImg(index) {
    images.forEach((num, i) => {
        num.classList.remove('active')
        if (i === index) {
            num.classList.add('active')
        }
    })
}

ShoImg(curretINdex)