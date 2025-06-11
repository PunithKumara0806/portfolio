import { Component } from '@angular/core';

interface Experience {
  id: string;
  title: string;
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
  experience: Experience[] = [
    {
      id: '1',
      title: 'Software Engineer',
      organization: 'Societe Generale',
      description: [
        'Worked in Group level IAM system catering to 10k+ users',
        'Worked in Automating tool saving 100 hours+ total',
        'Received Newbie Award for proactive participation',
      ],
      skills: [
        'Java',
        'Spring Boot',
        'Microservice',
        'Design Pattern',
        'Event Driven Architecture',
        'Domain Driven Design',
        'Angular',
        'SQL',
        'Azure',
        'Agile',
        'Jira',
        'Maven',
      ],
    },
  ];
}
