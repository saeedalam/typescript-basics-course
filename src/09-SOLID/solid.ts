//---- S
class Product {
    // Product-related properties and methods
}

class Cart {
    // Cart-related properties and methods
}

class Order {
    // Order-related properties and methods
}

class PaymentProcessor {
    processPayment(order: Order) {
        // Payment processing logic
    }
}

class InventoryManager {
    updateInventory(order: Order) {
        // Inventory management logic
    }
}


//---- O
interface IPaymentProcessor {
    processPayment(order: Order): void;
}

class CreditCardProcessor implements IPaymentProcessor {
    processPayment(order: Order) {
        // Credit card payment processing logic
    }
}

class PayPalProcessor implements IPaymentProcessor {
    processPayment(order: Order) {
        // PayPal payment processing logic
    }
}

class Order {
    constructor(private paymentProcessor: IPaymentProcessor) { }

    processOrder() {
        // Order processing logic
        this.paymentProcessor.processPayment(this);
    }
}


//-------  L

interface IPaymentProcessor {
    processPayment(order: Order): void;
}

class CreditCardProcessor implements IPaymentProcessor {
    processPayment(order: Order) {
        // Credit card payment processing logic
    }
}

class PayPalProcessor implements IPaymentProcessor {
    processPayment(order: Order) {
        // PayPal payment processing logic
    }
}

class Order {
    constructor(private paymentProcessor: IPaymentProcessor) { }

    processOrder() {
        // Order processing logic
        this.paymentProcessor.processPayment(this);
    }
}


//----------  I
interface IProductInfo {
    getProduct(id: string): Product;
    getAllProducts(): Product[];
}

interface ICartOperations {
    addToCart(product: Product): void;
    removeFromCart(product: Product): void;
    getCartItems(): Product[];
}

interface IOrderManager {
    createOrder(cart: ICartOperations): Order;
    processOrder(order: Order): void;
}



//---- d
interface IPaymentProcessor {
    processPayment(order: Order): void;
}

class CreditCardProcessor implements IPaymentProcessor {
    processPayment(order: Order) {
        // Credit card payment processing logic
    }
}

class PayPalProcessor implements IPaymentProcessor {
    processPayment(order: Order) {
        // PayPal payment processing logic
    }
}

class Order {
    constructor(private paymentProcessor: IPaymentProcessor) { }

    processOrder() {
        // Order processing logic
        this.paymentProcessor.processPayment(this);
    }
}
