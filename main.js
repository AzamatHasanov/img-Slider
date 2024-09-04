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

function nextImg() {
    curretINdex = (curretINdex + 1) % images.length
    ShoImg(curretINdex)
}

function oddimg() {
    curretINdex = (curretINdex - 1 + images.length) % images.length
    ShoImg(curretINdex)
}
document.getElementById('next').addEventListener('click', nextImg)
document.getElementById('prev').addEventListener('click', oddimg)

ShoImg(curretINdex)

setInterval(nextImg, 3000)