fetch('https://innovations.kh.ua/quiz/?author_id=2').then(response => response.json())
    .then(function (ttt) {
        console.log(ttt);
        quest.innerHTML = ttt.question_arr[0];
        a.innerHTML = ttt.a1_arr[0];
        b.innerHTML = ttt.a2_arr[0];
        c.innerHTML = ttt.a3_arr[0];
        d.innerHTML = ttt.a4_arr[0];
        n_ans = ttt.n_right_answer_arr[0];
})         
answer = [a1, a2, a3, a4];
btn.addEventListener("click", fnc1);
function fnc1(){
    console.log(a1.checked);
    console.log(a2.checked);
    console.log(a3.checked);
    console.log(a4.checked);
    if (answer[n_ans - 1].checked){
        alert("Right answer");
    }
    else {
        alert("Wrong answer");
    }
}