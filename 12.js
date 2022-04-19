function myFunction() {
        var x = document.getElementById("myText").value;
        document.getElementById("demo").innerHTML =("welcome"+ x);
      }







function myFunction() {
        var x = document.getElementById("myText").value;
        document.getElementById("demo").innerHTML =("welcome"+ x);
      }
    
      function calc(func){
        var result = document.getElementById("result");
        var AA = parseInt(document.getElementById("AA").value);
        var BB = parseInt(document.getElementById("BB").value);
        if(isNaN(AA) || isNaN(BB)){
            alert("Please enter a number");
            return false;
        }
        result.value = func(AA,BB);
    }
    function Try(AA,BB){
        return AA+BB;

    }