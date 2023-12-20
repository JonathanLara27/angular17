import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeavyLoaderFastComponent } from '@shared/components/heavy-loaders/heavy-loaders-fast.component';
import { TitleComponent } from '@shared/components/title/title.component';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    HeavyLoaderFastComponent,
    TitleComponent,
  ],
  templateUrl: './defer-options.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DeferOptionsComponent { }
