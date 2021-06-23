/**
 * Mocking client-server processing
 */
const _products = [
    {"id": 1, "title": "iPad 4 Mini", "price": 500.01, "inventory": 2, "image": "Ipad4.jpg"},
    {"id": 2, "title": "H&M T-Shirt White", "price": 10.99, "inventory": 10, "image": "H&M t-shirt.jpg"},
    {"id": 3, "title": "Charli XCX - Sucker CD", "price": 19.99, "inventory": 5, "image": "Charli XCX - Sucker CD.jpeg"},
    {"id": 4, "title": "BoboBird Watch", "price": 95.99, "inventory": 5, "image": "BoboBird Watch.jpg"},
    {"id": 5, "title": "Arthur Jack Boots", "price": 155.99, "inventory": 5, "image": "Arthur Jack Boots.jpg"}
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