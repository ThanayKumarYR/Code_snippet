import React, { useState } from "react";
import "./Codearea.css";
import { MContext } from "./MyProvider";
import { Link, Outlet } from "react-router-dom";

export default function Codearea(props) {
  const [number, Countnumber] = useState(`1`);
  return (
    <MContext.Consumer>
      {(context) => (
        <>
          <nav>
            <h2>Code snippet</h2>
            <Link to="/Recording">
              <button id={"btn-record"}>Record</button>
            </Link>
          </nav>
          <div id="container1">
            <div id="count-num1">{number}</div>
            <textarea
              name="textarea"
              placeholder={props.text}
              id="textarea1"
              onChange={() => {
                let textarea = document.querySelector("textarea");
                let a = "";
                textarea.addEventListener("input", () => {
                  let text = textarea.value;
                  let lines = text.split("\n");
                  let count = lines.length;
                  let n = count
                  let j = 64;
          
                  newFunction();

                  for (let i = 1; i <= n; i++) {
                    a = a + `${i}\n`;
                    Countnumber(`${a}`);
                  }
                  context.setMessage(text);

                  function newFunction() {
                    while (lines[count - 1].length >= j) {
                      if (text[text.length - 1] !== '\n') {
                        j += 64;
                        n += 1;
                      }
                    }
                  }
                });
                var isSyncingLeftScroll = false;
                var isSyncingRightScroll = false;
                var leftDiv = document.getElementById("textarea1");
                var rightDiv = document.getElementById("count-num1");

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
            ></textarea>
          </div>
          <Outlet/>
        </>
      )}
    </MContext.Consumer>
  );
}
