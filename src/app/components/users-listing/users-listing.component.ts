import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../users.service';
import { DeleteUserComponent } from '../delete-user/delete-user.component';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UpdateUserComponent } from '../update-user/update-user.component';

@Component({
  selector: 'app-users-listing',
  templateUrl: './users-listing.component.html',
  styleUrls: ['./users-listing.component.scss']
})
export class UsersListingComponent implements OnInit {

  constructor(private usersService: UsersService, private modalService: NgbModal) { }
  userList!: any;
  p = 1;
  name: string = "";

  ngOnInit(): void {
    this.getUsers();
  }

  search() {
    this.usersService.filterUsers(this.name).subscribe((res: any) => {
      this.userList = res['users'];
    }, (error) => {

    });
  }

  getUsers(){
    this.usersService.getUsersList().subscribe((res: any) => {
      this.userList = res['users'];
    }, (error) => {

    });
  }

  updateUser(user:any){
    const modalRef = this.modalService.open(UpdateUserComponent);
    modalRef.componentInstance.user = user;

    modalRef.componentInstance.update.subscribe((res:any)=>{
      this.usersService.updateUser(user).subscribe((res: any) => {
        this.userList = this.userList.map((e:any) => {
          if(e.id === user.id){
            e.phone = user.phone;
            e.email - user.email;
          }
          return e;
        })
      }, (error) => {

      });
    })
  }

  deleteUser(user:any){
    const modalRef = this.modalService.open(DeleteUserComponent);
    modalRef.componentInstance.user = user;
    modalRef.componentInstance.delete.subscribe((res:any)=>{
      this.usersService.deleteUser(user).subscribe((res: any) => {
        this.userList = this.userList.filter((e:any) => e.id !== user.id)
      }, (error) => {

      });
    })
  }

}
