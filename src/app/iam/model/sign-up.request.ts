export class SignUpRequest {
  public firstName: string;
  public lastName: string;
  public email: string;
  public phone: string;
  public image: string;
  public username: string;
  public password: string;
  public roles: string[];

  constructor(firstName: string, lastName: string, email: string, phone: string, image: string, username: string, password: string, roles: string[]) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.phone = phone;
    this.image = image;
    this.username = username;
    this.password = password;
    this.roles = roles;
  }
}
