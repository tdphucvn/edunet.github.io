const burger = () =>{
    const burger = document.querySelector('.burger_1');
    burger.addEventListener('click', ()=>{
    burger.classList.toggle('toggle');
    });
}
burger();