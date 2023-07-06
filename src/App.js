import logo from './logo.svg';
import './App.css';
import {Button, Box, Container} from '@mui/material';
import {AspectRatio} from '@mui/joy';
import characterPicture from './Jean.webp';

function CharacterPicture() {
  return(
    <Box
      sx={{width: 300, height: 500, bgcolor: 'red'}}
      style={{position: "relative", top: "100px", left: "100px"}}
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
      sx={{width: 300, height: 500, bgcolor: 'blue'}}
      style={{position: "relative", top: "50px", left: "600px"}}
    >
      <p>
        dfjasldfjas;ldfj
      </p>
    </Box>
  );
}

function CharacterName() {
  return(
    <Box>

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
      <div>
        <CharacterPicture />
      </div>
      <div>
        <SkillList />
      </div>
    </div>
  );
}

export default App;