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

export default CharacterInfo