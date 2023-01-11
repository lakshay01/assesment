import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }
  @Input() user: any;
  @Output() update: EventEmitter<any> = new  EventEmitter<any>();

  ngOnInit(): void {
  }

  updateUser(){
    this.update.emit(this.user);
    this.activeModal.close();
  }

}
