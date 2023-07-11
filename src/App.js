import logo from './logo.svg';
import './App.css';
import {Button, Box, Container, Grid, Paper} from '@mui/material';
import {AspectRatio} from '@mui/joy';
import characterPicture from './Jean.webp';
import { styled } from '@mui/material/styles';
import * as React from 'react';

function CharacterPicture() {
  return(
    <Box
      sx={{width: 300, height: 500}}
      style={{position: "absolute", top: "30px", left: "30px"}}
    >
      <AspectRatio
        variant="soft"
        objectFit="contain"
        ratio="3/4"
        style={{position: "relative"}}
      >
        <img
          src={characterPicture}
          alt="Jean"
        />
      </AspectRatio>
    </Box>
  );
}

function SkillList() {
  return(
    <Box
      sx={{width: 600, height: 400}}
      style={{position: "absolute", top: "120px", left: "450px"}}
    >
      <h3>
        Weapon:
      </h3>
      <p>Sword</p>
      <h3>
        Talents:
      </h3>
      <p>Normal Attack</p>
      <p>Gale Blade</p>
      <p>Dandelion Breeze</p>
      <p>Wind Companion</p>
      <p>Let the Wind Lead</p>
      <p>Guiding Breeze</p>
    </Box>
  );
}

function CharacterName() {
  return(
    <Box
      sx={{width: 600, height: 75}}
      style={{position: "absolute", top: "30px", left: "450px"}}
    >
      <h2>
        Jean
      </h2>
    </Box>
  );
}

function App() {
  // return (
  //   <div className="App-background">
  //     <div className="App-top">
  //       {/* <CharacterPicture /> */}
  //       {/* <Box
  //         sx={{width: 300, height: 500, bgcolor: "red"}}
  //         style={{position: "sticky", top: "500px", left: "300px"}}
  //       >
  //         <p>
  //           asdfasf
  //         </p>
  //       </Box> */}
  //       <h1>
  //         Genshin Impact Character Archive
  //       </h1>
  //     </div>
  //     <Box
  //       className="App-info-display"
  //       // sx={{bgcolor: "pink"}}      
  //     >
  //       <CharacterPicture />
  //       <CharacterName />
  //       <SkillList />
  //     </Box>
  //     {/* <div>
  //       <CharacterPicture />
  //       <SkillList />
  //     </div> */}
  //   </div>
  // );

    return (
    <div className="App-background">
      <div className="App-top">
        <h1>
          Genshin Impact Character Archive
        </h1>
      </div>
      <Box
        className="App-info-display"
        // sx={{bgcolor: "pink"}}
        sx={{p: 2}}  
      >
        <Grid container className="test">
          <Grid item xs={12} md={4}>
            <Grid item xs={12}>
              <CharacterPictureTest />
            </Grid>
          </Grid>
          <Grid item xs={12} md={8}>
            <Grid item xs={12}>
              <CharacterNameTest />
            </Grid>
            <Grid item xs={12}>
              <SkillListTest />
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

function CharacterPictureTest() {
  return(
    <Box>
      <AspectRatio
        variant="soft"
        objectFit="contain"
        ratio="3/4"
        style={{position: "relative"}}
      >
        <img
          src={characterPicture}
          alt="Jean"
        />
      </AspectRatio>
    </Box>
  );
}

function SkillListTest() {
  return(
    <Box sx={{bgcolor: "red"}}>
      <h3>
        Weapon:
      </h3>
      <p>Sword</p>
      <h3>
        Talents:
      </h3>
      <p>Normal Attack</p>
      <p>Gale Blade</p>
      <p>Dandelion Breeze</p>
      <p>Wind Companion</p>
      <p>Let the Wind Lead</p>
      <p>Guiding Breeze</p>
    </Box>
  );
}

function CharacterNameTest() {
  return(
    <Box sx={{bgcolor: "blue"}}>
      <h2>
        Jean
      </h2>
    </Box>
  );
}
export default App;