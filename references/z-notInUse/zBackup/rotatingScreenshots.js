import Image from 'next/image';

export default function RotatingScreenshots({ folderRoute, galleryArray }) {
  if (!folderRoute || !Array.isArray(galleryArray) || galleryArray.length === 0) {
    console.error('Invalid folderRoute or galleryArray');
    return null;
  }
  return (
    <div className="screenshot-container">
      <img className="screenshot-image" src={`${folderRoute}${galleryArray[0]}`} alt="" width={2500} height={2500} />
    </div>
  );
}
