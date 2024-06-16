import { Component } from '@angular/core';
import {SharedTableComponent} from '../../widgets/shared-table/shared-table.component';
import {SharedFormComponent} from '../../widgets/shared-form/shared-form.component';

@Component({
  selector: 'app-shares',
  standalone: true,
  imports: [
    SharedTableComponent,
    SharedFormComponent
  ],
  templateUrl: './shares.component.html',
  styleUrl: './shares.component.scss'
})
export default class SharesComponent {

}
