export default class ApiRouterHelper {
    _apiAddress = "http://localhost:5000/api";

    _setRoute = (route) => {
        return this._apiAddress.concat(`/${route}`);
    }

    authLogout = () => {
        return this._setRoute("auth/logout");
    }
    
    authLogin = () => {
        return this._setRoute("auth/login");
    }

    authRegister = () => {
        return this._setRoute("auth/register");
    }

    homeIndex = () => {
        return this._setRoute("home/index");
    }

    dietIndex = () => {
        return this._setRoute("diet/index");
    }
    
    dietMeals = () => {
        return this._setRoute("diet/meals");
    }
}