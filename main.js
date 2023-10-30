import './style.css'

const bestProductsItems = document.querySelector('.items')

const bestProducts = [
  {
    text: 'Mocha',
    price: 120,
    img: '/images/coffees/mocha.png'
  },
  {
    text: 'Caramel',
    price: 220,
    img: '/images/coffees/caramel.png'
  },
  {
    text: 'Americano',
    price: 100,
    img: '/images/coffees/americano.png'
  },
  {
    text: 'Mocha',
    price: 120,
    img: '/images/coffees/mocha.png'
  },
  {
    text: 'Caramel',
    price: 220,
    img: '/images/coffees/caramel.png'
  },
  {
    text: 'Americano',
    price: 100,
    img: '/images/coffees/americano.png'
  },
  {
    text: 'Mocha',
    price: 120,
    img: '/images/coffees/mocha.png'
  },
  {
    text: 'Caramel',
    price: 220,
    img: '/images/coffees/caramel.png'
  },
  {
    text: 'Americano',
    price: 100,
    img: '/images/coffees/americano.png'
  },
].sort(() => Math.random() < 0.5 ? 1 : 0)

for (let i = 0; i < bestProducts.length; i++) {
  const product = bestProducts[i]

  bestProductsItems.innerHTML += `
    <div class="item">
      <div class="pic">
        <img src="${product.img}" style="width: 6rem;" />
      </div>
      <div class="info">
        <h2 class="price">₱120</h2>
        <p>Moca</p>
        <button>Add To Cart</button>
      </div>
    </div>
`
}
