import firebase from "../src/components/firebase";

const db = firebase.ref("/chat");

class ChatDataService {

  getAll() {
    return db;
  }
  create(chat) {
    return db.push(chat);
  }
  // update(key, value) {
  //   return db.child(key).update(value);
  // }

  // delete(key) {
  //   return db.child(key).remove();
  // }

  // deleteAll() {
  //   return db.remove();
  // }
}

export default new ChatDataService();
