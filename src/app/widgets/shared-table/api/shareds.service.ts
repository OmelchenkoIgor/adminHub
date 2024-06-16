import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SharedsService {
  private baseUrl = 'https://test-server-lovat.vercel.app/api';

  private http: HttpClient = inject(HttpClient);

  getAllShareds() {
    return this.http.get(this.baseUrl + '/news');
  }

  deleteShareds(id: string) {
    return this.http.delete(this.baseUrl + '/delete/news/' + id)
  }
}
