import { inject } from 'aurelia-framework';
import { DataServices } from './data-services';
@inject(DataServices)

export class Foo {

    constructor(data) {
        this.data = data;
        this.FOO_SERVICE = 'foos';
    }

    async saveFoo(foo) {
        let serverResponse;
        if (foo) {
            if (foo._id) {
                serverResponse = await this.data.put(foo, this.FOO_SERVICE);
            } else {
                serverResponse = await this.data.post(foo, this.FOO_SERVICE);
            }
            return serverResponse;
        }
    }

    async deleteFoo(foo) {
        console.log("deleting foo");
        if (foo) {
            await this.data.delete(this.FOO_SERVICE + '/' + foo._id)
            console.log(foo._id);
        }
    }

   
    async getFoos(userObj) {
        let url = this.Foo_SERVICE;
        if (userObj.role == 'user') {
            url += '/user/' + userObj._id;
        }
        let response = await this.data.get(url);
        if (!response.error) {
            this.foosArray = response;
        } else {
            this.foosArray = [];
        }
    }

}
