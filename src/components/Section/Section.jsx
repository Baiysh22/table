import React from "react";
import "./Section.css";

const Section = ({ user }) => {
  console.log(user);
  return (
    <div>
      <div className="section-table">
        <table className="table">
          <tr>
            <td>number:</td>
            <td>Team:</td>
            <td>level:</td>
            <td>Points:</td>
          </tr>
          {user.map(item => (
            <tr>
              <td>{item.number}</td>
              <td>{item.team}</td>
              <td>{item.level}</td>
              <td>{item.points}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Section;
