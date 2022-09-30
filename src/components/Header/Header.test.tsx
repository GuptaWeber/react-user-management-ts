import {render, screen} from '@testing-library/react';
import Header from './Header';

describe('tests Header', () => {
  it('should render Header with the given title', () => {
    render(<Header title="Head" />);

    expect(screen.getByText('Head'));
  });
});
