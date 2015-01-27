var expect = require('chai').expect,
  Handlebars = require('handlebars');

var ghPages = require('./');

ghPages.register(Handlebars, {});


describe('handlebars-helper-github-pages', function () {
  it('should return github pages url of current repo', function () {
    var compiled = Handlebars.compile('{{github-pages}}')();

    expect(compiled).to.equal('http://makotot.github.io/handlebars-helper-github-pages');
  });
});
