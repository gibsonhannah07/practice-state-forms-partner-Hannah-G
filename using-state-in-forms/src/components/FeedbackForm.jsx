import { useState } from "react";
import "./FeedbackForm.css";

function FeedbackForm() {

  // set up state//
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    feedback: "",
  });

  // handleChange//
  function handleChange(event) {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;

    setFormData({
      ...formData,
      [fieldName]: fieldValue,
    });
  }

  //feedback form setup//
  return (
    <div className="page">
      <h1 className="title">Feedback Form! </h1>

      <div className="card">

        <div className="field">
          <label className="label">Full Name: </label>
          <input
            type="text"
            name="name"
            placeholder="Type your name"
            value={formData.name}
            onChange={handleChange}
            className="input"
          />
        </div>

        <div className="field">
          <label className="label">Email address: </label>
          <input
            type="email"
            name="email"
            placeholder="Type your email"
            value={formData.email}
            onChange={handleChange}
            className="input"
          />
        </div>

        <div className="field">
          <label className="label">Share any feedback you may have! </label>
          <textarea
            name="feedback"
            placeholder="Type your feedback"
            value={formData.feedback}
            onChange={handleChange}
            className="textarea"
          />
        </div>

        <button className="button">
          Submit
        </button>
      </div>

      {/* real-time preview */}
      <div className="preview">
        <h2 className="preview-title">Live Preview (so you can see what you've typed!)</h2>
        <p><strong>Name:</strong> {formData.name || "..."}</p>
        <p><strong>Email:</strong> {formData.email || "..."}</p>
        <p><strong>Feedback:</strong> {formData.feedback || "..."}</p>
      </div>
    </div>
  );

}

export default FeedbackForm;