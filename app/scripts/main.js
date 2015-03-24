/*!
 *
 *  Web Starter Kit
 *  Copyright 2014 Google Inc. All rights reserved.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *    https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License
 *
 */

var ShaderLoader = (function () {
  ShaderLoader.Load = function (path, variable) {
    var httpRequest;
    if (window.XMLHttpRequest) { // Mozilla, Safari, IE7+ ...
      httpRequest = new XMLHttpRequest();
    } else if (window.ActiveXObject) { // IE 6 and older
      httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
    }
    httpRequest.open('GET', path, false);
    httpRequest.send(null);
    return httpRequest.responseText;
  }
  return ShaderLoader;
})();


(function () {
  'use strict';
  var sketch;

  function init() {

    sketch = new Sketch();
    sketch.width = window.innerWidth;
    sketch.height = window.innerHeight;

    document.body.appendChild(sketch);
    draw();
  }


  function draw() {
    requestAnimationFrame(draw);
    sketch.draw();
  }

  init();

})();
