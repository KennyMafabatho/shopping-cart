/**
 * Mocking client-server processing
 */
const _products = [
    {"id": 1, "Category_id": 100, "title": "iPad 4 Mini", "price": 500.01, "inventory": 2, "image": "Ipad4.jpg"},
    {"id": 2, "Category_id": 101, "title": "H&M T-Shirt White", "price": 10.99, "inventory": 10, "image": "H&M t-shirt.jpg"},
    {"id": 3, "Category_id": 100, "title": "Charli XCX - Sucker CD", "price": 19.99, "inventory": 5, "image": "Charli XCX - Sucker CD.jpeg"},
    {"id": 4, "Category_id": 102, "title": "BoboBird Watch", "price": 95.99, "inventory": 5, "image": "BoboBird Watch.jpg"},
    {"id": 5, "Category_id": 103, "title": "Arthur Jack Boots", "price": 155.99, "inventory": 5, "image": "Arthur Jack Boots.jpg"},
    {"id": 6, "Category_id": 103, "title": "Paolo Scafore Shoes", "price": 140.99, "inventory": 5, "image": "paoloscafore-shoes.jpg"},
    {"id": 5, "Category_id": 103, "title": "Napoli Cashmere-Nappa Shoes", "price": 180.99, "inventory": 5, "image": "napolo-cashmere-nappa-shoes.jpg"},
    {"id": 5, "Category_id": 103, "title": "The Brera-Cervo Shoes", "price": 210.99, "inventory": 5, "image": "the-brera-cervo-shoes.jpg"}
  ]
  
  export default {
    getProducts (cb) {
      setTimeout(() => cb(_products), 100)
    },
  
    buyProducts (products, cb, errorCb) {
      setTimeout(() => {
        // simulate random checkout failure.
        (Math.random() > 0.5 || navigator.webdriver)
          ? cb()
          : errorCb()
      }, 100)
    }
  }