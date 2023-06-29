import { render, screen } from '@testing-library/react';

import DefaultInput from '../DefaultInput';

describe('DefaultInput component shoud', () => {
  it('render with passed props', () => {
    const { container } = render(
      <DefaultInput
        label={'Test Label Default Input'}
        value={'Camaro'}
        errorMessage={''}
        onChange={jest.fn()}
        onFocus={jest.fn()}
      />,
    );

    expect(screen.getByText('Test Label Default Input')).toBeInTheDocument();
    expect(container.querySelector(`input[name="Test Label Default Input"]`)).toBeDefined();
    expect(screen.getByDisplayValue('Camaro')).toBeInTheDocument();
  });

  it('display error message when theres an error', () => {
    render(
      <DefaultInput
        label={'Test Label'}
        value={'Ford'}
        errorMessage={'Invalid value provided'}
        onChange={jest.fn()}
        onFocus={jest.fn()}
      />,
    );

    expect(screen.getByText('Invalid value provided')).toBeInTheDocument();
  });
});
