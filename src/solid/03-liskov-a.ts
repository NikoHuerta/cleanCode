import { Tesla, Audi, Toyota, Honda, Vehicle, Volvo, Ford } from './03-liskov-b';

// Aplica Liskov Substitution Principle ya que la solucion acepta cualquier marca de vehiculo que herede de clase 'Vehicle'
// abstract clases  --> clases creadas solo para que otras hereden de estas, no se pueden instanciar
// abstract methods --> las clases hijas deben implementar estos metodos

(() => {
    
    const printCarSeats = ( cars: Vehicle[] ) => {
        
        // for (const car of cars) {
         
        //     if( car instanceof Tesla ) {
        //         console.log( 'Tesla', car.getNumberOfSeats() );
        //         continue;
        //     }
        //     if( car instanceof Audi ) {
        //         console.log( 'Audi', car.getNumberOfSeats() );
        //         continue;
        //     }
        //     if( car instanceof Toyota ) {
        //         console.log( 'Toyota', car.getNumberOfSeats() );
        //         continue;
        //     }
        //     if( car instanceof Honda ) {
        //         console.log( 'Honda', car.getNumberOfSeats() );
        //         continue;
        //     }        
        //     if( car instanceof Volvo ) {
        //         console.log( 'Volvo', car.getNumberOfSeats() );
        //         continue;
        //     }    
        //     if( car instanceof Ford ) {
        //         console.log( 'Ford', car.getNumberOfSeats() );
        //         continue;
        //     } 

        // }
    
        cars.forEach( car => {
            console.log( car.constructor.name, car.getNumberOfSeats() );
        });
    
    }
    
    const cars = [
        new Tesla(7),
        new Audi(2),
        new Toyota(5),
        new Honda(5),
        new Volvo(3),
        new Ford(2),
    ];


    printCarSeats( cars );

})();