import './App.css';
import {Button, Box, Grid} from '@mui/material';
import {AspectRatio} from '@mui/joy';
import characterPicture from './images/Jean.webp';
import jeanSkill from './images/JeanSkill.jpg';
import images from './constants/images.js';

import { styled } from '@mui/material/styles';
import * as React from 'react';

function App() {
  return (
    <div className="App-background">
      <div className="App-top">
        <h1>
          Genshin Impact Character Archive
        </h1>
      </div>
      {/* <InfoDisplay /> */}
      <ShanaeTest />
    </div>
  );
}

function InfoDisplay() {
  return(
    <Box
      className="App-info-display"
      sx={{p: 2}}  
    >
      <Grid container className="test">
        <Grid item xs={12} md={4}>
          <Grid item xs={12}>
            <CharacterPicture />
          </Grid>
        </Grid>
        <Grid item xs={12} md={8}>
          <Grid item xs={12}>
            <CharacterName />
          </Grid>
          <Grid item xs={12}>
            <SkillList />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

function CharacterPicture() {
  return(
    <Box>
      <AspectRatio
        variant="none"
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
    <Box>
      {/* <h3>
        Weapon:
      </h3>
      <p>Sword</p> */}
      {/* <WeaponName /> */}
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
    <Box>
      <h2>
        Jean
      </h2>
    </Box>
  );
}

function CharacterNameAndPicture() {
  return(
    <>
      <Box>
        <AspectRatio
          variant="none"
          objectFit="contain"
          ratio="3/4"
          style={{position: "relative"}}
        >
          <img
            src={images.Jean}
            alt="testing"
          />
        </AspectRatio>
      </Box>
      <Box>
        <h2>
          Jean
        </h2>
      </Box>
    </>
  );
}

function WeaponName() {
  return(
    <div className="weaponline" style={{textAlign: "center"}}>
      <h3>Weapon: </h3>
      <p>Sword</p>
    </div>
  );
}

function SkillCard() {
  return(
    <Grid item xs={12} md={2}>
      {/* <Button  variant="outlined" sx={{
        minWidth: "12vw",
        minHeight: "36vh",
        margin: "5px"}}
      > */}
      <Button variant="outlined">
        <div>
          <div>
            <img src={jeanSkill} alt="Skill" width={"100%"}/>
          </div>
          <div>
            <p>Normal Attack</p>
          </div>
        </div>
      </Button>
    </Grid>
    
  );
}

function ShanaeTest() {
  return(
    <Box
      className="App-info-display"
      sx={{p: 2}}  
    >
      <Grid container className="test" spacing={2}>
        {/* picture container */}
        <Grid item xs={12} md={4}>
          <Grid item xs={12}>
            <CharacterNameAndPicture />
          </Grid>
          <Grid item xs={12}>
            <WeaponName />
          </Grid>
        </Grid>

        {/* skill container */}
        <Grid container item xs={12} md={8}>
          {/* <Grid item xs={12}>
            <SkillList />
          </Grid> */}
          <Grid container item spacing={32} justifyItems="stretch">
            <SkillCard />
            <SkillCard />
            <SkillCard />
          </Grid>
          <Grid container item justifyContent="space-around">
            <SkillCard />
            <SkillCard />
            <SkillCard />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
export default App;