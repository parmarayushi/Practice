import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthConfig, OAuthService } from 'angular-oauth2-oidc';
import { Subject } from 'rxjs/internal/Subject';

const oAuthConfig: AuthConfig = {
  issuer: 'https://accounts.google.com',
  strictDiscoveryDocumentValidation: false,
  redirectUri: window.location.origin,
  clientId: '32012338975-tkdmifmg3dg1r0kjkod6f696uuf92mat.apps.googleusercontent.com',
  scope: 'openid profile email'
}

@Injectable()
export class AuthService {

  public userProfile: Subject<any>;

  constructor(private readonly oAuthService: OAuthService) {
    this.userProfile = new Subject();

    this.configure();
  }

  public configure(){
    this.oAuthService.configure(oAuthConfig)
    this.oAuthService.logoutUrl = "https://www.google.com/accounts/Logout?continue=https://appengine.google.com/_ah/logout?continue=http://localhost:4200";
    this.oAuthService.loadDiscoveryDocument().then(() => {
      this.oAuthService.tryLoginImplicitFlow().then(() => {
        if (!this.oAuthService.hasValidAccessToken()) {
          this.oAuthService.initLoginFlow()
        } else {
          this.oAuthService.loadUserProfile().then((user) => {
            this.userProfile.next(user);
          })
        }
      })
    })
  }

  public isLoggedIn():boolean{
    return this.oAuthService.hasValidAccessToken();
  }

  public signOut(){
    this.oAuthService.logOut();
  }

  private authHeader() : HttpHeaders {
    return new HttpHeaders ({
      'Authorization': `Bearer ${this.oAuthService.getAccessToken()}`
    })
  }
}
