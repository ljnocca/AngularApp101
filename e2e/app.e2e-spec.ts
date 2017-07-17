import { AngularPsAppPage } from './app.po';

describe('angular-ps-app App', () => {
  let page: AngularPsAppPage;

  beforeEach(() => {
    page = new AngularPsAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
