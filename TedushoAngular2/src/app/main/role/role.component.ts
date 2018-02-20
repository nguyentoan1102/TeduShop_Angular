
import { MessageContstants } from './../../Core/common/message.constants';
import { NotificationService } from './../../Core/services/notification.service';
import { DataService } from 'app/Core/services/data.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css'],
})
export class RoleComponent implements OnInit {
  // tslint:disable-next-line:no-inferrable-types
  @ViewChild('modalAddEdit') public modalAddEdit: ModalDirective;
  public pageIndex: number = 1;
  public pageSize: number = 1;
  public pageDisplay: number = 10;
  public totalRow: number;
  public filter: string = '';
  public roles: any[];
  public entity: any;
  constructor(private _dataService: DataService, private _notificationService: NotificationService) { }
  ngOnInit() {
    this.loadData();
  }
  loadData() {
    this._dataService.get('/api/appRole/getlistpaging?page=' + this.pageIndex + '&pageSize=' + this.pageSize + '&filter=' + this.filter)
      .subscribe((response: any) => {
        this.roles = response.Items;
        this.pageIndex = response.PageIndex;
        this.pageSize = response.PageSize;
        this.totalRow = response.TotalRows;
      });
  }
  loadRole(id: any): any {
    this._dataService.get('/api/appRole/detail/' + id)
      .subscribe((response: any) => { this.entity = response; console.log(response); });
  }
  pageChanged(event: any) {
    this.pageIndex = event.page;
    this.loadData();
  }
  showAddModal() {
    this.entity = {};
    this.modalAddEdit.show();
  }
  showEditModal(id: any) {
    this.loadRole(id);
    this.modalAddEdit.show();
  }
  deleteItem(Id: any) {
    this._notificationService.printConfirmationDialog(MessageContstants.CONFIRM_DELETE_MSG, () => this.deleteItemConfirm(Id));
  }
  deleteItemConfirm(Id: any) {
    this._dataService.delete('/api/appRole/delete', 'id', Id).subscribe((response: Response) => {
      this._notificationService.printSuccessMessage(MessageContstants.DELETED_OK_MSG);
      this.loadData();
    });
  }
  saveChange(valid: boolean) {
    if (valid) {
      if (this.entity.Id === undefined) {
        this._dataService.post('/api/appRole/add', JSON.stringify(this.entity))
          .subscribe((response: any) => {
            this.loadData();
            this.modalAddEdit.hide();
            this._notificationService.printSuccessMessage(MessageContstants.CREATED_OK_MSG);
          }, error => this._dataService.handleError(error));
      } else {
        this._dataService.put('/api/appRole/update', JSON.stringify(this.entity))
          .subscribe((response: any) => {
            this.loadData();
            this.modalAddEdit.hide();
            this._notificationService.printSuccessMessage(MessageContstants.UPDATED_OK_MSG);
          }, error => this._dataService.handleError(error));
      }
    }
  }
}