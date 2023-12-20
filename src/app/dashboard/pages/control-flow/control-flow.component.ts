import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { TitleComponent } from '@shared/components/title/title.component';

type Grade = 'A' | 'B' | 'F';

@Component({
  standalone: true,
  imports: [
    CommonModule,


    TitleComponent,
  ],
  templateUrl: './control-flow.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ControlFlowComponent {

  public showContent = signal(false);
  public grade= signal<Grade>('F');
  public frameworks = signal<string[]>(['Angular', 'React', 'Vue', 'Qwik', 'Svelte']);

  public toggleContent(): void {
    this.showContent.update((value) => !value);
  }

 }
