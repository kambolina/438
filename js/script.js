// if(!number && typeof number == "object") {
//     let kursDollara = 74.8;
//     let kursEuro = 90.5;
//     let sumDollars = 0, sumEuro = 0;
   
//     let rubles = prompt("Сумма в рублях:");
   
//     if(!rubles && typeof rubles == "object") {
//       alert("Вы отменили!!!");
//     }
//     else {
//       if(number == "") {
//       if(rubles == "") {
//         alert("Вы ничего не ввели!!!");
//       }
//       else {
//         isNaN(+number) ? alert("Это не число!") : alert(`Число ${number} в степени 3 = ${number**3}`);
//         if(isNaN(+rubles)) {
//           alert("Это не число!");
//         }
//         else {
//           sumDollars = (rubles/kursDollara).toFixed(2);
//           sumEuro = (rubles/kursEuro).toFixed(2);
   
//           alert(`Сумма в долларах = ${sumDollars}$, сумма в евро = ${sumEuro}\u20AC`);
//         }
//       }
//     } 
//     }
   

// задача 2 Плащадь трапеции

    let a = prompt ("Введите длину a");
    let b = prompt ("Введите дину b");
    let h = prompt ("Введите высоту h");
    let s = ((a + b) / 2) * h;

    alert(`Площадь трапеции = ${s}`);

// задача 3 Сумма вклада

    let summaVklada = prompt ("Введите сумму вклада");
    let percentVklada = prompt ("Введите процент вклада");
    let percentOfYear = (summaVklada * percentVklada / 100);
    let summa = summaVklada + percentOfYear; 
    alert (summa);
    // alert(`1ый год = ${summa}`);
    // alert(`2ой год = ${summa + summaVklada * percentVklada / 100}`);


//задача 4 Введите число
     
let a = prompt('введите число', '');

if (a == 10) alert( 'Верно!' );
if (a !== 10) alert( 'Неверно!' );


//задача 6 остаток от деления
     
let a = 10;
let b = 3;
// let c = a % b;

consol.log(a % b); 


//задача 7 числовой ряд 1-9

let str;
for (str = 1; str <= 9; str++) {
  
  console.log(str);
}


//задача 8 вывести a b e

let str = 'abcde';
console.log(str[0] + ' ' + str[1] + ' ' + str[4]);






