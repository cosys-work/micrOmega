import { Component, inject, signal, OnInit, createNgModule, Injector } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

import { StateStorageService } from 'app/core/auth/state-storage.service';
import SharedModule from 'app/shared/shared.module';
import HasAnyAuthorityDirective from 'app/shared/auth/has-any-authority.directive';
import { VERSION } from 'app/app.constants';
import { LANGUAGES } from 'app/config/language.constants';
import { AccountService } from 'app/core/auth/account.service';
import { LoginService } from 'app/login/login.service';
import { ProfileService } from 'app/layouts/profiles/profile.service';
import { EntityNavbarItems } from 'app/entities/entity-navbar-items';

import { loadNavbarItems, loadTranslationModule } from 'app/core/microfrontend';
import ActiveMenuDirective from './active-menu.directive';
import NavbarItem from './navbar-item.model';

@Component({
  standalone: true,
  selector: 'jhi-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  imports: [RouterModule, SharedModule, HasAnyAuthorityDirective, ActiveMenuDirective],
})
export default class NavbarComponent implements OnInit {
  inProduction?: boolean;
  isNavbarCollapsed = signal(true);
  languages = LANGUAGES;
  openAPIEnabled?: boolean;
  version = '';
  account = inject(AccountService).trackCurrentAccount();
  entitiesNavbarItems: NavbarItem[] = [];
  patientEntityNavbarItems: NavbarItem[] = [];
  doctorEntityNavbarItems: NavbarItem[] = [];
  staffEntityNavbarItems: NavbarItem[] = [];
  techleadEntityNavbarItems: NavbarItem[] = [];

  private loginService = inject(LoginService);
  private translateService = inject(TranslateService);
  private stateStorageService = inject(StateStorageService);
  private injector = inject(Injector);
  private accountService = inject(AccountService);
  private profileService = inject(ProfileService);
  private router = inject(Router);

  constructor() {
    if (VERSION) {
      this.version = VERSION.toLowerCase().startsWith('v') ? VERSION : `v${VERSION}`;
    }
  }

  ngOnInit(): void {
    this.entitiesNavbarItems = EntityNavbarItems;
    this.profileService.getProfileInfo().subscribe(profileInfo => {
      this.inProduction = profileInfo.inProduction;
      this.openAPIEnabled = profileInfo.openAPIEnabled;
    });

    this.accountService.getAuthenticationState().subscribe(account => {
      this.loadMicrofrontendsEntities();
    });
  }

  changeLanguage(languageKey: string): void {
    this.stateStorageService.storeLocale(languageKey);
    this.translateService.use(languageKey);
  }

  collapseNavbar(): void {
    this.isNavbarCollapsed.set(true);
  }

  login(): void {
    this.router.navigate(['/login']);
  }

  logout(): void {
    this.collapseNavbar();
    this.loginService.logout();
    this.router.navigate(['']);
  }

  toggleNavbar(): void {
    this.isNavbarCollapsed.update(isNavbarCollapsed => !isNavbarCollapsed);
  }

  loadMicrofrontendsEntities(): void {
    // Lazy load microfrontend entities.
    loadNavbarItems('patient').then(
      async items => {
        this.patientEntityNavbarItems = items;
        try {
          const LazyTranslationModule = await loadTranslationModule('patient');
          createNgModule(LazyTranslationModule, this.injector);
        } catch (error) {
          // eslint-disable-next-line no-console
          console.log('Error loading patient translation module', error);
        }
      },
      error => {
        // eslint-disable-next-line no-console
        console.log('Error loading patient entities', error);
      },
    );
    loadNavbarItems('doctor').then(
      async items => {
        this.doctorEntityNavbarItems = items;
        try {
          const LazyTranslationModule = await loadTranslationModule('doctor');
          createNgModule(LazyTranslationModule, this.injector);
        } catch (error) {
          // eslint-disable-next-line no-console
          console.log('Error loading doctor translation module', error);
        }
      },
      error => {
        // eslint-disable-next-line no-console
        console.log('Error loading doctor entities', error);
      },
    );
    loadNavbarItems('staff').then(
      async items => {
        this.staffEntityNavbarItems = items;
        try {
          const LazyTranslationModule = await loadTranslationModule('staff');
          createNgModule(LazyTranslationModule, this.injector);
        } catch (error) {
          // eslint-disable-next-line no-console
          console.log('Error loading staff translation module', error);
        }
      },
      error => {
        // eslint-disable-next-line no-console
        console.log('Error loading staff entities', error);
      },
    );
    loadNavbarItems('techlead').then(
      async items => {
        this.techleadEntityNavbarItems = items;
        try {
          const LazyTranslationModule = await loadTranslationModule('techlead');
          createNgModule(LazyTranslationModule, this.injector);
        } catch (error) {
          // eslint-disable-next-line no-console
          console.log('Error loading techlead translation module', error);
        }
      },
      error => {
        // eslint-disable-next-line no-console
        console.log('Error loading techlead entities', error);
      },
    );
  }
}
