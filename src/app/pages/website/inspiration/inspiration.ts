import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-inspiration',
  standalone: true,  
  imports: [CommonModule, TranslateModule],
  templateUrl: './inspiration.html',
  styleUrl: './inspiration.css'
})
export class Inspiration {

}
