import React, { useRef } from "react";
import logo1 from "../record-img.png";
import back from "../back.png";
import "./Recording.css";
import { Link, Outlet } from "react-router-dom";
import { MContext } from "./MyProvider";
import Editor from "@monaco-editor/react";

export default function Recording(props) {
  let stream2, audioTrack, videoTrack, adio;

  const video = () => {
    let constraintObj = {
      audio: true,
      video: {
        facingMode: { exact: "user" },
        // width: { min: 640, ideal: 1280, max: 1920 },
        // height: { min: 480, ideal: 720, max: 1080 }
        width: 395,
        height: 1200,
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
              adio = audioStream;
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
                  document.getElementById(props.vid2).src = URL.createObjectURL(
                    myFlie
                  );
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
        divstop.style.zIndex = "10";
        starting();
      })
      .catch(function(err) {
        console.log(err.name, err.message);
      });
  };

  const editorRef = useRef(null);

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
                  <div id="Monoco">
                      <Editor
                        height="70vh"
                        theme="vs-dark"
                        path= {context.state.path}
                        defaultLanguage= {context.state.dL}
                        defaultValue= {context.state.dV}
                        onMount={(editor) => {
                          editorRef.current = editor;
                        }}
                      />
                  </div>
                </div>
                <video id="vid"></video>
              </div>
              <div id="divStop">
                <Link to="/Download">
                  <button
                    id="btnStop"
                    onClick={() => {
                      context.setAadio(adio);
                    }}
                  >
                    Next{"->"}
                  </button>
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
