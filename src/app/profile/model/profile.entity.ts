export class Profile {
  id: number;
  username: string;
  name: string;
  surname: string;
  email: string;
  dni: string;
  items: number;
  status: string;
  status_date: Date;
  registration_date: Date;
  image: string

  constructor(profile:{id?: number, username?: string, name?: string, surname?: string, email?: string, dni?: string, items?: number, status?: string, status_date?: Date, registration_date?: Date, image?:string} = {}) {
    this.id = profile.id || 0;
    this.username = profile.username || 'Blank';
    this.name = profile.name || 'Blank';
    this.surname = profile.surname || 'Blank';
    this.email = profile.email || 'Blank';
    this.dni = profile.dni || 'XXXXXXXX';
    this.items = profile.items || 0;
    this.status = profile.status || 'Free';
    this.status_date = profile.status_date || new Date();
    this.registration_date = profile.registration_date || new Date();
    this.image = profile.image || '../../../../public/favicon.ico';
  }
}
