import { inject } from 'aurelia-framework';
import { Router } from 'aurelia-router';
import { User } from '../resources/data/user-object';

@inject(Router, User)
export class Users {
  constructor(router, users) {
    this.router = router;
    this.users = users;
    this.message = 'Users';
    this.showUserEditForm = false;

  }
  async activate() {
    await this.getUsers();
  }

  attached() {
    feather.replace()
  }

  async getUsers() {
    await this.users.getUsers();
  }

  newUser() {
    this.user = {
      firstName: "",
      lastName: "",
      active: true,
      role: "user",
      email: "",
      password: "",
    }
    this.openEditForm();
this.showUserEditForm = true;
  }

  editUser(user) {
    this.user = user;
    this.showUserEditForm = true;
  }

  openEditForm() {
    this.showUserEditForm = true;
    setTimeout(() => { $("#firstName").focus(); }, 500);
  }

  changeActive(user) {
    this.user = user;
    this.save();
  }

  async save() {
    if (this.user && this.user.firstName && this.user.lastName
      && this.user.email && this.user.password)
      await this.users.saveUser(this.user);
    await this.getUsers();
    this.back();
  }

  async delete() {
    if (this.user) {
      await this.users.delete(this.user);
      await this.getUsers();
      this.back();
    }
  }

  back() {
    this.showUserEditForm = false;
  }

  logout() {
    this.router.navigate('home');
  }
}
