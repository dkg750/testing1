console.log("This is an example of flexBox");
document.getElementById("item-1").addEventListener("click",function(){
    let container=document.getElementById("container");
    container.removeChild(document.getElementById("item-1"));
});

document.getElementById("item-2").addEventListener("click",function(){
    let container=document.getElementById("container");
    container.removeChild(document.getElementById("item-2"));
});

document.getElementById("item-3").addEventListener("click",function(){
    let container=document.getElementById("container");
    container.removeChild(document.getElementById("item-3"));
});

document.getElementById("item-4").addEventListener("click",function(){
    let container=document.getElementById("container");
    container.removeChild(document.getElementById("item-4"));
});

document.getElementById("item-5").addEventListener("click",function(){
    let container=document.getElementById("container");
    container.removeChild(document.getElementById("item-5"));
});

document.getElementById("item-6").addEventListener("click",function(){
    let container=document.getElementById("container");
    container.removeChild(document.getElementById("item-6"));
});


/*let elem=document.getElementById("container");
let i=1;
let create=document.createElement("div");
create.id="item";
create.className="item";
let tnode=document.createTextNode("Seventh Box");
create.appendChild(tnode);
elem.appendChild(create); */
