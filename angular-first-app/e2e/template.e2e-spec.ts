import {browser, by, element, protractor} from 'protractor';

describe('Custom-pipe', () => {
  beforeAll(() => {
    browser.get('/custom-pipe');
  });
  it('navigate to custom pipe', () => {
    const h2 = element(by.css('header h2')).getText();

    expect(h2).toContain('Pipe Personnalisé');
  });

  it('Pipelindrome', () => {
    const input = element(by.css('input[type="text"]'));
    input.sendKeys('papa', protractor.Key.ENTER);
    const p = element(by.id('test')).getText();
    expect(p).toContain('Palindrome : apap');
  });
});
