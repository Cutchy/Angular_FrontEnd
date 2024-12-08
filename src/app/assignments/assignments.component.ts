import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RenduDirective } from '../shared/rendu.directive';
import { NonRenduDirective } from '../shared/non-rendu.directive';

import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Assignment } from './assignment.model';
import { MatListModule } from '@angular/material/list';

import { AssignmentDetailComponent } from './assignment-detail/assignment-detail.component';
import { AddAssignmentComponent } from './add-assignment/add-assignment.component';
import { AssignmentsService } from '../shared/assignments.service';

import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

import {PageEvent, MatPaginatorModule} from '@angular/material/paginator';

@Component({
  selector: 'app-assignments',
  standalone:true,
  imports: [CommonModule,
    RenduDirective,
    NonRenduDirective,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatDatepickerModule,
    MatFormFieldModule,
    AssignmentDetailComponent,
    AddAssignmentComponent,
    RouterOutlet,
    RouterLink,
    MatPaginatorModule,
    MatListModule
  ],
  templateUrl: './assignments.component.html',
  styleUrl: './assignments.component.css'
})

export class AssignmentsComponent /*implements OnInit*/ {
  titre = "Mon appli sur les assigmnents";
  ajoutActive = false;
  formVisible = false;
  assignmentSelectionne:Assignment | null = null;
  assignments:Assignment[] = [];

  //pour gérer la pagination
  page:number = 1;
  limit:number = 10;
  totalDocs!:number;
  totalPages!:number;
  nextPage!:number;
  prevPage!:number;
  hasPrevPage!:boolean;
  hasNextPage!:boolean;

  constructor (private AssignmentService:AssignmentsService) { }

  ngOnInit() : void{
    //this.getAssignments();
    this.AssignmentService.getAssignmentsPagine(this.page, this.limit).subscribe(
      data => {
        this.assignments = data.docs;
        this.totalDocs = data.totalDocs;
        this.totalPages = data.totalPages;
        this.nextPage = data.nextPage;
        this.prevPage = data.prevPage;
        this.hasPrevPage = data.hasPrevPage;
        this.hasNextPage = data.hasNextPage;
      }
    )
  }

  getAssignments():void {
    this.AssignmentService.getAssignments().subscribe(assignments => this.assignments = assignments);
  }
  
  onPageChange(event: PageEvent): void {
    this.page = event.pageIndex + 1;  // Les index des pages commencent à 0, mais votre API commence à 1
    this.limit = event.pageSize;  // La taille de la page peut changer aussi
    this.AssignmentService.getAssignmentsPagine(this.page, this.limit).subscribe(
      data => {
        this.assignments = data.docs;
        this.totalDocs = data.totalDocs;
        this.totalPages = data.totalPages;
        this.nextPage = data.nextPage;
        this.prevPage = data.prevPage;
        this.hasPrevPage = data.hasPrevPage;
        this.hasNextPage = data.hasNextPage;
      }
    );  // Récupère les devoirs pour la nouvelle page
  }

  assignmentClique(matiere:Assignment) {
    this.assignmentSelectionne = matiere;
  }

/*  
  onNouvelAssignment(event:Assignment) {
    //this.assignments.push(event);
    this.AssignmentService.addAssignment(event)
    .subscribe(message => console.log(message));
    this.formVisible = false;
  }
*/

  onDeleteAssignment(assignments:Assignment) {
    this.assignments = this.assignments.filter(a => a !== this.assignmentSelectionne);
    this.assignmentSelectionne = null;
  }

  peuplerBD() {
    this.AssignmentService.peuplerBDAvecForkJoin()
      .subscribe(() => {
        console.log("BD REMPLIE !");
      })
  }
}
