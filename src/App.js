import React from "react";
import Codearea from "./components/Codearea";
import Recording from "./components/Recording";
import Download from "./components/Download";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyProvider from "./components/MyProvider";

function App() {
  const text_area = "textarea1";
  const text_id = "textarea";
  const vid = "download-vid";
  const source = "source-vid";
  const text = "#Start Coding here";

  return (
    <MyProvider>
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Codearea
                text_area={text_area}
                text_id={text_id}
                text={text}
              />
            }
          />
          <Route
            exact
            path="Recording"
            element={
              <Recording
                text_area={text_area}
                text_id={text_id}
                source={source}
                vid2={vid}
                text={text}
              />
            }
          />
          <Route
            exact
            path="Download"
            element={<Download source={source} vid2={vid} />}
          />
        </Routes>
      </BrowserRouter>
    </MyProvider>
  );
}

export default App;
