export default function Resume() {
  const resumeLink = '/resume.pdf';

  return (
    <div className="aboutContainer mt-4">
      <h1>Resume</h1>
      <p>
        Here's a summary of my technical proficiencies. For a detailed view, feel free to download my resume.
      </p>
      <a href={resumeLink} download="resume.pdf" className="downloadButton">
        <button className="resBtn">Download Resume</button>
      </a>
      <div className="skillsContainer">
        <h1>Skills</h1>
        <div className="skillsList">
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>Node</span>
          <span>React</span>
          <span>MongoDB</span>
          <span>MySQL</span>
        </div>
      </div>
    </div>
  );
}
