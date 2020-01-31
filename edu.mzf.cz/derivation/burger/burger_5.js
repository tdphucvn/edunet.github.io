const burger_5 = () =>{
    const burger = document.querySelector('.burger_5');
    console.log(burger)
    burger.addEventListener('click', ()=>{
    burger.classList.toggle('toggle');
    });
}
burger_5();