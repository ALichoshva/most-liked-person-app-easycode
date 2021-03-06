import { Http } from '../core/http.service';
import { ENV } from '../config/env';

export class WinnersService {
    constructor() {}

    getWinners() {
        const http = new Http();

        return new Promise((resolve, reject) => {
            http.get(`${ENV.apiUrl}/public/winners?part=1&limit=15`)
                .then((response) => { 
                    return resolve(response)
                })
                .catch((err) => reject(err))
        })
    }
}