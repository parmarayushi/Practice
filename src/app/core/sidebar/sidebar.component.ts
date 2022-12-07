import { Component, OnInit } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {

  public user!: any;
  constructor(private oAuthService: OAuthService, private authService: AuthService) {
    authService.userProfile.subscribe((res) => this.user = res)
  }

  ngOnInit(): void {
  }

  public logOut() {
    this.authService.signOut();
  }
}
