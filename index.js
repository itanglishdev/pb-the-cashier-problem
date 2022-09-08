class Shop {

  constructor(name) {

    this.name = name
    this.products = []
    this.till = []
  }
}

class Product {

  constructor(productName, price, id) {

    this.productName = productName
    this.price = price
    this.id = id
  }
}

class ProductManager {

  constructor(products) {

    this.products = products
  }

  addToStore(item) {

    this.products.push(item)
    // console.log('TOTAL = ', () => );
  }
}

class TillManager {

  constructor(till) {


    this.till = till
  }

  buyProduct(...itemName) {

    this.till.push(...itemName)

  }

  removeProduct(itemName) {

    this.till.splice(this.till.indexOf(itemName), 1)
    return this.till

  }
  total() {
    let sum = this.till.reduce((acc, el) => acc + el.price, 0)
    return sum
  }

  paymentMethod(answer) {

    if (answer !== 'card') {
      console.log('That\'s perfect');
    } else { console.log('I am sorry we do not accept them'); }
  }

  payment(amount) {

    let leftOver = 0
    let amountToSubtract = 0

    const currency = [200, 100, 50, 20, 10, 5, 1, .5, .2, .1]

    currency.forEach(el => console.log((amount % el).toFixed(0)))



    // let amountOf100 = (sum % 100).toFixed(0)
    // if (amountOf100 > 0) {
    //   leftOver = sum -= amountOf100 * 100
    //   let amountOf50 = (leftOver % 50).toFixed(0)
    //   if (amountOf50 > 0) {
    //     leftOver = sum -= amountOf50 * 50
    //     let amountOf20 = (leftOver % 20).toFixed(0)
    //     if (amountOf20 > 0) {
    //       leftOver = sum -= amountOf20 * 20
    //       let amountOf10 = (leftOver % 10).toFixed(0)
    //       if (amountOf20 > 0) {
    //         leftOver = sum -= amountOf10 * 10
    //         let amountOf5 = (leftOver % 5).toFixed(0)
    //         if (amountOf5 > 0) {
    //           leftOver = sum -= amountOf10 * 10
    //           let amountOf1 = (leftOver % 1).toFixed(0)
    //           if (amountOf1 > 0) {
    //             leftOver = sum -= amountOf1
    //             let amountOf50Cent = (leftOver % .5).toFixed(0)
    //             if (amountOf50Cent > 0) {
    //               leftOver = sum -= amountOf50Cent *.5
    //               let amountOf20Cent = (leftOver % .2).toFixed(0)
    //             }
    //           }
    //         }
    //       }
    //     }
    //   }
    // }


  }


}

// NEW SHOP CREATED
const edeka = new Shop

// PRODUCT MANAGER CREATED
const managingNewProducts = new ProductManager(edeka.products)

// PRODUCT CREATED
const banana = new Product('Banana', 1, 345)
const pineapple = new Product('Pineapple', 1.50, 245)
const apple = new Product('Apple', 0.75, 645)
const orange = new Product('Orange', 1.2, 347)
const strawberry = new Product('Strawberry', 2.5, 375)

// ADDING PRODUCTS TO SHOP
managingNewProducts.addToStore(banana)
managingNewProducts.addToStore(pineapple)
managingNewProducts.addToStore(apple)
managingNewProducts.addToStore(orange)
managingNewProducts.addToStore(strawberry)

// TILL MANAGER CREATED
const cashier = new TillManager(edeka.till)

// ADD PRODUCT TO TILL
cashier.buyProduct(banana)
cashier.buyProduct(banana)
cashier.buyProduct(banana)
cashier.buyProduct(pineapple)

// console.log("TILL1 ===>", edeka.till);
// REMOVE PRODUCT FROM TILL
cashier.removeProduct(pineapple)
// console.log(pineapple);
console.log("TILL2 ===>", edeka.till);

// cashier.paymentMethod('card')
// console.log(edeka.products);
console.log(cashier.total());
