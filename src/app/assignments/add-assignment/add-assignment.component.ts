import { Component, /*EventEmitter, Output*/ } from '@angular/core';
import { Assignment } from '../assignment.model';

import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';

import { AssignmentsService } from '../../shared/assignments.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-add-assignment',
  standalone: true,
  imports: [
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatDatepickerModule,
    MatFormFieldModule
  ],
  templateUrl: './add-assignment.component.html',
  styleUrl: './add-assignment.component.css'
})
export class AddAssignmentComponent {
  //@Output() nouvelAssignment = new EventEmitter<Assignment>();
  nouvelAssignment: Assignment = new Assignment();
  nomDevoir: string = '';
  dateLimite: Date = new Date();

  constructor(private assignmentsService: AssignmentsService,
    private router: Router) {}

  onSubmit() {
    
    const newAssignment = new Assignment();
    //newAssignment.id = this.assignmentsService.getNewId();
    newAssignment.id = Math.floor(Math.random() * 1000);
    newAssignment.nom = this.nomDevoir;
    newAssignment.dateLimite = this.dateLimite;
    newAssignment.rendu = false;

    /*this.assignmentsService.addAssignment(newAssignment)
    .subscribe(message =>
      console.log(message));
    */
    this.assignmentsService.addAssignment(newAssignment).subscribe({
      next: (message) => {
        console.log(message);
        this.router.navigate(['/home']);
      }
    });
  }
}
