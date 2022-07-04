(() => {

    //APLICANDO EL PRINCIPIO DE RESPONSABILIDAD UNICA
    //PRIORIZAR LA COMPOSICION FRENTE A LA HERENCIA

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
        email : string;
        role  : string;
    }

    class User {

        private lastAccess: Date;
        public email: string;
        public role: string;

        constructor( { email, role }: IUser ){

            this.email = email;
            this.role = role;
            this.lastAccess = new Date();
        }

        checkCredentials(){
            return true;
        }
    }

    interface ISettings {
        workingDirectory    : string;   
        lastOpenFolder      : string;
    }

    class Settings{

        public workingDirectory: string;
        public lastOpenFolder: string;

        constructor({ workingDirectory, lastOpenFolder }: ISettings) {
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder = lastOpenFolder;
        }
    }


    interface IUserSettings  {
        birthdate           : Date;
        email               : string;
        gender              : Gender;
        lastOpenFolder      : string;
        name                : string;
        role                : string;
        workingDirectory    : string;   
    }

    class UserSettings {
        public person: Person;
        public user: User;
        public settings: Settings;

        constructor({
            name, gender, birthdate,
            email, role,
            lastOpenFolder, workingDirectory
        }: IUserSettings){

            this.person = new Person({ name, gender, birthdate });
            this.user = new User({ email, role });
            this.settings = new Settings({ lastOpenFolder, workingDirectory });
        }
    }

    const userSettings = new UserSettings({
        birthdate : new Date('1989-09-11'),
        email : 'na.huertaf@gmail.com',
        gender : 'M',
        lastOpenFolder : '/home',
        name : 'Nicolas Huerta',
        role : 'Admin',
        workingDirectory : '/usr/home',
    });


    console.log(userSettings, { areCredentialsValid: userSettings.user.checkCredentials() });

})()