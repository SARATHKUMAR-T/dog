let d1=document.createElement('div');
d1.className='container';
d1.classList.add('main');

let head=document.createElement('h4');
head.setAttribute("id","hv1");
head.innerHTML='kindly enter Breed name'

let row=document.createElement('div');
row.className='row';

let input=document.createElement('input');
input.setAttribute("type","text");
input.setAttribute("id","breed");

let button=document.createElement('button');
button.setAttribute("id","dog");
button.classList.add('btn' ,'btn-success','m1')
button.addEventListener('click',getdog);
button.innerHTML='click here to view image';

d1.append(head,input,button,row,);

document.body.append(d1);


async function getdog(){
try {
    let dog1=document.getElementById('breed').value;
let url=`https://dog.ceo/api/breed/${dog1}/images/random`
let res=await fetch(url)
let final=await res.json();
console.log(final);
row.innerHTML=`
<div class="col-md-6 c1">
<div class=" card deck text-center text-black bg-light mb-3 d b1" style="width: 18rem;">
<img src="${final.message}" class="card-img-top " alt="...">
<div class="card-body">
  <p class="card-text">Breed name:${dog1}</p>
</div>
</div>
</div>`
} catch (error) {
    console.log(error);
}
    
}