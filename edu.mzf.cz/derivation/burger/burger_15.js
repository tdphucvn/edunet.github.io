const burger_15 = () =>{
    const burger = document.querySelector('.burger_15');
    console.log(burger)
    burger.addEventListener('click', ()=>{
    burger.classList.toggle('toggle');
    });
}
burger_15();