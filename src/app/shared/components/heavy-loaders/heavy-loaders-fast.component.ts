import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-heavy-loader-fast',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<h1>Hola mundo</h1>`,
})
export class HeavyLoaderFastComponent { }
