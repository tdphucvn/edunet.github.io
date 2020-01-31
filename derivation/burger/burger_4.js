const burger_4 = () =>{
    const burger = document.querySelector('.burger_4');
    console.log(burger)
    burger.addEventListener('click', ()=>{
    burger.classList.toggle('toggle');
    });
}
burger_4();