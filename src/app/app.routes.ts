import { Routes } from '@angular/router';
import { AboutComponent } from './component/about/about.component';
import { ResumeComponent } from './component/resume/resume.component';
import { ProjectsComponent } from './component/projects/projects.component';

export const routes: Routes = [
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'resume',
    component: ResumeComponent,
  },
  {
    path: 'projects',
    component: ProjectsComponent,
  },
  {
    path: '**',
    redirectTo: 'about',
  },
];
