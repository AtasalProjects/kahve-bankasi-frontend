import img1 from 'assets/images/about1.jpg';
import img2 from 'assets/images/about2.jpg';
import img3 from 'assets/images/about3.jpg';
import l1 from 'assets/images/licensed/1.jpg';
import l2 from 'assets/images/licensed/2.jpg';
import l3 from 'assets/images/licensed/3.jpg';
import l4 from 'assets/images/licensed/4.jpg';
import l5 from 'assets/images/licensed/5.jpg';
import l6 from 'assets/images/licensed/6.jpg';
import l8 from 'assets/images/licensed/8.jpg';
import l9 from 'assets/images/licensed/9.jpg';
import l10 from 'assets/images/licensed/10.jpg';
import l11 from 'assets/images/licensed/11.jpg';
import l12 from 'assets/images/licensed/12.jpg';
import l13 from 'assets/images/licensed/13.jpg';
import l14 from 'assets/images/licensed/14.jpg';
import l15 from 'assets/images/licensed/15.jpg';
import l16 from 'assets/images/licensed/16.jpg';
import l17 from 'assets/images/licensed/17.jpg';
import l18 from 'assets/images/licensed/18.jpg';
import l19 from 'assets/images/licensed/19.jpg';
import l20 from 'assets/images/licensed/20.jpg';
import l21 from 'assets/images/licensed/21.jpg';
import l22 from 'assets/images/licensed/22.jpg';
import l23 from 'assets/images/licensed/23.jpg';
import l24 from 'assets/images/licensed/24.jpg';
import l25 from 'assets/images/licensed/25.jpg';

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
  l8: l8,
  l9: l9,
  l10: l10,
  l11: l11,
  l12: l12,
  l13: l13,
  l14: l14,
  l15: l15,
  l16: l16,
  l17: l17,
  l18: l18,
  l19: l19,
  l20: l20,
  l21: l21,
  l22: l22,
  l23: l23,
  l24: l24,
  l25: l25,
};

export const smImages = {
  i1: images.l1,
  i2: images.l3,
  i3: images.l4,
  i4: images.l6,
  i5: images.l10,
  i6: images.l11,
  i7: images.l12,
  i8: images.l13,
  i9: images.l14,
  i10: images.l18,
  i11: images.l20,
  i12: images.l21,
  i13: images.l22,
  i14: images.l23,
  i15:images.l24,
  i16:images.l25

};

export const lgImages = {
  i1: images.l2,
  i2: images.l5,
  i4: images.l8,
  i5: images.l9,
  i6: images.l15,
  i7: images.l16,
  i8: images.l17,
  i9: images.l19,
};

export function randomSrc(
  count: number = 1,
  type: 'lg' | 'sm' | 'all' = 'all'
): string[] {
  let keys: string[] = [];

  switch (type) {
    case 'lg':
      keys = Object.keys(lgImages) as (keyof typeof lgImages)[];
      break;
    case 'sm':
      keys = Object.keys(smImages) as (keyof typeof smImages)[];
      break;
    default:
      keys = Object.keys(images) as (keyof typeof images)[];
      break;
  }

  const uniqueIndices = new Set<number>();
  const result: string[] = [];

  // Adjust `count` if it's more than available keys
  count = Math.min(count, keys.length);

  // Generate unique random indices
  while (uniqueIndices.size < count) {
    const randomIndex = getRandomNumberBetween(0, keys.length - 1);
    uniqueIndices.add(randomIndex);
  }

  // Fetch images using the selected random indices
  uniqueIndices.forEach(index => {
    const randomKey = keys[index];
    const source =
      type === 'lg' ? lgImages[randomKey as keyof typeof lgImages] :
      type === 'sm' ? smImages[randomKey as keyof typeof smImages] :
      images[randomKey as keyof typeof images];
    result.push(source);
  });

  return result;
}


export function getRandomNumberBetween(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
