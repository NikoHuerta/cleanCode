(()=>{
    // Aplicando el principio de responsabilidad única
    // Prioriza la composición frente a la herencia

    type Gender = 'M'|'F';

    interface PersonProps {
        birthdate: Date;
        firstName: string;
        gender   : Gender;
        lastName : string;
    }

    class Person {
        public birthdate: Date;
        public firstName: string;
        public gender   : Gender;
        public lastName : string;

        constructor({ firstName, lastName, gender, birthdate }: PersonProps ){
            this.firstName = firstName;
            this.lastName = lastName;
            this.gender = gender;
            this.birthdate = birthdate;
        }
    }


    interface UserProps {
        email     : string;
        role      : string;
    }
    class User {

        public email       : string;
        public role        : string;
        private lastAccess : Date;

        constructor({ email, role }: UserProps ){
            this.lastAccess = new Date();
            this.email = email;
            this.role = role;
        }

        checkCredentials() {
            return true;
        }
    }


    interface SettingsProps {
        lastFolderOpen  : string;
        workingDirectory: string;
    }

    class Settings {
        public lastFolderOpen  : string; 
        public workingDirectory: string; 

        constructor({ workingDirectory, lastFolderOpen }: SettingsProps ){
            this.workingDirectory = workingDirectory;
            this.lastFolderOpen = lastFolderOpen;
        }
    }
    
    
    // Nuevo User Settings
    interface UserSettingsProps {
        birthdate       : Date;
        email           : string;
        firstName       : string;
        gender          : Gender;
        lastFolderOpen  : string;
        lastName        : string;
        role            : string;
        workingDirectory: string;
    }

    class UserSettings {
        
        public person  : Person;
        public settings: Settings;
        public user    : User; 

        constructor({ 
            firstName, lastName, gender, birthdate,
            email, role,
            workingDirectory, lastFolderOpen,
        }: UserSettingsProps) {
            this.person = new Person({ firstName, lastName, gender, birthdate });
            this.user = new User({ email, role });
            this.settings = new Settings({ workingDirectory, lastFolderOpen })
        }
    }
    


    const userSettings = new UserSettings({
        birthdate: new Date('1985-10-21'),
        email: 'nicolas@google.com',
        firstName: 'Nicolas',
        gender: 'M',
        lastFolderOpen: '/home',
        lastName: 'Huerta',
        role: 'Admin',
        workingDirectory: '/usr/home'
    });

    console.log({ userSettings, credentials: userSettings.user.checkCredentials() });
    
})()