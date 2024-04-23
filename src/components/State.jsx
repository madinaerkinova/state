import { useState, useRef, useEffect } from "react";

const ProgressConfirm = () => {
  const [submitButtonText, setSubmitButtonText] = useState("Submit title");
  const [backButtonText, setBackButtonText] = useState("Back");
  const [descriptionTitle, setDescriptionTitle] = useState("Choose title content");
  const line2Ref = useRef(null);
  const line3Ref = useRef(null);

  useEffect(() => {
    const line2 = line2Ref.current;
    const line3 = line3Ref.current;

    if (line2 && line3) {
      if (submitButtonText === "Yes, go ahead") {
        line3.style.opacity = "1";
      } else {
        line3.style.opacity = "0.3";
      }

      if (submitButtonText === "Submit description") {
        line2.style.opacity = "1";
      } else {
        line2.style.opacity = "0.3";
      }
    }
  }, [submitButtonText]);

  const handleSubmit = () => {
    if (submitButtonText === "Submit title") {
      setSubmitButtonText("Submit description");
      setDescriptionTitle("Choose description content");
    } else if (submitButtonText === "Submit description") {
      setSubmitButtonText("Yes, go ahead");
      setBackButtonText("No, go back");
      setDescriptionTitle("Are you happy now?");
    } else if (submitButtonText === "Yes, go ahead") {
      setDescriptionTitle("Ok, we're done. Thanks for sending us your data!");
      setSubmitButtonText("");
      setBackButtonText("");
    }
  };

  const handleBack = () => {
    if (backButtonText === "Back") {
      setSubmitButtonText("Submit title");
      setDescriptionTitle("Choose title content");
    } else if (backButtonText === "No, go back") {
      setSubmitButtonText("Submit description");
      setBackButtonText("Back");
      setDescriptionTitle("Choose description content");
    }
  };

  return (
    <div className="container w-full max-w-3xl mx-auto my-0 py-0 px-4 flex justify-center pt-24">
      <div className="col py-6 px-8 rounded-lg w-full bg-red-500 flex gap-20">
        <div className="steps flex flex-col ">
          <div onClick={() => { setSubmitButtonText("Submit title"); setDescriptionTitle("Choose title content"); }} className="line">
            <h1>1</h1>
            <h2>Choose title</h2>
          </div>

          <div ref={line2Ref} onClick={() => { setSubmitButtonText("Submit description"); setDescriptionTitle("Choose description content"); }} className="line">
            <h1>2</h1>
            <h2>Choose description</h2>
          </div>

          <div ref={line3Ref} onClick={() => { setSubmitButtonText("Yes, go ahead"); setBackButtonText("No, go back"); setDescriptionTitle("Are you happy now?"); }} className="line">
            <h1>3</h1>
            <h2>Confirm data</h2>
          </div>
        </div>

        <div className="submits">
          <div className="description">
            <h3>{descriptionTitle}</h3>
          </div>

          <div className="submit">
            <button onClick={handleBack} className="bg-red-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded">{backButtonText}</button>
            <button onClick={handleSubmit} className="bg-red-500 hover:bg-yellow-400 text-white font-bold py-2 px-4 rounded">{submitButtonText}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressConfirm;
