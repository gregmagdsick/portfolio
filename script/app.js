var portfolioElements = [];

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

porfolioPieces.sort(function(a,b) {
  return (new Date(b.finishedOn)) - (new Date(a.finishedOn));
});

porfolioPieces.forEach(function(ele){
  portfolioElements.push(new Portfolios(ele));
});

portfolioElements.forEach(function(a){
  $('#portfolio-pieces').append(a.toHtml());
  console.log(a.toHtml());
});
