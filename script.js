function display(value){
    document.getElementById("textarea").value+=value;
}

function calculate(value) {
        var text= document.getElementById("textarea").value;
        var ans = eval(text)
        document.getElementById("textarea").value=ans;
}

function clr(){
    document.getElementById("textarea").value='';
}