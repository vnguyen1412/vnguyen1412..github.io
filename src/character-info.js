import images from './constants/images.js';

class CharacterInfo{
    name;
    picture;
    weapon;
    skillNames;
    skillImages;
    skillDescriptions;

    constructor(name, picture, weapon, skillNames, skillImages, skillDescriptions) {
        this.name = name;
        this.picture = picture;
        this.weapon = weapon;
        this.skillNames = skillNames;
        this.skillImages = skillImages;
        this.skillDescriptions = skillDescriptions;
    }
}

let person = new CharacterInfo(
    'Jean',
    images.Jean,
    'Sword',
    ['Favonius Bladework', 'Gale Blade', 'Dandelion Breeze', 'Wind Companion', 'Let the Wind Lead', 'Guiding Breeze'],
    [images.JeanNormalAttack, images.JeanSkill, images.JeanBurst, images.JeanPassive1, images.JeanPassive2, images.JeanPassive3],
    ['Desc1', 'Desc2', 'Desc3', 'Desc4', 'Desc5', 'Desc6']
)

let person2 = new CharacterInfo(
    'Diluc',
    images.Diluc,
    'Claymore',
    ['Tempered Sword', 'Searing Onslaught', 'Dawn', 'Relentless', 'Blessing of Phoenix', 'Tradition of the Dawn Knight'],
    [images.DilucNormalAttack, images.DilucSkill, images.DilucBurst, images.DilucPassive1, images.DilucPassive2, images.DilucPassive3],
    ['Desc1', 'Desc2', 'Desc3', 'Desc4', 'Desc5', 'Desc6']
)

// let person2 = new CharacterInfo(
//     'Diluc',
//     images.Diluc,
//     'Claymore',
//     ['', '', '', '', '', ''],
//     [],
//     ['', '', '', '', '', '']
// )

// export default CharacterInfo
export default person

export {person, person2}