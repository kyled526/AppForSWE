$('.message a').click(function(){
   $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
});


document.getElementById("login").addEventListener("click", test);
document.getElementById("create").addEventListener("click", test);

function test(form) {
    window.open("file:///Users/BaileySpell/Documents/OneDrive%20-%20Virginia%20Tech/Spring2019/software%20engineering/FinalCode/feedLogin.html");
    // alert("getting the click");
}



function like(x) {
    x.classList.toggle("fa-thumbs-down");
  }


document.getElementById("info").innerHTML = "";