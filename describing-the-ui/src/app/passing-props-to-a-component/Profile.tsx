import Avatar from './Avatar';
import Card from './Card';

export default function Profile() {
  return (
    <Card>
      <Avatar
        size={40}
        person={{
          name: 'Gregorio Y. Zara',
          imageId: '7vQD0fP',
        }}
      />
      <Avatar
        size={120}
        person={{
          name: 'Gregorio Y. Zara',
          imageId: '7vQD0fP',
        }}
      />
    </Card>
  );
}
