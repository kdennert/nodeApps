import { inject } from 'aurelia-framework';
import { Router } from 'aurelia-router';
import { Foo } from '../resources/data/foo-object';

@inject(Router, Foo)
export class Foos {
  constructor(router, foo) {
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
    await this.users.getFoos();
  }

  newFoo() {
    this.foo = {
      foo: "",
      woo: "",
      email: "",
      password: "",
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

  changeActive(foo) {
    this.foo = foo;
    this.save();
  }

  async save() {
    if (this.foo && this.foo.foo && this.foo.woo
      && this.foo.email && this.foo.password)
      await this.foos.saveFoo(this.foo);
    await this.getFoos();
    this.back();
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

  logout() {
    this.router.navigate('home');
  }
}
