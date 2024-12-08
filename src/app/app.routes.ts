import { Routes } from '@angular/router';
import { AssignmentsComponent } from './assignments/assignments.component';
import { AddAssignmentComponent } from './assignments/add-assignment/add-assignment.component';
import { AssignmentDetailComponent } from './assignments/assignment-detail/assignment-detail.component';
import { EditAssignmentComponent } from './assignments/edit-assignment/edit-assignment.component';
import { authGuard } from './shared/auth.guard';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
  // home page qui sera affichée avec l'url http://localhost:4200/
  // ou http://localhost:4200
  // elle va être redirigée vers la page home
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  // page home qui sera affichée avec l'url http://localhost:4200/home
  { path: 'home', component: AssignmentsComponent },
  { path: 'add', component: AddAssignmentComponent },
  { path: 'assignment/:id', component: AssignmentDetailComponent },
  { path: 'login', component: LoginComponent },
  { path: 'assignment/:id/edit', component: EditAssignmentComponent, canActivate: [authGuard] }
];

