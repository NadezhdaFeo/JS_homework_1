document.addEventListener("DOMContentLoaded", function () {
    // task #1
    let str = "abcde"
    alert(str[0]);
    alert(str[1]);
    alert(str[4]);

    // task #2
    let a = parseInt(prompt("Введите первое число:", 15));
    let b = parseInt(prompt("Введите второе число:", -15));
    console.log(a > 0 || b > 0);

    // task #3
    let age = prompt("Сколько вам лет?", 15);
    if (age >= 18) {
        console.log("Совершеннолетний");
    } else {
        console.log("Несовершеннолетний");
    }
});