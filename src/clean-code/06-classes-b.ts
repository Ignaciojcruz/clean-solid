(()=> {

        //Aplicando el principio de responsabilidad única
    
        type Gender = 'M'|'F';
    
        interface PersonProps {
            birthdate   : Date;
            gender      : Gender;
            name        : string;
        }
        
        class Person {
            public birthdate: Date
            public gender   : Gender
            public name     : string

            constructor({ birthdate, gender, name } : PersonProps){
                this.name = name;
                this.gender = gender;
                this.birthdate = birthdate;
            }
        }

        interface UserProps {
            birthdate   : Date;         
            email       : string;
            gender      : Gender;            
            name        : string;
            role        : string;  
        }
    
        class User extends Person {
            public email : string;
            public lastAccess: Date;
            public role: string;
    
            constructor({
                birthdate,
                email,
                gender,
                name,
                role
            } : UserProps) {
                super({name, gender,birthdate});
                this.lastAccess = new Date();
                this.name = name;
                this.email = email;
                this.role = role;  
            }                
                
            checkCredentials() {
                return true;
            }
        }
    
        interface UserSettingsProps {
            birthdate       : Date;
            email           : string;
            gender          : Gender;
            lastOpenFolder  : string;
            name            : string;
            role            : string;
            workingDirectory: string;
        }

        class UserSettings extends User {
            public lastOpenFolder  : string;            
            public workingDirectory: string;            
            
            
            constructor({
                birthdate     ,           
                email,
                gender,
                lastOpenFolder ,
                name,
                role,
                workingDirectory,
            } : UserSettingsProps) {
                super({name, gender, birthdate, email,  role });
                this.workingDirectory = workingDirectory;
                this.lastOpenFolder = lastOpenFolder;                
            }
        }
    
        const userSettings = new UserSettings({
            birthdate: new Date('1985-10-12'),
            email: 'ignacio@google.com',
            gender: 'M',
            lastOpenFolder: '/home',
            name: 'Ignacio',
            role: 'Admin',
            workingDirectory: '/usr/home',
        });
    
        console.log({userSettings});
    
    })();