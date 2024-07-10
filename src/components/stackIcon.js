import Image from 'next/image';
import { iconsData } from '@/data/iconsData';

export default function StackIcon({ itemName }) {
  // console.log(itemName.fileName);
  return (
    <div className="stack-icon">
      {
        <img
          src={`/assets/icons/${itemName.fileName}`}
          alt={itemName.description}
        />
      }
    </div>
  );
}
