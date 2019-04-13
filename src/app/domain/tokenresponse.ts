export class TokenResponse {
  username: string;
  accessToken: string;
  tokenType: string;
  authorities: string[];

  constructor(username: string, accessToken: string, tokenType: string, authorities: string[] ) {
    this.username = username;
    this.accessToken = accessToken;
    this.tokenType = tokenType;
    this.authorities = authorities;
  }

}
