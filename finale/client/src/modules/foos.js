import { inject } from 'aurelia-framework';
import { Router } from 'aurelia-router';
import { Foo } from '../resources/data/foo-object';
@inject(Router, Foo)
export class Foos {
    constructor(router, foos) {
        this.router = router;
        this.foos = foos;
        this.message = 'Foos';
        this.showFooEditForm = false;
    }
    async activate() {
        await this.getFoos();
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
            woo: "boo",
        }
        this.openEditForm();
        this.showFooEditForm = true;
    }
    editFoo(foo) {
        this.foo = foo;
        this.showFooEditForm = true;
    }

    openEditForm() {
        this.showFooEditForm = true;
        setTimeout(() => { $("#foo").focus(); }, 500);
    }

    async save() {
        if (this.foo && this.foo.foo && this.foo.woo) {
            await this.foos.saveFoo(this.foo);
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
    logout() {
        this.router.navigate('home');
    }
    
    back() {
        this.showFooEditForm = false;
    }
   
}
