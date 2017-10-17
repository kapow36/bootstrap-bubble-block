interface BootstrapBubbleBlockOptions 
{
    maxWidth?: number;
}

interface JQuery 
{
    bubbleBlock(): JQuery;
    bubbleBlock(options?: BootstrapBubbleBlockOptions): JQuery;
}