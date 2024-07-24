import { getImageUrl } from './utils';

export default function Avatar({
  person,
  size = 100,
}: {
  person: { name: string; imageId: string };
  size: number;
}) {
  let thumbnailSize: string = 'b';
  if (size < 90) {
    thumbnailSize = 's';
  }
  return (
    <img
      className='avatar'
      src={getImageUrl(person, thumbnailSize)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}
