import "./App.css";
import { person, person2 } from "./character-info.js";
import { Button, Box, Grid, Stack, IconButton } from "@mui/material";
import { NavigateBefore, NavigateNext } from "@mui/icons-material";
import { AspectRatio } from "@mui/joy";
import { styled } from "@mui/material/styles";
import { useState } from "react";
// import characterPicture from './images/Jean.webp';
// import jeanSkill from './images/JeanSkill.jpg';
// import images from './constants/images.js';
import * as React from "react";
import FlippableCard from "./components/flippable-card";

const BootstrapButton = styled(Button)({
  backgroundColor: "#171143",
  color: "white",
  fontWeight: "bold",
  borderRadius: "6%",
  "&:hover": {
    backgroundColor: "#281e73",
    borderColor: "#0062cc",
    boxShadow: "none",
  },
});

let characterlist = [person, person2];
let counter = 0;

function App() {
  // let [counter, setCounter] = useState(0);

  return (
    <div className="App-background">
      <div className="App-top">
        <h1>Genshin Impact Character Archive</h1>
      </div>
      {/* <InfoDisplay /> */}
      <ShanaeTest />
    </div>
  );
}

//original setup with more stuff hard coded
// function InfoDisplay() {
//   return(
//     <Box
//       className="App-info-display"
//       sx={{p: 2}}
//     >
//       <Grid container className="test">
//         <Grid item xs={12} md={4}>
//           <Grid item xs={12}>
//             <CharacterPicture />
//           </Grid>
//         </Grid>
//         <Grid item xs={12} md={8}>
//           <Grid item xs={12}>
//             <CharacterName />
//           </Grid>
//           <Grid item xs={12}>
//             <SkillList />
//           </Grid>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// }

// function CharacterPicture() {
//   return(
//     <Box>
//       <AspectRatio
//         variant="none"
//         objectFit="contain"
//         ratio="3/4"
//         style={{position: "relative"}}
//       >
//         <img
//           src={characterPicture}
//           alt="Jean"
//         />
//       </AspectRatio>
//     </Box>
//   );
// }

// function SkillList() {
//   return(
//     <Box>
//       {/* <h3>
//         Weapon:
//       </h3>
//       <p>Sword</p> */}
//       {/* <WeaponName /> */}
//       <h3>
//         Talents:
//       </h3>
//       <p>Normal Attack</p>
//       <p>Gale Blade</p>
//       <p>Dandelion Breeze</p>
//       <p>Wind Companion</p>
//       <p>Let the Wind Lead</p>
//       <p>Guiding Breeze</p>
//     </Box>
//   );
// }

// function CharacterName() {
//   return(
//     <Box>
//       <h2>
//         Jean
//       </h2>
//     </Box>
//   );
// }

function CharacterNameAndPicture({ characterName, characterPicture }) {
  return (
    <div className="image-card" style={{ position: "relative" }}>
      <div>
        <h2 className="name-card">{characterName}</h2>
      </div>
      <AspectRatio
        variant="none"
        objectFit="contain"
        ratio="3/4"
        sx={{ width: "100%" }}
        style={{ position: "relative" }}
      >
        <img src={characterPicture} alt="testing" />

        {/* figure out how to center the arrows here */}
        {/* <Stack className="profile-switch" direction="row">
          <IconButton color="secondary" aria-label="arrow-back" size="large" style={{padding: "0"}}>
            <NavigateBefore sx={{ color: 'white', fontSize: "2em" }} /> 
          </IconButton>
          <IconButton color="secondary" aria-label="arrow-forward" size="large" style={{padding: "0"}}>
            <NavigateNext sx={{ color: 'white', fontSize: "2em" }} />
          </IconButton>
        </Stack> */}
      </AspectRatio>
    </div>
  );
}

function WeaponName({ characterWeapon }) {
  return (
    <div className="weaponline" style={{ textAlign: "center" }}>
      <h3>Weapon: {characterWeapon}</h3>
      {/* <p>{characterWeapon}</p> */}
    </div>
  );
}

