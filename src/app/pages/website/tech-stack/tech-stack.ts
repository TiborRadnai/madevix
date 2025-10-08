import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-tech-stack',
  imports: [CommonModule, TranslateModule],
  standalone: true,  
  templateUrl: './tech-stack.html',
  styleUrl: './tech-stack.css'
})
export class TechStack {

}
