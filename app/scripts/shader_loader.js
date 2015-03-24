var ShaderLoader = (function () {
  function ShaderLoader() {

  }

  ShaderLoader.Load = function (path, callback) {
    var httpRequest;
    if (window.XMLHttpRequest) { // Mozilla, Safari, IE7+ ...
      httpRequest = new XMLHttpRequest();
    } else if (window.ActiveXObject) { // IE 6 and older
      httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
    }

    httpRequest.onreadystatechange = function () {
      // process the server response
      if (httpRequest.readyState === 4) {
        // everything is good, the response is received
        callback(httpRequest.responseText);
      } else {
        // still not ready
      }
    };
    httpRequest.open('GET', path, false);
    httpRequest.send(null);
  }
})();
