const ReviewsItemBtn = document.querySelectorAll('.Reviews_item-btn')
ReviewsItemBtn.forEach(btn => {
    btn.onclick = () => {
        if (btn.textContent == 'Свернуть') {
            btn.textContent = 'Развернуть'
            const text = btn.parentElement.querySelector('.Reviews_item-mid-text')  
            // text.style.height = '64px'
            text.classList.remove('height')
            const right = btn.parentElement.querySelector('.Reviews_item-top-right');
            right.classList.remove('Reviews_item-top-right--active')
        } else {
            const text = btn.parentElement.querySelector('.Reviews_item-mid-text')  
            // text.style.height = '128px'
            text.classList.add('height')

            btn.textContent = 'Свернуть'
            const right = btn.parentElement.querySelector('.Reviews_item-top-right');
            right.classList.add('Reviews_item-top-right--active')
        }
       
    }
   
})
const radios = document.querySelectorAll('.radio')
const imgStudiaAll = document.querySelector('.img-studia-all')
const imgStudiaAll2 = document.querySelector('.img-studia-all-2')
radios.forEach(radio => {
    radio.onclick = () => {
        console.log(radio.children[1].textContent);
        if (radio.children[1].textContent == 'ул. Анохина, 12'){
            imgStudiaAll2.classList.remove('studia-block-none')
            imgStudiaAll.classList.add('studia-block-none')
        } else {
            imgStudiaAll2.classList.add('studia-block-none')
            imgStudiaAll.classList.remove('studia-block-none')
        }
        
    }
})

const navBtnLocation = document.querySelector('.nav_btn-location')
const closeModal = document.querySelector('.modal_top-close')
const modal = document.querySelector('.modal')
navBtnLocation.onclick  = () => {
    modal.classList.toggle('modal--active')
}
closeModal.onclick  = () => {
    modal.classList.remove('modal--active')
}

const burgerMenuAll = document.querySelector('.burger_menu-all')
const menuList = document.querySelector('.menu-list')
burgerMenuAll.onclick  = () => {
    menuList.classList.toggle('menu-list--active')
    burgerMenuAll.classList.toggle('burger_menu-all--active')
    document.body.classList.toggle('body-scroll')
}


const mobilDropMenu = document.querySelector('.mobil_drop-menu')
const navLinkMobilMenu = document.querySelector('.nav_link-mobil_menu')
navLinkMobilMenu.onclick  = () => {
    mobilDropMenu.classList.toggle('mobil_drop-menu--none')
    navLinkMobilMenu.classList.toggle('footer_all-mid-link-drop_menu-rotate')
}
const footerDropMenu = document.querySelector('.footer_all-mid-link-drop_menu')
const dropMenuFooterMobil = document.querySelector('.drop_menu-footer-mobil')

footerDropMenu.onclick  = () => {
    dropMenuFooterMobil.classList.toggle('drop_menu-footer-mobil--none')
    footerDropMenu.classList.toggle('footer_all-mid-link-drop_menu-rotate')
}

