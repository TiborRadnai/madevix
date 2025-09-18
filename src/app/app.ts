import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { Header } from './header/header';
import { Introducion } from './introducion/introducion';
import { ChooseNexora } from './choose-nexora/choose-nexora';
import { References } from './references/references';
import { Process } from './process/process';
import { Services } from './services/services';
import { MakeWebsite } from './make-website/make-website';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Header, Introducion, 
  ChooseNexora, References, Process, Services, MakeWebsite],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Nexora');
}
