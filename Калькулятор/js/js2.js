send.addEventListener("click", fnc);
function fnc(){
    let val_i_n = i_n.value;
    let val_h = h.value;
    let val_i = 0;
	val_i = ((1 + parseFloat(val_i_n) / 100) / (1 + parseFloat(val_h) / 100) - 1) * 100;
	i.value = val_i.toFixed(2);
}