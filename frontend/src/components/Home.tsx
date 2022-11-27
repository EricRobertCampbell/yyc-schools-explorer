import { Link } from "react-router-dom";
import { BasicArticleLayout } from "./Layouts";
import "./Home.css";

export const Home = () => {
  return (
    <BasicArticleLayout>
      <p>
        Welcome to the Alberta School Explorer! The purpose of this site is to
        provide a central location for information about schools in Alberta.
      </p>

      <h3>Site Map</h3>
      <ul>
        {[
          [
            "School List",
            "schools",
            "A searchable table of all schools in Alberta. Fron here, you can see the individual information for a given school.",
          ],
          ["Map", "map", "An interactive map of schools in Alberta."],
          [
            "Academics",
            "academics",
            "Display graphs and information about the academic performance of schools. At the moment, it is limited to the Diploma exam marks, but more information will be added in the future.",
          ],
          [
            "Athletics",
            "athletics",
            "A place to explore the athletic performance of different schools.",
          ],
          [
            "Accessibility",
            "accessibility",
            "A way to see the different facilities near a school.",
          ],
        ].map(([label, to, description]) => (
          <li key={label}>
            <Link to={to}>{label}</Link>: {description}
          </li>
        ))}
      </ul>
    </BasicArticleLayout>
  );
};