// function SkillCard({ skillName, skillPicture, skillDescription }) {
//   return (
//     <Grid item xs={12} md={4}>
//       {/* <BootstrapButton
//         variant="contained"
//         sx={{width: "100%", minHeight: "40vh"}}
//       >
//         <div>
//           <div style={{position: "relative"}}>
//             <img src={skillPicture} alt="Skill" style={{width: "8em"}}/>
//           </div>
//           <div>
//             <p>{skillName}</p>
//           </div>
//         </div>
//       </BootstrapButton> */}
//       <FlippableCard
//         name={skillName}
//         picture={skillPicture}
//         description={skillDescription}
//       />
//     </Grid>
//   );
// }

function SwitchController() {
  return (
    <Stack className="profile-switch" direction="row">
      <IconButton
        color="secondary"
        aria-label="arrow-back"
        size="large"
        style={{ padding: "0" }}
      >
        <NavigateBefore sx={{ color: "white", fontSize: "2em" }} />
      </IconButton>
      <IconButton
        color="secondary"
        aria-label="arrow-forward"
        size="large"
        style={{ padding: "0" }}
      >
        <NavigateNext sx={{ color: "white", fontSize: "2em" }} />
      </IconButton>
    </Stack>
  );
}

function ShanaeTest() {
  return (
    <Box className="App-info-display" sx={{ p: 2 }}>
      <SwitchController />

      <div className="test1">
        <Grid container className="info-container" spacing={2}>
          {/* picture container */}
          <Grid item xs={12} md={4}>
            <Grid item xs={12}>
              <CharacterNameAndPicture
                characterName={characterlist[counter].name}
                characterPicture={characterlist[counter].picture}
              />
            </Grid>
            <Grid item xs={12}>
              <WeaponName characterWeapon={characterlist[counter].weapon} />
            </Grid>
          </Grid>

          {/* skill container */}
          {/* <Grid container item xs={12} md={8} spacing={4}>
          <SkillCard
            skillName={characterlist[counter].skillNames[0]}
            skillPicture={characterlist[counter].skillImages[0]}
            skillDescription={characterlist[counter].skillDescriptions[0]}
          />
          <SkillCard
            skillName={characterlist[counter].skillNames[1]}
            skillPicture={characterlist[counter].skillImages[1]}
            skillDescription={characterlist[counter].skillDescriptions[1]}
          />
          <SkillCard
            skillName={characterlist[counter].skillNames[2]}
            skillPicture={characterlist[counter].skillImages[2]}
            skillDescription={characterlist[counter].skillDescriptions[2]}
          />
          <SkillCard
            skillName={characterlist[counter].skillNames[3]}
            skillPicture={characterlist[counter].skillImages[3]}
            skillDescription={characterlist[counter].skillDescriptions[3]}
          />
          <SkillCard
            skillName={characterlist[counter].skillNames[4]}
            skillPicture={characterlist[counter].skillImages[4]}
            skillDescription={characterlist[counter].skillDescriptions[4]}
          />
          <SkillCard
            skillName={characterlist[counter].skillNames[5]}
            skillPicture={characterlist[counter].skillImages[5]}
            skillDescription={characterlist[counter].skillDescriptions[5]}
          />
        </Grid> */}

          <Grid container item xs={12} md={8} spacing={4}>
            <FlippableCard
              skillName={characterlist[counter].skillNames[0]}
              skillPicture={characterlist[counter].skillImages[0]}
              skillDescription={characterlist[counter].skillDescriptions[0]}
            />
            <FlippableCard
              skillName={characterlist[counter].skillNames[1]}
              skillPicture={characterlist[counter].skillImages[1]}
              skillDescription={characterlist[counter].skillDescriptions[1]}
            />
            <FlippableCard
              skillName={characterlist[counter].skillNames[2]}
              skillPicture={characterlist[counter].skillImages[2]}
              skillDescription={characterlist[counter].skillDescriptions[2]}
            />
            <FlippableCard
              skillName={characterlist[counter].skillNames[3]}
              skillPicture={characterlist[counter].skillImages[3]}
              skillDescription={characterlist[counter].skillDescriptions[3]}
            />
            <FlippableCard
              skillName={characterlist[counter].skillNames[4]}
              skillPicture={characterlist[counter].skillImages[4]}
              skillDescription={characterlist[counter].skillDescriptions[4]}
            />
            <FlippableCard
              skillName={characterlist[counter].skillNames[5]}
              skillPicture={characterlist[counter].skillImages[5]}
              skillDescription={characterlist[counter].skillDescriptions[5]}
            />
          </Grid>
        </Grid>
      </div>
    </Box>
  );
}
export default App;
