
attribute vec4 position;
varying vec2 v_texCoord;
attribute vec2 texCoord;

void main() {
    v_texCoord = texCoord;
   gl_Position = position;
}
