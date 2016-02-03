var handleTabs = {};

handleTabs.toggleSections = function() {
  $('.tabs').on('click', 'li', function(e) {
    $('.part-content').hide();
    console.log($(this).data('content'));
    $('#' + $(this).data('content') + '').show();
  });
  $('.tabs .tab:first').click();
};

handleTabs.toggleSections();
