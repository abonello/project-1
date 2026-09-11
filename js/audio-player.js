const players = document.querySelectorAll(".audio-player");

players.forEach(player => {

    const audio = player.querySelector(".audio");
    const playButton = player.querySelector(".play-button");
    const playPosition = player.querySelector(".play-position");
    const waveformOverlay = player.querySelector(".waveform-overlay");
    const waveform = player.querySelector(".waveform");
    const volumeButton = player.querySelector(".volume-button");
    const volumeSlider = player.querySelector(".volume-slider");

    let scrubbing = false;

    // Control Progress Bar
    audio.addEventListener("timeupdate", () => {
        // console.log(audio.currentTime);
        const progress = audio.currentTime / audio.duration;
        const width = playPosition.parentElement.clientWidth;

        // console.log(progress);
        const x = progress * 1000;

        // playPosition.style.left = x + "px";
        // playPosition.style.left = progress * 263 + "px";
        playPosition.style.left = progress * width + "px";
        waveformOverlay.style.width = progress * width + "px";

        // console.log(x);

        console.log("progress:", progress);
        console.log("SVG x:", x);
        console.log("display width:", playPosition.parentElement.clientWidth);
    });

    // START SCRUBBING
    waveform.addEventListener("pointerdown", () => {
        scrubbing = true;
    });

    waveform.addEventListener("pointermove", (event) => {

        if (!scrubbing) return;

        const rect = waveform.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const progress = x / rect.width;

        audio.currentTime = progress * audio.duration;

    });

    document.addEventListener("pointerup", () => {
        scrubbing = false;
    });
    // END SCRUBBING

    // SKIP TO POSITION ON CLICK
    waveform.addEventListener("click", (event) => {

        const rect = waveform.getBoundingClientRect();
        const x = event.clientX - rect.left;

        const progress = x / rect.width;
        
        console.log(x);
        console.log(progress);
        audio.currentTime = progress * audio.duration;

    });

    // PLAY / PAUSE BUTTON
    playButton.addEventListener("click", () => {

        if (audio.paused) {

            players.forEach(otherPlayer => {

                const otherAudio = otherPlayer.querySelector(".audio");
                const otherPlayButton = otherPlayer.querySelector(".play-button");

                if (otherAudio !== audio) {
                    otherAudio.pause();
                    otherPlayButton.textContent = "▶";
                }

            });

            // audio.play();
            audio.play().catch(error => {
                console.log("Audio play failed:", error);
            });
            playButton.textContent = "Ⅱ";
        } else {
            audio.pause();
            playButton.textContent = "▶";
        }

    });

    audio.addEventListener("ended", () => {
        playButton.textContent = "▶";
    });

    // VOLUME BUTTON
    volumeButton.addEventListener("click", () => {
        volumeSlider.value = audio.volume;

        volumeButton.style.display = "none";
        volumeSlider.style.display = "block";

        resetVolumeTimeout();
    });

    let volumeAnimation;

    volumeSlider.addEventListener("input", () => {

        cancelAnimationFrame(volumeAnimation);
        resetVolumeTimeout();

        const target = Number(volumeSlider.value);
        const start = audio.volume;
        const startTime = performance.now();
        const duration = 200;

        function ramp(time) {

            const progress = Math.min((time - startTime) / duration, 1);

            // audio.volume = start + (target - start) * progress;

            // const newVolume = start + (target - start) * progress;
            const newVolume = Math.max(0, Math.min(1,
                start + (target - start) * progress
            ));
            audio.volume = newVolume;
            console.log("Volume:", newVolume);

            if (progress < 1) {
                // requestAnimationFrame(ramp);
                volumeAnimation = requestAnimationFrame(ramp);
            }

        }

        // requestAnimationFrame(ramp);
        volumeAnimation = requestAnimationFrame(ramp);
    });

    document.addEventListener("click", (event) => {
        if (!player.querySelector(".volume-button-container").contains(event.target)) {
            volumeSlider.style.display = "none";
            volumeButton.style.display = "block";
        }
    });

    let volumeTimeout;

    function resetVolumeTimeout() {

        clearTimeout(volumeTimeout);

        volumeTimeout = setTimeout(() => {
            volumeSlider.style.display = "none";
            volumeButton.style.display = "block";
        }, 3000);

    }



});