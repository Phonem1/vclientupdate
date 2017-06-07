import { NavbarComponent } from './navbar/navbar.component';
import { PersonalComponent } from './personal/personal.component';
import { AboutComponent } from './about/about.component';

export const NavState = { name:'nav', url: '/nav', component: NavbarComponent};
export const PersonalState = { name:'personal', url: '/personal', component: PersonalComponent};
export const AboutState = { name:'about', url: '/about', component: AboutComponent};

export const APP_STATES =  [
    NavState,
    PersonalState,
    AboutState
];



