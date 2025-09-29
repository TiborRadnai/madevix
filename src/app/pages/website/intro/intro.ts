import {
  Component,
  OnInit,
  signal
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-intro',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './intro.html',
  styleUrl: './intro.css'
})
export class Intro implements OnInit {
  fullText = 'Digitális jelenlét új szintre emelve';
  typedText = signal('');
  showDetails = signal(false);

  ngOnInit(): void {
    // Videó nem lesz leállítva — csak időzítés
    setTimeout(() => {
      let index = 0;
      const interval = setInterval(() => {
        this.typedText.update(text => text + this.fullText[index]);
        index++;
        if (index === this.fullText.length) {
          clearInterval(interval);
          this.showDetails.set(true);
        }
      }, 80);
    }, 5000); // 5 mp után indul a gépelés
  }
}
