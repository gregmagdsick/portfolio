var portfolioElements = [];

function Portfolios (opts) {
  this.title = opts.title;
  this.repoUrl = opts.repoUrl;
  this.deployUrl = opts.deployUrl;
  this.finishedOn = opts.finishedOn;
  this.snippet = opts.snippet;
};

Portfolios.prototype.toHtml = function() {
  var $newPortfolio= $('section.portfolioPieces').clone();
  console.log($newPortfolio);

  $newPortfolio.find('h3').html('<a href="' + this.deployUrl + '">' + this.title + '</a>');
  $newPortfolio.find('time').html('about ' + parseInt((new Date() - new Date(this.finishedOn))/60/60/24/1000) + ' days ago.');
  $newPortfolio.find('.pieceSummary').html('<p>' + this.snippet + '<a href="' + this.repoUrl + '">the repo is here</a>');

  $newPortfolio.append('<hr>');

  $('article').removeClass('template');

  return $newPortfolio;
};

porfolioPieces.sort(function(a,b) {
  return (new Date(b.finishedOn)) - (new Date(a.finishedOn));
});

porfolioPieces.forEach(function(ele){
  portfolioElements.push(new Portfolios(ele));
});

portfolioElements.forEach(function(a){
  $('#portfolioPieces').append(a.toHtml());
});
