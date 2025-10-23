import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-privacy-policy',
  imports: [CommonModule, RouterModule, TranslateModule],
  standalone: true, 
  templateUrl: './privacy-policy.html',
  styleUrl: './privacy-policy.css'
})
export class PrivacyPolicy {
  constructor(public router: Router) {}
}
