(function ($)
{
    $.fn.bubbleBlock = function (options)
    {
        this.each(function ()
        {
            if (!$(this).is("div"))
            {
                throw "bubble-block must be a div";
            }

            $(this).prop("title", $(this).text());

            //data attributes
            var maxWidth = $(this).data("width");

            //options
            if (options)
            {
                maxWidth = options.width ? options.width : maxWidth;
            }

            //defaults
            maxWidth = maxWidth ? maxWidth : 250;

            //set properties
            $(this).css("max-width", maxWidth);
            $(this).data("width", maxWidth);
        });
    };
}(jQuery));


$(document).ready(function ()
{
    $(".bubble-block").bubbleBlock();
});