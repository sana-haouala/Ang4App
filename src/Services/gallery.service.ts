import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable()
export class GalleryService {
  constructor(private httpClient: HttpClient) {

  }
  onSearch(motCle: string, size: number, page: number) {
     return this.httpClient.get('https://pixabay.com/api/?key=7931994-c96128d8cc01024bf352a2cb1&q='
      + motCle + '&per_page=' + size + '&page=' + page)
      .map(resp => JSON.parse(JSON.stringify(resp)));
  }
}
