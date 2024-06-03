import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HandbookService {
  private baseUrl = 'https://test-server-lovat.vercel.app/api';

  private http: HttpClient = inject(HttpClient);

  getAllHandbook() {
    return this.http.get(this.baseUrl + '/handbook');
  }

  deleteHandbook(id: string) {
    return this.http.delete(this.baseUrl + '/delete/handbook/' + id);
  }
}
