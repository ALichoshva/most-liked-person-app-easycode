// add components
import { LoginComponent } from './components/login.component';
import { HomeComponent } from './components/home.component';
import { NotFoundComponent } from './components/notfound.component';
import { SignUpComponent } from './components/signup.component';
import { UserComponent } from './components/user.component';
import { NewsComponent } from './components/news.component';
import { NavbarComponent } from './components/navbar.component';
import { WinnersComponent } from './components/winners.component';
// add services
import { ActiveRoute } from './core/activeRoute.service';
import { AuthGuard } from './guards/auth.guard';

const routes = {
    '/': {
        component: new HomeComponent(),
        guard: new AuthGuard()
    },

    '/login': {
        component: new LoginComponent()
    },

    '/signup': {
        component: new SignUpComponent(),
    },

    '/users/:id': {
        component: new UserComponent(),
        guard: new AuthGuard()
    },

    '/news': {
        component: new NewsComponent(),
        guard: new AuthGuard()
    },

    '**': {
        component: new NotFoundComponent()
    },

    '/winners': {
        component: new WinnersComponent()
    }
}

const activeRoute = new ActiveRoute();

const router = async () => {
    // Get content container and header container
    const container = document.querySelector('app-container');
    const header = document.querySelector('app-header')
    // Get active route
    const request = activeRoute.parseRequestURL();
    const url = (request.resourse ? '/' + request.resourse : '/') + (request.id ? '/:id' : '');
    // Get component by route
    const component = routes[url] ? routes[url]['component'] : routes['**']['component'];
    const guard = routes[url] ? routes[url]['guard'] : null;
    // Check guard
    if (guard && !guard.check()) return;
  
    if (header) {
        const navbarComponent = new NavbarComponent();
        header.innerHTML = navbarComponent.render();
        navbarComponent.afterRender();
    }

    await component.beforeRender();
    container.innerHTML = component.render();
    component.afterRender();
}

window.addEventListener('load', router);
window.addEventListener('hashchange', router);



