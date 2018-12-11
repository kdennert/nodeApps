import { inject } from 'aurelia-framework';
import { Router } from 'aurelia-router';

@inject(Router)
export class NavBar {
    constructor(router) {
        this.router = router;
        this.email = "";
        this.password = "";
    }

    attached() {
        $('.navbar-nav a').on('click', function () {
            $('.navbar-nav').find('li.active').removeClass('active');
            $(this).parent('li').addClass('active');
        });
    }

    login() {
        return this.login()
            .then(response => {
                this.todoObj = response.todo;
                sessionStorage.setItem("todoObj", JSON.stringify(this.todoObj));
                this.router.navigate('home');
            })
            .catch(error => {
                console.log(error);
                this.loginError = "Invalid credentials.";
            });
    };

    logout() {
        this.logout();
        sessionStorage.removeItem('todo');

        
    }
}