import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Cta } from './cta/cta';
import { Closing } from './closing/closing';
import { Header } from '../../shared/header/header';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule, Cta, Closing, Header],
  templateUrl: './pricing.html',
  styleUrls: ['./pricing.css']
})
export class Pricing {
  coreFeatures = [
    { key: 'responsiveDesign', label: 'pricing.features.responsiveDesign', tooltip: 'pricing.tooltips.responsiveDesign' },
    { key: 'contactForm', label: 'pricing.features.contactForm', tooltip: 'pricing.tooltips.contactForm' },
    { key: 'stockPhotos5', label: 'pricing.features.stockPhotos5', tooltip: 'pricing.tooltips.stockPhotos5' },
    { key: 'basicSEO', label: 'pricing.features.basicSEO', tooltip: 'pricing.tooltips.basicSEO' },
    { key: 'domainSetup', label: 'pricing.features.domainSetup', tooltip: 'pricing.tooltips.domainSetup' },
    { key: 'support2w', label: 'pricing.features.support2w', tooltip: 'pricing.tooltips.support2w' },
    { key: 'multiPage', label: 'pricing.features.multiPage', tooltip: 'pricing.tooltips.multiPage' },
    { key: 'interactiveUX', label: 'pricing.features.interactiveUX', tooltip: 'pricing.tooltips.interactiveUX' },
    { key: 'stockPhotos10', label: 'pricing.features.stockPhotos10', tooltip: 'pricing.tooltips.stockPhotos10' },
    { key: 'keywordSEO', label: 'pricing.features.keywordSEO', tooltip: 'pricing.tooltips.keywordSEO' },
    { key: 'analytics', label: 'pricing.features.analytics', tooltip: 'pricing.tooltips.analytics' },
    { key: 'support1mo', label: 'pricing.features.support1mo', tooltip: 'pricing.tooltips.support1mo' },
    { key: 'multiPagePremium', label: 'pricing.features.multiPagePremium', tooltip: 'pricing.tooltips.multiPagePremium' },
    { key: 'multiLang', label: 'pricing.features.multiLang', tooltip: 'pricing.tooltips.multiLang' },
    { key: 'contentUpdate3mo', label: 'pricing.features.contentUpdate3mo', tooltip: 'pricing.tooltips.contentUpdate3mo' },
    { key: 'webshopSoon', label: 'pricing.features.webshopSoon', tooltip: 'pricing.tooltips.webshopSoon' },
    { key: 'stockPhotos20', label: 'pricing.features.stockPhotos20', tooltip: 'pricing.tooltips.stockPhotos20' },
    { key: 'support3mo', label: 'pricing.features.support3mo', tooltip: 'pricing.tooltips.support3mo' }
  ];

  extraModules = [
    { key: 'customEmail', label: 'pricing.modules.customEmail', tooltip: 'pricing.tooltips.customEmail' },
    { key: 'newsletterSignup', label: 'pricing.modules.newsletterSignup', tooltip: 'pricing.tooltips.newsletterSignup' },
    { key: 'socialLinks', label: 'pricing.modules.socialLinks', tooltip: 'pricing.tooltips.socialLinks' },
    { key: 'visitorCounter', label: 'pricing.modules.visitorCounter', tooltip: 'pricing.tooltips.visitorCounter' },
    { key: 'blogModuleReadTime', label: 'pricing.modules.blogModuleReadTime', tooltip: 'pricing.tooltips.blogModuleReadTime' },
    { key: 'likeCounter', label: 'pricing.modules.likeCounter', tooltip: 'pricing.tooltips.likeCounter' },
    { key: 'socialShare', label: 'pricing.modules.socialShare', tooltip: 'pricing.tooltips.socialShare' },
    { key: 'blogModuleStats', label: 'pricing.modules.blogModuleStats', tooltip: 'pricing.tooltips.blogModuleStats' },
    { key: 'portfolio', label: 'pricing.modules.portfolio', tooltip: 'pricing.tooltips.portfolio' },
    { key: 'galleryLightbox', label: 'pricing.modules.galleryLightbox', tooltip: 'pricing.tooltips.galleryLightbox' },
    { key: 'googleMaps', label: 'pricing.modules.googleMaps', tooltip: 'pricing.tooltips.googleMaps' },
    { key: 'newsletterCampaign', label: 'pricing.modules.newsletterCampaign', tooltip: 'pricing.tooltips.newsletterCampaign' },
    { key: 'cookieLegal', label: 'pricing.modules.cookieLegal', tooltip: 'pricing.tooltips.cookieLegal' }
  ];

  packages: { [key: string]: string[] } = {
    spark: [
      'responsiveDesign',
      'contactForm',
      'stockPhotos5',
      'basicSEO',
      'domainSetup',
      'support2w'
    ],
    flow: [
      'responsiveDesign',
      'contactForm',
      'stockPhotos5',
      'basicSEO',
      'domainSetup',
      'support2w',
      'multiPage',
      'interactiveUX',
      'stockPhotos10',
      'keywordSEO',
      'analytics',
      'support1mo'
    ],
    peak: [
      'responsiveDesign',
      'contactForm',
      'stockPhotos5',
      'basicSEO',
      'domainSetup',
      'support2w',
      'multiPage',
      'interactiveUX',
      'stockPhotos10',
      'keywordSEO',
      'analytics',
      'support1mo',
      'multiPagePremium',
      'multiLang',
      'contentUpdate3mo',
      'webshopSoon',
      'stockPhotos20',
      'support3mo'
    ]
  };

  modules: { [key: string]: string[] } = {
    spark: ['customEmail', 'newsletterSignup', 'socialLinks'],
    flow: [
      'customEmail',
      'newsletterSignup',
      'socialLinks',
      'visitorCounter',
      'blogModuleReadTime',
      'likeCounter',
      'socialShare'
    ],
    peak: [
      'customEmail',
      'newsletterSignup',
      'socialLinks',
      'visitorCounter',
      'blogModuleReadTime',
      'likeCounter',
      'socialShare',
      'blogModuleStats',
      'portfolio',
      'galleryLightbox',
      'googleMaps',
      'newsletterCampaign',
      'cookieLegal'
    ]
  };

  getIconClass(packageName: string, featureKey: string, type: 'core' | 'extra'): string {
    const source = type === 'core' ? this.packages[packageName] : this.modules[packageName];
    return source.includes(featureKey) ? 'icon-check' : 'icon-cross';
  }
}


