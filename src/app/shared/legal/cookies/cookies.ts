import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-cookies',
  imports: [CommonModule, RouterModule, TranslateModule],
  standalone: true,  
  templateUrl: './cookies.html',
  styleUrl: './cookies.css'
})
export class Cookies {

}
