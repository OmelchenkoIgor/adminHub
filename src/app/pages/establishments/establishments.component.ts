import { Component } from '@angular/core';
import {EstablishmentsFormComponent} from '../../widgets/establishments-form/establishments-form.component';
import {EstablishmentsTableComponent} from '../../widgets/establishments-table/establishments-table.component';

@Component({
  selector: 'app-establishments',
  standalone: true,
  imports: [
    EstablishmentsFormComponent,
    EstablishmentsTableComponent
  ],
  templateUrl: './establishments.component.html',
  styleUrl: './establishments.component.scss'
})
export default class EstablishmentsComponent {

}
