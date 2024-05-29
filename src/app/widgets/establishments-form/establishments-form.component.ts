import {Component, inject, OnInit} from '@angular/core';
import {NzFormControlComponent, NzFormDirective, NzFormItemComponent, NzFormLabelComponent} from 'ng-zorro-antd/form';
import {FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {NzInputDirective, NzInputGroupComponent} from 'ng-zorro-antd/input';
import {NzColDirective} from 'ng-zorro-antd/grid';
import {NzButtonComponent} from 'ng-zorro-antd/button';
import {NzUploadChangeParam, NzUploadComponent} from 'ng-zorro-antd/upload';
import {NzIconDirective} from 'ng-zorro-antd/icon';
import {CommonModule} from '@angular/common';
import {UploadService} from './api/upload.service';
import {NzOptionComponent, NzSelectComponent} from 'ng-zorro-antd/select';

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
    FormsModule,
    NzSelectComponent,
    NzOptionComponent
  ],
  templateUrl: './establishments-form.component.html',
  styleUrl: './establishments-form.component.scss'
})
export class EstablishmentsFormComponent implements OnInit {
  private uploadService: UploadService = inject(UploadService);
  private fb: FormBuilder = inject(FormBuilder);

  establishmentForm: FormGroup;
  images: File[] = [];

  ngOnInit(): void {
    this.establishmentForm = this.fb.group({
      title: ['', Validators.required],
      type: ['', Validators.required],
      locations: ['', Validators.required],
      suggestions: this.fb.array([this.createSuggestion()])
    });
  }

  suggestions(): FormArray {
    return this.establishmentForm.get('suggestions') as FormArray;
  }

  createSuggestion(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
      volume: ['', Validators.required]
    });
  }

  addSuggestion(): void {
    this.suggestions().push(this.createSuggestion());
  }

  removeSuggestion(index: number): void {
    this.suggestions().removeAt(index);
  }

  handleChange(info: NzUploadChangeParam): void {
    if (info.file.status === 'done' || info.file.status === 'uploading') {
      this.images = info.fileList.map(file => file.originFileObj as File);
    }
  }

  upload(): void {
    if (this.establishmentForm.valid && this.images.length > 0) {
      const formData = this.establishmentForm.value;
      this.uploadService.uploadEstablishment(
        formData.title,
        formData.type,
        formData.locations,
        formData.suggestions,
        this.images
      ).subscribe(
        response => {
          console.log('Upload successful:', response);
          window.location.reload(); // виправити!!!
        },
        error => {
          console.error('Error uploading:', error);
        }
      );
    }
  }
}
