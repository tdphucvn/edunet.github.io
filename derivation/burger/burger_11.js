const burger_11 = () =>{
    const burger = document.querySelector('.burger_11');
    console.log(burger)
    burger.addEventListener('click', ()=>{
    burger.classList.toggle('toggle');
    });
}
burger_11();