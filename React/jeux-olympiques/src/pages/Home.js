import { useTitle } from "../hooks/useTitle";
import { useEffect, useState } from "react";
import CountryRow from "../components/CountryRow";

import bronze from "../assets/medals/bronze-medal-filled-light.svg";
import silver from "../assets/medals/silver-medal-filled-light.svg";
import gold from "../assets/medals/gold-medal-filled-light1.svg";
import total from "../assets/medals/medals-three-dots-light1.svg";

export const Home = () => {
  useTitle("Home");

  const [countries, setCountries] = useState([]);
  const [toggle, setToggle] = useState(false);

  const fetchData = async () => {
    fetch("http://localhost:3500/countries")
      .then((res) => res.json())
      .then((res) => {
        toggle ? setCountries(res) : setCountries(res.splice(0, 5));
      });
  };

  useEffect(() => {
    fetchData();
  }, [toggle]);

  const changeDisplay = () => {
    console.log("bouton appuyé");
    setToggle(!toggle);
  };

  return (
    <main>
      <section>
        <table>
          <thead>
            <tr>
              <th className="firstColCell">équipes</th>
              <th className="medal">
                <img src={gold} alt="goldMedals" />
              </th>
              <th className="medal">
                <img src={silver} alt="silverMedals" />
              </th>
              <th className="medal">
                <img src={bronze} alt="bronzeMedals" />
              </th>
              <th className="medal">
                <img src={total} alt="totalMedals" />
              </th>
            </tr>
          </thead>
          <tbody>
            {countries.map((country) => {
              return <CountryRow country={country} />;
            })}
          </tbody>
        </table>
        <button onClick={changeDisplay} className="button">
          {toggle ? "Voir moins" : "Voir plus"}
        </button>
      </section>
    </main>
  );
};
