interface ICustomer {
    id: number;
    email: string;
    createdAt: string;
    fullName: string;
}

interface IValidator {
    emailIsValid: (email: string) => boolean;
}

class Validator implements IValidator {
    emailIsValid(email: string) {
        return true;
    }
}

class Customer implements ICustomer {
    private validator: IValidator;

    constructor(
        validator: IValidator,
        public id: number,
        public email: string,
        public createdAt: string,
        public fullName: string
    ) {
        this.validator = validator;
    }

    get emailGetter() {
        return this.email;
    }

    set emailSetter(email: string) {
        if (this.validator.emailIsValid(email)) {
            this.email = email;
        } else {
            // Handle invalid email case
        }
    }
}

type EventStatus = "Active" | "Closed";
interface IEvent {
    id: number,
    title: string,
    description: string,
    createdAt: string,
    status: EventStatus,
}

interface IEventInstance {
    id: number,
    event: Event,
    startDate: string,
    endDate: string,
    price: number
}

type PaymentStatus = "Pending" | "Confirmed";
interface IPayment {
    id: number,
    booking: IBooking,
    price: number,
    status: PaymentStatus
}

interface IBooking {
    id: number,
    customer: Customer,
    event: Event,
    payment: IPayment
}