import {concat} from "rxjs";

export class Profile {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  image: string
  createdAt: Date;
  updatedAt: Date;


  constructor(profile:{id?: number, firstName?: string, lastName?: string, email?: string, phone?: string, image?: string, createdAt?: string, updatedAt?: string} = {}) {
    this.id = profile.id || 1;
    this.firstName = profile.firstName || 'Blank';
    this.lastName = profile.lastName || 'Blank';
    this.email = profile.email || 'Blank';
    this.phone = profile.phone || 'XXXXXXXX';
    this.image = profile.image || '../../../../public/favicon.ico';
    this.createdAt = new Date();
    this.updatedAt = new Date();

  }

  /*constructor(){
    this.id = 0;
    this.username = 'Blank';
    this.firstName = 'Blank';
    this.lastName = 'Blank';
    this.email = 'Blank';
    this.phone = 'XXXXXXXX';
    this.image = '../../../../public/favicon.ico';
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }*/
}
