(() => {

    function getMovieInfoById( movieId: string ) {
        console.log({ movieId });
    }

    function getMovieCastById( id: string ) {
        console.log({ id });
    }

    function getActorBioById( actorId: string ) {
        console.log({ actorId });
    }

    interface IMovie {
        title: string;
        description: string;
        rating: number;
        cast: string[];
    }

    function createMovie({ title , description , rating , cast }: IMovie  ) {
        console.log({ title, description, rating, cast });
    }

    // Crea un nuevo actor
    function createActor( fullName: string, birthdate: Date ): boolean {
        
        // tarea asincrona para verificar nombre
        // ..
        // ..
        if ( fullName === 'fernando' ) return false;

        console.log('Crear actor');
        return true;        

    }


    // Continuar
    const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }): number => {

        // if ( isDead ) {
        //     result = 1500;
        // } else {
        //     if ( isSeparated ) {
        //         result = 2500;
        //     } else {
        //         if ( isRetired ) {
        //             result = 3000;
        //         } else {
        //             result = 4000; 
        //         }
        //     }
        // }

        if ( isDead ) return 1500;
        if ( isSeparated ) return 2500;
        return ( isRetired ) ? 3000 : 4000;
 
    }

    


})();