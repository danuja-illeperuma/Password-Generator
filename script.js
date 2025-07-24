const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"]

let pass1 = document.getElementById("pass1")
let pass2 = document.getElementById("pass2")


function generate(){
    let passwordone = ""
    let passwordtwo = ""

    for(let i = 0;i<15; i++){
         let randomone = Math.floor(Math.random()*characters.length)
         let randomone2 = Math.floor(Math.random()*characters.length)
        passwordone+=characters[randomone]
        passwordtwo+=characters[randomone2]
    }
    pass1.textContent = passwordone
    pass2.textContent = passwordtwo

pass1.onclick = function() {
    navigator.clipboard.writeText(pass1.textContent);
    alert("Password 1 copied to clipboard!");
};
pass2.onclick = function() {
    navigator.clipboard.writeText(pass2.textContent);
    alert("Password 2 copied to clipboard!");
};



  
   
}


