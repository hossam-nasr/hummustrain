import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { firebaseConfig } from "./constants";

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const collectionRef = db.collection("carts");
const getQuery = db.collectionGroup("carts");

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
      console.error("Error retrieving carts from database: ", error.message);
    });
};

export const onCartsUpdate = callback => {
  collectionRef.onSnapshot(response => {
    const respCarts = response.docs.map(doc => doc && doc.exists && doc.data());
    callback(respCarts);
  });
};

export const addCart = ({ color, name }) => {
  collectionRef
    .doc()
    .set({
      name,
      color
    })
    .catch(error => {
      console.error("Error adding cart:", error.message);
    });
};
