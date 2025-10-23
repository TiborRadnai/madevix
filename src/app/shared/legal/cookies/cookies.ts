import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { CookieService } from '../../../core/cookie-service';

@Component({
  selector: 'app-cookies',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule],
  templateUrl: './cookies.html',
  styleUrl: './cookies.css'
})
export class Cookies {
  constructor(
    public router: Router,
    private cookieService: CookieService
  ) {}

  openCookieSettings(): void {
    this.cookieService.openSettings();
  }
}
