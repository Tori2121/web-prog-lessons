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