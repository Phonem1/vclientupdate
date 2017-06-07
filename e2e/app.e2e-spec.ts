import { VclientPage } from './app.po';

describe('vclient App', () => {
  let page: VclientPage;

  beforeEach(() => {
    page = new VclientPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
