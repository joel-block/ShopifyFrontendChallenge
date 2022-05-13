import React, { useState } from "react";
import { sendPrompt } from "./AJAXhelpers";

const PromptForm = ({ responses, setResponses }) => {
  const [prompt, setPrompt] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await sendPrompt(prompt);
      const newResponses = [{ prompt, response }, ...responses];
      localStorage.removeItem("responses");
      localStorage.setItem("responses", JSON.stringify(newResponses));
      setResponses(newResponses);
      setPrompt("");
    } catch (error) {
      throw error;
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={prompt}
        rows="10"
        placeholder="Enter prompt here..."
        onChange={(e) => setPrompt(e.target.value)}
      />
      <br />
      <span className="button-container">
        <button
          id="clear"
          type="button"
          onClick={() => {
            setResponses([]);
            localStorage.removeItem("responses");
          }}
        >
          Clear Responses
        </button>
        <button type="submit">Submit</button>
      </span>
    </form>
  );
};

export default PromptForm;
