import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  private baseUrl = 'https://test-server-lovat.vercel.app/api/uploadEstablishments';

  private http: HttpClient = inject(HttpClient);

  uploadEstablishment(title: string, type: string, locations: string, suggestions: any[], images: File[]): Observable<any> {
    const formData: FormData = new FormData();

    formData.append('title', title);
    formData.append('type', type);
    formData.append('locations', locations);
    formData.append('suggestions', JSON.stringify(suggestions));

    Array.from(images).forEach((image, index) => {
      formData.append('images', image, image.name);
    });

    const headers = new HttpHeaders({
      // 'Content-Type': 'multipart/form-data' // Note: HttpClient will set the correct headers automatically
    });

    return this.http.post(this.baseUrl, formData, { headers });
  }

  // title: title
  // type: type
  // locations: location
  // suggestions: [{"name":"Нігірі з тунцем акамі","price":"290","volume":"30г"},{"name":"Сашимі з тунця акамі","price":"820","volume":"80г"},{"name":"Футомакі з тунцем bluefin","price":"880","volume":"140г"}]
  // images: (binary)
}
