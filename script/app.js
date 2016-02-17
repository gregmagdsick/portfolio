(function(module) {

  function Portfolios (opts) {
    Object.keys(opts).forEach(function(ele){
      this[ele] = opts[ele];
    },this);
  };

  Portfolios.prototype.toHtml = function() {
    var portfolioItem = Handlebars.compile($('#porfolio-template').text());
    var update = this.updated_at;
    this.date = update.substring(0,10);
    return portfolioItem(this);
  };

  Portfolios.getAll = function (callback){
    $.ajax({
      url: 'https://api.github.com/users/gregmagdsick/repos' + '?per_page=5&sort=updated',
      type: 'GET',
      headers: { 'Authorization': 'token ' + githubToken },
      success: function(data, mesage, xhr) {
        localStorage.setItem('portfolioArticles', JSON.stringify(data));
        Portfolios.loadAll(JSON.parse(localStorage.portfolioArticles));
      }
    }).done(callback);
  };

  Portfolios.loadAll = function (portfolioData){
    portfolioData.sort(function(a,b) {
      return (new Date(b.finishedOn)) - (new Date(a.finishedOn));
    });
    Portfolios.all = portfolioData.map(function(data){
      return new Portfolios(data);
    });
  };

  Portfolios.initHomePage = function() {
    Portfolios.all.forEach(function(a){
      $('#portfolio-pieces').append(a.toHtml());
    });
  };
  module.Portfolios = Portfolios;
}(window));
