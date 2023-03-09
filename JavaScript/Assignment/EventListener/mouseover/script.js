const mo = document.getElementById("mo");
mo.addEventListener("mouseover", (event)=>{
    event.target.style.color = "red";
    // alert("Mouse Over event");
    console.log(mo);
    setTimeout(() =>{
        event.target.style.color = "";
    }, 500 );
},
false
);
