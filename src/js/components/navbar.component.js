import { AuthService } from "../services/auth.service";
import { Routing } from "../core/routing.service";

export class NavbarComponent {
    constructor() {
        this._authService = new AuthService();
        this._routing = new Routing();
    }

    async beforeRender() {}

    render() {
        return `
        <!-- Component styles -->
        <style>
            ${this._style()}
        </style>
        <!-- Component html -->
        <nav class="navbar navbar-light bg-light">
            <a class="navbar-brand">Social Network</a>
            <ul class="navbar-nav d-flex flex-row">
                <li class="nav-item" >
                    <a class="nav-link" 
                    href="/#/users/${this._authService.userId}" 
                    >My profile</a>
                </li>
                <li><a class="nav-link" 
                href="/#/winners">Winners</a></li>
                <li><a class="nav-link" 
                href="/#/news">News</a></li>
            </ul>
            <button class="btn btn-primary logout-btn">Logout</button>
        </nav>
        `
    }

    _style() {
        return `
            ul {
                display: flex;
            }
            li {
                margin-right: 20px;
            }
        `
    }

    afterRender() {
        document.querySelector('.logout-btn')
            .addEventListener('click', (e) => {
            this._authService.logout()
                .then(() => this._routing.navigate('/login'))
        })
    }
}