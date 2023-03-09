let inputBox = document.getElementById('input-box') 
let display = document.getElementById('display')

inputBox.addEventListener('keydown', function(e){
    display.innerText ="you have Pressed " + e.key
});