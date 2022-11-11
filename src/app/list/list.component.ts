import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
})
export class ListComponent implements OnInit {

  @ViewChild("listComponent", { read: ViewContainerRef })
  list!: ViewContainerRef;
  constructor() { }

  ngOnInit(): void {
  }

  async loadAdmin() {
    const { AdminListComponent } = await import("./admin-list/admin-list.component")
    this.list.clear();
    this.list.createComponent(AdminListComponent);
  }

  async loadUser() {
    const { UserListComponent } = await import("./user-list/user-list.component")
    this.list.clear();
    this.list.createComponent(UserListComponent);
  }

}
