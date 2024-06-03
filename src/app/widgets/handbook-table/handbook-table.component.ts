import {Component, inject, OnInit, signal, WritableSignal} from '@angular/core';
import {NzPopconfirmDirective} from 'ng-zorro-antd/popconfirm';
import {
    NzTableCellDirective,
    NzTableComponent,
    NzTbodyComponent,
    NzTheadComponent,
    NzThMeasureDirective, NzTrDirective
} from 'ng-zorro-antd/table';
import {HandbookService} from './api/handbook.service';

@Component({
  selector: 'app-handbook-table',
  standalone: true,
    imports: [
        NzPopconfirmDirective,
        NzTableCellDirective,
        NzTableComponent,
        NzTbodyComponent,
        NzThMeasureDirective,
        NzTheadComponent,
        NzTrDirective
    ],
  templateUrl: './handbook-table.component.html',
  styleUrl: './handbook-table.component.scss'
})
export class HandbookTableComponent implements OnInit {
  private handbookService: HandbookService = inject(HandbookService);

  listHandbooks: WritableSignal<any> = signal(null);

  ngOnInit() {
    this.allListHandbook();
  }

  allListHandbook() {
    this.handbookService.getAllHandbook().subscribe({
      next: response => {
        this.listHandbooks.set(response);
        console.log(response);
      }
    })
  }

  deleteHandbook(id: string) {
    this.handbookService.deleteHandbook(id).subscribe({
      next: response => {
        console.log(response);
        this.allListHandbook();
      }
    })
  }
}
