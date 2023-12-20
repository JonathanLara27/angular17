import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-heavy-loader-fast',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
  <section [ngClass]="['w-full',cssClas]">

  <ng-content/>

  </section>
  `,
})
export class HeavyLoaderFastComponent {

  @Input({required: true}) cssClas!: string;

  constructor(){
    console.log('HeavyLoaderFastComponent created');
  }

 }
