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
  steps = [
    {
      icon: 'fa-solid fa-lightbulb',
      title: 'process-home.steps.1.title',
      description: 'process-home.steps.1.description'
    },
    {
      icon: 'fa-solid fa-object-group',
      title: 'process-home.steps.2.title',
      description: 'process-home.steps.2.description'
    },
    {
      icon: 'fa-solid fa-file-signature',
      title: 'process-home.steps.3.title',
      description: 'process-home.steps.3.description'
    },
    {
      icon: 'fa-solid fa-laptop-code',
      title: 'process-home.steps.4.title',
      description: 'process-home.steps.4.description'
    },
    {
      icon: 'fa-solid fa-vial-circle-check',
      title: 'process-home.steps.5.title',
      description: 'process-home.steps.5.description'
    },
    {
      icon: 'fa-solid fa-globe',
      title: 'process-home.steps.6.title',
      description: 'process-home.steps.6.description'
    }
  ];
}
