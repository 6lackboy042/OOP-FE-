// FOOD CLASS 
class Food {
  // static property
  static totalFoods = 0;

  constructor(name, price, availableQuantity) {
    this.name = name;
    this.price = price;
    this.availableQuantity = availableQuantity;

    Food.totalFoods++;
  }

  // instance method
  orderFood(quantity) {
    if (this.availableQuantity >= quantity) {
      this.availableQuantity -= quantity;
      console.log(quantity + " " + this.name + " ordered");
    } else {
      console.log(this.name + " is not enough");
    }
  }

  // instance method
  restock(quantity) {
    this.availableQuantity += quantity;
    console.log(this.name + " restocked");
  }

  // static method
  static showTotalFoods() {
    console.log("Total foods: " + Food.totalFoods);
  }
}

// ================= CUSTOMER CLASS =================
class Customer {
  // static property
  static totalCustomers = 0;

  constructor(id, name) {
    this.id = id;
    this.name = name;

    Customer.totalCustomers++;
  }

  // instance method
  placeOrder(food, quantity) {
    console.log(this.name + " is ordering...");
    food.orderFood(quantity);
  }

  // instance method
  cancelOrder(food, quantity) {
    console.log(this.name + " cancelled order");
    food.restock(quantity);
  }
}

// USAGE 

const food1 = new Food("Rice", 1500, 10);
const food2 = new Food("Burger", 2000, 5);

const customer1 = new Customer(1, "John");
const customer2 = new Customer(2, "Mary");

// ordering
customer1.placeOrder(food1, 2);
customer2.placeOrder(food2, 3);

// cancel order
customer1.cancelOrder(food1, 1);

// show totals
Food.showTotalFoods();
console.log("Total customers: " + Customer.totalCustomers);