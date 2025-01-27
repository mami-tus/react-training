type ItemProps = {
  name: string;
  isPacked: boolean;
};

export default function Item({ name, isPacked }: ItemProps) {
  let itemContent: string | JSX.Element = name;
  if (isPacked) {
    itemContent = <del>{name + ' ✅'}</del>;
  }
  return <li className='item'>{itemContent}</li>;
}
