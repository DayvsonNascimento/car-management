import { render } from '@testing-library/react';

import LoadingSpinner from '../LoadingSpinner';

describe('Spinner component shoud', () => {
  it('render without errors', () => {
    render(<LoadingSpinner />);
  });
});
