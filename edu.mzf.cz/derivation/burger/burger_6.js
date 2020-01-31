const burger_6 = () =>{
    const burger = document.querySelector('.burger_6');
    console.log(burger)
    burger.addEventListener('click', ()=>{
    burger.classList.toggle('toggle');
    });
}
burger_6();