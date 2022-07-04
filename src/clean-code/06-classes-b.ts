(() => {

    //NO ESTA APLICANDO EL PRINCIPIO DE RESPONSABILIDAD UNICA

    type Gender = 'M'|'F';

    interface IPerson {
        name      : string;
        gender    : Gender;
        birthdate : Date;
    }
    
    class Person {

        public name: string;
        public gender: Gender;
        public birthdate: Date;

        constructor({ name, gender, birthdate }: IPerson ){
            this.name = name;
            this.gender = gender;
            this.birthdate = birthdate;
        }   
    }

    interface IUser {
        email       : string;
        role        : string;
        name        : string;
        gender      : Gender;
        birthdate   : Date;
    }

    class User extends Person {

        private lastAccess: Date;
        public email: string;
        public role: string;

        constructor( { email, role, name, gender, birthdate }: IUser ){

            super( { name, gender, birthdate } );
            this.email = email;
            this.role = role;
            this.lastAccess = new Date();
        }

        checkCredentials(){
            return true;
        }
    }

    interface IUserSettings  {
        workingDirectory    : string;   
        lastOpenFolder      : string;
        email               : string;
        role                : string;
        name                : string;
        gender              : Gender;
        birthdate           : Date;
    }

    class UserSettings extends User {

        public workingDirectory: string;
        public lastOpenFolder: string;

        constructor({ workingDirectory, lastOpenFolder, email, role, name, gender, birthdate }: IUserSettings) {
            super({ email, role, name, gender, birthdate });
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder = lastOpenFolder;
        }
    }

    const userSettings = new UserSettings({
        workingDirectory : '/usr/home',
        lastOpenFolder : '/home',
        email : 'na.huertaf@gmail.com',
        role : 'Admin',
        name : 'Nicolas Huerta',
        gender : 'M',
        birthdate : new Date('1989-09-11')
    });


    console.log(userSettings, { areCredentialsValid: userSettings.checkCredentials() });

})()