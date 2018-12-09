import { inject } from 'aurelia-framework';
import { Router } from 'aurelia-router';
import { AuthService } from 'aurelia-auth';

@inject(Router, AuthService)
export class NavBar {
    constructor(router, auth) {
        this.authenticated = false;
        this.router = router;
        this.auth = auth;
        this.loginError = "";
        this.email = "";
        this.password = "";
    }

    bind() {
        this.isAuthenticated = this.auth.isAuthenticated();
    }

    attached() {
        $('.navbar-nav a').on('click', function () {
            $('.navbar-nav').find('li.active').removeClass('active');
            $(this).parent('li').addClass('active');
        });
    }

    login() {
        return this.auth.login(this.email, this.password)
            .then(response => {
                this.fooObj = response.foo;
                sessionStorage.setItem("fooObj", JSON.stringify(this.fooObj));
                this.loginError = "";
                this.isAuthenticated = this.auth.isAuthenticated();
                this.router.navigate('home');
            })
            .catch(error => {
                console.log(error);
                this.authenticated = false;
                this.loginError = "Invalid credentials.";
            });
    };

    logout() {
        // if (this.userObj) this.auth.logout(this.userObj.email);
        sessionStorage.removeItem('foo');
        this.isAuthenticated = this.auth.isAuthenticated();
        this.auth.logout();
    }
}