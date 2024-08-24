type ItemProps = {
  name: string;
  isPacked: boolean;
};

export default function Item({ name, isPacked }: ItemProps) {
  if (isPacked) {
    return <li className='item '>{name} ✔</li>;
  }
  return <li className='item'>{name}</li>;
}
