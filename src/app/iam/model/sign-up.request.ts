export class SignUpRequest {
  public email: string;
  public password: string;
  public firstName: string;
  public lastName: string;
  public phoneNumber: string;

  constructor(email: string, password: string, firstName: string, lastName: string, phoneNumber: string) {
    this.email = email;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
  }
}
