import {Component, inject, OnInit} from '@angular/core';
import {NgForOf} from '@angular/common';
import {NzButtonComponent} from 'ng-zorro-antd/button';
import {NzColDirective} from 'ng-zorro-antd/grid';
import {NzFormControlComponent, NzFormDirective, NzFormItemComponent, NzFormLabelComponent} from 'ng-zorro-antd/form';
import {NzIconDirective} from 'ng-zorro-antd/icon';
import {NzInputDirective, NzInputGroupComponent} from 'ng-zorro-antd/input';
import {NzOptionComponent, NzSelectComponent} from 'ng-zorro-antd/select';
import {NzUploadComponent} from 'ng-zorro-antd/upload';
import {FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {UploadService} from './api/upload.service';

@Component({
  selector: 'app-handbook-form',
  standalone: true,
  imports: [
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
  templateUrl: './handbook-form.component.html',
  styleUrl: './handbook-form.component.scss'
})
export class HandbookFormComponent implements OnInit {
  private uploadService: UploadService = inject(UploadService);
  private fb: FormBuilder = inject(FormBuilder);

  handbookForm: FormGroup;

  ngOnInit(): void {
    this.handbookForm = this.fb.group({
      title: ['', Validators.required],
      phone_number: ['', Validators.required],
      email: ['', Validators.required],
      schedule: ['', Validators.required],
      addresses: this.fb.array([this.createAddresses()])
    });
  }

  createAddresses(): FormControl {
    return this.fb.control('', Validators.required);
  }

  addAddresses() {
    this.allAddresses().push(this.createAddresses());
  }

  removeAddresses(index: number) {
    this.allAddresses().removeAt(index);
  }

  allAddresses(): FormArray {
    return this.handbookForm.get('addresses') as FormArray;
  }

  upload() {
    if (this.handbookForm.valid) {
      console.log(this.handbookForm.value);
      this.uploadService.uploadHandbook(this.handbookForm.value).subscribe({
        next: (response) => {
          console.log('Успішно завантажено', response);
        },
        error: (error) => {
          console.error('Помилка завантаження', error);
        }
      });
    } else {
      console.log('Form is invalid');
    }
  }
}
