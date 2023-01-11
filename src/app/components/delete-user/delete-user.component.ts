import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.scss']
})
export class DeleteUserComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }
  @Input() user: any;
  @Output() delete: EventEmitter<any> = new  EventEmitter<any>();

  ngOnInit(): void {
  }

  onDelete(){
    this.delete.emit(this.user);
    this.activeModal.close();
  }

}
