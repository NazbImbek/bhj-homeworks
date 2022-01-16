const menu = document.getElementsByClassName('menu__link');

for (let i = 0; i < menu.length; i++) {
    menu[i].onclick = function() {
    
        const menu_main = this.closest('ul');
        const menu_sub = this.parentElement.querySelector('.menu_sub');
      
       if (menu_main.className === 'menu menu_main') {
        const menu_active = menu_main.querySelector('.menu_active');
            if (menu_active  && (menu_active  !== menu_sub)) {
                menu_active.className = 'menu menu_sub';
            }
        }
              
        if (!menu_sub) {
            return true;
        } else if (menu_sub.className === 'menu menu_sub') {
            menu_sub.classList.add('menu_active');
        } else {
            menu_sub.classList.remove('menu_active');   
        }
      
        return false;
    }
}