import React from 'react';
import { render } from '@testing-library/react';

import Index_old from '../pages/index';

describe('Index', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Index_old />);
    expect(baseElement).toBeTruthy();
  });
});
