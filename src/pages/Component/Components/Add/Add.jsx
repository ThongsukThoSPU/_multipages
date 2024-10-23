import { useEffect, useState } from "react";
import Variable from "../Variable/Variable";

import "./Add.css";

function Add({ aValue, bValue, a1Value, b1Value }) {
  const [a, setA] = useState(0); /* const [a, setA] = useState(aValue || 0);*/
  const [b, setB] = useState(0); /*const [b, setB] = useState(bValue || 0); */
  const [a1, setA1] = useState(0); /* const [a, setA] = useState(aValue || 0);*/
  const [b1, setB1] = useState(0); /*const [b, setB] = useState(bValue || 0); */

  /*useEffect useState ไม่มีผลกับ Classcomponents*/
  useEffect(() => {
    setA(aValue || 0);
    setB(bValue || 0);
  }, [aValue, bValue]);

  useEffect(() => {
    setA1(a1Value || 0);
    setB1(b1Value || 0);
  }, [a1Value, b1Value]);

  /*Everything and at the tail end || no array*/
  useEffect(() => {});

  /*array at the tail end*/
  useEffect(() => {}, []);

  return (
    <div className="add-container">
      <div className="add1-con">
        <h3 className="add-title">Add</h3>
        <h2 className="add-display">
          <span className="badge bg-secondary">A = {a}</span>
          <span className="badge bg-info">A + B = {a + b}</span>
          <span className="badge bg-secondary">B = {b}</span>
        </h2>
        <div className="add-variable">
          <Variable type={"int"} name={"A"} value={a} setValue={setA} />
          <Variable type={"int"} name={"B"} value={b} setValue={setB} />
        </div>
      </div>
      {/* <div className="add2-con">
        <h3 className="add-title">Add</h3>
        <h2 className="add-display">
          <span className="badge bg-secondary">A = {a1}</span>
          <span className="badge bg-info">A + B = {a1 + b1}</span>
          <span className="badge bg-secondary">B = {b1}</span>
        </h2>
        <div className="add-variable">
          <Variable type={"int"} name={"A"} value={a1} setValue={setA1} />
          <Variable type={"int"} name={"B"} value={b1} setValue={setB1} />
        </div>
      </div> */}
    </div>
  );
}

export default Add;
