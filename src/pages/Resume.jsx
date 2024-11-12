import React from "react";

const Resume = () => {
  return (
    <section>
      <h2>Resume</h2>
      <a href="/path/to/resume.pdf" download>
        Download Resume
      </a>
      <ul>
        <li>React</li>
        <li>Node.js</li>
        <li>JavaScript</li>
        {/* Add more skills here */}
      </ul>
    </section>
  );
};

export default Resume;
