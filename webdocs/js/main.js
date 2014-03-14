$(document).ready(function() {
    $('#sideBar').load('/templates/sideBar.html');

    pageSlug = $(location).attr('pathname').slice(1);
    if (!(pageSlug)) {
        pageSlug = 'main';
    }



    $('#innerWrapper').load('/templates/content-' + pageSlug + '.html',
                            function(response, status, xhr) {
                                if (status == 'error') {
                                    $('#innerWrapper').load('/templates/content-404.html');
                                }
                            });

});
