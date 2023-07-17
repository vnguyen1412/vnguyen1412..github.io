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
    Jean: require('../images/Jean.webp'),
    JeanNormalAttack: require('../images/JeanNormalAttack.webp'),
    JeanSkill: require('../images/JeanSkill.jpg'),
    JeanBurst: require('../images/JeanBurst.webp'),
    JeanPassive1: require('../images/JeanPassive1.webp'),
    JeanPassive2: require('../images/JeanPassive2.webp'),
    JeanPassive3: require('../images/JeanPassive3.webp'),
}

export default images;