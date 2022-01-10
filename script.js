// for(let i = 1; i <= 10; i++){
//     let name = prompt('Введите имя');
//     let age  = +prompt('Введите возраст');
//     let con1 = (`Пользователь ${i} ${name}`);
//     let con2 = (` Возраст ${age}`);
//     let maincon = con1 + con2;
//     console.log(maincon); 
// } первый способ






for(let i = 1; i <= 10; i++){
let nam = prompt('Введите имя');
let num = +prompt('Введите возрвст');

    let simple = {
        dsd:(`Пользователь ${i}`),
        name: (`Имя ${nam}`)  ,
        age:(`Возраст ${num}`)
    }

    for(let key in simple){
        console.log(simple[key]);  
    }

}