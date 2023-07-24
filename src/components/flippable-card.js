import './flippable-card.css';
import SkillCard from './skill-card/skill-card';
import {Grid} from '@mui/material';
import {CSSTransition} from 'react-transition-group';
import {useState} from 'react';

// function FlippableCard({name, picture, description}) {
//     const [showFront, setShowFront] = useState(true);
//     return(
//         <div className="flippable-card-container">
//             <CSSTransition
//                 in={showFront}
//                 timeout={300}
//                 classNames='flip'
//             >
//                 <SkillCard onClick={() => {
//                     setShowFront((v) => !v);
//                 }}
//                 skillName={name}
//                 skillPicture={picture}
//                 skillDescription={description}/>
//             </CSSTransition>
//         </div>
//     );
// }

function FlippableCard({ skillName, skillPicture, skillDescription }) {
    const [showFront, setShowFront] = useState(true);
    return(
        <Grid item xs={12} md={4}>
            <div className="flippable-card-container">
                <CSSTransition
                    in={showFront}
                    timeout={300}
                    classNames='flip'
                >
                    <SkillCard onClick={() => {
                        setShowFront((v) => !v);
                    }}
                    name={skillName}
                    picture={skillPicture}
                    description={skillDescription}/>
                </CSSTransition>
            </div>
        </Grid>
    );
}

export default FlippableCard;