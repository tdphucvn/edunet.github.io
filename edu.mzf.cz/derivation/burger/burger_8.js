const burger_8 = () =>{
    const burger = document.querySelector('.burger_8');
    console.log(burger)
    burger.addEventListener('click', ()=>{
    burger.classList.toggle('toggle');
    });
}
burger_8();