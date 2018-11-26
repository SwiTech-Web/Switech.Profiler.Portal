import { SwitechPage } from './app.po';

describe('switech App', function() {
  let page: SwitechPage;

  beforeEach(() => {
    page = new SwitechPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
