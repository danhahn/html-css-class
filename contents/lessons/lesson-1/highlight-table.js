$(function() {
    var lessonValues = ['*', '.class', '#id', 'element', 'element,element', 'element element', 'element>element', 'element+element', ':first-child', ':last-child'];
    var usedLesson = [];

    $('table tr td:first-child').each(function() {
        var self = $(this);
        if ($.inArray(self.text(), lessonValues) != -1) {
            self.parent().addClass('active');
        }
    });

});
