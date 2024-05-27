import {ChangeDetectionStrategy, Component, inject, OnInit, signal, WritableSignal} from '@angular/core';
import {NzTableComponent} from 'ng-zorro-antd/table';
import {NzDividerComponent} from 'ng-zorro-antd/divider';
import { NzTableModule } from 'ng-zorro-antd/table';
import {EstablishmentsService} from './api/establishments.service';
import {NzPopconfirmDirective} from 'ng-zorro-antd/popconfirm';

@Component({
  selector: 'app-establishments-table',
  standalone: true,
  imports: [
    NzTableComponent,
    NzDividerComponent,
    NzTableModule,
    NzPopconfirmDirective
  ],
  templateUrl: './establishments-table.component.html',
  styleUrl: './establishments-table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EstablishmentsTableComponent implements OnInit {
  private establishmentsService: EstablishmentsService = inject(EstablishmentsService);

  listEstablishments: WritableSignal<any> = signal(null);

  ngOnInit() {
    this.allEstablishments();
  }

  allEstablishments() {
    this.establishmentsService.getAllEstablishments().subscribe({
      next: response => {
        this.listEstablishments.set(response);
        console.log(response);
      }
    })
  }

  deleteEstablishment(id: string) {
    this.establishmentsService.deleteEstablishment(id).subscribe({
      next: response => {
        console.log(response);
        this.allEstablishments();
      }
    })
  }
}
