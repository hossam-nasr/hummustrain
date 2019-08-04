import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { firebaseConfig } from "./constants";

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const collectionRef = db.collection("carts");
const getQuery = db.collectionGroup("carts").orderBy("timestamp", "asc");

export const getCarts = callback => {
  getQuery
    .get()
    .then(response => {
      const respJson = response.docs.map(
        doc => doc && doc.exists && doc.data()
      );
      callback(respJson);
    })
    .catch(error => {
      console.error("Error retrieving carts from database: ", error);
    });
};

export const setupCartUpdateListener = callback => {
  getQuery.onSnapshot(response => {
    const respCarts = response.docs.map(doc => doc && doc.exists && doc.data());
    callback(respCarts);
  });
};

export const addCart = ({ color, name }) => {
  collectionRef
    .doc()
    .set({
      name,
      color,
      timestamp: firebase.firestore.Timestamp.now()
    })
    .catch(error => {
      console.error("Error adding cart:", error.message);
    });
};
