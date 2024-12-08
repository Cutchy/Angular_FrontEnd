import { Injectable } from '@angular/core';
import { Assignment } from '../assignments/assignment.model';
import { forkJoin, Observable, of } from 'rxjs';
import { LoggingService } from './logging.service';
import { HttpClient } from '@angular/common/http';
import { bdInitialAssignments } from './data';

@Injectable({
  providedIn: 'root'
})
export class AssignmentsService {
  private apiUrl = 'https://api-backend-jsa9.onrender.com/api/assignments';

  constructor(private LoggingService:LoggingService, private htpp: HttpClient) { }

  getAssignmentsPagine(page:number, limit:number):Observable<any> {
    return this.htpp.get<any>(this.apiUrl+"?page="+page+"&limit="+limit);
  }

  getAssignments():Observable<Assignment[]> {
    return this.htpp.get<any>(this.apiUrl);
  }

  getAssignment(id:number):Observable<Assignment> {
    return this.htpp.get<any>(this.apiUrl+"/"+id);
  }

  /*getNewId(): number {
    return this.assignments.length + 1;
  }*/

  addAssignment(assignment:Assignment):Observable<string> {
    //this.assignments.push(assignment);
    //this.LoggingService.log(assignment.nom, "ajouté");

    //return of("Assignment ajouté !");
    return this.htpp.post<any>(this.apiUrl, assignment);
  }

  updateAssignment(assignment:Assignment):Observable<string> {
    //return of("Assignment service: Assignment modifié !")
    return this.htpp.put<any>(this.apiUrl, assignment);
  }

  deleteAssignment(assignment:Assignment):Observable<any> {
    //let pos = this.assignments.indexOf(assignment);
    //this.assignments.splice(pos,1);
    //this.LoggingService.log(assignment.nom, "supprimé");

    //return of("Assigmnent supprimé !")
    console.log("Suppression de l'assignment avec id="+assignment.id);
    return this.htpp.delete<any>(this.apiUrl+"/"+assignment.id);
  }

  peuplerBDAvecForkJoin():Observable<any> {
    let appelsVersAddAssignment:Observable<any>[] = [];
 
    bdInitialAssignments.forEach(a => {
      const nouvelAssignment = new Assignment();
      nouvelAssignment.id = a.id;
      nouvelAssignment.nom = a.nom;
      nouvelAssignment.dateLimite = new Date(a.dateLimite);
      nouvelAssignment.rendu = a.rendu;
 
      appelsVersAddAssignment.push(this.addAssignment(nouvelAssignment))
    });
 
    return forkJoin(appelsVersAddAssignment);
  }

}