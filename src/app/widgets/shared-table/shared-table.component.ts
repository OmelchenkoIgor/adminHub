import {ChangeDetectionStrategy, Component, inject, OnInit, signal, WritableSignal} from '@angular/core';
import {SharedsService} from './api/shareds.service';
import {NzPopconfirmDirective} from 'ng-zorro-antd/popconfirm';
import {
  NzTableCellDirective,
  NzTableComponent,
  NzTbodyComponent,
  NzTheadComponent,
  NzThMeasureDirective, NzTrDirective
} from 'ng-zorro-antd/table';

@Component({
  selector: 'app-shared-table',
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
  templateUrl: './shared-table.component.html',
  styleUrl: './shared-table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SharedTableComponent implements OnInit{
  private sharedsService: SharedsService = inject(SharedsService);

  listShareds: WritableSignal<any> = signal(null);

  ngOnInit() {
    this.getAllShareds();
  }

  getAllShareds() {
    this.sharedsService.getAllShareds().subscribe({
      next: response => {
        this.listShareds.set(response);
        console.log(response);
      }
    })
  }

  deleteShareds(id: string) {
    this.sharedsService.deleteShareds(id).subscribe({
      next: response => {
        console.log(response);
        this.getAllShareds();
      }
    })
  }
}
