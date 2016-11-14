import {HttpService} from './http.service';

const BASE_URL = "http://localhost:8000";

export class HeroesService {

    constructor(){
        this.http = new HttpService(BASE_URL);
    }


    getAll(){
        return this.http.get("/heroes");
    }

}