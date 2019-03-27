import { WinnersService } from "../services/winners.service";

export class WinnersComponent {
    constructor() {
        this._winnersService = new WinnersService();
        this._winners
    }

    async beforeRender() {
        this._winners = await this._winnersService.getWinners();
    }

    render() {
        return `
        <style>
            ${this._style()}
        </style>
        <div><img src="${this._winners['winners'][0]['member_id']['images'][0]['image_basic']['url']}">
        <img src="${this._winners['winners'][1]['member_id']['images'][0]['image_basic']['url']}">
        <img src="${this._winners['winners'][2]['member_id']['images'][0]['image_basic']['url']}"></div>
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

    afterRender() {}
}