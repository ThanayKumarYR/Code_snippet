import React from "react";
import "./Recording.css";

export default function download(props) {
  function handleplay() {
    function loop() {
      let video = document.getElementById(props.vid2);
      ctx.drawImage(video, 280, 180, 810, 420, 0, 0, 640, 360);
      // const streaming = canvas.captureStream();
      // const success = document.getElementById("success");
      // success.srcObject = streaming;
      // success.onloadedmetadata = function (e) {
      //   success.play();
      // };
      setTimeout(loop, 1000 / 30);
    }
    let canvas = document.getElementById("cropCvs");
    let ctx = canvas.getContext("2d");
    loop();
  }
  const play = (e) => {
    const video = document.getElementById(props.vid2);
    const playButton = document.getElementById("play-button");
    if (video.paused) {
      video.play();
      e.target.textContent = "⏸︎";
      let a = playButton.style;
      a.padding = "0";
      a.opacity = "0.1";
    }
    else {
      video.pause();
      e.target.textContent = "▶";
      let a = playButton.style;
      a.padding = "7px";
      a.opacity = "0.5";
    }
  };

  const downloadVideo = () => {
    let video = document.getElementById(props.vid2);
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
  };
  return (
    <>
      <div id="box">
        <video
          id={props.vid2}
          height="360"
          width="640"
          controls
          onPlay={handleplay}
          onEnded ={()=>{
            const playButton = document.getElementById("play-button");
            let a = playButton.style;
            playButton.innerText = '▶';
            a.padding = "7px";
            a.opacity = "0.5";
          }}
        ></video>
        <button id="play-button" onClick={play}>
          ▶
        </button>
        <button id="download-btn" onClick={downloadVideo}>
          Download
        </button>
        <canvas id="cropCvs" width="640" height="360"></canvas>
        {/* <video id="success" playsInline autoPlay="autoplay" controls></video> */}
      </div>
    </>
  );
}
