import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {

  public user: any;
  constructor(private authService: AuthService) {
    this.authService.userProfile.subscribe((res) => this.user = res)
  }

  ngOnInit(): void {
  }

  public logOut() {
    this.authService.signOut();
  }
}
