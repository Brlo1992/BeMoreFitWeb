export default class RouterHelper {
    _setRoute = (route) => {
        return `/${route}`;
    }
    home = () => this._setRoute("");

    login = () => this._setRoute("login");

    logout = () => this._setRoute("logout");

    account = () => this._setRoute("account");

    mealLists = () => this._setRoute("mealLists");

    menus = () => this._setRoute("menus");

    register = () => this._setRoute("register");

    facebook = () => this._setRoute("facebook");

    google = () => this._setRoute("google");

    twitter = () => this._setRoute("twitter");

    ingredientLists = () => this._setRoute("ingredientLists");
}

