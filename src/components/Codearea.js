import React, { useState , useRef } from "react";
import "./Codearea.css";
import { MContext } from "./MyProvider";
import { Link, Outlet } from "react-router-dom";
import Editor from "@monaco-editor/react";
import { Select } from "@chakra-ui/react";

export default function Codearea(props) {
  function changeFunc() {
    let selectBox = document.getElementById("selectBox");
    let selectedValue = selectBox.options[selectBox.selectedIndex].value;
    setFileName(selectedValue);
  }
  const files = {
    "script.js": {
      name: "script.js",
      language: "javascript",
      value: "//Code your javascript here",
    },
    "style.css": {
      name: "style.css",
      language: "css",
      value: "/*Code your css here*/",
    },
    "index.html": {
      name: "index.html",
      language: "html",
      value: "<!--Code your html here-->",
    },
    "index.json": {
      name: "index.json",
      language: "json",
      value: '{"comment":"type your json here"}',
    },
    "foo-bar.ts": {
      name: "foo-bar.ts",
      language: "typescript",
      value: "//Code your typescript here",
    },
    "sample.c": {
      name: "sample.c",
      language: "Objective-C",
      value: "//Code your C programe here",
    },
    "sample.cpp": {
      name: "sample.cpp",
      language: "C++",
      value: "//Code your C++ programe here",
    },
    "a.java": {
      name: "a.java",
      language: "java",
      value: "//Code your JAVA programe here",
    },
    "a.py": {
      name: "a.py",
      language: "python",
      value: "#Code your Python programe here",
    },
    "a.txt": {
      name: "a.txt",
      language: "text",
      value: "Enter your text here",
    },
  };

  const [fileName, setFileName] = useState("sample.c");
  const file = files[fileName];

  const editorRef = useRef(null);

  return (
    <MContext.Consumer>
      {(context) => (
        <>
          <nav>
            <h2>Code snippet</h2>
            <Link to="/Recording">
              <button id={"btn-record"} onClick={()=>{
                context.setdV(editorRef.current.getValue());
                context.setpath(file.name);
                context.setdL(file.language);
              }}>Record</button>
            </Link>
          </nav>
          <div id="container1">
            <div id="Monoco">
              <div id="btn-div">
                <div id="select-div">
                  <label htmlFor="selectBox">Language</label>
                  <div>
                  <Select
                    bg="rgb(104, 110, 101)"
                    borderColor="rgb(104, 110, 101)"
                    borderRadius={5}
                    color="black"
                    name="selectBox"
                    id="selectBox"
                    onChange={changeFunc}
                    outline={'none'}
                    cursor = 'pointer'
                    _hover={{ bg:"rgb(129, 129, 129)",borderColor:"rgb(129, 129, 129)"} }
                  >
                    <option value="sample.c">C</option>
                    <option value="sample.cpp">C++</option>
                    <option value="style.css">css</option>
                    <option value="index.html">html</option>
                    <option value="a.java">java</option>
                    <option value="script.js">javascript</option>
                    <option value="index.json">json</option>
                    <option value="a.py">python</option>
                    <option value="a.txt">text</option>
                    <option value="foo-bar.ts">typescript</option>
                  </Select>
                  </div>
                </div>
              </div>
              <div id="editor">
                <Editor
                  height="78vh"
                  theme="hc-black"
                  path={file.name}
                  defaultLanguage={file.language}
                  defaultValue={file.value}
                  onMount={(editor) => {
                    editorRef.current = editor;
                  }}
                />
              </div>
            </div>
          </div>
          <Outlet />
        </>
      )}
    </MContext.Consumer>
  );
}
