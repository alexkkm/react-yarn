import React, { useEffect, useState } from "react";
import CodePresenter from "./CodePresenter";

const Prompt = () => {
  const [code, setCode] = useState("");

  const handleCodeChange = (event) => {
    setCode(event.target.value);
  };

  const executeCode = () => {
    var output=document.getElementById("output")
    try {
      // You can execute the code using eval() function, but be cautious as it can be a security risk.
      var result=eval(code);
      output.textContent=result; 
    } catch (error) {
      output.textContent="Error: "+error.message;
    }
  };

  const DefaultCodeDisplay = () => {
    return (
      <pre>
        <code>
          {`<span className="code-keyword">const</span> <span className="code-variable">name</span> = <span className="code-string">'John'</span>;`}
        </code>
      </pre>
    );
  };


  const test = `function hi(){
    console.log("Hello World");
  }`;

  return (
    <div>
      <textarea
        value={code}
        onChange={handleCodeChange}
        placeholder="Write your JavaScript code here..."
        cols={80}
        rows={10}
      ></textarea>
      <button onClick={executeCode}>Run Code</button>
      <pre id="output"></pre>

      <DefaultCodeDisplay />

      <CodePresenter code={test}/>
    </div>
  );
};

export default Prompt;


/*

// html
<div>
    <label for="code">Enter JavaScript code:</label>
    <textarea id="code" rows="5" cols="50"></textarea>
    <button id="runBtn">Run Code</button>
    <pre id="output"></pre>
</div>

// javascript
document.getElementById("runBtn").addEventListener("click", function() {
   var code = document.getElementById("code").value;
   var output = document.getElementById("output");
   
   try {
      // Execute the code
      var result = eval(code);
      // Display the output
      output.textContent = result;
   } catch (error) {
      // Display any errors that occur during execution
      output.textContent = "Error: " + error.message;
   }
});

*/