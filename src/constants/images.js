// this is another way to do it but it is much cleaner to do the bottom one
// import Jean from "../images/Jean.webp";
// import JeanSkill from "../images/JeanSkill.jpg";

// export default {
//     Jean
// }

// export {
//     JeanSkill, Jean
// }

//for some reason adding the .default is not showing up the image
//Ex: Jean: require('../images/Jean.webp').default
const images = {
    Jean: require('../images/Jean/Jean.webp'),
    JeanNormalAttack: require('../images/Jean/JeanNormalAttack.webp'),
    JeanSkill: require('../images/Jean/JeanSkill.webp'),
    JeanBurst: require('../images/Jean/JeanBurst.webp'),
    JeanPassive1: require('../images/Jean/JeanPassive1.webp'),
    JeanPassive2: require('../images/Jean/JeanPassive2.webp'),
    JeanPassive3: require('../images/Jean/JeanPassive3.webp'),

    Diluc: require('../images/Diluc/Diluc.webp'),
    DilucNormalAttack: require('../images/Diluc/DilucNormalAttack.webp'),
    DilucSkill: require('../images/Diluc/DilucSkill.webp'),
    DilucBurst: require('../images/Diluc/DilucBurst.webp'),
    DilucPassive1: require('../images/Diluc/DilucPassive1.webp'),
    DilucPassive2: require('../images/Diluc/DilucPassive2.webp'),
    DilucPassive3: require('../images/Diluc/DilucPassive3.webp'),

    Shogun: require('../images/Shogun/Shogun.webp'),
    ShogunNormalAttack: require('../images/Shogun/ShogunNormalAttack.webp'),
    ShogunSkill: require('../images/Shogun/ShogunSkill.webp'),
    ShogunBurst: require('../images/Shogun/ShogunBurst.webp'),
    ShogunPassive1: require('../images/Shogun/ShogunPassive1.webp'),
    ShogunPassive2: require('../images/Shogun/ShogunPassive2.webp'),
    ShogunPassive3: require('../images/Shogun/ShogunPassive3.webp'),
}

export default images;