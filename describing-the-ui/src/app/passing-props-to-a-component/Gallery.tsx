import GalleryProfile from './GalleryProfile';

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <GalleryProfile
        person={{
          name: 'Maria Skłodowska-Curie',
          imageId: 'szV5sdG',
          profession: 'physicist and chemist',
          awards: [
            'Nobel Prize in Physics',
            'Nobel Prize in Chemistry',
            'Davy Medal',
            'Matteucci Medal',
          ],
          discovered: 'polonium (chemical element)',
        }}
      />
      <GalleryProfile
        person={{
          name: 'Katsuko Saruhashi',
          imageId: 'YfeOqp2',
          profession: 'geochemist',
          awards: ['Miyake Prize for geochemistry', 'Tanaka Prize'],
          discovered: 'a method for measuring carbon dioxide in seawater',
        }}
      />
    </div>
  );
}
