import { Component, OnInit } from '@angular/core';
import { User } from './user.model';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userList: User[] = []
  
  constructor(private userservice: UserService) { }

  ngOnInit(): void {
    this.userList = this.userservice.GetUsers();
  }

  DeleteUser(id: number): void{ 
      this.userservice.DeleteUser(id)
  }

}
