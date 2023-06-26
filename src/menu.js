const createMenuPage = () => {

const container = document.querySelector('#container')

const brandydiv = document.createElement('div');
const koeksisterdiv = document.createElement('div');
const malvadiv = document.createElement('div');
const melkkosdiv = document.createElement('div');
const melktertdiv = document.createElement('div');
const triflediv = document.createElement('div');

container.appendChild(brandydiv)
container.appendChild(koeksisterdiv)
container.appendChild(malvadiv)
container.appendChild(melkkosdiv)
container.appendChild(melktertdiv)
container.appendChild(triflediv)

brandydiv.textContent="R65 Brandy Pudding!";
koeksisterdiv.textContent= "R45 Koek Sister!";
malvadiv.textContent = "R70 Malva Pudding!";
melkkosdiv.textContent = "R40 Melk Kos!";
melktertdiv.textContent = "R65 Melk Tert!";
triflediv.textContent = "R75 trifle";

const brandy = document.createElement('img')
brandy.src ='BrandyPudding.jpeg';
brandy.height = '50'
brandydiv.appendChild(brandy);


const koeksister = document.createElement('img');
koeksister.src = 'Koeksisters.jpg';
koeksister.height ='50'
koeksisterdiv.appendChild(koeksister);

const malva = document.createElement('img');
malva.src ='Malva Pudding.jpeg';
malva.height ='50'
malvadiv.appendChild(malva);

const melkkos = document.createElement('img');
melkkos.src = 'MelkKos.jpg';
melkkos.height = '50'
melkkosdiv.appendChild(melkkos);

const melktert = document.createElement('img');
melktert.src = 'MelkTert1.jpeg';
melktert.height ='50'
melktertdiv.appendChild(melktert);

const trifle = document.createElement('img');
trifle.src = 'Trifle1.jpeg';
trifle.height = '50'
triflediv.appendChild(trifle);

}

export default createMenuPage;