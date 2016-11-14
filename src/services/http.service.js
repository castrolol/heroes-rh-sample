
export class HttpService {

    constructor(baseUrl){
        this.baseUrl = baseUrl;
    }

    request(url, method, data){
        return fetch(`${this.baseUrl}${url}`, { method });
    }

    requestJson(url, method, data){
        return this.request(url, method, data).then(r => r.json());
    }


    get(url){

        return this.requestJson(url, "GET", null);

    }



}