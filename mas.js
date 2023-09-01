/*
 btn.addEventListener('click',function(e) {
  alert("There is nothing to submit  ")
  target="blank"
})
*/
//let cps = 1234 ;
ck.addEventListener('click', function(e) {
  var ps = document.getElementById("pass").value;
  //vpn.textContent= ps ;
  if (ps == "1234") {
    alert("Password Mached <br> Click on Login ")
    document.getElementById('in').href = "hub.html"
  } else
    alert("Password not mached")

})