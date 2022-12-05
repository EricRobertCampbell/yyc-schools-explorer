import { AuthorChip } from "./AuthorChip";
import { Sources } from "./Sources";

import "./About.css";

export const About = () => {
  return (
    <section id="about">
      <h2>About</h2>
      <section id="explanation">
        <p>
          This website was done as a microproject under the Calgary branch of{" "}
          <a href="https://calgary.dataforgood.ca/">Data for Good</a>. Our
          thanks for the guidance and support that they provided.
        </p>
        <p>
          If you are interested in helping this site grow, we would love to work
          with you! The site's{" "}
          <a href="https://github.com/EricRobertCampbell/yyc-schools-explorer/">
            GitHub page
          </a>{" "}
          is the place to contribute.
        </p>
      </section>
      <section id="authors">
        <h3>Authors</h3>
        <AuthorChip
          name="Ajibola Ojuawo"
          bio="A versatile Business Analyst with a keen mind, people skills and experienced in process improvement, stakeholder management, business development and banking operations.A versatile Business Analyst with a keen mind, people skills and experienced in process improvement, stakeholder management, business development and banking operations."
          picture="/ajibola.jpg"
          linkedin="https://www.linkedin.com/in/ajibolaojuawo/"
          github="https://github.com/Ajibola-Ojuawo"
        />
        <AuthorChip
          name="Eric Campbell"
          bio="I am a software developer working mostly on websites in a combination of Python, Typescript, HTML, and CSS. I am very interested in using data to beter understand the world and enabling people to make better decisions for themselves."
          picture="/eric.jpg"
          linkedin="https://www.linkedin.com/in/eric-campbell-391780210/"
          github="https://github.com/EricRobertCampbell"
        />
        <AuthorChip
          name="Johnathan Milner"
          bio=" I have always loved answering questions by researching and analyzing information. I have a knack for statistics, technology, and numbers. Working in mental health, I am experienced in therapeutic crisis intervention and case management."
          picture="/johnathan.jpg"
          linkedin="https://www.linkedin.com/in/johnathan-milner/"
          github="https://github.com/johnathanmilner"
        />
        <AuthorChip
          name="Renso Ronquillo"
          bio="I am a Spatial Data Analyst working in the natural resource and asset management sector. I helped organizations to have data-driven decisions with the use of visualization and data analysis.  I like to work with cross-functional teams , so feel free to message me for questions and collaborations."
          picture="/renso.jpg"
          linkedin="https://www.linkedin.com/in/rensoronquillo/"
          github="https://github.com/rronquil"
        />
      </section>
      <Sources />
    </section>
  );
};
