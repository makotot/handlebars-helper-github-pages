/**
 * {{github-pages}}
 */

module.exports.register = function (Handlebars, options, param) {

  var path = require('path'),
    url = require('url');

  var pkg = require(path.resolve(process.cwd(), 'package.json'));

  var repoUrl = url.parse(pkg.repository.url);


  function isGithub (hostname) {
    return hostname.indexOf('github') > -1;
  }

  function getProjectName (pathname) {
    return pathname.split('/')[1];
  }

  function getRepoName (pathname) {
    return (pathname.split('/')[2]).split('.git')[0];
  }

  function generateGhPagesUrl (repo) {
    return 'http://' + getProjectName(repo.pathname) + '.github.io/' + getRepoName(repo.pathname);
  }


  Handlebars.registerHelper('github-pages', function () {
    return isGithub(repoUrl.hostname) ? new Handlebars.SafeString(generateGhPagesUrl(repoUrl)) : '';
  });

};
