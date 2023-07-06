import logo from './logo.svg';
import './App.css';
import {Button, Box, Container} from '@mui/material';
import {AspectRatio} from '@mui/joy';
import characterPicture from './Jean.webp';

function CharacterPicture() {
  return(
    <Box
      sx={{width: 300, height: 500, bgcolor: 'red'}}
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
          alt="No Image"
        />
      </AspectRatio>
    </Box>
  );
}

function SkillList() {
  return(
    <Box
      sx={{width: 300, height: 400, bgcolor: 'blue'}}
      style={{position: "absolute", top: "120px", left: "350px"}}
    >
      <p>
        skills
      </p>
    </Box>
  );
}

function CharacterName() {
  return(
    <Box
      sx={{width: 300, height: 75, bgcolor: 'green'}}
      style={{position: "absolute", top: "30px", left: "350px"}}
    >
      <p>
        character's name
      </p>
    </Box>
  );
}

function App() {
  return (
    <div className="App-background">
      <div className="App-top">
        {/* <CharacterPicture /> */}
        {/* <Box
          sx={{width: 300, height: 500, bgcolor: "red"}}
          style={{position: "sticky", top: "500px", left: "300px"}}
        >
          <p>
            asdfasf
          </p>
        </Box> */}
        <h1>
          Genshin Impact Character Archive
        </h1>
      </div>
      <Box
        className="App-info-display"
        sx={{bgcolor: "pink"}}      
      >
        <CharacterPicture />
        <CharacterName />
        <SkillList />
      </Box>
      {/* <div>
        <CharacterPicture />
        <SkillList />
      </div> */}
    </div>
  );
}

export default App;