const ReviewsItemBtn = document.querySelectorAll('.Reviews_item-btn')
ReviewsItemBtn.forEach(btn => {
    btn.onclick = () => {
        if (btn.textContent == 'Свернуть') {
            btn.textContent = 'Развернуть'
            const text = btn.parentElement.querySelector('.Reviews_item-mid-text')  
            text.style.height = '64px'
        } else {
            const text = btn.parentElement.querySelector('.Reviews_item-mid-text')  
            text.style.height = '83px'
            btn.textContent = 'Свернуть'
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
