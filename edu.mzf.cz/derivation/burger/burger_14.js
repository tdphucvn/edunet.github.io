const burger_14 = () =>{
    const burger = document.querySelector('.burger_14');
    console.log(burger)
    burger.addEventListener('click', ()=>{
    burger.classList.toggle('toggle');
    });
}
burger_14();