const show = document.querySelector('.MobileContainer');
const btn = document.querySelector('#rentMobileBtn');
const closeBtn = document.querySelector('#closebtn');
const rest = document.querySelector('.restMobileContent');
const mobileShow=()=>{
if(show.style.display == 'flex'){
    show.style.display = 'none'
}
else{
    show.style.display = 'flex'
}
}
rest.addEventListener('click',mobileShow)
btn.addEventListener('click',mobileShow);
closeBtn.addEventListener('click',mobileShow);