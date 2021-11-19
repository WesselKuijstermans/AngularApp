import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../user/user.model';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.css']
})
export class UserdetailComponent implements OnInit {

  param: string | null;
  user: User = new User;

  constructor(private route: ActivatedRoute, private userservice: UserService) {
    this.param = this.route.snapshot.paramMap.get('id');
    let id = Number(this.param);
    this.user = this.userservice.GetUserById(id);
   }

  ngOnInit(): void {
  }

}
