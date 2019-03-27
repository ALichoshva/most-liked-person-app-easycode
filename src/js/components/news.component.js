import { NewsService } from '../services/news.service';
import { AuthService } from '../services/auth.service';
import { Routing } from '../core/routing.service';

export class NewsComponent {
    constructor() {
        this._newsService = new NewsService();
        this._authService = new AuthService();
        this._routing = new Routing();
        this._news
    }

    async beforeRender() {
        this._news = await this._newsService.getNews(this._authService.token);
    }

    render() {
        return `
        <style>
            ${this._style()}
        </style>
        <div><img src="${this._news['news'][0]['pictures'][0]['url']}"></div>
        `
    }

    _style() {
        return `
            img {
                max-width: 100%;
                height: 300px;
            }

            div {
                text-align: center;
            }
        `;
    }

    afterRender() {

    }
}