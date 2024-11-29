'use strict';

{ 
  const modaloister = document.getElementById('modaloister');
  const modalcheese = document.getElementById('modalcheese');
  const modalsweet = document.getElementById('modalsweet');
  const openoister = document.getElementById('openoister');
  const opencheese = document.getElementById('opencheese');
  const opensweet = document.getElementById('opensweet');
  const closebutton = document.querySelectorAll('.close');
  const spmenubutton = document.querySelector('.sp-menu');
  const overlay = document.getElementById('overlay'); 
  const close= document.getElementById('close');

  

  openoister.addEventListener('click',() =>{
   modaloister.classList.remove('hidden');
});

opencheese.addEventListener('click',() =>{
  modalcheese.classList.remove('hidden');
});

opensweet.addEventListener('click',() =>{
  modalsweet.classList.remove('hidden');
});

  closebutton.forEach((button) =>{
    button.addEventListener('click',() =>{
     button.closest('.modal').classList.add('hidden')
    });
  });
  
  spmenubutton.addEventListener('click',()=>{
      spmenubutton.style.display ='none';
      overlay.classList.add('show');
    });

  close.addEventListener('click',()=>{
      overlay.classList.remove('show');
      spmenubutton.style.display ='block';
   });
}