import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private baseUrl = 'https://test-server-lovat.vercel.app/api/uploadNews';

  private http: HttpClient = inject(HttpClient);


  uploadNews(name: string, title: string, description: string, info: string, date: string, link: string, images: File[]): Observable<any> {
    const formData: FormData = new FormData();

    formData.append('name', name);
    formData.append('title', title);
    formData.append('description', description);
    formData.append('info', info);
    formData.append('date', date);
    formData.append('link', link);

    Array.from(images).forEach((image, index) => {
      formData.append('images', image, image.name);
    });

    const headers = new HttpHeaders({
      // 'Content-Type': 'multipart/form-data' // Note: HttpClient will set the correct headers automatically
    });

    return this.http.post(this.baseUrl, formData, { headers });
  }

}
