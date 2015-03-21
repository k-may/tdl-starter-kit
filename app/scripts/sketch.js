tdl.require('tdl.buffers');
tdl.require('tdl.fast');
tdl.require('tdl.fps');
tdl.require('tdl.log');
tdl.require('tdl.math');
tdl.require('tdl.models');
tdl.require('tdl.primitives');
tdl.require('tdl.framebuffers');
tdl.require('tdl.programs');
tdl.require('tdl.textures');
tdl.require('tdl.webgl');

function Sketch() {

  var canvas = document.createElement("canvas");
  var gl;
  var image;
  var loaded = false;

  var noiseFBO, noisePlane;
  var plane;
  var time = 1.0;

  function init() {

    setTimeout(render, 1);

  }

  function render() {

    //todo use ts for type casting and code completion
    gl = tdl.webgl.setupWebGL(canvas, {premultipliedAlpha: false, antialias: false});
    gl.viewport(0, 0, canvas.width, canvas.height);
    gl.clear(gl.COLOR_BUFFER_BIT);

    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

    gl.clearColor(1, 1, 1, 0);
    gl.colorMask(true, true, true, true);

    plane = createPlane({}, "vertexShader", "fragmentShader");

    loaded = true;

  }

  canvas.draw = function () {

    if (loaded) {
      plane.drawPrep();
      plane.draw();
    }
  }

  function createPlane(textures, vertexTagId, fragmentTagId) {

    var program = tdl.programs.loadProgram(
      document.getElementById(vertexTagId).text,
      document.getElementById(fragmentTagId).text);

    //todo change array pattern
    var arrays = tdl.primitives.createPlane(2, 2, 1, 1);
    tdl.primitives.reorient(arrays,
      [1, 0, 0, 0,
        0, 0, 1, 0,
        0, 1, 0, 0,
        0, 0, 0, 1]);
    delete arrays.normal;

    //todo is textures an object?
    return new tdl.models.Model(program, arrays, textures);

  }

  init();
  return canvas;

}
