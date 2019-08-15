import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import { firebaseConfig, StickManHead } from "./constants";

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const storage = firebase.storage();
const collectionRef = db.collection("carts");
const getCartsQuery = db.collectionGroup("carts").orderBy("timestamp", "asc");
const getConstantsQuery = db.doc("/triggers/constants");
const getTriggersQuery = db.doc("/triggers/triggers");
const getTimestamp = firebase.firestore.Timestamp.now;

const extractJsonFromResponse = async response =>
  Promise.all(response.docs.map(extractDocData));

const extractDocData = async doc => {
  const docJson = doc && doc.exists && doc.data();
  if (!docJson) {
    return null;
  }

  // return default head if no face pic exists
  const imgPath = docJson.facepic;
  if (!imgPath) {
    return { ...docJson, facepic: StickManHead };
  }

  // retrieve URL from the image path
  const imgRef = storage.ref(imgPath);
  const imgUrl = await imgRef.getDownloadURL().catch(error => {
    console.error("Error retrieving image URL:", error.message);
  });
  return { ...docJson, facepic: imgUrl };
};

export const getCarts = callback => {
  getCartsQuery
    .get()
    .then(response => {
      extractJsonFromResponse(response).then(callback);
    })
    .catch(error => {
      console.error("Error retrieving carts from database: ", error);
    });
};

export const setupCartUpdateListener = callback => {
  getCartsQuery.onSnapshot(response => {
    extractJsonFromResponse(response)
      .then(callback)
      .catch(error => {
        console.error("Error loading up carts: ", error.message);
      });
  });
};

export const getConstants = async () => {
  try {
    const docRef = await getConstantsQuery.get();
    const respJson = await (docRef.exists && docRef.data());
    return respJson;
  } catch (error) {
    console.error("Encountered error getting constants: ", error.message);
  }
};

export const setupTriggersUpdateListener = async callback => {
  getTriggersQuery.onSnapshot(async docRef => {
    try {
      const respJson = await (docRef.exists && docRef.data());
      callback(respJson);
    } catch (error) {
      console.log("Error refreshing triggers: ", error.message);
    }
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
  const uploadTask = storage.ref(imgPath).put(file);

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
