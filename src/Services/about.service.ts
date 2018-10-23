import {Injectable} from '@angular/core';
@Injectable()
export class AboutService {
  info = {
    nom: 'sana',
    email: 'sana@example.com',
    tel: 12345678
  };
  comments = [
    {date: new Date(), message: 'A'},
    {date: new Date(), message: 'B'},
    {date: new Date(), message: 'C'}
  ];
  AddComment(c) {
    c.date = new Date();
    this.comments.push(c);
  }
  getAllComments() {
    return this.comments;
  }
  getInfos() {
    return this.info;
  }
}
