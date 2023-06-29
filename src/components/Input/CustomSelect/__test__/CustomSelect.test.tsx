import { render, screen } from '@testing-library/react';

import CustomSelect from '../CustomSelect';

import { carBrands } from 'utils/consts';

describe('CustomSelect component shoud', () => {
  it('render with passed props', () => {
    const { container } = render(
      <CustomSelect
        name={'brands'}
        label={'Test Label'}
        options={carBrands}
        value={'Ford'}
        errorMessage={''}
        onChange={jest.fn()}
        onFocus={jest.fn()}
      />,
    );

    expect(screen.getByText('Test Label')).toBeInTheDocument();
    expect(screen.getByText('Ford')).toBeInTheDocument();
    expect(container.querySelector(`select[name="brands"]`)).toBeDefined();
  });

  it('display error message when theres an error', () => {
    render(
      <CustomSelect
        name={'brands'}
        label={'Test Label'}
        options={carBrands}
        value={'Ford'}
        errorMessage={'Invalid value provided'}
        onChange={jest.fn()}
        onFocus={jest.fn()}
      />,
    );

    expect(screen.getByText('Invalid value provided')).toBeInTheDocument();
  });
});
