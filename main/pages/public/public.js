/**
 * Created by haoguo on 2/8/17.
 */
jQuery(function ($) {
    var workFlow = {
        init: function () {
            this.render();
        },
        render: function () {
            var header =
                '<header class="navbar-fixed-top header "> ' +
                '<div class="container">' +
                '<div class="navbar-toggle"> ' +
                '<span class="icon icon-tubiaozhizuomoban-copy"></span> ' +
                '</div> ' +
                '<a class="navbar-brand" href="/">PIRATE</a> ' +
                '<div class="float-sm-right navbar-mask"> ' +
                '<ul class="navbar-collapse  navbar-nav "> ' +
                '<li class="nav-link"><a href="../index/index.html">home</a></li> ' +
                '<li class="nav-link"><a href="../plugin/index.html">custom plugin</a></li> ' +
                '<li class="nav-link"><a href="#">design</a></li> ' +
                '<li class="nav-link"><a href="#">title3</a></li> </ul> ' +
                '</div> </div>' +
                '</header>';
            $('body').prepend(header);
        }
    }
    workFlow.init();
});