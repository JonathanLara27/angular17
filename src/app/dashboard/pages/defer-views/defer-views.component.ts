import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeavyLoaderSlowComponent } from '@shared/components/heavy-loaders/heavy-loaders-slow.component';
import { TitleComponent } from '@shared/components/title/title.component';

@Component({
  standalone: true,
  imports: [
    CommonModule,

    TitleComponent,
    HeavyLoaderSlowComponent,
  ],
  templateUrl: './defer-views.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DeferViewsComponent { }
