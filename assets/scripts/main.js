// main.js

// input type number for volume 
let volumeNumber = document.getElementById("volume-number");

// input type range for volume 
let volumeSlider = document.getElementById("volume-slider");

// horn audio
let hornAudio = document.getElementById("horn-sound");

// volume image 
let volumeImage = document.getElementById("volume-image");

// sound image
let soundImage = document.getElementById("sound-image");

// submit button to play sound
let honkButton = document.getElementById("honk-btn");

// event listener to update volume on input number value change
volumeNumber.addEventListener("change", function(){ 
    // audio volume must be in range [0, 1]
    audioVolume = volumeNumber.value / 100;
    hornAudio.volume = audioVolume;

    // update slider
    volumeSlider.value = volumeNumber.value;

    // update volume icon bars
    updateVolumeIcon(volumeNumber.value);
});

// event listener to update volume on input slider value change
volumeSlider.addEventListener("change", function(){ 
    // audio volume must be in range [0, 1]
    audioVolume = volumeSlider.value / 100;
    hornAudio.volume = audioVolume;

    // update textual indicator
    volumeNumber.value = volumeSlider.value;

    // update volume icon bars
    updateVolumeIcon(volumeSlider.value);
});

// update volume icon bars based on textual indicator or icon bars
function updateVolumeIcon(value) {
    honkButton.disabled = false;
    if (value >= 67 && value <= 100) {
        volumeImage.src = "./assets/media/icons/volume-level-3.svg";
    }
    else if (value >= 34 && value <= 66) {
        volumeImage.src = "./assets/media/icons/volume-level-2.svg";
    }
    else if (value >= 1 && value <= 33) {
        volumeImage.src = "./assets/media/icons/volume-level-1.svg";
    }
    // disable honk button
    else if (value == 0) {
        volumeImage.src = "./assets/media/icons/volume-level-0.svg";
        honkButton.disabled = true;
    }
}

// air horn - event listener to change sound and sound image
let airHorn = document.getElementById("radio-air-horn");
airHorn.addEventListener("click", function(){
    hornAudio.src = "./assets/media/audio/air-horn.mp3";
    soundImage.src = "./assets/media/images/air-horn.svg";
});

// car horn - event listener to change sound and sound image
let carHorn = document.getElementById("radio-car-horn");
carHorn.addEventListener("click", function(){
    hornAudio.src = "./assets/media/audio/car-horn.mp3";
    soundImage.src = "./assets/media/images/car.svg";
});

// party horn - event listener to change sound and sound image
let partyHorn = document.getElementById("radio-party-horn");
partyHorn.addEventListener("click", function(){
    hornAudio.src = "./assets/media/audio/party-horn.mp3";
    soundImage.src = "./assets/media/images/party-horn.svg";
});

// add event listener to play correct sound on "honk"
honkButton.addEventListener("click", function(event){
    // if sound is not muted, play corresponding audio
    hornAudio.play();
    event.preventDefault();
});