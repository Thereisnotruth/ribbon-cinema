import { observable } from 'mobx';

const Auth = observable({
    isLogged: false,
    data: {},
    type: -1,
    init() {
        this.data = JSON.parse(localStorage.getItem('userInfo'));
        if (this.data != null)
            this.isLogged = true;
        else {
            this.isLogged = false;
        }
    },
    login(userData) {
      this.isLogged = true;
      this.data = userData;
      if (userData.addr === undefined) {
        this.type = 1;
      } else {
        this.type = 0;
      }
      localStorage.setItem('userInfo', JSON.stringify(userData));
    },
    logout() {
        this.isLogged = false;
        localStorage.clear();
    },
});

export default Auth;