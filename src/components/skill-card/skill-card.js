import "./skill-card.css";
import "./flip-transition.css";

// function SkillCard({onClick, skillName, skillPicture, skillDescription}) {
//   return (
//     <div className="card" onClick={onClick}>
//       {/* <div className="card-back">Back</div> */}
//       <div className="card-front">
//         <div style={{position: "relative"}}>
//           <img src={skillPicture} alt="Skill" style={{width: "8em", marginTop: "20%"}}/>
//         </div>
//         <div>
//           <h3>{skillName}</h3>
//         </div>
//       </div>

//       <div className="card-back">
//         <p>{skillDescription}</p>
//       </div>
//     </div>
//   );
// }

function SkillCard({onClick, name, picture, description}) {
  return (
    <div className="card" onClick={onClick}>
      {/* <div className="card-back">Back</div> */}
      <div className="card-front">
        <div style={{position: "relative"}}>
          <img src={picture} alt="Skill" style={{width: "8em", marginTop: "20%"}}/>
        </div>
        <div>
          <h3>{name}</h3>
        </div>
      </div>

      <div className="card-back">
        <p>{description}</p>
      </div>
    </div>
  );
}

export default SkillCard;