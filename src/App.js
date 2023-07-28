import "./App.css";
// import { person, person2, person3 } from "./character-info.js";
import { people } from "./character-info.js";
import { Button, Box, Grid, IconButton } from "@mui/material";
import { NavigateBefore, NavigateNext } from "@mui/icons-material";
import { AspectRatio } from "@mui/joy";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
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

//control the distance of the slideshow animation
const variants = {
  hidden: direction => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: "ease-in",
    // transition: {
    //   x: { type: 'spring', stiffness: 300, damping: 20},
    //   opacity: { duration: 0.2 }
    // }
  },
  exit: direction => {
    return {
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
    };
  },
};

// const characterlist = [person, person2];
// const characterlist = people;
// let counter = 0;

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

// function SwitchController() {
//   return (
//     <Stack className="profile-switch" direction="row">
//       <IconButton
//         color="secondary"
//         aria-label="arrow-back"
//         size="large"
//         style={{ padding: "0" }}
//       >
//         <NavigateBefore sx={{ color: "white", fontSize: "2em" }} />
//       </IconButton>
//       <IconButton
//         color="secondary"
//         aria-label="arrow-forward"
//         size="large"
//         style={{ padding: "0" }}
//       >
//         <NavigateNext sx={{ color: "white", fontSize: "2em" }} />
//       </IconButton>
//     </Stack>
//   );
// }

function ShanaeTest() {
  const characterlist = people;
  // const characterlist = [person, person2, person3]
  let [counter, setCounter] = useState(0);
  const [direction, setDirection] = useState(0);

  // function HandleCharacterSwitch(isNext) {
  //   if (isNext) {
  //     setDirection(1);
  //     setCounter((counter + 1) % characterlist.length);
  //   } else if (!isNext && counter == 0) {
  //     setDirection(-1);
  //     setCounter(characterlist.length - 1);
  //   } else {
  //     setDirection(-1);
  //     setCounter((counter - 1) % characterlist.length);
  //   }
  // }
  function nextStep() {
    setDirection(1);
    if (counter === characterlist.length - 1) {
      setCounter(0);
      return;
    }
    setCounter(counter + 1);
  }

  function prevStep() {
    setDirection(-1);
    if (counter === 0) {
      setCounter(characterlist.length - 1);
      return;
    }
    setCounter(counter - 1);
  }

  return (
    <Box className="App-info-display" sx={{ p: 2 }}>
      {/* <SwitchController /> */}

      {/* <div className="test1"> */}
      <Grid container className="info-container" spacing={2}>
        <Grid item md={1} sx={{ alignSelf: "center" }}>
          <IconButton
            color="secondary"
            aria-label="arrow-back"
            size="large"
            style={{ padding: "0" }}
            // onClick={() => HandleCharacterSwitch(false)}
            onClick={prevStep}
          >
            <NavigateBefore sx={{ color: "white", fontSize: "3em" }} />
          </IconButton>
        </Grid>

        {/* picture container */}
        <AnimatePresence initial={false} mode='wait'>
          <Grid
            item
            xs={12}
            md={3}
            component={motion.div}
            variants={variants}
            animate="visible"
            initial="hidden"
            exit="exit"
            key={characterlist[counter].name}
            custom={direction}
          >
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

          <Grid
            container
            item
            xs={12}
            md={7}
            spacing={4}
            component={motion.div}
            variants={variants}
            animate="visible"
            initial="hidden"
            exit="exit"
            key={characterlist[counter].skillNames[0]}
            custom={direction}
          >
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
        </AnimatePresence>

        <Grid item md={1} sx={{ alignSelf: "center" }}>
          <IconButton
            color="secondary"
            aria-label="arrow-forward"
            size="large"
            style={{ padding: "0" }}
            // onClick={() => HandleCharacterSwitch(true)}
            onClick={nextStep}
          >
            <NavigateNext sx={{ color: "white", fontSize: "3em" }} />
          </IconButton>
        </Grid>
      </Grid>
      {/* </div> */}
    </Box>
  );
}
export default App;
