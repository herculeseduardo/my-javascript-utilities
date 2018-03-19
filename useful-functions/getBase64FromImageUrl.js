function getBase64FromImageUrl(url) {
    var canvas,
        ctx,
        dataURL,
        img = new Image();
    img.setAttribute('crossOrigin', 'anonymous');
    img.onload = function () {
        canvas = document.createElement("canvas");
        canvas.width =this.width;
        canvas.height =this.height;
        ctx = canvas.getContext("2d");
        ctx.drawImage(this, 0, 0);
        dataURL = canvas.toDataURL("image/png");
        console.log(dataURL.replace(/^data:image\/(png|jpg);base64,/, ""));
    };
    img.src = url;
    return img.src;
}