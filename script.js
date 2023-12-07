const div= document.createElement('div');
div.setAttribute('class','board');
document.body.appendChild(div);

let c=true;
for(let i=0; i<100; i++){
    if(i%10===0 && i!==0){
        c=!c;
    }
    const d=document.createElement('div');
    d.setAttribute('class', 'cell');
    d.innerText=i+1;
    const set=document.createElement('div');
    set.setAttribute('class', 'set');

    if(c && i%2===0 || !c && i%2!==0){
        d.classList.add('dark');
    }
    d.appendChild(set);  
    div.appendChild(d); 
}

const dd= document.createElement('div');
dd.setAttribute('class', 'btn-cont');
const bt1= document.createElement('button');
bt1.setAttribute('id', 'btn1');
const bt2= document.createElement('button');
bt2.setAttribute('id', 'btn2');
const result= document.createElement('div');
result.setAttribute('id', 'res');

bt1.innerText='Dice';
bt2.innerText='Reset';
document.body.appendChild(dd);
dd.append(bt1, bt2, result); 

let pos=0;
let cell = document.getElementsByClassName('cell')[pos].getElementsByClassName('set')[0];
cell.style.display='block';

bt2.addEventListener('click', ()=>{
    result.style.display='none';
    let cell = document.getElementsByClassName('cell')[pos].getElementsByClassName('set')[0];
    cell.style.display='none';
    pos=0;
    cell=document.getElementsByClassName('cell')[pos].getElementsByClassName('set')[0];
    cell.style.display='block';
});

bt1.addEventListener('click', ()=>{
    let n= Math.round( Math.random()*10)%6 +1;
    cell = document.getElementsByClassName('cell')[pos].getElementsByClassName('set')[0];
    cell.style.display='none';
    if(pos+n<100){
        pos+=n;
    }
    result.innerText='Result = '+n;
    cell=document.getElementsByClassName('cell')[pos].getElementsByClassName('set')[0];
    cell.style.display='block';
    result.style.display='inline';
    if(pos===99){
        alert("You won!!!");
    }
});







