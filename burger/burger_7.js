const burger_7 = () =>{
    const burger = document.querySelector('.burger_7');
    console.log(burger)
    burger.addEventListener('click', ()=>{
    burger.classList.toggle('toggle');
    });
}
burger_7();