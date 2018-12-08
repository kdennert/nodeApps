import { inject } from 'aurelia-framework';
import { Router } from 'aurelia-router';

@inject(Router)
export class NavBar {
    constructor(router) {
        this.router = router;
        this.loginError = "";
        // this.email = "";
        // this.password = "";
    }

    attached() {
        $('.navbar-nav a').on('click', function () {
            $('.navbar-nav').find('li.active').removeClass('active');
            $(this).parent('li').addClass('active');
        });
    }

    login() {
        return this.login(this.email, this.password)
            .then(response => {
                this.userObj = response.user;
                sessionStorage.setItem("userObj", JSON.stringify(this.userObj));
                this.loginError = "";
                this.router.navigate('home');
            })
            .catch(error => {
                console.log(error);
                this.loginError = "Invalid credentials.";
            });
    };

    logout() {
        // if (this.userObj) this.auth.logout(this.userObj.email);
        sessionStorage.removeItem('foo');
        this.logout();

    }

}