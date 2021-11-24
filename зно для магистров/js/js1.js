var img1 = new Image();
img1.src = "img/2021_1.png";
let img2 = new Image();
img2.src = "img/2021_2.png";
let img3 = new Image();
img3.src = "img/2021_3.png";
let img4 = new Image();
img4.src = "img/2021_4.png";
let img5 = new Image();
img5.src = "img/2021_5.png";
let quest = [img1, img2, img3, img4, img5];
let right_answer = [a6, a2, a7, a5, a1];
let n_r_answ = [5, 1, 6, 4, 0];
let task1_answers = ["A", "B", "C", "D", "E", "F", "G", "H"];
let tasks = [0, 0, 0, 0, 0];
let num_img = 0;
let num_ans = 0;
let sum = 0;
document.body.appendChild(quest[num_img]);
btn.addEventListener("click", fnc);
    function fnc(){
        document.body.removeChild(quest[num_img]);
        num_img++;
        document.body.appendChild(quest[num_img]);
    }
btn.addEventListener("click", fnc1);
function fnc1(){
    console.log(a1.checked);
    console.log(a2.checked);
    console.log(a3.checked);
    console.log(a4.checked);
    console.log(a5.checked);
    console.log(a6.checked);
    console.log(a7.checked);
    console.log(a8.checked);   
    if (right_answer[num_ans].checked){
        if (tasks[num_ans] == 0){
            tasks[num_ans]++;
            sum++;
        }
    }
    else {
        if (tasks[num_ans] == 0){
            tasks[num_ans]++;
        }
    }
    num_ans++;
    if (num_ans == right_answer.length){
        questions_canvas.innerHTML = "Ваш результат: " + sum + " баллов";
        if (sum > 3){
            rec.innerHTML = "Хороший результат. Хотите пройти еще тест?" + '<a href="index2.html">' + "ЗНО за 2020" + '</a>'+ '<a href="index3.html">' + "ЗНО за 2019" + '</a>' ;
        }
        else if (sum < 2){
            rec.innerHTML = "Результат плохой. Рекомендуем больше практики в чтении текстов. Тесты других годов:" + '<a href="index2.html">' + "ЗНО за 2020" + '</a>'+ '<a href="index3.html">' + "ЗНО за 2019" + '</a>' ;
        }
        else {
            rec.innerHTML = "Результат средний. Рекомендуем больше практики в чтении текстов. Тесты других годов:" + '<a href="index2.html">' + "ЗНО за 2020" + '</a>'+ '<a href="index3.html">' + "ЗНО за 2019" + '</a>';
        }
    }
}
btn_next.addEventListener("click",next);
function next(){
    if (num_img < quest.length - 1){
        document.body.removeChild(quest[num_img]);
        num_img++;
        num_ans++;
        document.body.appendChild(quest[num_img]);
    }
    else{
        document.body.removeChild(quest[num_img]);
        questions_canvas.innerHTML = "Ваш результат: " + sum + " баллов";
        if (sum > 3){
            rec.innerHTML = "Хороший результат. Хотите пройти еще тест?" + '<a href="index2.html">' + "ЗНО за 2020" + '</a>'+ '<a href="index3.html">' + "ЗНО за 2019" + '</a>';
        }
        else if (sum < 2){
            rec.innerHTML = "Результат плохой. Рекомендуем больше практики в чтении текстов. Тесты других годов:" + '<a href="index2.html">' + "ЗНО за 2020" + '</a>'+ '<a href="index3.html">' + "ЗНО за 2019" + '</a>';
        }
        else {
            rec.innerHTML = "Результат средний. Рекомендуем больше практики в чтении текстов. Тесты других годов:" + '<a href="index2.html">' + "ЗНО за 2020" + '</a>'+ '<a href="index3.html">' + "ЗНО за 2019" + '</a>';
        }
    }
}
btn_prev.addEventListener("click",prev);
function prev(){
    if (num_img == 0){
    }
    else{
    document.body.removeChild(quest[num_img]);
    num_img--;
    num_ans--;
    document.body.appendChild(quest[num_img]);
    }
}
btn_help.addEventListener("click", help);
function help() {
    alert("Right answer is " + task1_answers[n_r_answ[num_ans]])
}
