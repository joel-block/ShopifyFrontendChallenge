import React, { useState, useEffect } from "react";
import PromptForm from "./PromptForm";

const Main = () => {
  const [responses, setResponses] = useState([]);

  useEffect(() => {
    async function checkStorage() {
      const localResponses = JSON.parse(localStorage.getItem("responses"));
      if (localResponses) {
        setResponses(localResponses);
      }
    }

    checkStorage();
  }, [setResponses]);

  return (
    <main className="main-page">
      <header>
        <h1>Enjoy playing with the AI!</h1>
      </header>
      <section className="form">
        <PromptForm responses={responses} setResponses={setResponses} />
      </section>
      <section className="responses">
        <h2>Responses:</h2>
        {responses.length ? (
          <>
            {responses.map((response, idx) => {
              return (
                <article key={`response[${idx}]`}>
                  <table>
                    <tbody>
                      <tr>
                        <th>Prompt:</th>
                        <td>{response.prompt}</td>
                      </tr>
                      <tr className="space" />
                      <tr>
                        <th>Response:</th>
                        <td>{response.response}</td>
                      </tr>
                    </tbody>
                  </table>
                </article>
              );
            })}
          </>
        ) : (
          <h3>No Responses Yet</h3>
        )}
      </section>
    </main>
  );
};

export default Main;
