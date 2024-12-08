import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { AssignmentsComponent } from '../../assignments/assignments.component';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { AssignmentsService } from '../../shared/assignments.service';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [
    MatSidenavModule,
    MatListModule,
    RouterModule,
    AssignmentsComponent,
    MatIconModule,
    MatButtonModule,
    RouterOutlet,
    RouterLink
  ],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css'
})
export class SidenavComponent {
  constructor(private assignmentService: AssignmentsService) {}

  //toDo : lancer un loading au debut pour qu'on sache qu'il se passe qlq chose
  peuplerBD() {
    this.assignmentService.peuplerBDAvecForkJoin().subscribe(() => {
      window.location.reload();
      console.log('Base de données peuplée avec succès !');
    });
  }
}