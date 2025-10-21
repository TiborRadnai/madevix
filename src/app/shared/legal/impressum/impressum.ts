import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-impressum',
  imports: [CommonModule, RouterModule, TranslateModule],
  standalone: true,  
  templateUrl: './impressum.html',
  styleUrl: './impressum.css'
})
export class Impressum {

}
