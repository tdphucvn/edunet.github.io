const burger_10 = () =>{
    const burger = document.querySelector('.burger_10');
    console.log(burger)
    burger.addEventListener('click', ()=>{
    burger.classList.toggle('toggle');
    });
}
burger_10();