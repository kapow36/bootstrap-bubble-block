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

            if ($(this).find(".bubble-block-width").length > 0)
            {
                return;
            }

            //data attributes
            var maxWidth = $(this).data("width");

            //options
            if (options)
            {
                maxWidth = options.width ? options.width : maxWidth;
            }

            //defaults
            maxWidth = maxWidth ? maxWidth : 250;

            //generate html
            var textSpan = $(this).find('span:not([class])');
            textSpan.wrap('<div class="bubble-block-width"><div class="bubble-block-ellipsis"></div></div>');
            textSpan.prop("title", textSpan.text());

            //set properties
            $(this).find(".bubble-block-width").css("max-width", maxWidth - $(this).outerWidth(false) + $(this).find(".bubble-block-width").outerWidth(true));
            $(this).data("width", maxWidth);
        });
    };
}(jQuery));


$(document).ready(function ()
{
    $(document).on("click", ".bubble-block .glyphicon-click", function ()
    {
        //submit any forms on a bubble block glyphicon click
        $(this).closest(".bubble-block").find("form").submit();
    });

    $(".bubble-block").bubbleBlock();
});
