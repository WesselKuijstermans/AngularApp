import { Injectable } from "@angular/core";
import { User, UserRole} from "./user.model";

@Injectable ({
    providedIn: 'root'
})

export class UserService {
    readonly users: User[] = [
        {
            id: 1,
            firstname: "Wessel",
            lastname: "Kuijstermans",
            emailAdress: "w.kuijstermans@student.avans.nl",
            role: UserRole.admin
        },
        {
            id: 2,
            firstname: "Tim",
            lastname: "de Laater",
            emailAdress: "t.delaater@student.avans.nl",
            role: UserRole.guest
        },
        {
            id: 3,
            firstname: "Luuk",
            lastname: "Bartels",
            emailAdress: "l.bartels@student.avans.nl",
            role: UserRole.guest
        },
        {
            id: 4,
            firstname: "Noah",
            lastname: "de Keijzer",
            emailAdress: "n.dekeijzer@student.avans.nl",
            role: UserRole.guest
        },
        {
            id: 5,
            firstname: "Wouter",
            lastname: "Zegers",
            emailAdress: "w.zegers@student.avans.nl",
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

    AddUser(user: User): void {
        user.id = this.users.length + 1;
        this.users.push(user);
    }

    UpdateUser(user : User): void{
        let index = 0
        this.users.forEach(element => {
            if (element.id == user.id) {
                this.users[index] = user
            }
            index ++
        })
    }

    public DeleteUser(id: number): void {
        let index = 0
        this.users.forEach(element => {
            if (element.id == id) {
                this.users.splice(index, 1)
            }
            index ++
        });
    }
}