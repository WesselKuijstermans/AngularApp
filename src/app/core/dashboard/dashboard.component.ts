import { Component, OnInit } from '@angular/core'
import { User } from 'src/app/user/user.model'
import { UserService } from 'src/app/user/user.service'
import { environment } from '../../../environments/environment'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  runningMode: string = ''
  apiUrl: string = ''
  version: string = ''
  userList: User[] = []

  constructor(private userservice: UserService) {

  }
  ngOnInit() {  
    this.runningMode = environment.production ? 'production' : 'development'
    this.apiUrl = environment.apiUrl
    this.version = environment.version
    this.userList = this.userservice.GetUsers();
  }
}
