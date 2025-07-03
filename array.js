// bersama Array

// const varrrrr = ['alalala', function() {return true}, {x: "trueee"}]

// const arraySaya = ['🥑', '🍑', '🍐','🍉', '🍊']
// console.log(arraySaya)

// const arrayKamu = []
// arrayKamu[0] = '🌹'
// arrayKamu[1] = '🐱‍🐉'
// arrayKamu[2] = '👀'
// console.log(arrayKamu)

// const arrayKita = new Array()
// arrayKita[0] = '🤣'
// arrayKita [3] = '🐱‍🏍'
// arrayKita[1] = '😍'
// arrayKita[2] = '🎂'
// console.log(arrayKita[0])

// const semangka = arraySaya.includes ('🍉')
// const posisiSemangka = arraySaya.indexOf('🍉')

// if (semangka) {
//     const posisiSemangka = arraySaya.indexOf('🍉')
//     const indexBefore = posisiSemangka - 1
//     const indexAfter = posisiSemangka + 1
//     const before = arraySaya[indexBefore]
//     const after = arraySaya[indexAfter]
//     const buahAwal = arraySaya.shift()
//     console.log(`Buah sebelum semangka adalah ${before}`)
//     console.log(`buah sesudah semangka adalah ${after}`)
//     console.log(`Buah Awal adalah ${buahAwal}`)
//     const buahAkhir = arraySaya.pop()
//     console.log(`Buah akhir saya adalah ${buahAkhir}`)
// } else {
//     console.log('saya tidak tahu posisinya dimana')
// }

// const arraySaya = ['🍌',10,{tomato: true},['eat', 'food']]
// arraySaya['alpukat'] = '🥑'
// arraySaya['jeruk'] = '🍊'
// console.log(arraySaya)

// const newArraySaya = JSON.parse(JSON.stringify(arraySaya))

// newArraySaya [0] = '🥟'

// console.log(arraySaya)
// console.log(newArraySaya)

// console.log(arraySaya[3][0])


// arraySaya = ['🍇', '🍌', '🥑']
// arrayKamu = ['💋', '👿', '🎉']

// const margeArray = arraySaya.concat(arrayKamu)

// margeArray.map((value, index) => console.log(value, index))

const datas = [

{
    nama : 'dea afrizal',
    stack: 'js react dll',
    age: 30,
},
{
    nama : 'Budi',
    stack: 'js react dll',
    age: 30,
},
{
    nama : 'retno',
    stack: 'js react dll',
    age: 30,
},
{
    nama : 'satya',
    stack: 'js react dll',
    age: 30,
}]

datas.map((values, index) => {
    console.log(values.name)
})