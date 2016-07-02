describe('Search', () => {

  beforeEach( () => {
    browser.get('/search');
  });

  it('should have correct feature heading', () => {
    expect(element(by.css('sd-search h2')).getText()).toEqual('Features');
  });

});
