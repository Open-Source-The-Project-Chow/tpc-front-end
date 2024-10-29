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
    this.username = profile.username || '';
    this.name = profile.name || '';
    this.surname = profile.surname || '';
    this.email = profile.email || '';
    this.dni = profile.dni || '';
    this.items = profile.items || 0;
    this.status = profile.status || '';
    this.status_date = profile.status_date || new Date();
    this.registration_date = profile.registration_date || new Date();
    this.image = profile.image || '';
  }
}
