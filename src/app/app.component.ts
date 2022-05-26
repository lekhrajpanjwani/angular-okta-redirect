import { Component } from '@angular/core';
import { OAuthService, AuthConfig} from 'angular-oauth2-oidc'

export const authConfig: AuthConfig = {
  issuer:'https://trial-8585127.okta.com/oauth2/default',
  redirectUri: window.location.origin,
  clientId: '0oa15tq4dhGbJUlgO697'
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-okta-example';
  
  constructor(private oAuthService: OAuthService){
    this.oAuthService.configure(authConfig);
    this.oAuthService.loadDiscoveryDocumentAndTryLogin();
  }

  login(){
    this.oAuthService.initImplicitFlow();
  }
  
  logout(){
    this.oAuthService.logOut();
  }

  getUserName(){
    const claims: any = this.oAuthService.getIdentityClaims();
    // console.log(claims);
    if(!claims){
      return null
    }
    return claims['name']
  }
}
