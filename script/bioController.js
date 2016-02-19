(function(module) {
  var bioController = {};

  bioController.index = function(ctx) {
    $('main > section').hide();
    $('#bio p:nth-child(5)').append('As of ' + ctx.params.marker + ' 2016 my kids are 3, 2, and 4 months old, so the search for a career is getting stronger by the day.');
    $('#bio').show();
  };
  module.bioController = bioController;
})(window);
