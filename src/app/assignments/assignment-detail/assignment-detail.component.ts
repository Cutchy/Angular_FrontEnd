import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Assignment } from '../assignment.model';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { AssignmentsService } from '../../shared/assignments.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../shared/auth.service';

@Component({
  selector: 'app-assignment-detail',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    RouterModule,
    MatCheckbox
  ],
  templateUrl: './assignment-detail.component.html',
  styleUrl: './assignment-detail.component.css'
})
export class AssignmentDetailComponent {
  /*@Input()*/ assignmentTransmis:Assignment | undefined;
  @Output() delete = new EventEmitter<Assignment>();
  isAdminUser: boolean = false;

  constructor(private assignmentsService:AssignmentsService, 
    private route:ActivatedRoute,
    private router:Router,
    private authService:AuthService
  ) { }

  ngOnInit(): void {
    this.getAssignment();
    this.authService.isAdmin().then((isAdmin) => {
      this.isAdminUser = isAdmin;
    });
  }

  getAssignment(){
    const id = +this.route.snapshot.params['id'];
    this.assignmentsService.getAssignment(id)
    .subscribe(assignment => this.assignmentTransmis = assignment);
  } 

  /*isAdmin(): Promise<boolean> {
    return this.authService.isAdmin();
  }*/  

  onAssignmentRendu(){
    if(this.assignmentTransmis){
      this.assignmentTransmis.rendu = true;

      this.assignmentsService.updateAssignment(this.assignmentTransmis)
      .subscribe(message => {
        console.log(message);
        this.router.navigate(['/home']); 
      });

      //this.router.navigate(['/home']);
    }
  }

  /*
  onDelAssignmentBtnClick(){
    this.delete.emit(this.assignmentTransmis);
  }
  */
 
  onDelete(){
    if(this.assignmentTransmis){
      this.assignmentsService.deleteAssignment(this.assignmentTransmis)
      .subscribe((message) => {
        console.log(message);
        this.router.navigate(['/home']);
      });
    }
    //this.assignmentTransmis = undefined;
    //this.router.navigate(['/home']);
  }

  onClickEdit(){
    this.router.navigate(['/assignment', this.assignmentTransmis?.id, 'edit'],
    {queryParams: {nom:this.assignmentTransmis?.nom}, fragment: 'edition'});
  }
}
