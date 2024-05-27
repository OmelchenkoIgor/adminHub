import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EstablishmentsService {
  private baseUrl = 'https://test-server-lovat.vercel.app/api';

  private http: HttpClient = inject(HttpClient);

  getAllEstablishments() {
    return this.http.get(this.baseUrl + '/type/all');
  }

  deleteEstablishment(id: string) {
    return this.http.delete(this.baseUrl + '/delete/' + id);
  }
}
