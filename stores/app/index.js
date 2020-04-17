import { action, observable } from "mobx";

class AppStore {
  @observable
  clientSecret = "";

  @observable
  url = "";

  @action setUrl = (url) => {
    this.url = url;
  };
}

const store = new AppStore();

export default store;
