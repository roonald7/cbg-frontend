import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MemberFormComponent } from './pages/member-form/member-form.component';
import { MemberListComponent } from './pages/member-list/member-list.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'membros', component: MemberListComponent },
    { path: 'cadastrar', component: MemberFormComponent },
    { path: '**', redirectTo: '' }
];
