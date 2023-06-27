interface CarRowProps {
  carData: {
    model: string;
    brand: string;
    mainColor: string;
    value: number;
    productionCost: number;
    transportationCosts: number;
  };
}

const CarRow = ({
  carData: {
    model,
    brand,
    mainColor,
    value,
    productionCost,
    transportationCosts,
  },
}: CarRowProps) => {
  return (
    <tr>
      <td>{model}</td>
      <td>{brand}</td>
      <td>{value}</td>
      <td>{mainColor}</td>
      <td>{brand}</td>
      <td>{productionCost}</td>
      <td>{transportationCosts}</td>
    </tr>
  );
};

export default CarRow;
