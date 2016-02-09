(function(module) {

  function Portfolios (opts) {
    this.title = opts.title;
    this.repoUrl = opts.repoUrl;
    this.deployUrl = opts.deployUrl;
    this.finishedOn = opts.finishedOn;
    this.snippet = opts.snippet;
  };

  Portfolios.all = [];

  module.Portfolios = Portfolios;

  Portfolios.prototype.toHtml = function() {
    var portfolioItem = Handlebars.compile($('#porfolio-template').text());
    this.daysAgo = parseInt((new Date() - new Date (this.finishedOn))/60/60/24/1000);
    this.publishedRef = ' ' + this.daysAgo + ' days ago.';
    return portfolioItem(this);
  };

  Portfolios.getAll = function (){
    $.getJSON('data/portfolioPieces.json', function(data, message, xhr){
      localStorage.setItem('portfolioArticles' , JSON.stringify(data));
      Portfolios.loadAll(JSON.parse(localStorage.portfolioArticles));
      Portfolios.initHomePage();
    });
  };

  Portfolios.loadAll = function (portfolioData){
    portfolioData.sort(function(a,b) {
      return (new Date(b.finishedOn)) - (new Date(a.finishedOn));
    });

    portfolioData.forEach(function(ele){
      console.log(ele);
      Portfolios.all.push(new Portfolios(ele));
    });
  };


  Portfolios.initHomePage = function() {
    Portfolios.all.forEach(function(a){
      $('#portfolio-pieces').append(a.toHtml());
    });
  };
}(window));
