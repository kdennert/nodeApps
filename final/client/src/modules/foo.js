import { inject } from 'aurelia-framework';
import { Router } from 'aurelia-router';
import { Foo } from '../resources/data/foo-object';

@inject(Router, Foo)
export class Foos {
    constructor(router, foos) {
        this.router = router;
        this.foos = foos;
        this.message = "Foos";
        this.showFooEditForm = false;
        this.userObj = JSON.parse(sessionStorage.getItem('userObj'));
    }
    async activate() {
        await this.foos.getFoos(this.userObj);
    }

    attached() {
        feather.replace()
    }

    async getFoos() {
        await this.foos.getFoos();
    }

    newFoo() {
        this.foo = {
            foo: "",
            woo: ""
        };
        
        this.openFooEditForm();
        this.showFooEditForm = true;
    }

    editFoo(foo) {
        this.foo = foo;
        this.showFooEditForm = true;
      }

    openFooEditForm() {
        this.showFooEditForm = true;
        setTimeout(() => { $("#foo").focus(); }, 500);
      }
    async save() {
        if (this.foo && this.foo.title) {
            let foo = { foo: this.foo }
            await this.foo.saveFoo(foo);
            await this.getFoos();
            this.back();
        }
    }

    async delete() {
        if (this.foo) {
          await this.foos.delete(this.foo);
          await this.getFoos();
          this.back();
        }
      }

    back() {
        this.showFooEditForm = false;
      }
}