let url = "https://masai-vouchers-api.herokuapp.com/api/vouchers";
fetch(url)
    .then(function (res) {
        //   console.log(res.json())
        return res.json();
    })
    .then(function (res) {
        console.log(res)
        displayV(res);
    })
    .catch(function (error) {
        console.log(error);
    });

function displayV(v) {

    var box = document.createElement("div")

    var banner = document.createElement("img");
    banner.src = v.image;
    var title = document.createElement("h3");
    title.innerHTML = v.name;
    var price = document.createElement("h5")
    price.innerHTML = v.price
    let btn = document.createElement("button") 
    btn.innerText = "Buy" 
    
  
    box.append(banner, title, price ,btn)
    document.querySelector("#voucher_list").append(box)




}
let go = JSON.parse(localStorage.getItem("user"));
console.log(go)
go.map(function(el){
    let h2 = document.createElement("h2")
    h2.innerHTML = el.name

    document.getElementById("wallet_balance").append(h2)
})
   




