import React, { useState } from "react";
import logo1 from "../record-img.png";
import back from "../back.png";
import "./Recording.css";
import { Link, Outlet } from "react-router-dom";
import { MContext } from "./MyProvider";

export default function Recording(props) {
  const [number, Countnumber] = useState(`1`);

  const video = () => {
    let constraintObj = {
      audio: true,
      video: {
        facingMode: { exact: "user" },
        // width: { min: 640, ideal: 1280, max: 1920 },
        // height: { min: 480, ideal: 720, max: 1080 }
        width: 435,
        height: 1000,
      },
    };

    if (navigator.mediaDevices === undefined) {
      navigator.mediaDevices = {};
      navigator.mediaDevices.getUserMedia = function(constraintObj) {
        let getUserMedia =
          navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
        if (!getUserMedia) {
          return Promise.reject(
            new Error("getUserMedia is not implemented in this browser")
          );
        }
        return new Promise(function(resolve, reject) {
          getUserMedia.call(navigator, constraintObj, resolve, reject);
        });
      };
    } else {
      navigator.mediaDevices
        .enumerateDevices()
        .then((devices) => {
          devices.forEach((device) => {
            console.log(device.kind.toUpperCase(), device.label);
            //, device.deviceId
          });
        })
        .catch((err) => {
          console.log(err.name, err.message);
        });
    }

    navigator.mediaDevices
      .getUserMedia(constraintObj)
      .then(function(mediaStreamObj) {
        // connect the media stream to the first video element
        let video = document.querySelector("video");

        if ("srcObject" in video) {
          video.srcObject = mediaStreamObj;
        } else {
          //old version
          video.src = window.URL.createObjectURL(mediaStreamObj);
        }
        video.muted = false;
        video.onloadedmetadata = function(ev) {
          //show in the video element what is being captured by the webcam
          video.play();
        };

        const starting = async () => {
          let stream2, audioTrack, videoTrack;
          navigator.mediaDevices
            .getDisplayMedia({
              video: {
                mediaSource: "screen",
              },
            })
            .then(async (displayStream) => {
              [videoTrack] = displayStream.getVideoTracks();
              const audioStream = await navigator.mediaDevices
                .getUserMedia({ audio: true })
                .catch((e) => {
                  throw e;
                });
              [audioTrack] = audioStream.getAudioTracks();
              stream2 = new MediaStream([videoTrack, audioTrack]);
              const mediaRecorder = new MediaRecorder(stream2);
              const data = [];
              mediaRecorder.ondataavailable = (e) => {
                data.push(e.data);
              };
              mediaRecorder.start();

              function stoplocalStream(localStream) {
                console.log("stop called");
                localStream.getAudioTracks()[0].stop();
                localStream.getVideoTracks()[0].stop();
                console.log("Stopped, state = " + mediaRecorder.state);
                //shows recording
              }
                let stop = document.getElementById("btnStop");
                stop.addEventListener("click", (e) => {
                  stoplocalStream(stream2);
                  setTimeout(() => {
                    const myBlob = new Blob(data, {
                      type: "video/mp4;",
                    });
                    const myFlie = new File([myBlob], "demo.mp4", {
                      type: "video/mp4;",
                    });
                    document.getElementById(
                      props.vid2
                    ).src = URL.createObjectURL(myFlie);
                  }, 1000);
                  const video = document.getElementById("vid");
                  const mediaStream = video.srcObject;
                  const tracks = mediaStream.getTracks();
                  tracks[0].stop();
                  tracks.forEach((track) => track.stop());
                });
            })
            .catch(console.error);
        };
        let divstop = document.getElementById("divStop");
        divstop.style.zIndex = "0";
        starting();
      })
      .catch(function(err) {
        console.log(err.name, err.message);
      });
  };

  return (
    <>
      <MContext.Consumer>
        {(context) => (
          <>
            <div id="box">
              <Link to="/">
                <img id="back" src={back} alt="Back" />
              </Link>
              <div id="record">
                <div id="container">
                  <div id="count-num">{number}</div>
                  <textarea
                    name="textarea"
                    id={props.text_id}
                    placeholder="Click here and press Enter twice to see the code entered just now!"
                    onChange={() => {
                      const textarea = document.querySelector(props.text_id);
                      let a = "";
                      textarea.addEventListener("input", () => {
                        let text = textarea.value;
                        let lines = text.split("\n");
                        let count = lines.length;
                        let n = count;
                        let j = 47;

                        newFunction();

                        for (let i = 1; i <= n; i++) {
                          a = a + `${i}\n`;
                          Countnumber(`${a}`);
                        }

                        function newFunction() {
                          while (lines[count - 1].length >= j) {
                            if (text[text.length - 1] !== "\n") {
                              j += 46;
                              n += 1;
                            }
                          }
                        }
                      });
                      var isSyncingLeftScroll = false;
                      var isSyncingRightScroll = false;
                      var leftDiv = document.getElementById(props.text_id);
                      var rightDiv = document.getElementById("count-num");

                      leftDiv.onscroll = function() {
                        if (!isSyncingLeftScroll) {
                          isSyncingRightScroll = true;
                          rightDiv.scrollTop = this.scrollTop;
                        }
                        isSyncingLeftScroll = false;
                      };
                      rightDiv.onscroll = function() {
                        if (!isSyncingRightScroll) {
                          isSyncingLeftScroll = true;
                          leftDiv.scrollTop = this.scrollTop;
                        }
                        isSyncingRightScroll = false;
                      };
                    }}
                  >
                    {context.state.message}
                  </textarea>
                </div>
                <video id="vid"></video>
              </div>
              <canvas id="canva"></canvas>
              <div id="divStop">
                <Link to="/Download">
                  <button id="btnStop">Next{"->"}</button>
                </Link>
              </div>
              <button id="btnStart" onClick={video}>
                <img src={logo1} alt="" />
                <span>Start recording</span>
              </button>
            </div>
            <Outlet />
          </>
        )}
      </MContext.Consumer>
    </>
  );
}
