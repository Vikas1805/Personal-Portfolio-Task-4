burger = document.querySelector('.burger')
navList = document.querySelector('.nav-list')
navbar=document.querySelector('.navbar')
rightnav=document.querySelector('.right-nav')

burger.addEventListener('click',()=>{
    
    navList.ClassList.toggle('v-class-resp');
    rightnav.ClassList.toggle('v-class-resp');
    navbar.ClassList.toggle('h-nav-resp');
})

