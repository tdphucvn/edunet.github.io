const burger_16 = () =>{
    const burger = document.querySelector('.burger_16');
    console.log(burger)
    burger.addEventListener('click', ()=>{
    burger.classList.toggle('toggle');
    });
}
burger_16();