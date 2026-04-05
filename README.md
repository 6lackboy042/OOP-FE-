Class: Food
  Attributes:
    - name : String
    - price : Number
    - availableQuantity : Number
    - totalFoods : Number [static]

  Methods:
    + orderFood(quantity) : void
    + restock(quantity) : void
    + showTotalFoods() : void [static]

------------------------------------------------------

Class: Customer
  Attributes:
    - id : Number
    - name : String
    - totalCustomers : Number [static]

  Methods:
    + placeOrder(food, quantity) : void
    + cancelOrder(food, quantity) : void