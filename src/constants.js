import AllAboardTrain from "./assets/audio/AllAboardTheHummusTrain.mp3";
import trainWhistle from "./assets/audio/train_whistle.mp3";
import stickManPng from "./assets/img/stickman-thick.png";
import stickManBodyPng from "./assets/img/stickman-thick-headless.png";
import stickManHeadPng from "./assets/img/stickman-thick-head.png";

export const firebaseConfig = {
  apiKey: "AIzaSyCQhBv01Inz9eX7bC52TJnO3KyZ0odg6b4",
  authDomain: "hummustrain.firebaseapp.com",
  databaseURL: "https://hummustrain.firebaseio.com",
  projectId: "hummustrain",
  storageBucket: "hummustrain.appspot.com",
  messagingSenderId: "965342327738",
  appId: "1:965342327738:web:4cfe7db949e93693"
};

export const defaultColor = "#2ccce4";
export const defaultName = "Guest";

export const presetColorOptions = [
  "#D9E3F0",
  "#F47373",
  "#697689",
  "#37D67A",
  "#2CCCE4",
  "#555555",
  "#dce775",
  "#ff8a65",
  "#ba68c8"
];

export const loadAudio = AllAboardTrain;
export const trainLeavingAudio = trainWhistle;
export const StickManImg = stickManPng;
export const StickManBody = stickManBodyPng;
export const StickManHead = stickManHeadPng;

export const defaultSize = {
  regular: "M",
  mobile: "S"
};
