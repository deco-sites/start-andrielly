interface Props {
  /** @title Numero de produtos */
  /** @description Total de produtos para mostrar na vitrine */
  count: number;
}

export default function Example({ count }: Props) {
  return (
    <div>
      <h1 class="font-bold">{count}</h1>
      <p>This is an example section</p>
    </div>
  );
}