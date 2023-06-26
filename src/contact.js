const createContactPage = () => {
const content = document.querySelector('#content')
const pageContent = document.createElement('div')
pageContent.classList.add('page-content')
content.appendChild(pageContent)

const head = document.createElement('h1');
head.textContent='Contact Information';
pageContent.appendChild(head)

const number =document.createElement('div')
number.textContent='Number: 000 000 0000';
pageContent.appendChild(number)

const email = document.createElement('div')
email.textContent='Email: Pudding@emailExample.com'
pageContent.appendChild(email)

const image = document.createElement('img');
image.src="Background1.jpg";
pageContent.appendChild(image)
image.classList.add('background');

}

export default createContactPage