import { storage } from "./firebase";
import { doUpdateUserField } from "./db";

export const uploadFile = (name, file, metadata, id, field) =>
  storage
    .ref()
    .child(name)
    .put(file, metadata)
    .then(snapshot => snapshot.ref.getDownloadURL())
    .then(url => {
      doUpdateUserField(field, url, id).then(() => {
        console.log("saved image!");
      });
    })
    .catch(error => {
      switch (error.code) {
        case "storage/unauthorized":
          console.log("user does not have permission to access the object");
          break;
        case "storage/canceled":
          console.log("user canceled the upload");
          break;
        case "storage/unknown":
          console.log("unknown user occurred, inspect error.serverResponse");
          break;
      }
    });

export const savePage = (name, data, cb) =>
  storage
    .ref()
    .child(`pages/${name}`)
    .putString(data)
    .then(snapshot => console.log("saved page!"))
    .then(snapshot => cb())
    .catch(error => {
      switch (error.code) {
        case "storage/unauthorized":
          console.log("user does not have permission to access the object");
          break;
        case "storage/canceled":
          console.log("user canceled the upload");
          break;
        case "storage/unknown":
          console.log("unknown user occurred, inspect error.serverResponse");
          break;
      }
    });

export const getPage = name =>
  storage
    .ref()
    .child(`pages/${name}`)
    .getDownloadURL()
    .then(url => {
      return fetch(url).then(function(response) {
        if (response.status >= 200 && response.status < 300) {
          console.log("hello");
          return response.json();
        } else {
          console.log("godbye");
          var error = new Error(response.statusText || response.status);
          error.response = response;
          return Promise.reject(error);
        }
      });
    })
    .catch(error => {
      console.log("there was clearly an error");
      console.log(error);
      switch (error.code) {
        case "storage/object_not_found":
          console.log("object not found");
          break;
        case "storage/unauthorized":
          console.log("user does not have permission to access the object");
          break;
        case "storage/canceled":
          console.log("user canceled the upload");
          break;
        case "storage/unknown":
          console.log("unknown user occurred, inspect error.serverResponse");
          break;
      }
      return null;
    });
