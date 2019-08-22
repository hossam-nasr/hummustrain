import React, { useState, useEffect } from "react";
import { isMobileOnly } from "react-device-detect";
import { Modal } from "react-bootstrap";
import "rodal/lib/rodal.css";
import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";
import {
  Container,
  Title,
  ButtonContainer,
  HeaderContainer,
  ButtonFiller,
  ModalTitle,
  Credits
} from "./styles";
import ActionButton from "../../components/ActionButton";
import Train from "./components/Train";
import SizePicker from "./components/SizePicker";
import AddCartForm from "./components/AddCartForm";
import TimerOverlay from "./components/TimerOverlay";
import NextTrainTimer from "./components/NextTrainTimer";
import {
  addCart,
  setupCartUpdateListener,
  getConstants,
  setupTriggersUpdateListener
} from "../../helpers";
import {
  loadAudio,
  trainLeavingAudio,
  defaultLeaveAnimationDuration,
  defaultTimerDisplayDuration,
  defaultSize,
  defaultNextTrainTime
} from "../../constants";
const moment = require("moment");

const audio = new Audio(loadAudio);
const leaveAudio = new Audio(trainLeavingAudio);

let constants = null;
getConstants().then(result => {
  constants = result;
});

const isHummusThursday = moment().isoWeekday() === 4;

const MainScreen = () => {
  const [carts, setCarts] = useState([]);
  const [cartSize, setCartSize] = useState(
    isMobileOnly ? defaultSize.mobile : defaultSize.regular
  );
  const [modalVisible, setModalVisible] = useState(false);
  const [formUploadProgress, setFormUploadProgress] = useState(0);
  const [uploading, setUploading] = useState(false);
  const [displayTimer, setDisplayTimer] = useState(false);
  const [timerStartTime, setTimerStartTime] = useState(null);
  const [nextTrainTime, setNextTrainTime] = useState(defaultNextTrainTime);
  const [leaving, setLeaving] = useState(false);
  const [doneLeaving, setDoneLeaving] = useState(false);

  const { width, height } = useWindowSize();

  const showModal = () => {
    setModalVisible(true);
  };

  const hideModal = () => {
    setModalVisible(false);
    audio.pause();
    audio.currentTime = 0;
  };

  const onButtonPress = () => {
    audio.play();
    showModal();
  };

  const onFormProgress = snapshot => {
    const percentageComplete =
      (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    setFormUploadProgress(percentageComplete);
  };

  const onFormComplete = () => {
    hideModal();
    setUploading(false);
    setFormUploadProgress(0);
  };

  const onAddCartFormSubmit = ({ name, color, file }) => {
    setUploading(true);
    setFormUploadProgress(10);
    addCart({
      name,
      color,
      file,
      onUploadProgress: onFormProgress,
      onComplete: onFormComplete
    });
  };

  // set the start date of the timer when we first display it
  // avoid resetting "Date.now()" on every render and resetting timer on state updates
  useEffect(() => {
    if (displayTimer) {
      setTimerStartTime(Date.now());
    }
  }, [displayTimer]);

  // play train leaving audio when it's leaving
  useEffect(() => {
    if (leaving) {
      leaveAudio.play();
    }
  }, [leaving]);

  // set up listeners
  useEffect(() => {
    setupCartUpdateListener(carts => {
      setCarts(carts);
    });

    setupTriggersUpdateListener(
      ({ leaving, displayTimer, done, nextTrain }) => {
        setLeaving(leaving);
        setDisplayTimer(displayTimer);
        setDoneLeaving(done);
        setNextTrainTime(nextTrain);
      }
    );
  }, []);

  return (
    <Container>
      {isHummusThursday && <Confetti width={width} height={height} />}
      {displayTimer && (
        <TimerOverlay
          start={timerStartTime || Date.now()}
          done={doneLeaving}
          duration={
            constants
              ? constants.timerDisplayDuration
              : defaultTimerDisplayDuration
          }
        />
      )}
      <HeaderContainer>
        <Title>
          {isHummusThursday
            ? "IT'S HUMMUS THURSDAY!"
            : "ALL ABOARD THE HUMMUS TRAIN"}
        </Title>
        <SizePicker setCartSize={setCartSize} selectedSize={cartSize} />
        {!displayTimer && <NextTrainTimer time={nextTrainTime} />}
      </HeaderContainer>
      <Train
        carts={carts}
        cartSize={cartSize}
        leaving={leaving}
        animationDuration={
          constants
            ? constants.leaveAnimationDuration
            : defaultLeaveAnimationDuration
        }
      />
      <ButtonFiller />
      <Credits>
        {"Copyright (C) 2019 HummusTrain. Icons made by "}
        <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
          Freepik
        </a>
        {" from "}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
        {" is licensed by "}
        <a
          href="http://creativecommons.org/licenses/by/3.0/"
          title="Creative Commons BY 3.0"
          target="_blank"
        >
          CC 3.0 BY
        </a>
      </Credits>
      <ButtonContainer>
        <ActionButton onClick={onButtonPress}>
          Board the Hummus Train!
        </ActionButton>
      </ButtonContainer>
      <Modal
        centered
        scrollable
        size="lg"
        show={modalVisible}
        onHide={hideModal}
      >
        <Modal.Header closeButton>
          <ModalTitle>Board the Hummus Train!</ModalTitle>
        </Modal.Header>
        <AddCartForm
          onSubmit={onAddCartFormSubmit}
          progress={formUploadProgress}
          uploading={uploading}
        />
      </Modal>
    </Container>
  );
};

export default MainScreen;
