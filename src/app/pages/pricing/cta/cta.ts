import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-cta',
  imports: [CommonModule, RouterModule, TranslateModule],
  standalone: true,
  templateUrl: './cta.html',
  styleUrl: './cta.css'
})
export class Cta {

}
