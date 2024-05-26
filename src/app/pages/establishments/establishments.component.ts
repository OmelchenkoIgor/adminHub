import { Component } from '@angular/core';
import {EstablishmentsFormComponent} from '../../widgets/establishments-form/establishments-form.component';

@Component({
  selector: 'app-establishments',
  standalone: true,
  imports: [
    EstablishmentsFormComponent
  ],
  templateUrl: './establishments.component.html',
  styleUrl: './establishments.component.scss'
})
export default class EstablishmentsComponent {

}
