import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-process',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './process.html',
  styleUrls: ['./process.css']
})
export class Process {
  columns = [0, 1];

  steps = [
    {
      icon: 'fa-solid fa-lightbulb',
      title: 'process-website.steps.1.title',
      description: 'process-website.steps.1.description'
    },
    {
      icon: 'fa-solid fa-object-group',
      title: 'process-website.steps.2.title',
      description: 'process-website.steps.2.description'
    },
    {
      icon: 'fa-solid fa-file-signature',
      title: 'process-website.steps.3.title',
      description: 'process-website.steps.3.description'
    },
    {
      icon: 'fa-solid fa-laptop-code',
      title: 'process-website.steps.4.title',
      description: 'process-website.steps.4.description'
    },
    {
      icon: 'fa-solid fa-vial-circle-check',
      title: 'process-website.steps.5.title',
      description: 'process-website.steps.5.description'
    },
    {
      icon: 'fa-solid fa-globe',
      title: 'process-website.steps.6.title',
      description: 'process-website.steps.6.description'
    }
  ];
}
