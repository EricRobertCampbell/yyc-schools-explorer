import { useEffect } from "react";
import "./App.css";
import { BasicSchoolInformationProvider } from "./contexts";
import { useJsonFile } from "./hooks";
import {
  Outlet,
  NavLink,
  useLoaderData,
  useNavigation,
} from "react-router-dom";

export async function loader() {
  const response = await fetch("/data/basic_school_information.json");
  const json = await response.json();
  return { schools: json };
}

function App() {
  // @ts-expect-error
  const { schools } = useLoaderData();
  const navigation = useNavigation();
  const [makeCall, { data }] = useJsonFile("basic_school_information.json");

  useEffect(() => {
    (async () => {
      await makeCall();
    })();
  }, []);

  return (
    <BasicSchoolInformationProvider value={data}>
      <div className="App">
        <header>
          <h1>Alberta School Explorer</h1>
          <nav>
            <ul>
              {[
                ["Home", "/"],
                ["School List", "schools"],
                ["Map", "map"],
                ["Academics", "academics"],
                ["Athletics", "athletics"],
                ["Accessibility", "accessibility"],
                ["About", "about"],
              ].map(([name, to]) => (
                <li key={name}>
                  <NavLink
                    className={({ isActive, isPending }) => {
                      return isActive ? "active" : isPending ? "pending" : "";
                    }}
                    to={to}
                  >
                    {name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </header>
        <div
          id="main"
          className={
            // @ts-expect-error
            navigation === "loading" ? "loading" : ""
          }
        >
          <Outlet />
        </div>
      </div>
    </BasicSchoolInformationProvider>
  );
}

export default App;
