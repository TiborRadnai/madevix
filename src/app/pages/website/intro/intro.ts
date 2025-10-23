import {
  Component,
  OnInit,
  OnDestroy,
  signal
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-intro',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './intro.html',
  styleUrl: './intro.css'
})
export class Intro implements OnInit, OnDestroy {
  fullText = signal('');
  typedText = signal('');
  showDetails = signal(false);
  langSub!: Subscription;
  typingInterval: any;

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    this.startTyping();

    this.langSub = this.translate.onLangChange.subscribe(() => {
      this.startTyping();
    });
  }

  startTyping(): void {
    const translated = this.translate.instant('intro.title');
    this.fullText.set(translated);
    this.typedText.set('');
    this.showDetails.set(false);

    if (this.typingInterval) {
      clearInterval(this.typingInterval);
    }

    let index = 0;
    this.typingInterval = setInterval(() => {
      this.typedText.update(text => text + translated[index]);
      index++;
      if (index === translated.length) {
        clearInterval(this.typingInterval);
        this.showDetails.set(true);
      }
    }, 80);
  }

  ngOnDestroy(): void {
    this.langSub?.unsubscribe();
    clearInterval(this.typingInterval);
  }

    onVideoReady(event: Event): void {
    const video = event.target as HTMLVideoElement;
    setTimeout(() => {
      video.pause(); // 5 másodperc után megállítjuk
    }, 5000);
  }

  onVideoEnded(event: Event): void {
    // Ne csináljon semmit — így nem vált fullscreenre
    event.preventDefault();
  }

}

