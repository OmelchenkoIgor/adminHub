import {Component, inject, OnInit, output, OutputEmitterRef} from '@angular/core';
import {NzFormControlComponent, NzFormDirective, NzFormItemComponent, NzFormLabelComponent} from 'ng-zorro-antd/form';
import {FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {NzInputDirective, NzInputGroupComponent} from 'ng-zorro-antd/input';
import {NzColDirective} from 'ng-zorro-antd/grid';
import {NzButtonComponent} from 'ng-zorro-antd/button';
import {NzUploadComponent} from 'ng-zorro-antd/upload';
import {NzIconDirective} from 'ng-zorro-antd/icon';
import {CommonModule} from '@angular/common';
import {UploadService} from './api/upload.service';

@Component({
  selector: 'app-establishments-form',
  standalone: true,
  imports: [
    NzFormDirective,
    NzFormItemComponent,
    NzFormControlComponent,
    NzFormLabelComponent,
    NzInputDirective,
    ReactiveFormsModule,
    NzColDirective,
    NzInputGroupComponent,
    NzButtonComponent,
    NzUploadComponent,
    NzIconDirective,
    CommonModule,
    FormsModule
  ],
  templateUrl: './establishments-form.component.html',
  styleUrl: './establishments-form.component.scss'
})
export class EstablishmentsFormComponent {
  private uploadService: UploadService = inject(UploadService);

  title: string = '';
  type: string = '';
  locations: string = '';
  suggestions: any[] = [];
  images: File[] = [];

  onFileSelected(event: any) {
    this.images = event.target.files;
  }

  upload() {
    const suggestionsArray = JSON.parse(this.suggestions as unknown as string);
    this.uploadService.uploadEstablishment(this.title, this.type, this.locations, suggestionsArray, this.images)
      .subscribe(response => {
        console.log('Upload successful:', response);
      }, error => {
        console.error('Error uploading:', error);
      });
  }

}
