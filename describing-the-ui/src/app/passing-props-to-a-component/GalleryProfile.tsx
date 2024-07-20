import { getImageUrl } from './utils';

export default function GalleryProfile({
  person: { name, imageId, profession, awards, discovery, imageSize = 70 },
}: {
  person: {
    name: string;
    imageId: string;
    profession: string;
    awards: string[];
    discovery: string;
    imageSize: number;
  };
}) {
  return (
    <section className='profile'>
      <h2>{name}</h2>
      <img
        className='avatar'
        src={getImageUrl({ imageId })}
        alt={name}
        width={imageSize}
        height={imageSize}
      />
      <ul>
        <li>
          <b>Profession: </b>
          {profession}
        </li>
        <li>
          <b>Awards: {awards.length}</b>
          {awards.map((award) => `(${award})`).join(', ')}
        </li>
        <li>
          <b>Discovered: </b>
          {imageSize}
        </li>
      </ul>
    </section>
  );
}
