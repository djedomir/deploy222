import { Deploy222Page } from './app.po';

describe('deploy222 App', function() {
  let page: Deploy222Page;

  beforeEach(() => {
    page = new Deploy222Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
