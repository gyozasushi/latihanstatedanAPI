import chara1 from "../assets/chara/chara1.png";
import chara2 from "../assets/chara/chara2.png";
import chara3 from "../assets/chara/chara3.png";
import chara5 from "../assets/chara/chara5.png";
import chara6 from "../assets/chara/chara6.png";
import chara7 from "../assets/chara/chara7.png";
import chara8 from "../assets/chara/chara8.png";


const characters = [
    chara1,
    chara2,
    chara3,
    chara5,
    chara6,
    chara7,
    chara8,
  ];

export function getRandomCharacter() {
    const randomIndex = Math.floor(Math.random() * characters.length);
    return characters[randomIndex];
  }

