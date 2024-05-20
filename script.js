

$(function() {
    let productId = "3423878"; //TODO: your product ID goes here
    let caption = "Deal of the Day!"; //TODO: change this text to whatever you like
    $('.elOrderProductOptinProductName input[value="'+productId+'"]').siblings('label').append('<br/><span class="top-product-label">'+caption+'</span><br />');
    $('.elOrderProductOptinProductName input[value="'+productId+'"]').parent().addClass('custom-top-product');
});

.custom-top-product{
    padding: 2px;
    background-clip: content-box;
    background-color: #F0D500;
    border: 2px dashed #F0D500;
}
.custom-top-product:hover{
    border-style: solid;
}
.custom-top-product .top-product-label{
    font-size: 16px;
    padding-left: 21px;
    color:#fff;
    display: inline;
}