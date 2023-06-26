import createRestaurantPage from './restaurant';
import createMenuPage from './menu';
import createContactPage from './contact';


const createTabs = () => {
const content = document.querySelector('#content')


const div1 = document.createElement('button');
const div2 = document.createElement('button');
const div3 = document.createElement('button');


div1.setAttribute=('id', 'home-btn');
div2.setAttribute=('id', 'menu-btn');
div3.setAttribute=('id', 'contact-btn');

div1.textContent = 'Home';
div2.textContent = 'Menu';
div3.textContent = 'Contact Us';

div1.classList.add('tab');
div2.classList.add('tab');
div3.classList.add('tab');


content.appendChild(div1);
content.appendChild(div2);
content.appendChild(div3);



div1.addEventListener('click', () =>{
    clearContent();
    createRestaurantPage();
});

div2.addEventListener('click', () =>{
    clearContent();
    createMenuPage();
});

div3.addEventListener('click', () =>{
    clearContent();
    createContactPage();
});

}

function clearContent(){
    const content = document.querySelector('#content')
    const pageContent= document.querySelector('.page-content')
    if (pageContent){
        content.removeChild(pageContent)
    }
    
}

export default createTabs;