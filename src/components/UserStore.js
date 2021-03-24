import { makeAutoObservable } from "mobx";

class UserStore {
  users = [];
  user = null;
  isLogin = false;

  constructor() {
    makeAutoObservable(this);
  }

  setLoginUser(inputEmail) {
    const loginUser = this.users.filter((user) => user.email === inputEmail);

    if (loginUser.length) {
      this.isLogin = true;
      const { firstName, lastName, email, password } = loginUser[0];

      this.user = {
        firstName,
        lastName,
        email,
        password,
      };
    } else {
      this.isLogin = false;
    }
  }
  addUsers(firstName, lastName, email, password) {
    this.user = {
      firstName,
      lastName,
      email,
      password,
    };
    this.users.push(this.user);
  }

  setUsers(allUsers) {
    this.users.replace(allUsers);
  }
}

const userStore = new UserStore();

export default userStore;
