import { Component, OnInit } from '@angular/core';
import { ScrollSmootherService } from './services/scroll-smoother.service';
import { Header } from './header/header';
import { Introducion } from './introducion/introducion';
import { ChooseNexora } from './choose-nexora/choose-nexora';
import { References } from './references/references';
import { Process } from './process/process';
import { Services } from './services/services';
import { MakeWebsite } from './make-website/make-website';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    Header,
    Introducion,
    ChooseNexora,
    References,
    Process,
    Services,
    MakeWebsite
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {
  constructor(private scrollSmoother: ScrollSmootherService) {}

  ngOnInit(): void {
    this.scrollSmoother.initGlobalSmoothScroll();
  }
}
