type ItemProps = {
  name: string;
  isPacked: boolean;
};

export default function Item({ name, isPacked }: ItemProps) {
  return (
    <li className='item'>
      {name} {isPacked ? '✅' : '❌'}
    </li>
  );
}
