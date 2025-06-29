document.title = 'Nova Tampati'
const body = document.body

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
// const btn1 = document.getElementById('btn1')
// const btn2 = document.getElementById('.btn2 ')

// const defaultText = 'Klik Saya 1'
// btn1.textContent = defaultText

// btn1.style.border = 'none'
// btn1.style.padding = '8px'
// btn1.style.fontSize = '24px'
// btn1.style.background = 'tomato'

// function clickButton() {

// btn1.style.background = 'aqua'
// const newText = document.createElement('p')
// newText.textContent = "HALO BUNG! APA KABAR"
// body.append(newText)
// }

// function ubahText() {
//    btn1.textContent = 'sudah cok'
// }

// function oriText() {
//     btn1.textContent = defaultText
// }

// const defaultText2 = 'Klik Saya 2'
// btn1.textContent = defaultText2

// function keluar () {
//     const keluarText = document.createElement('p')
//     newText.textContent = "SUDAH TERUBAH YA"
//     body.append (ubahText)
// }

//  const btn1 = document.querySelector(btn1)

// btn1.textContent = "Klik Saya"
// btn1.style.border = 'none'
// btn1.style.padding = '8px'
// btn1.style.fontSize = '24px'
// btn1.style.background = 'tomato'

// function keluarText() {
//     let newText = document.createElement('p')
//     newText.style.color = 'black'
//     newText.textContent = "hallo bung"
//     body.append(newText)
// }

// function ubahWarna () {
//         newText.style.color = 'aqua'
//     }

const btn2 = document.querySelector('.btn2')

const namaLengkap = document.createElement('p')
namaLengkap.textContent = 'Nova TAMPATOY'

function namaSaya(){
    body.append(namaLengkap)
}

function ubahWarna(){
    namaLengkap.style.background = 'tomato'
}