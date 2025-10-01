import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router'; // már a többi import mellett

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './form.html',
  styleUrls: ['./form.css']
})
export class ContactForm implements AfterViewInit {
  showPopup = false;
  formData: any = {
    name: '',
    email: '',
    phone: '',
    message: '',
    gdpr: false
  };

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngAfterViewInit(): void {
    // Fragment scroll (új navigáció esetén)
    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        const el = document.getElementById(fragment);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });

    // Fragment scroll akkor is, ha már az oldalon vagy
    setTimeout(() => {
      const fragment = this.route.snapshot.fragment;
      if (fragment) {
        const el = document.getElementById(fragment);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, 0);

    // Autofill workaround
    setTimeout(() => {
      const name = (document.getElementById('name') as HTMLInputElement)?.value;
      const email = (document.getElementById('email') as HTMLInputElement)?.value;
      const phone = (document.getElementById('phone') as HTMLInputElement)?.value;
      const message = (document.getElementById('message') as HTMLTextAreaElement)?.value;
      const gdpr = (document.getElementById('gdpr') as HTMLInputElement)?.checked;

      this.formData = { name, email, phone, message, gdpr };
    }, 300);
  }


  onSubmit(form: NgForm) {
    console.log('Küldés indul', form.valid, this.formData);

    if (!form.valid) {
      alert('Kérlek töltsd ki az összes kötelező mezőt!');
      return;
    }

    this.http.post('/nexora/php/contact-handler.php', this.formData, {
      headers: { 'Content-Type': 'application/json' }
    })
    .subscribe({
      next: (res: any) => {
        if (res?.status === 'success') {
          this.showPopup = true;
          form.resetForm();
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
