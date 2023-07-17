class Order {
    private items: Product[];

    constructor() {
        this.items = [];
    }

    addItem(item: Product): void {
        this.items.push(item);
    }

    calculateTotal(): number {
        let total = 0;
        for (const item of this.items) {
            total += item.price;
        }
        return total;
    }
}

class OrderManager {
    private order: Order;

    constructor() {
        this.order = new Order();
    }

    addItemToOrder(item: Product): void {
        this.order.addItem(item);
    }

    getTotalOrderAmount(): number {
        return this.order.calculateTotal();
    }
}


//---- o
interface PaymentProcessor {
    processPayment(amount: number): void;
  }
  
  class CreditCardProcessor implements PaymentProcessor {
    processPayment(amount: number): void {
      // Credit card payment processing logic
    }
  }
  
  class PayPalProcessor implements PaymentProcessor {
    processPayment(amount: number): void {
      // PayPal payment processing logic
    }
  }
  
  class Order {
    private paymentProcessor: PaymentProcessor;
  
    constructor(paymentProcessor: PaymentProcessor) {
      this.paymentProcessor = paymentProcessor;
    }
  
    processPayment(amount: number): void {
      this.paymentProcessor.processPayment(amount);
    }
  }
  

  //--- l
  class Vehicle {
    accelerate(): void {
      // Acceleration logic
    }
  }
  
  class Car extends Vehicle {
    accelerate(): void {
      // Car-specific acceleration logic
    }
  }
  
  class Bike extends Vehicle {
    accelerate(): void {
      // Bike-specific acceleration logic
    }
  }

  
  // i 
  interface Printable {
    print(): void;
  }
  
  interface Faxable {
    fax(): void;
  }
  
  class Printer implements Printable {
    print(): void {
      // Print logic
    }
  }
  
  class FaxMachine implements Faxable {
    fax(): void {
      // Fax logic
    }
  }
  
  class MultiFunctionDevice implements Printable, Faxable {
    print(): void {
      // Print logic
    }
  
    fax(): void {
      // Fax logic
    }
  }

  
  //--- d
  interface Logger {
    log(message: string): void;
  }
  
  class ConsoleLogger implements Logger {
    log(message: string): void {
      console.log(message);
    }
  }
  
  class EmailService {
    private logger: Logger;
  
    constructor(logger: Logger) {
      this.logger = logger;
    }
  
    sendEmail(to: string, subject: string, body: string): void {
      // Email sending logic
      this.logger.log('Email sent');
    }
  }
  
