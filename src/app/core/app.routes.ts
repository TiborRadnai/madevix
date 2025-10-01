import { Routes } from '@angular/router';
import { Home } from '..//home/home';
import { Website } from '../pages/website/website';
import { Pricing } from '../pages/pricing/pricing';
import { Portfolio } from '../pages/portfolio/portfolio';
import { Contact } from '../pages/contact/contact';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'website', component: Website },
  { path: 'pricing', component: Pricing },
  { path: 'portfolio', component: Portfolio },
  { path: 'contact', component: Contact },

];

