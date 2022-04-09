import { render } from '@testing-library/react';

import GroundupsReact from './groundups-react';

describe('GroundupsReact', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<GroundupsReact />);
    expect(baseElement).toBeTruthy();
  });
});
