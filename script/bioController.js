(function(module) {
  var bioController = {};

  bioController.index = function() {
    $('main > section').hide();
    $('#bio').show();
  };
  module.bioController = bioController;
})(window);
