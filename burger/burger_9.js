const burger_9 = () =>{
    const burger = document.querySelector('.burger_9');
    console.log(burger)
    burger.addEventListener('click', ()=>{
    burger.classList.toggle('toggle');
    });
}
burger_9();