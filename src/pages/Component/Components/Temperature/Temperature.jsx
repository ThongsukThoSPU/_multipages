import { useEffect, useState } from "react";
import Variable from "../Variable/Variable";

import "./Temperature.css";

function Temperature() {
  const [celsius, setcelsius] = useState(25);
  const [fahrenheit, setfahrenheit] = useState(77);
  const [kelvin, setkelvin] = useState(298.15);
  const [activeUnit, setActiveUnit] = useState("celsius"); /*change tracking*/

  useEffect(() => {
    if (activeUnit === "celsius") {
      /*C to F and K  */
      setfahrenheit((celsius * 9) / 5 + 32);
      setkelvin(celsius + 273.15);
    }
  }, [celsius, activeUnit]);

  useEffect(() => {
    if (activeUnit === "fahrenheit") {
      /*F to C and K  */
      setcelsius(((fahrenheit - 32) * 5) / 9);
      setkelvin(((fahrenheit - 32) * 5) / 9 + 273);
    }
  }, [fahrenheit, activeUnit]);

  useEffect(() => {
    if (activeUnit === "kelvin") {
      /*K to C and F  */
      setcelsius(kelvin - 273.15);
      setfahrenheit(((kelvin - 273.15) * 9) / 5 + 32);
    }
  }, [kelvin, activeUnit]);

  const handleCelsiusChange = (value) => {
    setActiveUnit("celsius");
    setcelsius(value);
  };

  const handleFahrenheitChange = (value) => {
    setActiveUnit("fahrenheit");
    setfahrenheit(value);
  };

  const handleKelvinChange = (value) => {
    setkelvin(value);
  };

  return (
    <div className="temperature-variables">
      <h3 className="temperature-title">TEMPERATURS</h3>
      <h3 className="temperature-display">
        <span className="badge text-bg-info">{celsius.toFixed(2)} ºC</span>
        <span className="badge text-bg-info">{fahrenheit.toFixed(2)} ºF</span>
        <span className="badge text-bg-info">{kelvin.toFixed(2)} ºK</span>
      </h3>
      <div className="temperature-variables1">
        <Variable
          name={"CELSIUS"}
          value={celsius}
          setValue={handleCelsiusChange}
        />
        <Variable
          name={"FAHRENHEIT"}
          value={fahrenheit}
          setValue={handleFahrenheitChange}
        />
        <Variable
          name={"KELVIN"}
          value={kelvin}
          setValue={handleKelvinChange}
        />
      </div>
    </div>
  );
}

export default Temperature;
