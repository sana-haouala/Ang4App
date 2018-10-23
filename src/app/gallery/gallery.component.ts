import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
import {tryParse} from 'selenium-webdriver/http';
import {GalleryService} from '../../Services/gallery.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  pagePhotos: any;
  currentPage: number;
  size = 5;
  totalPages: number;
  motCle = '';
  pages: Array <number> = [];
  constructor(private galleryService: GalleryService) { }

  ngOnInit() {
  }
  onSearch(dataForm) {
    this.galleryService.onSearch(dataForm.motCle, this.size, this.currentPage)
      .subscribe(data => {
      this.pagePhotos = data;
      this.totalPages = Math.floor(data.totalHits / this.size) ;
      console.log(this.totalPages);
      if (data.totalHits % this.size > 0) { ++this.totalPages; }
      this.pages = new Array(this.totalPages);
    }, err => {
        console.log(err);
      }
    );
  }
  goTopage(i) {
   this.currentPage = i + 1;
   this.onSearch({motCle: this.motCle});
    console.log(i);
  }
}
