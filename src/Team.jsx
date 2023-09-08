import { useState } from "react";

export default function Team() {
  const [team, setTeam] = useState(11);

  const addTeam=()=>{
    const sum=team+1
    setTeam(sum)

  }
  const removeTeam=()=>{
    const remove=team-1
    setTeam(remove)
  }
  const teamStyle = {
    border: "2px solid red",
    marginBottom: "5px",
    margin: "15px",
    padding: "15px",
    borderRadius: "15px",
  };
  return (
    <div style={teamStyle}>
      <h3>Players: {team} </h3>
      <button onClick={addTeam}>Add Team</button>
      <button onClick={removeTeam}>Remove Team</button>
    </div>
  );
}
