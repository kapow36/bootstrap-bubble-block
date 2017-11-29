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
                console.log($(this).find(".bubble-block-width").length > 0);
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
            var children = $(this).children();
            children.remove();
            var text = $(this).text();
            $(this).empty();
            $(this).append('<div class="bubble-block-width"><div class="bubble-block-ellipsis"></div></div>');
            $(this).append(children);
            $(this).find(".bubble-block-ellipsis").text(text);
            $(this).prop("title", text);

            //set properties
            $(this).find(".bubble-block-width").css("max-width", maxWidth - $(this).outerWidth(false) + $(this).find(".bubble-block-width").outerWidth(true));
            $(this).data("width", maxWidth);
        });
    };
}(jQuery));


$(document).ready(function ()
{
    $(".bubble-block").bubbleBlock();
});