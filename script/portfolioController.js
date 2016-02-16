(function(module) {
  var portfolioController = {};

  portfolioController.index = function() {
    Portfolios.getAll();

    $('main > section').hide();
    $('#portfolio-pieces').show();
  };
  module.portfolioController = portfolioController;
})(window);
