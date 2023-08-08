import React, { useEffect, useState } from "react";


const Prompt = () => {
  const [code, setCode] = useState("");
  const [output, setOutput]= useState("")

  const handleCodeChange = (event) => {
    setCode(event.target.value);
  };

  const handleOutputChange = (event) => {
    setOutput(event.target.value);
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