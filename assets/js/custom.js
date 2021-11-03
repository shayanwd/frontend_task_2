var canvas = new fabric.Canvas('canvas');

function cicle() {
    canvas.add(new fabric.Circle({ radius: 30, fill: '#0984e3', top: 10, left: 10 }));
    // canvas.item(0).set({
    //     borderColor: 'black',
    //     cornerColor: '#0984e3',
    //     cornerSize: 6,
    //     transparentCorners: false
    // });
    // canvas.setActiveObject(canvas.item(0));
    // // this.__canvases.push(canvas);
}
$('#colorPicker').on('input',
    function() {
        changeColorOfSelectedItem($(this).val())
    }
);

function changeColorOfSelectedItem(color) {
    var aObject = canvas.getActiveObject();
    console.log(aObject.type);
    if (aObject.type === 'circle') {
        // aObject.getObjects().forEach(function(obj) {
        aObject.set('fill', color);
        // });
    }
    if (aObject.type === 'line') {
        aObject.set('stroke', color);
    }
    canvas.requestRenderAll();
}
$("#Line").click(function() {

    canvas.add(new fabric.Line([50, 100, 200, 200], {
        left: 170,
        top: 150,
        stroke: 'red'
    }));
    // canvas.item(1).set({
    //     borderColor: 'black',
    //     cornerColor: '#0984e3',
    //     cornerSize: 6,
    //     transparentCorners: false
    // });
    // canvas.setActiveObject(canvas.item(1));
    // this.__canvases.push(canvas);
});

document.getElementById("downloadPreview").addEventListener('click', downloadCanvas, true);

var _canvasObject = new fabric.Canvas('canvas');

var downloadCanvas = function() {
    var link = document.createElement("a");

    link.href = _canvasObject.toDataURL({ format: 'png', multiplier: 4 });
    link.download = "helloWorld.png";
    link.click();

}


var c = document.getElementById("canvas");





function download_image() {
    var canvas = document.getElementById("canvas");
    image = canvas.toDataURL("image/jpg").replace("image/jpg", "image/octet-stream");
    var link = document.createElement('a');
    link.download = "my-image.jpg";
    link.href = image;
    link.click();
}