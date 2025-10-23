import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { CookieService } from '../../core/cookie-service';

@Component({
  selector: 'app-footer',
  imports: [CommonModule, RouterModule, TranslateModule],
  standalone: true,  
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})

export class Footer {
  constructor(private cookieService: CookieService) {}

  openCookieSettings() {
    this.cookieService.openSettings();
  }
}
