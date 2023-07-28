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

// let person = new CharacterInfo(
//     'Jean',
//     images.Jean,
//     'Sword',
//     ['Favonius Bladework', 'Gale Blade', 'Dandelion Breeze', 'Wind Companion', 'Let the Wind Lead', 'Guiding Breeze'],
//     [images.JeanNormalAttack, images.JeanSkill, images.JeanBurst, images.JeanPassive1, images.JeanPassive2, images.JeanPassive3],
//     ['Desc1', 'Desc2', 'Desc3', 'Desc4', 'Desc5', 'Desc6']
// )

// let person2 = new CharacterInfo(
//     'Diluc',
//     images.Diluc,
//     'Claymore',
//     ['Tempered Sword', 'Searing Onslaught', 'Dawn', 'Relentless', 'Blessing of Phoenix', 'Tradition of the Dawn Knight'],
//     [images.DilucNormalAttack, images.DilucSkill, images.DilucBurst, images.DilucPassive1, images.DilucPassive2, images.DilucPassive3],
//     ['Desc1', 'Desc2', 'Desc3', 'Desc4', 'Desc5', 'Desc6']
// )

// let person3 = new CharacterInfo(
//     'Raiden Shogun',
//     images.Shogun,
//     'Polearm',
//     ['Origin', 'Transcendence: Baleful Omen', 'Secret Art: Musou Shinsetsu', 'Wishes Unnumbered', 'Enligntened One', 'All-Preserver'],
//     [images.ShogunNormalAttack, images.ShogunSkill, images.ShogunBurst, images.ShogunPassive1, images.ShogunPassive2, images.ShogunPassive3],
//     ['Desc1', 'Desc2', 'Desc3', 'Desc4', 'Desc5', 'Desc6']
// )

const people = [
    new CharacterInfo(
        'Jean',
        images.Jean,
        'Sword',
        ['Favonius Bladework', 'Gale Blade', 'Dandelion Breeze', 'Wind Companion', 'Let the Wind Lead', 'Guiding Breeze'],
        [images.JeanNormalAttack, images.JeanSkill, images.JeanBurst, images.JeanPassive1, images.JeanPassive2, images.JeanPassive3],
        ['Desc1', 'Desc2', 'Desc3', 'Desc4', 'Desc5', 'Desc6']
    ),
    
    new CharacterInfo(
        'Diluc',
        images.Diluc,
        'Claymore',
        ['Tempered Sword', 'Searing Onslaught', 'Dawn', 'Relentless', 'Blessing of Phoenix', 'Tradition of the Dawn Knight'],
        [images.DilucNormalAttack, images.DilucSkill, images.DilucBurst, images.DilucPassive1, images.DilucPassive2, images.DilucPassive3],
        ['Desc1', 'Desc2', 'Desc3', 'Desc4', 'Desc5', 'Desc6']
    ),

    new CharacterInfo(
        'Raiden Shogun',
        images.Shogun,
        'Polearm',
        ['Origin', 'Transcendence: Baleful Omen', 'Secret Art: Musou Shinsetsu', 'Wishes Unnumbered', 'Enligntened One', 'All-Preserver'],
        [images.ShogunNormalAttack, images.ShogunSkill, images.ShogunBurst, images.ShogunPassive1, images.ShogunPassive2, images.ShogunPassive3],
        ['Desc1', 'Desc2', 'Desc3', 'Desc4', 'Desc5', 'Desc6']
    ),
]

// new CharacterInfo(
//     'Diluc',
//     images.Diluc,
//     'Claymore',
//     ['', '', '', '', '', ''],
//     [images.NormalAttack, images.Skill, images.Burst, images.Passive1, images.Passive2, images.Passive3],
//     ['', '', '', '', '', '']
// ),

// export default CharacterInfo
export default people;
// export default person;

export {people}
// export {person, person2, person3}