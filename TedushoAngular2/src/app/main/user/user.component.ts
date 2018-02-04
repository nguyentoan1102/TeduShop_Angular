import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core/src/metadata/di';
import { ModalDirective } from 'ngx-bootstrap/modal/modal.directive';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @ViewChild('modalAddEdit') public modalAddEdit: ModalDirective;
  public pageIndex: number = 1;
  public pageSize: number = 10;
  public pageDisplay: number = 10;
  public totalRow: number =
    constructor() { }
ngOnInit() {
}
}