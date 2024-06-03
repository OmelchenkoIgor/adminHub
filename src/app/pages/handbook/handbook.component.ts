import {ChangeDetectionStrategy, Component} from '@angular/core';
import {HandbookFormComponent} from '../../widgets/handbook-form/handbook-form.component';
import {HandbookTableComponent} from '../../widgets/handbook-table/handbook-table.component';

@Component({
  selector: 'app-handbook',
  standalone: true,
  imports: [
    HandbookFormComponent,
    HandbookTableComponent
  ],
  templateUrl: './handbook.component.html',
  styleUrl: './handbook.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class HandbookComponent {

}
