import img1 from 'assets/images/about-1.jpg';
import img2 from 'assets/images/about-2.jpg';
import img3 from 'assets/images/about-3.jpg';
import l1 from 'assets/images/licensed/1.jpg';
import l2 from 'assets/images/licensed/2.jpg';
import l3 from 'assets/images/licensed/3.jpg';
import l4 from 'assets/images/licensed/4.jpg';
import l5 from 'assets/images/licensed/5.jpg';
import l6 from 'assets/images/licensed/6.jpg';
import l7 from 'assets/images/licensed/7.jpg';
import l8 from 'assets/images/licensed/8.jpg';
import l9 from 'assets/images/licensed/9.jpg';
import l10 from 'assets/images/licensed/10.jpg';
import l11 from 'assets/images/licensed/11.jpg';
import l12 from 'assets/images/licensed/12.jpg';
import l13 from 'assets/images/licensed/13.jpg';
import l14 from 'assets/images/licensed/14.jpg';
import l15 from 'assets/images/licensed/15.jpg';

export const images = {
  about1: img1,
  about2: img2,
  about3: img3,

  // Licensed images
  l1: l1,
  l2: l2,
  l3: l3,
  l4: l4,
  l5: l5,
  l6: l6,
  l7: l7,
  l8: l8,
  l9: l9,
  l12: l10,
  l13: l11,
  l14: l12,
  l15: l13,
  l16: l14,
  l17: l15,

  // $7.50
  // https://www.istockphoto.com/tr/foto%C4%9Fraf/coffee-plantation-in-costa-rica-at-harvest-time-gm1344801894-423054392
  l10: 'https://media.istockphoto.com/id/1344801894/tr/foto%C4%9Fraf/coffee-plantation-in-costa-rica-at-harvest-time.webp?s=2048x2048&w=is&k=20&c=6n9tln5zCp4qyvW-8a33r1_DJKO1dgrY7Lj9kWCn5Gw=',

  // $7.50
  // https://www.istockphoto.com/tr/foto%C4%9Fraf/coffee-combine-harvester-gm1325763978-410683238
  l11: 'https://media.istockphoto.com/id/1325763978/tr/foto%C4%9Fraf/coffee-combine-harvester.webp?s=2048x2048&w=is&k=20&c=d39-R31uAdJgVSPZbyG6LHYnw5MQcV6Ge96oyrewqLw=',
};

export function randomSrc(count: number = 1): string[] {
  const keys = Object.keys(images) as (keyof typeof images)[]; // Specify the type of the keys

  const uniqueNumbers: number[] = [];
  const result: string[] = [];
  if (count) {
    for (let i = 0; i < count; i++) {
      let randomNumber = getRandomNumberBetween(3, 19);
      while (true) {
        if (!uniqueNumbers.includes(randomNumber)) {
          uniqueNumbers.push(randomNumber);
          break;
        }

        randomNumber = getRandomNumberBetween(3, 11);
      }
    }
  }

  for (let i = 0; i < uniqueNumbers.length; i++) {
    const randomKey = keys[uniqueNumbers[i]];
    result.push(images[randomKey]);
  }

  return result;
}

export function getRandomNumberBetween(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
