var portfolioElements = [];

function Portfolios (opts) {
  this.title = opts.title;
  this.repoUrl = opts.repoUrl;
  this.deployUrl = ops.deployUrl;
  this.finishedOn = opts.finishedOn;
  this.snippet = opts.snippet;
};


porfolioPieces.forEach(function(ele){
  portfolioElements.push(new Portfolios(ele));
});
