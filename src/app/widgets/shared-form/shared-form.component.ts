import {ChangeDetectionStrategy, Component, inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {NgForOf} from '@angular/common';
import {NzButtonComponent} from 'ng-zorro-antd/button';
import {NzColDirective} from 'ng-zorro-antd/grid';
import {NzFormControlComponent, NzFormDirective, NzFormItemComponent, NzFormLabelComponent} from 'ng-zorro-antd/form';
import {NzIconDirective} from 'ng-zorro-antd/icon';
import {NzInputDirective, NzInputGroupComponent} from 'ng-zorro-antd/input';
import {NzOptionComponent, NzSelectComponent} from 'ng-zorro-antd/select';
import {NzUploadChangeParam, NzUploadComponent} from 'ng-zorro-antd/upload';
import {SharedService} from './api/shared.service';

@Component({
  selector: 'app-shared-form',
  standalone: true,
    imports: [
        FormsModule,
        NgForOf,
        NzButtonComponent,
        NzColDirective,
        NzFormControlComponent,
        NzFormDirective,
        NzFormItemComponent,
        NzFormLabelComponent,
        NzIconDirective,
        NzInputDirective,
        NzInputGroupComponent,
        NzOptionComponent,
        NzSelectComponent,
        NzUploadComponent,
        ReactiveFormsModule
    ],
  templateUrl: './shared-form.component.html',
  styleUrl: './shared-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SharedFormComponent implements OnInit {
  private sharedService: SharedService = inject(SharedService);
  private fb: FormBuilder = inject(FormBuilder);

  sharedForm: FormGroup;
  images: File[] = [];

  ngOnInit() {
    this.sharedForm = this.fb.group({
      name: ['', Validators.required],
      title: ['', Validators.required],
      description: ['', Validators.required],
      info: ['', Validators.required],
      date: ['', Validators.required],
      link: ['', Validators.required],
    });
  }

  handleChange(info: NzUploadChangeParam): void {
    if (info.file.status === 'done' || info.file.status === 'uploading') {
      this.images = info.fileList.map(file => file.originFileObj as File);
    }
  }

  upload(): void {
    if (this.sharedForm.valid && this.images.length > 0) {
      const formData = this.sharedForm.value;
      this.sharedService.uploadNews(
        formData.name,
        formData.title,
        formData.description,
        formData.info,
        formData.date,
        formData.link,
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
