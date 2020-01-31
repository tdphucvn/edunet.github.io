const burger_3 = () =>{
    const burger = document.querySelector('.burger_3');
    console.log(burger)
    burger.addEventListener('click', ()=>{
    burger.classList.toggle('toggle');
    });
}
burger_3();