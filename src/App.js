import logo from './logo.svg';
import './App.css';
import {Button, Box} from '@mui/material';
import {AspectRatio} from '@mui/joy';
import characterPicture from './Kirito.jpg';

function CharacterPicture() {
  return(
    <Box sx={{width: 300, height: 500, bgcolor: "blue"}}>
        <AspectRatio
          variant="solid"
          objectFit="contain"
          ratio="3/4"
          // style={{position: "relative", top: "10px", left: "1px"}}
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
    <div className="App-top">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <Box sx={{width: 300, height: 500, bgcolor: "blue"}}>
        <AspectRatio
          variant="solid"
          objectFit="contain"
          ratio="3/4"
          // style={{position: "relative", top: "10px", left: "1px"}}
        >
          <img
            src={characterPicture}
            alt="Kirito"
          />
        </AspectRatio>
      </Box> */}
      <CharacterPicture />
      <Box
        sx={{width: 300, height: 500, bgcolor: "red"}}
        style={{position: "sticky", top: "500px", left: "300px"}}
      >
        <p>
          asdfasf
        </p>
      </Box>
      <Button>VT WAS HERE!</Button>
    </div>
  );
}

export default App;