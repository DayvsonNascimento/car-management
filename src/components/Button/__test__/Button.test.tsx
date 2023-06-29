import { render, screen, act, fireEvent } from '@testing-library/react';

import Button from '../Button';

describe('Button component shoud', () => {
  it('render without errors', () => {
    render(<Button text={'Save'} />);

    expect(screen.getByText(/Save/i).closest('button')).toBeInTheDocument();
    expect(screen.getByText(/Save/i).closest('button')).toBeEnabled();
  });

  it('be disabled when then prop is true', () => {
    render(<Button text={'Save'} disabled={true} />);

    expect(screen.getByText(/Save/i).closest('button')).toBeDisabled();
  });

  it('be hidden when then show prop is false', () => {
    render(<Button text={'Save'} show={false} />);

    expect(screen.queryByText('Save')).toBeNull();
  });

  it('to call the function called as prop when clicked', () => {
    const action = jest.fn();

    render(<Button text={'Action Button'} action={action} />);

    const button = screen.getByText(/Action Button/i).closest('button')!;

    act(() => {
      fireEvent.click(button);
    });

    expect(action).toHaveBeenCalled();
  });
});
