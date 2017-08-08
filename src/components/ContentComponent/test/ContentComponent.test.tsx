import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { ContentComponent } from '../ContentComponent';
import { MOCK_GARDENS } from '../../../utils/test/comparator.test';
import { BrowserRouter } from 'react-router-dom';
import { Kindergarten } from '../ContentComponent';

describe('Content Component', () => {
  it('renders correctly', () => {
    let gardens: Kindergarten[] = [];
    MOCK_GARDENS.forEach( g => {
      gardens.push(g);
      const tree = renderer.create(
        <BrowserRouter>
          <ContentComponent kindergartens={gardens}/>
        </BrowserRouter>
      ).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
