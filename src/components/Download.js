import React from "react";
import "./Recording.css";
import { MContext } from "./MyProvider";

export default function download(props) {
  const starting = async (stream1) => {
    const data = [];
    const mediaRecorder = new MediaRecorder(stream1);
    mediaRecorder.ondataavailable = (e) => {
      data.push(e.data);
    };
    mediaRecorder.start();
    let stop = document.getElementById("download-btn");
    stop.addEventListener("click", (e) => {
      mediaRecorder.stop();
      setTimeout(() => {
        const myBlob = new Blob(data, {
          type: "video/mp4;",
        });
        const myFlie = new File([myBlob], "demo.mp4", {
          type: "video/mp4",
        });
        document.getElementById("success").src = URL.createObjectURL(myFlie);
      }, 1000);

      setTimeout(() => {
        let video = document.getElementById("success");
        video.muted = false;
        var xhr = new XMLHttpRequest();
        xhr.open("GET", video.src, true);
        xhr.responseType = "blob";
        xhr.onload = function() {
          var urlCreator = window.URL || window.webkitURL;
          var videoUrl = urlCreator.createObjectURL(this.response);
          var tag = document.createElement("a");
          tag.href = videoUrl;
          tag.target = "_blank";
          tag.download = "sample.mp4";
          document.body.appendChild(tag);
          tag.click();
          document.body.removeChild(tag);
        };
        xhr.onerror = (err) => {
          alert("Failed to download picture");
        };
        xhr.send();
      }, 2000);
    });
  };

  function handleplay() {
    function loop() {
      let video = document.getElementById(props.vid2);
      ctx.drawImage(video, 280, 180, 810, 420, 0, 0, 640, 360);
      setTimeout(loop, 1000 / 30);
    }
    let canvas = document.getElementById("cropCvs");
    let ctx = canvas.getContext("2d");
    loop();
  }
  return (
    <MContext.Consumer>
      {(context) => (
        <>
          <div id="box">
            <video
              id={props.vid2}
              height="360"
              width="640"
              controls
              onPlay={handleplay}
              onEnded={() => {
                const playButton = document.getElementById("play-button");
                let a = playButton.style;
                playButton.innerText = "▶";
                a.padding = "7px";
                a.opacity = "0.5";
              }}
            ></video>
            <button
              id="play-button"
              onClick={(e) => {
                const video = document.getElementById(props.vid2);
                const playButton = document.getElementById("play-button");
                if (video.paused) {
                  let audioTrack;
                  let videoTrack;
                  video.play();
                  e.target.textContent = "⏸︎";
                  let a = playButton.style;
                  a.padding = "0";
                  a.opacity = "0.1";
                  let canvas = document.getElementById("cropCvs");
                  const streaming = canvas.captureStream();
                  // console.log(context.state.aadio);
                  [audioTrack] = context.state.aadio.getAudioTracks();
                  [videoTrack] = streaming.getVideoTracks();
                  const st = new MediaStream([videoTrack,audioTrack]);
                  starting(st);

                } else {
                  video.pause();
                  e.target.textContent = "▶";
                  let a = playButton.style;
                  a.padding = "7px";
                  a.opacity = "0.5";
                }
              }}
            >
              ▶
            </button>
            <button id="download-btn">Download</button>
            <canvas id="cropCvs" width="640" height="360"></canvas>
            <video
              id="success"
              playsInline
              autoPlay="autoplay"
              controls
            ></video>
          </div>
        </>
      )}
    </MContext.Consumer>
  );
}
