import { render, screen } from '@testing-library/react';

import Table from '../Table';

const columnsDef = [
  { headerName: 'Model', field: 'model', cellRender: (item: any) => item.model },
  { headerName: 'Brand', field: 'brand', cellRender: (item: any) => item.brand },
  { headerName: 'Main Color', field: 'mainColor', cellRender: (item: any) => item.mainColor },
];

const tableData = [
  {
    id: 'LtMUJ68omBgBkCWs3Tc7',
    model: 'Mustang',
    brand: 'Ford',
    mainColor: 'Red',
    value: 12000,
    productionCost: 5000,
    transportationCost: 2000,
  },
];

describe('Table component shoud', () => {
  it('render witht he passed props', async () => {
    render(
      <Table
        tableData={tableData}
        columnsDef={columnsDef}
        isEditing={false}
        setData={jest.fn()}
        setDisableSave={jest.fn()}
      />,
    );

    expect(await screen.findByText('Model')).toBeInTheDocument();
    expect(await screen.findByText('Brand')).toBeInTheDocument();
    expect(await screen.findByText('Main Color')).toBeInTheDocument();

    expect(screen.getByDisplayValue(tableData[0].model)).toBeInTheDocument();
  });

  it('contain all the table data passed', () => {
    render(
      <Table
        tableData={tableData}
        columnsDef={columnsDef}
        isEditing={true}
        setData={jest.fn()}
        setDisableSave={jest.fn()}
      />,
    );

    const { model, brand, mainColor } = tableData[0];

    Object.values({ model, brand, mainColor }).forEach((value) => {
      expect(screen.getByDisplayValue(value)).toBeInTheDocument();
    });
  });
});
