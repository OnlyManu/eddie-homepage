const html=document.querySelector('html');
const header=document.querySelector('header');
const menuIcon=document.querySelector('.menu-burger');
const nav=document.querySelector('header nav');
const navbar=document.querySelector('.navbar')
const links=nav.querySelectorAll('li a');
const closeIcon=document.querySelector('.close');
const sections=document.querySelectorAll('section, header');
const cards=document.querySelectorAll('.card');

const showHideMenu=()=>{
    if(getComputedStyle(menuIcon, null).display!='none'){
        nav.classList.toggle('open');
        html.classList.toggle('block');
    }
}
const cardHover=(e)=>{
    cards.forEach(l=>{
        l.classList.remove('hover');
    });
    e.currentTarget.classList.add('hover');
}

menuIcon.addEventListener('click', showHideMenu, false);
closeIcon.addEventListener('click', showHideMenu, false);
links.forEach(e=>e.addEventListener('click', showHideMenu, false))
cards.forEach(e=>e.addEventListener('mouseover', function(p){cardHover(p)}));
window.addEventListener('scroll', function(){
    console.log(getComputedStyle(menuIcon, null).display)
    if(getComputedStyle(menuIcon, null).display=='none'){
        if(window.scrollY > 10){
            header.classList.add('sticky');
        }else{
            header.classList.remove('sticky');
        }
    }    
    sections.forEach(e=>{
        let top=window.scrollY;
        let offset=e.offsetTop-150;
        let height=e.offsetHeight;
        let id=e.getAttribute('id');
        if(top>=offset && top<offset+height){
            if(id=='team'){
                links.forEach(l=>{
                    if(l.getAttribute('href')!='#Our_Works'){
                        l.parentNode.classList.remove('active');
                    }
                })
                document.querySelector('header nav ul li a[href*=Our_Works]').parentNode.classList.add('active');
            }else{
                links.forEach(l=>{
                    if(l.getAttribute('href')=='#'+id){
                        l.parentNode.classList.add('active');
                    }else{
                        l.parentNode.classList.remove('active');
                    }
                })
            }
        }
    })
});
