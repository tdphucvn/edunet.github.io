const burger_13 = () =>{
    const burger = document.querySelector('.burger_13');
    console.log(burger)
    burger.addEventListener('click', ()=>{
    burger.classList.toggle('toggle');
    });
}
burger_13();