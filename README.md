<!DOCTYPE HTML>
<html>
<title> Mushfiq Fahim </title>

<body>

  <h1><p align="Center" style="color:#31f2c0">
    Nanotron Inc.
  </p>
  </h1> 
  <br>
  <br>

  <h4><p align="Center" style="color:#ff008f">
    ADMIN LOGIN.
  </p>
  </h4>

  <br>
  Enter Password :
  <input type="text" id="pass" name="pass">
  <button style="background-color:#85b1bc" style="color:#f0f0f000" id="ck"> Cheak </button>
  <br>

  <br><br>

  <button> <a id="in" href="">  Login </a> </button>
  <br>
  <!--............................-->
  <!--script src="mas.js"></script-->
  <script>
   var xx;
    ck.addEventListener('click', function(e) {
      var ps = document.getElementById("pass").value;
      //vpn.textContent= ps;
      
      if( xx == "hub.html")
      alert("Already Varyfied Click on Login");
      
     else if (ps == "123a") {
        alert("Password Mached  Click on Login ")
        document.getElementById('in').href = "hub.html"
        xx = "hub.html";
      } else
        alert("Password not mached")
    }
    )
  </script>

</body>

</html>
