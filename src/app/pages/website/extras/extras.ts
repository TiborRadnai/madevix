import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-extras',
  standalone: true,  
  imports: [CommonModule, TranslateModule],
  templateUrl: './extras.html',
  styleUrl: './extras.css'
})
export class Extras {

}
