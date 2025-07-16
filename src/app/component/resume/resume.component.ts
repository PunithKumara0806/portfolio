import { Component } from '@angular/core';

interface Experience {
  id: string;
  title: string;
  startYear: number;
  endYear: number;
  organization: string;
  description: string[];
  skills: string[];
}

@Component({
  selector: 'app-resume',
  imports: [],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.scss',
})
export class ResumeComponent {
  currentYear: number = new Date().getFullYear();
  experience: Experience[] = [
    {
      id: '1',
      title: 'Software Engineer',
      startYear: 2023,
      endYear: -1,
      organization: 'Societe Generale',
      description: [
        'Addressed regular production bugs and user issue for UI and system workflows for internal IAM tool.',
        'Worked on documentation of IAM tool features that were added, and addressed user concerns on feature improvements',
        'Created automation scripts to reduce manual actions for support members, saving 2+ manhours peraction.',
        'Worked on Group level migration project, involving 500+ teams across all business lines. Playedsignificant roles in the project via providing automation scripts to validate data quality.',
        'Awarded ”Newbie Award” for proactive contribution for automation',
      ],
      skills: [
        'Java',
        'Spring Boot',
        'Microservice',
        'Design Pattern',
        'Event Driven Architecture',
        'Domain Driven Design',
        'Angular',
        'AWK',
        'SQL',
        'Azure',
        'Agile',
        'Jira',
        'Maven',
      ],
    },
  ];
}
