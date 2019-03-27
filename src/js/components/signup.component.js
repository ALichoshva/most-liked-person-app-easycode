import { AuthService } from "../services/auth.service";

export class SignUpComponent {
    constructor() {
        this._authService = new AuthService();
    }

    beforeRender() {
        
    }

    render() {
        return `
        <div class="auth-wrap d-flex mt-5">
            <div class="auth-form col col-6 mx-auto my-auto">
                <h3>SignUp Social.</h3>
                <p class="text-secondary">Enter all necessary information below to signUp to your Social account.</p>
                <form name="loginForm" novalidate>
                    <div class="form-group">
                        <input type="email" class="form-control form-control-sm" id="email" placeholder="name@example.com" required data-pattern="^\S+@[a-z]+\.[a-z]+$">
                        <input type="password" class="form-control form-control-sm mt-3" id="password" placeholder="password" required data-pattern="\S+">
                        <input type="nickname" class="form-control form-control-sm mt-3" id="nickname" placeholder="nickname">
                        <input type="first_name" class="form-control form-control-sm mt-3" id="first_name" placeholder="first name">
                        <input type="last_name" class="form-control form-control-sm mt-3" id="last_name" placeholder="last name">
                        <input type="phone" class="form-control form-control-sm mt-3" id="phone" placeholder="phone">
                        <select class="form-control form-control-sm mt-3" id="gender_orientation">
                            <option>male</option>
                            <option>female</option>
                        </select>
                        <input type="city" class="form-control form-control-sm mt-3" id="city" placeholder="city">
                        <input type="country" class="form-control form-control-sm mt-3" id="country" placeholder="country">
                        <input type="date_of_birth_day" class="form-control form-control-sm mt-3" id="date_of_birth_day" placeholder="date of birth day">
                        <input type="date_of_birth_month" class="form-control form-control-sm mt-3" id="date_of_birth_month" placeholder="date of birth month">
                        <input type="date_of_birth_year" class="form-control form-control-sm mt-3" id="date_of_birth_year" placeholder="date of birth year">
                        <div class="d-flex mt-5">
                            <button type="submit" class="btn btn-primary btn-sm">Sign Up</button>
                        </div>
                    </div>
                </form>
            </div>
            <!-- /.auth-form -->
            <div class="auth-bg col col-6">

            </div>
            <!-- /.auth-bg -->
        </div>
        <!-- /.auth-wrap -->
        `;
    }

    afterRender() {
        document.forms['loginForm'].addEventListener('submit', (e) => {
            e.preventDefault();

            const email = e.target.elements['email'].value;
            const password = e.target.elements['password'].value;
            const nickname = e.target.elements['nickname'].value;
            const firstName = e.target.elements['first_name'].value;
            const lastName = e.target.elements['last_name'].value;
            const phone = e.target.elements['phone'].value;
            const genderOrientation = e.target.elements['gender_orientation'].value;
            const city = e.target.elements['city'].value;
            const country = e.target.elements['country'].value;
            const dateOfBirthDay = e.target.elements['date_of_birth_day'].value;
            const dateOfBirthMonth = e.target.elements['date_of_birth_month'].value;
            const dateOfBirthYear = e.target.elements['date_of_birth_year'].value;

            const signUpInfo = {
                email: email,
                password: password,
                nickname: nickname,
                first_name: firstName,
                last_name: lastName,
                phone: phone,
                gender_orientation: genderOrientation,
                city: city,
                country: country,
                date_of_birth_day: dateOfBirthDay,
                date_of_birth_month: dateOfBirthMonth,
                date_of_birth_year: dateOfBirthYear
            }

            for(let item in signUpInfo) {
                if (Boolean(signUpInfo[item]) === false) return
            }
            
            this._authService.signUp(signUpInfo)
                .then((response) => {
                    console.log(response);
                })
                .catch((err) => {
                    console.log(err);
                });                
        });
    }
}