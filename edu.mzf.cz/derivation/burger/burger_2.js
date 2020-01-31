const burger_2 = () =>{
    const burger = document.querySelector('.burger_2');
    console.log(burger)
    burger.addEventListener('click', ()=>{
    burger.classList.toggle('toggle');
    });
}
burger_2();