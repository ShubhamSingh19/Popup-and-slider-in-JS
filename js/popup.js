// Array containing the Image data name
var imageArray = [
  "full-photo.png",
  "custmr_logo01.png",
  "custmr_logo02.png",
  "custmr_logo03.png",
];

//Array containing the Video data url
var videoArray = [
  "https://www.youtube.com/embed/RuckLtuInNY",
  "https://www.youtube.com/embed/il_t1WVLNxk",
  "https://www.youtube.com/embed/a3ICNMQW7Ok",
  "https://www.youtube.com/embed/tgbNymZ7vqY",
];

var imageIndex = 0; // index to handle image data in input
var videoIndex = 0; // index to handle video data in input

var blurSection = document.getElementById("blur-section");
var popupSectionImage = document.getElementById("popup-image-section");
var popupSectionVideo = document.getElementById("popup-video-section");
var nextImageBtn = document.getElementById("next-image-btn");
var prevImageBtn = document.getElementById("prev-image-btn");
var nextVideoBtn = document.getElementById("next-video-btn");
var prevVideoBtn = document.getElementById("prev-video-btn");
var imageContainer = document.getElementById("popup-image");
var iframe = document.getElementById("popup-video");

//functions to hide and show elements of html
function hide(element) {
  element.classList.add("hide");
}
function show(element) {
  element.classList.remove("hide");
}

//return the index through which we are able to view image or video data in popup
function getIndex(element) {
  let childArray = element.parentElement.children;
  let index = Number(childArray[0].innerHTML);
  return index;
}

// function to display and hide Image popup
function toggleImage(element) {
  var index = getIndex(element);
  if (index == 0) {
    imageContainer.src = "./img/photo-thumbnail.png";
  } else {
    imageIndex = index - 1;
    imageContainer.src = "./img/" + imageArray[imageIndex];
  }

  if (imageIndex === 0) {
    hide(prevImageBtn);
  } else if (imageIndex === imageArray.length - 1) {
    hide(nextImageBtn);
  }
  if (imageIndex > 0) {
    show(prevImageBtn);
  }
  if (imageIndex < imageArray.length - 1) {
    show(nextImageBtn);
  }
  blurSection.classList.toggle("active");
  popupSectionImage.classList.toggle("active");
}

// function to handle next button click to see the next image
function handleNextImage(element) {
  if (imageIndex < imageArray.length - 1) {
    imageContainer.src = "./img/" + imageArray[++imageIndex];
  }
  if (imageIndex === imageArray.length - 1) {
    hide(nextImageBtn);
  }
  if (imageIndex >= 1) {
    show(prevImageBtn);
  }
}

// function to handle previous button click to see the previous image
function handlePrevImage(element) {
  if (imageIndex > 0) {
    imageContainer.src = "./img/" + imageArray[--imageIndex];
  }
  if (imageIndex === 0) {
    hide(prevImageBtn);
  }
  if (imageIndex < imageArray.length - 1) {
    show(nextImageBtn);
  }
}

// function to display and hide video popup
function toggleVideo(element) {
  var index = getIndex(element);
  videoIndex = index - 1;
  if (iframe) {
    var iframeSrc = iframe.src;
    iframe.src = iframeSrc;
  }
  if (index == 0) {
    iframe.src = videoArray[0];
  } else {
    iframe.src = videoArray[videoIndex];
  }

  if (videoIndex === 0) {
    hide(prevVideoBtn);
  } else if (videoIndex === videoArray.length - 1) {
    hide(nextVideoBtn);
  }
  if (videoIndex > 0) {
    show(prevVideoBtn);
  }
  if (videoIndex < videoArray.length - 1) {
    show(nextVideoBtn);
  }
  blurSection.classList.toggle("active");
  popupSectionVideo.classList.toggle("active");
}

// function to handle next button click to see the next video
function handleNextVideo(element) {
  if (videoIndex < videoArray.length - 1) {
    iframe.src = videoArray[++videoIndex];
  }
  if (videoIndex === videoArray.length - 1) {
    hide(nextVideoBtn);
  }
  if (videoIndex >= 1) {
    show(prevVideoBtn);
  }
}

// function to handle previous button click to see the previous video
function handlePrevVideo(element) {
  if (videoIndex > 0) {
    iframe.src = videoArray[--videoIndex];
  }
  if (videoIndex === 0) {
    hide(prevVideoBtn);
  }
  if (videoIndex < videoArray.length - 1) {
    show(nextVideoBtn);
  }
}
