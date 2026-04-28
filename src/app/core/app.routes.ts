import { Routes } from '@angular/router';

import { Home } from '../home/home';
import { Website } from '../pages/website/website';
import { Pricing } from '../pages/pricing/pricing';
import { Portfolio } from '../pages/portfolio/portfolio';
import { Contact } from '../pages/contact/contact';

import { Impressum } from '../shared/legal/impressum/impressum';
import { PrivacyPolicy } from '../shared/legal/privacy-policy/privacy-policy';
import { Cookies } from '../shared/legal/cookies/cookies';

import { MinimalLayout } from '../core/minimal-layout/minimal-layout';

// ⭐ Meta fájlok
import { homeMeta } from '../meta/home.meta';
import { websiteMeta } from '../meta/website.meta';
import { pricingMeta } from '../meta/pricing.meta';
import { portfolioMeta } from '../meta/portfolio.meta';
import { contactMeta } from '../meta/contact.meta';

export const routes: Routes = [
  {
    path: '',
    component: Home,
    data: { meta: homeMeta }
  },
  {
    path: 'website',
    component: Website,
    data: { meta: websiteMeta }
  },
  {
    path: 'pricing',
    component: Pricing,
    data: { meta: pricingMeta }
  },
  {
    path: 'portfolio',
    component: Portfolio,
    data: { meta: portfolioMeta }
  },
  {
    path: 'contact',
    component: Contact,
    data: { meta: contactMeta }
  },

  {
    path: '',
    component: MinimalLayout,
    children: [
      { path: 'impressum', component: Impressum },
      { path: 'privacy', component: PrivacyPolicy },
      { path: 'cookies', component: Cookies }
    ]
  }
];
