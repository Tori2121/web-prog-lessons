fi.addEventListener("click",fnc);
function fnc() {
    let val_a = parseFloat(a.value);
    let val_b = parseFloat(b.value);
    let val_c = parseFloat(c.value);
    let val_f = 0;
    if (val_a >= val_b && val_a >= val_c) {
        val_f = val_a;
    }
    else if (val_b >= val_a && val_b >= val_c) {
        val_f = val_b;
    }
    else {
        val_f = val_c;
    }
    f.value = val_f;
}
fi1.addEventListener("click",fnk);
function fnk(){
    let val_a1 = parseFloat(a1.value);
    let val_b1 = parseFloat(b1.value);
    let val_f1 = 0;
    if (val_a1 >= val_b1) {
        val_f1 = val_a1;
    }
    else {
        val_f1 = val_b1;
    }
    f1.value = val_f1;
}
fi2.addEventListener("click",fnk);
function fnk(){
    let val_x = parseFloat(x.value);
    let val_y = parseFloat(y.value);
    let val_k = 0;
    if (val_x > 0 && val_y > 0){
        val_k = 1;
    }
    else if (val_x < 0 && val_y > 0){
        val_k = 2;
    }
    else if (val_x < 0 && val_y < 0){
        val_k = 3;
    }
    else if (val_x > 0 && val_y < 0){
        val_k = 4;
    }
    k.value = val_k;
}
fi3.addEventListener("click",fnk);
function fnk(){
    let val_k1 = parseInt(k1.value);
    let val_l1 = parseInt(l1.value);
    let val_k2 = 0;
    let val_l2 = 0;
    if (val_k1 > val_l1){
        val_l2 = val_k1;
        val_k2 = val_k1;
    }
    else if (val_k1 < val_l1){
        val_k2 = val_l1;
        val_l2 = val_l1;
    }
    k2.value = val_k2;
    l2.value = val_l2;
}
fi4.addEventListener("click",fnk);
function fnk(){
    let val_n = parseFloat(n.value);
    let val_an = '';
    if (val_n >= 10 && val_n < 100 && val_n % 2 == 0) {
        val_an = 'Является';
    }
    else {
        val_an = 'Число не выполняет одно из требований'
    }
    an.value = val_an;
}
fi5.addEventListener("click",fnk);
function fnk(){
    let val_n1 = parseFloat(n1.value);
    let val_an1 = '';
    if (val_n1 > 0  && val_n1 % 5 == 0) {
        val_an1 = 'Является';
    }
    else {
        val_an1 = 'Число не выполняет одно из требований'
    }
    an1.value = val_an1;
}
fi6.addEventListener("click",fnk);
function fnk(){
    let val_n2 = parseInt(n2.value);
    let val_an2 = '';
    if (val_n2 >= 100 && val_n2 < 1000  && Math.floor(val_n2 / 100) == val_n2 % 10) {
        val_an2 = 'Является';
    }
    else {
        val_an2 = 'Нет'
    }
    an2.value = val_an2;
}
fi7.addEventListener("click",fnk);
function fnk(){
    let val_n3 = parseInt(n3.value);
    let val_an3 = '';
    if (val_n3 >= 5 && val_n3 < 12) {
        val_an3 = 'Доброе утро';
    }
    else if (val_n3 >= 12 && val_n3 < 18) {
        val_an3 = 'Добрый день';
    }
    else if (val_n3 >= 18 && val_n3 < 24) {
        val_an3 = 'Добрый вечер';
    }
    else{
        val_an3 = 'Добрый ночи';
    }    
    an3.value = val_an3;
}