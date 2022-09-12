const hamburger =document.queryselector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.queryselector('.header .navbar .nav-list .ul');
const menu_items = document.queryselectorAll('.header .nav-bar .nav-list ul li a');
const header = document.queryselector('.header.container');

hamburger.addEventListener('click',() =>{
    hamburger.classList.toggle('active');
    mobile_menu.class_List.toggle('active');

}
);

document.addEventListener('scroll',() =>{

    var scroll_position = window.scrollY;
    if(scroll_position > 250) {
        header.style.backgroundColor = '#29323c';
    } else{
        header.style.backgroundColor = 'transparent';
    }
});

menu_items.forEach((item)=> {
    item.addEventListener('click',() => {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});
});