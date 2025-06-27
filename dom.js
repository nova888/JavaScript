document.title = 'Nova Tampati'
// const body = document.body

// body.append('HELLO WORLD')

// const h1 = document.createElement('h1')
// h1.innerText = "sikat"
// body.append(h1)


// const namaSaya = document.createElement('p')
// namaSaya.innerHTML = '<marquee>Nova Tampati</marquee>'

// body.append(namaSaya)



// const namaKamu = document.createElement('b')
// namaKamu.textContent = '<marquee>anjay saya bro</marquee>'
// body.append(namaKamu)


// Data Selector
const btn1 = document.getElementById('btn1')
const btn2 = document.querySelector('.btn2 ')

const defaultText = 'Klik Saya 1'
btn1.textContent = defaultText

btn1.style.border = 'none'
btn1.style.padding = '8px'
btn1.style.fontSize = '24px'
btn1.style.background = 'tomato'

function gantiWarna() {

btn1.style.background = 'aqua'
}


function ubahText() {
   btn1.textContent = 'sudah cok'
}

function oriText() {
    btn1.textContent = defaultText
}
