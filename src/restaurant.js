function createRestaurantPage (){
    const content = document.querySelector('#content');
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');



const headLine = document.createElement('h1');
headLine.textContent ='Classic South African Desserts';
pageContent.appendChild(headLine);

const image = document.createElement('img');
image.src="Background1.jpg";
pageContent.appendChild(image);

const copy = document.createElement('p');
copy.textContent ='Try one of our CLASSIC South African treats!';
pageContent.appendChild(copy);
content.appendChild(pageContent);
}

export default createRestaurantPage;