import { useState } from "react"
import { resume as fr } from './fr'
import en from './en'
import './App.css'

function Quad(props) {
  return <div className="quad" style={{ display: "grid", marginTop: "4mm", marginBottom: "2mm", width: "100%", gridTemplateColumns: "auto auto", gridTemplateRows: "auto auto" }}>
    <b>{props.topleft}</b>
    <b style={{ textAlign: "right" }}>{props.topright}</b>
    <em>{props.bottomleft}</em>
    <em style={{ textAlign: "right" }}>{props.bottomright}</em>
  </div >
}

function Diploma(diploma) {
  return <div>
    <Quad
      topleft={diploma.title} topright={diploma.where}
      bottomleft={diploma.school} bottomright={`${diploma.from} - ${diploma.to}`} />
    {diploma.description}
  </div >
}

function Experience(experience) {
  return <div>
    <Quad
      topleft={experience.employer} topright={experience.where}
      bottomleft={experience.title} bottomright={`${experience.from} - ${experience.to}`} />
    {experience.description}
    {!experience.keywords ? <></> : <><br /><u>Mots-clés:</u> {experience.keywords.reduce((left, right, i) => left ? <>{left}, <em key={i}>{right}</em></> : <em key={i}>{right}</em>, null)}.</>}
  </div >
}

export default function App() {
  const [resume, setResume] = useState(fr)
  const publications = {
    papers: resume.publications.academic.map((publication, i) => <li key={i}>
      <b>{publication.title}</b>, {publication.status} <em>{publication.ref}</em>
    </li>),
    open: resume.publications["open-source"].map((publication, i) => <li key={i}>
      <b>{publication.title}</b>: {publication.description}
    </li>),
  }
  return (
    <>
      <header style={{ display: "flex", width: "fit-content", margin: "auto", marginBottom: "5mm", alignItems: "center" }}>
        <div style={{ display: "flex", flexDirection: "column", textAlign: "right" }}>
          <h1>{resume.name}</h1>
          <a href={`mailto:${resume.email}`}>{resume.email}</a>
          <a href={`tel:${resume.phone}`}>{resume.phone}</a>
        </div>
        <img src="/20180804_165441.png" style={{ height: "1.8cm", marginLeft: "3mm" }} />
      </header>
      <section>
        <div style={{ margin: "5mm" }}>{resume.intro}</div>
      </section>
      <section>
        <h2>Expérience de travail:</h2>
        {resume.experience.map((experience, i) => <Experience key={i} {...experience} />)}
      </section>

      <section>
        <h2>Parcours Académique:</h2>
        {resume.academics.map((diploma, i) => <Diploma key={i} {...diploma} />)}
      </section>

      <section>
        <h2>{publications.papers.length ? "Publications" : "Open Source"}</h2>
        {publications.papers.length ? (<><h3>Littérature:</h3><ul>
          {publications.papers}
        </ul></>) : (<></>)}
        {publications.papers.length ? (<h3>Open Source:</h3>) : (<></>)}
          En plus de participations occasionelles à divers projets open-source (rust-analyzer, nalgebra, rls-vscode...), j'ai créé quelques libraries open-source, dont :<ul>
          {publications.open}
        </ul>
      </section>
      <section>
        <h2>Compétences</h2>
        <h3>Langues</h3>
        <ul>
          {resume.skills.linguistic.map((language, i) => <li key={i}>{language.name}: {language.details}</li>)}
        </ul>
        <h3>Développement logiciel</h3>
        J'ai une passion particulière pour le développement logiciel et les langages, qui m'a conduit à m'initier à nombre d'entre eux, et à tirer de leurs diverses philosophies des pratiques globalement applicables pour améliorer l'expressivité, l'efficacité et la fiabilité de mes logiciels.<br />
        Je pratique régulièrement les languages suivants: {resume.skills.programming.frequent.reduce((left, right, i) => left ? <>{left}, <em key={i}>{right}</em></> : <em key={i}>{right}</em>, null)}.<br />
        Moins régulièrement, je pratique: {resume.skills.programming.occasional.reduce((left, right, i) => left ? <>{left}, <em key={i}>{right}</em></> : <em key={i}>{right}</em>, null)}...<br />
        {resume.skills.programming.web}.
      </section>
    </>
  );
}
