$(document).ready(function() {
    $('#sideBar').load('/templates/sideBar.html',
        function(response,status,xhr) {
            $('#internalLinks a').each(
                function(index,item) {
                    if (item['pathname'] == '/' + pageSlug) {
                        $(item).addClass('current');
                        return false; //Break out of loop
                    }
                }
            );
        }
      );

    pageSlug = $(location).attr('pathname').slice(1);
    if (!(pageSlug)) {
        pageSlug = 'main';
    }

    $('#innerWrapper').load('/templates/content-' + pageSlug + '.html',
        function(response, status, xhr) {
            if (status == 'error') {
                $('#innerWrapper').load('/templates/content-404.html');
            }
        }
    );

});
