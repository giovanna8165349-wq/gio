document
.getElementById("btn")
.addEventListener("click",()=>{

document
.getElementById("albuns")
.scrollIntoView({
behavior:"smooth"
});

});

function animate(id,target){

let value=0;

let timer=setInterval(()=>{

value += Math.ceil(target/100);

if(value>=target){

value=target;

clearInterval(timer);

}

document.getElementById(id).innerText=value;

},20);

}

animate("fans",50000);
animate("bands",120);
animate("shows",300);

document
.getElementById("form")
.addEventListener("submit",(e)=>{

e.preventDefault();

alert("Mensagem enviada! 🤘");

});