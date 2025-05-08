let name = prompt("Введите ваше имя");
let amount = prompt("Введите сумму покупки");
amount = Number(amount);

let finalPrice;

if (isNaN(amount)){
    alert("Ошибка: введите сумму числом!");
} else{
    if (amount < 1000){
        alert(name + ", к сожалению скидки нет ")
    } else if (amount >=1000 && amount <=5000){
        finalPrice = amount * 0.9;
        alert(name + ", ваша скидка 10%. Итоговая сумма: "+ finalPrice)
    }   else {
        finalPrice = amount * 0.8;
        alert(name + ", ваша скидка 20%. Итоговая сумма: "+ finalPrice)
    }
}