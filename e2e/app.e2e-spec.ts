import { NgPlaygroundPage } from './app.po';

describe('ng-playground App', function() {
  let page: NgPlaygroundPage;

  beforeEach(() => {
    page = new NgPlaygroundPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
