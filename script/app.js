var portfolioElements = {};

portfolioElements.all = [];

function Portfolios (opts) {
  this.title = opts.title;
  this.repoUrl = opts.repoUrl;
  this.deployUrl = opts.deployUrl;
  this.finishedOn = opts.finishedOn;
  this.snippet = opts.snippet;
};

Portfolios.prototype.toHtml = function() {
  var portfolioItem = Handlebars.compile($('#porfolio-template').text());
  this.daysAgo = parseInt((new Date() - new Date (this.finishedOn))/60/60/24/1000);
  this.publishedRef = ' ' + this.daysAgo + ' days ago.';
  return portfolioItem(this);
};

var portfolioPieces = [];


portfolioPieces.getAll = function (){
  $.getJSON('data/portfolioPieces.json', function(data, message, xhr){
    localStorage.setItem('portfolioArticles' , JSON.stringify(data));
    portfolioPieces.loadAll(JSON.parse(localStorage.portfolioArticles));
    portfolioElements.initHomePage();
  });
};

portfolioPieces.loadAll = function (portfolioPieces){
  portfolioPieces.sort(function(a,b) {
    return (new Date(b.finishedOn)) - (new Date(a.finishedOn));
  });

  portfolioPieces.forEach(function(ele){
    portfolioElements.all.push(new Portfolios(ele));
  });
};


portfolioElements.initHomePage = function() {
  portfolioElements.all.forEach(function(a){
    $('#portfolio-pieces').append(a.toHtml());
  });
};
