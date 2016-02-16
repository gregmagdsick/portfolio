(function(module) {
  var portfolioController = {};

  portfolioController.index = function() {

    $('main > section').hide();
    $('#portfolio-pieces').show();
  };
  module.portfolioController = portfolioController;
})(window);
