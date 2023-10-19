let languges = "C C++ C# Python JS Java"

languges = languges.replace(/ /g, "-")

console.log(languges);

// -------------------2-----------------
let fraza = 'Считается что 2000год, год благополучия'
fraza = fraza.slice(13,18)
fraza = +fraza
console.log(fraza);
// let year = parseInt(fraza.replace(/\D/g, ''));

// console.log(year);

// //--------------------3--------------

// let first_q = +prompt('Введите минимальное значение')
// let second_q = +prompt('Введите максимальное значение')
// let end = alert( Math.floor(Math.random() * (first_q - second_q + 1)) + second_q )




//--------------------4---------
// let first_word = prompt('Напите слово')
// let second_word = prompt('Напите слово 2')

// if (first_word.slice(-3) === second_word.slice(0, 3)) {
//     alert('Два этих слова совпадают')
// }else{
//     alert("Попробуйте еще раз")
// }


// let chasi = Math.floor(Math.random() * 6)
// if (chasi == 4 ) {
//     alert(`Вам выпало ${chasi} вы выиграли!`);
// }else if(chasi == 3 ){
//     alert(`Вам выпало ${chasi} это мало`);
// }else if(chasi == 2){
//     alert(`Вам выпало ${chasi} это маловато`);
// }else if(chasi == 1){
//     alert(`Вам выпало ${chasi} это очень мало`);
// }else if(chasi == 5){
//     alert(`Вам выпало ${chasi} это многовато`);
// }else if(chasi == 1){
//     alert(`Вам выпало ${chasi} это перебор`);
// }else if (chasi == 0){
//     alert("попробуйте еще раз")
// }

// console.log(chasi);