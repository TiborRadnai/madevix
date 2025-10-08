import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-make-website',
  imports: [CommonModule, RouterModule, TranslateModule],
  standalone: true,  
  templateUrl: './make-website.html',
  styleUrl: './make-website.css'
})
export class MakeWebsite {

}
