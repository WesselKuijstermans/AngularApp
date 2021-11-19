import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user/user.service';
import { User } from '../user/user.model';
import { ReactiveFormsModule, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  param: string | null;
  user: User = new User;
  formdata!: FormGroup;

  constructor(private route: ActivatedRoute, private userservice: UserService) {
    this.param = this.route.snapshot.paramMap.get('id');
    let id = Number(this.param);
    this.user = this.userservice.GetUserById(id);
    if (this.user != undefined) {
      this.formdata = new FormGroup({
      firstname: new FormControl(this.user.firstname),
      lastname: new FormControl(this.user.lastname),
      emailAdress: new FormControl(this.user.emailAdress),
      role: new FormControl(this.user.role),
      id: new FormControl(this.user.id)
     });
    } else {
      this.formdata = new FormGroup({
        firstname: new FormControl(""),
        lastname: new FormControl(""),
        emailAdress: new FormControl(""),
        role: new FormControl(""),
        id: new FormControl(0)
       });
    }
   }

  ngOnInit(): void {
     
  }

  onClickSubmit(): void {
    console.log(this.formdata.value)
    if(this.formdata.value === undefined) {return}
    if (this.formdata.controls['id'].value == 0) {
      this.userservice.AddUser(this.formdata.value);
    } else {
      this.userservice.UpdateUser(this.formdata.value);
    }
  }
}
