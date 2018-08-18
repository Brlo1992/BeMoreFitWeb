import Cookies from 'universal-cookie';
class CookieHelper {
    constructor() {
        this.cookies = new Cookies();
    }
    saveCookie = (cookieName, cookieValue) => {
        if (cookieName && cookieValue) {
            if (this.checkCookieExist() === false) {
                this.cookies.set(cookieName, cookieValue);
            }                
        }
    }

    removeCookie = (cookieName) => {
        if (cookieName) {
            this.cookies.remove(cookieName);
        }
    }

    checkCookieExist = (cookieName) => {
        if (cookieName) {
            var cookie = this.cookies.get(cookieName);
            if (cookie)
                return true
            return false;
        }
        return false;
    }

    getCookie = (cookieName) => {
        if (this.checkCookieExist(cookieName)) 
            return this.cookies.get(cookieName);
        else    
            return undefined;
    }
}

export default new CookieHelper();