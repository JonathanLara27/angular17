import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SideMenuComponent } from '@shared/components/side-menu/side-menu.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    RouterModule,
    SideMenuComponent,
  ],
  templateUrl: './dashboard.component.html',
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DashboardComponent { }
