import { StudentStubjectComponent } from './student-stubject/student-stubject.component';
import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StudentComponent } from './student/student.component';
import { SubjectComponent } from './subject/subject.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotfoundComponent } from './notfound/notfound.component';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'Home', component:HomeComponent, title:'Home'},
    { path: 'Student', component:StudentComponent, title:'Student'},
    { path: 'Subject', component:SubjectComponent, title:'Subject'},
    { path: 'StudentSubject', component:StudentStubjectComponent, title:'Student Subject'},
    { path: 'Login', component:LoginComponent, title:'Login'},
    { path: "Register", component:RegisterComponent, title:'Register'},
    { path: "**", component:NotfoundComponent, title:'Not Found'}
];
