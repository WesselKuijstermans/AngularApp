import { Injectable } from "@angular/core";
import { User, UserRole} from "./user.model";

@Injectable ({
    providedIn: 'root'
})

export class UserService {
    readonly users: User[] = [
        {
            id: 0,
            firstname: "Wessel",
            lastname: "Kuijstermans",
            emailAdress: "w.kuijstermans@student.avans.nl",
            role: UserRole.admin
        },
        {
            id: 1,
            firstname: "Tim",
            lastname: "de Laater",
            emailAdress: "t.delaater@student.avans.nl",
            role: UserRole.aparteJongen
        },
        {
            id: 2,
            firstname: "Luuk",
            lastname: "Bartels",
            emailAdress: "l.bartels@student.avans.nl",
            role: UserRole.guest
        }
    ];

    constructor() {
        console.log("service constructor aangeroepen");
    }

    GetUsers(): User[] {
        return this.users;
    }

    GetUserById(id: number): User {
        return this.users.filter((user) => user.id === id)[0];
    }
}