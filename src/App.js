import logo from './logo.svg';
import './App.css';
import {Button, Box, Container} from '@mui/material';
import {AspectRatio} from '@mui/joy';
import backgroundPicture from './SAOWallpaper.jpg';
import characterPicture from './Kirito.jpg';

function CharacterPicture() {
  return(
    <Box
      sx={{width: 300, height: 500, bgcolor: "red"}}
      style={{position: "relative", top: "10px"}}
    >
      <AspectRatio
        variant="solid"
        objectFit="contain"
        ratio="3/4"
        style={{position: "relative", top: "10px", left: "1px"}}
      >
        <img
          src={characterPicture}
          alt="Kirito"
        />
      </AspectRatio>
    </Box>
  );
}

function SkillList() {

}

function CharacterName() {

}

function App() {
  return (
    <div
      className="App-background"
      style={{backgroundImage: `url(${backgroundPicture})` }}
    >
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
          Sword Art Online Character Archive
        </h1>
      </div>
      <div>
        <CharacterPicture />
      </div>
    </div>
  );
}

export default App;