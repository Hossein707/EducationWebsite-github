const nav=document.getElementById('menu-nav');
const openMenuBtn=document.getElementById('open-menu-btn');
openMenuBtn.onclick=()=>{
    nav.classList.toggle('active');
}

window.onscroll = () => {
    document.querySelector('.header').classList.toggle('window-scroll', window.scrollY > 0);
    nav.classList.remove('active');
}


const questions=document.querySelectorAll('.question');

questions.forEach(question=>{
    question.onclick=()=>{
        question.classList.toggle('open');

        const icon=question.querySelector('i');
        if(icon.className==="fa fa-plus"){
            icon.className="fa fa-minus"
        }else{
            icon.className="fa fa-plus"
        }
    }
})




var swiper = new Swiper(".myswiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    }  ,
      breakpoints: {
        0: {
            slidesPerView: 1,
        },
        640: {
            slidesPerView: 2,
        },
  
        1024: {
            slidesPerView: 3,

        },
    },

  });