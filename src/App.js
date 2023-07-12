import logo from './logo.svg';
import './App.css';
import {Button, Box, Container, Grid, Paper} from '@mui/material';
import {AspectRatio} from '@mui/joy';
import characterPicture from './Jean.webp';
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
      <InfoDisplay />
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
            {/* <CharacterNameAndPicture /> */}
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
            src={characterPicture}
            alt="Jean"
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
export default App;