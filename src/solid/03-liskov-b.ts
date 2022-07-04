


export abstract class Vehicle {

    // getNumberOfSeats(): number {
    //     throw Error('Method not implemented.');
    // }

    abstract getNumberOfSeats(): number;

}




export class Tesla extends Vehicle {

    constructor( private numberOfSeats: number ) {
        super();
    }

    getNumberOfSeats() {
        return this.numberOfSeats;
    }

    getNumberOfTeslaSeats() {
        return this.numberOfSeats;
    }
}

export class Audi extends Vehicle {

    constructor( private numberOfSeats: number ) {
        super();
    }

    getNumberOfAudiSeats() {
        return this.numberOfSeats;
    }

    getNumberOfSeats() {
        return this.numberOfSeats;
    }
}

export class Toyota extends Vehicle {

    constructor( private numberOfSeats: number ) {
        super();
    }

    getNumberOfToyotaSeats() {
        return this.numberOfSeats;
    }

    getNumberOfSeats() {
        return this.numberOfSeats;
    }
}

export class Honda extends Vehicle {

    constructor( private numberOfSeats: number ) {
        super();
    }

    getNumberOfHondaSeats() {
        return this.numberOfSeats;
    }

    getNumberOfSeats() {
        return this.numberOfSeats;
    }
}

export class Volvo extends Vehicle {

    constructor( private numberOfSeats: number ) {
        super();
    }

    getNumberOfVolvoSeats() {
        return this.numberOfSeats;
    }

    getNumberOfSeats() {
        return this.numberOfSeats;
    }
}

export class Ford extends Vehicle {

    constructor( private numberOfSeats: number ) {
        super();
    }

    getNumberOfFordSeats() {
        return this.numberOfSeats;
    }

    getNumberOfSeats() {
        return this.numberOfSeats;
    }
}