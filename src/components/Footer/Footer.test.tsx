import {render, screen} from '@testing-library/react';
import Footer from './Footer';

describe('tests Header', () => {
  it('should render Header with the given title', () => {
    render(<Footer company="Techigai" />);

    expect(screen.getByText('Techigai'));
  });
});
