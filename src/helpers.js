import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import { firebaseConfig } from "./constants";

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const collectionRef = db.collection("carts");
const getQuery = db.collectionGroup("carts").orderBy("timestamp", "asc");
const getTimestamp = firebase.firestore.Timestamp.now;

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

export const addCart = ({
  color,
  name,
  file,
  onUploadProgress,
  onComplete
}) => {
  // create path for file upload
  const imgPath = "facePics/" + getTimestamp();
  // upload file
  const uploadTask = firebase
    .storage()
    .ref(imgPath)
    .put(file);

  // setup listeners for file upload
  uploadTask.on(
    "state_changed",
    onUploadProgress,
    error => {
      console.error("Error uploading file", error.message);
    },
    // on upload complete
    () => {
      // set document in firestore, with img as path
      collectionRef
        .doc()
        .set({
          name,
          color,
          timestamp: getTimestamp(),
          facepic: imgPath
        })
        .then(onComplete)
        .catch(error => {
          console.error("Error adding cart:", error.message);
        });
    }
  );
};
