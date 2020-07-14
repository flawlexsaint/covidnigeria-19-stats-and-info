import React, { useContext } from "react";
import { NigeriaContextApi } from "../Context/NigeriaContextApi";

const StatesComponent = () => {
  const { States } = useContext(NigeriaContextApi);
  const CountryList = States.map((State) => {
    return (
      State && (
        <tbody>
          <tr className="">
            <th key={State.state}>{State.state}</th>
            <td key={State.confirmedCases}>{State.confirmedCases}</td>
            <td key={State.casesOnAdmission}>{State.casesOnAdmission}</td>
            <td key={State.discharged}>{State.discharged}</td>
            <td key={State.death}>{State.death}</td>
          </tr>
        </tbody>
      )
    );
  });

  return (
    <div className="text-center table-responsive shadow">
      <table className="table shadow table-hover">
        <thead>
          <tr className="">
            <th>State</th>
            <th>Confirmed Cases</th>
            <th>In Recovery</th>
            <th>Discharged</th>
            <th>Deaths</th>
          </tr>
        </thead>
        {CountryList}
      </table>
    </div>
  );
};

export default StatesComponent;
