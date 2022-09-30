import {render, screen} from '@testing-library/react';
import UserCard from './UserCard';

describe('tests Header', () => {
  it('should render Header with the given title', () => {
    render(<UserCard avatar_url="" github_url="" name="The User" />);

    expect(screen.getByText('The User'));
  });
});
