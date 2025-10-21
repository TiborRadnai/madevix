import { Routes } from '@angular/router';
import { Home } from '..//home/home';
import { Website } from '../pages/website/website';
import { Pricing } from '../pages/pricing/pricing';
import { Portfolio } from '../pages/portfolio/portfolio';
import { Contact } from '../pages/contact/contact';
import { Impressum } from '../shared/legal/impressum/impressum';
import { PrivacyPolicy } from '../shared/legal/privacy-policy/privacy-policy';
import { Cookies } from '../shared/legal/cookies/cookies';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'website', component: Website },
  { path: 'pricing', component: Pricing },
  { path: 'portfolio', component: Portfolio },
  { path: 'contact', component: Contact },
  { path: 'impressum', component: Impressum },
  { path: 'privacy', component: PrivacyPolicy },
  { path: 'cookies', component: Cookies },
];

