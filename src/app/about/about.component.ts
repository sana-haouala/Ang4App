import { Component, OnInit } from '@angular/core';
import {AboutService} from '../../Services/about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  info: {nom: string, email: string, tel: Number};
  comments = [];
  commentaire = {date: null, message: ''};
  constructor(private aboutService: AboutService) {
    this.info = this.aboutService.getInfos();
    this.comments = this.aboutService.getAllComments();
  }

  ngOnInit() {
  }
  onAddCommentaire(c) {
    this.aboutService.AddComment(c);
    this.commentaire.message = '';
    this.aboutService.getAllComments();
  }

}
