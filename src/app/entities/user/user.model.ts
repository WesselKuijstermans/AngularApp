export enum UserRole {
    admin = 'admin',
    editor = 'editor',
    guest = 'guest',
}

export class User {
    id: number = 0;
    firstname: string = '';
    lastname: string = '';
    emailAdress: string = '';
    role: UserRole = UserRole.guest;

    constructor(firstname = '', lastname = '', emailadress = '') {
        this.firstname = firstname;
        this.lastname = lastname;
        this.emailAdress = emailadress;
    }
}