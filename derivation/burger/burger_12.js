const burger_12 = () =>{
    const burger = document.querySelector('.burger_12');
    console.log(burger)
    burger.addEventListener('click', ()=>{
    burger.classList.toggle('toggle');
    });
}
burger_12();