import {
  containerElem,
  displayRatingElem,
  displayRatingNumElem,
  firstRatingPageView,
  h2Elem,
  lightModeElem,
  paragraphElem,
  ratingNumElems,
  ratingNumFiveElem,
  ratingNumFourElem,
  ratingNumOneElem,
  ratingNumThreeElem,
  ratingNumTwoElem,
  secondRatingPageView,
  submitButtonElem,
} from "./gettingTheHtmlElems";

///

const handleRatingNumOne: EventListener = (event: Event): void => {
  displayRatingNumElem!.innerHTML = "1";
};
const handleRatingNumTwo: EventListener = (event: Event): void => {
  displayRatingNumElem!.innerHTML = "2";
};
const handleRatingNumThree: EventListener = (event: Event): void => {
  displayRatingNumElem!.innerHTML = "3";
};
const handleRatingNumFour: EventListener = (event: Event): void => {
  displayRatingNumElem!.innerHTML = "4";
};
const handleRatingNumFive: EventListener = (event: Event): void => {
  displayRatingNumElem!.innerHTML = "5";
};

// handling light mode
const handleLightMode: EventListener = (event: Event): void => {
  containerElem?.classList.toggle("container_light_mode");
  //
  lightModeElem?.classList.toggle("icon_star_light_mode");
  //
  h2Elem?.forEach((h2) => h2.classList.toggle("h2_light_mode"));
  //
  paragraphElem?.forEach((para) => para.classList.toggle("p_light_mode"));
  //
  ratingNumElems.forEach((rating) =>
    rating.classList.toggle("rating_num_light_mode")
  );
  //
  firstRatingPageView?.classList.toggle("first_child_light_mode");
  //
  secondRatingPageView?.classList.toggle("first_child_light_mode");
  //
  submitButtonElem?.classList.toggle("submit_light_mode");
  //
 displayRatingElem?.classList.toggle("display_rating_light_mode");
};

//handling the submit
const handleSubmitBtn: EventListener = (event: Event): void => {
  if (displayRatingNumElem!.innerHTML === "") {
    alert("please select a rating");
  } else {
    firstRatingPageView?.classList.toggle("first_child_second_style");
    secondRatingPageView?.classList.toggle("second_child_second_style");
  }
};

//event listeners
lightModeElem?.addEventListener("click", handleLightMode);
submitButtonElem?.addEventListener("click", handleSubmitBtn);
ratingNumOneElem?.addEventListener("click", handleRatingNumOne);
ratingNumTwoElem?.addEventListener("click", handleRatingNumTwo);
ratingNumThreeElem?.addEventListener("click", handleRatingNumThree);
ratingNumFourElem?.addEventListener("click", handleRatingNumFour);
ratingNumFiveElem?.addEventListener("click", handleRatingNumFive);
