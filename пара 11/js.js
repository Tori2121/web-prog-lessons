
fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5').then(response => response.json())
    .then(function (ttt) {
        console.log(ttt);
        console.log(ttt[0]);
        let i = 0;
        console.log(ttt[i].buy+ ' '+ ttt[i].sale);
        ccy.innerHTML=ttt[i].ccy + "/" + ttt[i].base_ccy;
        buy.innerHTML= "Покупка: " + ttt[i].buy;
        sale.innerHTML = "Продажа: " + ttt[i].sale;
        i++;
       // alert(ttt[0].ccy)
    })