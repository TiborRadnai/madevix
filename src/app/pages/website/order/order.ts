import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslateModule],
  templateUrl: './order.html',
  styleUrls: ['./order.css']
})
export class Order {
  showPopup = false;
  formData: any = {};

  constructor(private http: HttpClient) {}

  onSubmit(form: NgForm) {
    console.log('Küldés indul', form.valid, this.formData);

    if (!form.valid) {
      alert('Kérlek töltsd ki az összes kötelező mezőt!');
      return;
    }

    this.http.post('/nexora/php/form-handler.php', this.formData, {
      headers: { 'Content-Type': 'application/json' }
    }).subscribe({
      next: (res: any) => {
        if (res?.status === 'success') {
          this.showPopup = true;
          setTimeout(() => this.showPopup = false, 5000);
        } else {
          alert('Hiba történt: ' + res?.message);
        }
      },

      error: err => {
        console.error('Hiba a küldés során', err);
        alert('Hiba történt a küldés során.');
      }
    });
  }

  closePopup() {
    this.showPopup = false;
  }
}
