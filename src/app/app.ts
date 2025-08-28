import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { Header } from './header/header';
import { Introducion } from './introducion/introducion';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Header, Introducion],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Nexora');
}
