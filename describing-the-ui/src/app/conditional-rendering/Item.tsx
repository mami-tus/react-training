type ItemProps = {
  name: string;
  importance: number;
};

export default function Item({ name, importance }: ItemProps) {
  return (
    <li className='item'>
      {name} {importance !== 0 && <i>(Importance: {importance})</i>}
    </li>
  );
}
