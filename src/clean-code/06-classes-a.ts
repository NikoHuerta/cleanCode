(() => {

    //NO ESTA APLICANDO EL PRINCIPIO DE RESPONSABILIDAD UNICA

    type Gender = 'M'|'F';
    
    class Person {
        // public name: string;
        // public gender: Gender;
        // public birthdate: Date;

        // constructor( name: string, gender: Gender, birthdate: Date ){
        //     this.name = name;
        //     this.gender = gender;
        //     this.birthdate = birthdate;
        // }

        constructor(
            public name: string,
            public gender: Gender,
            public birthdate: Date
        ){}
    }

    class User extends Person {

        private lastAccess: Date;

        constructor(
            public email: string,
            public role: string,
            name: string,
            gender: Gender,
            birthdate: Date
        ){
            super( name, gender, birthdate );
            this.lastAccess = new Date();
        }

        checkCredentials(){
            return true;
        }
    }

    class UserSettings extends User {
        constructor(
            public workingDirectory: string,
            public lastOpenFolder: string,
            email: string,
            role: string,
            name: string,
            gender: Gender,
            birthdate: Date  
        ){
            super( email, role, name, gender, birthdate );
        }
    }


    const userSettings = new UserSettings(
        '/usr/home',
        '/home',
        'na.huertaf@gmail.com',
        'Admin',
        'Nicolas Huerta',
        'M',
        new Date('1989-09-11')
    );


    console.log(userSettings, { areCredentialsValid: userSettings.checkCredentials() });





    // const newPerson = new Person('Nicolas Huerta', 'M', new Date('1989-09-11'));
    // console.log({ newPerson });


})()