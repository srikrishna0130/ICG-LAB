
function main() {
  // Get A WebGL context
  var canvas = document.getElementById("canvas");
  var gl = canvas.getContext("webgl");
  if (!gl) {
	return;
  }

	//////Linking Vertex and Frag shaders///////////////////
  var program = createProgram(gl, "vertex-shader", "fragment-shader");


	//////Collect attributs and uniform Location
  var positionAttributeLocation = gl.getAttribLocation(program, "a_position");
  var colorAttributeLocation = gl.getAttribLocation(program, "a_color");
  var texAttributeLocation = gl.getAttribLocation(program, "a_texturecoord");

  var scaleLocation = gl.getUniformLocation(program,"scale");
  var rotateLocation = gl.getUniformLocation(program,"u_rotation");
  var samplerLocation = gl.getUniformLocation(program,"u_sampler");
  
  const texture = loadTexture(gl, 'straw_hat.jpg');
	
	////// Variables
  var positions = [
    // Front face
    -1.0, -1.0,  1.0,
     1.0, -1.0,  1.0,
     1.0,  1.0,  1.0,
    -1.0,  1.0,  1.0,

    // Back face
    -1.0, -1.0, -1.0,
    -1.0,  1.0, -1.0,
     1.0,  1.0, -1.0,
     1.0, -1.0, -1.0,

    // Top face
    -1.0,  1.0, -1.0,
    -1.0,  1.0,  1.0,
     1.0,  1.0,  1.0,
     1.0,  1.0, -1.0,

    // Bottom face
    -1.0, -1.0, -1.0,
     1.0, -1.0, -1.0,
     1.0, -1.0,  1.0,
    -1.0, -1.0,  1.0,

    // Right face
     1.0, -1.0, -1.0,
     1.0,  1.0, -1.0,
     1.0,  1.0,  1.0,
     1.0, -1.0,  1.0,

    // Left face
    -1.0, -1.0, -1.0,
    -1.0, -1.0,  1.0,
    -1.0,  1.0,  1.0,
    -1.0,  1.0, -1.0,
]; 

  var indices = [
    0,  1,  2,      0,  2,  3,    // front
    4,  5,  6,      4,  6,  7,    // back
    8,  9,  10,     8,  10, 11,   // top
    12, 13, 14,     12, 14, 15,   // bottom
    16, 17, 18,     16, 18, 19,   // right
    20, 21, 22,     20, 22, 23,   // left
];

var texCoord = [
  // Front
  0.0,  0.0,
  1.0,  0.0,
  1.0,  1.0,
  0.0,  1.0,
  // Back
  0.0,  0.0,
  1.0,  0.0,
  1.0,  1.0,
  0.0,  1.0,
  // Top
  0.0,  0.0,
  1.0,  0.0,
  1.0,  1.0,
  0.0,  1.0,
  // Bottom
  0.0,  0.0,
  1.0,  0.0,
  1.0,  1.0,
  0.0,  1.0,
  // Right
  0.0,  0.0,
  1.0,  0.0,
  1.0,  1.0,
  0.0,  1.0,
  // Left
  0.0,  0.0,
  1.0,  0.0,
  1.0,  1.0,
  0.0,  1.0
]
gl.useProgram(program);

var then =0;
var cubeRotate = 0.0

function draw(now) {

		now*=0.001;  //convert to seconds
		var delta = now-then;
		then = now;
		cubeRotate += delta*20;

	  // Create a buffer 
	  var positionBuffer = gl.createBuffer();
	  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
	  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);
	  gl.enableVertexAttribArray(positionAttributeLocation);
	  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

	  var size = 3;
	  var type = gl.FLOAT; 
	  var normalize = false; 
	  var stride = 0;        
	  var offset = 0;       
	  gl.vertexAttribPointer(
		  positionAttributeLocation, size, type, normalize, stride, offset);

	  // Create a texture buffer
	  var texBuffer = gl.createBuffer();
	  gl.enableVertexAttribArray(texAttributeLocation);
	  gl.bindBuffer(gl.ARRAY_BUFFER, texBuffer);
	  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(texCoord), gl.STATIC_DRAW);
	  
	  var size = 2;          
	  var type = gl.FLOAT;   
	  var normalize = false; 
	  var stride = 0;        
	  var offset = 0;        
	  gl.vertexAttribPointer(
		  texAttributeLocation, size, type, normalize, stride, offset);

    //set up element array buffer for indices
	  var indiceBuffer = gl.createBuffer();
	  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indiceBuffer);
	  gl.bufferData(gl.ELEMENT_ARRAY_BUFFER,new Uint16Array(indices),gl.STATIC_DRAW);



		// setting up the uniforms
		var modelviewmatrix = mat4.create();
		var angle = -cubeRotate*Math.PI/180;
		var scale = [1/4,1/4,1/4,1/4];

		mat4.scale(modelviewmatrix,modelviewmatrix,scale);
		mat4.rotate(modelviewmatrix,modelviewmatrix,angle,[1,1,0]);
		mat4.rotate(modelviewmatrix,modelviewmatrix,angle,[0,0,1]);

		gl.uniformMatrix4fv(rotateLocation,false,modelviewmatrix);
    gl.uniform1i(samplerLocation,0);

    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, texture);



		//////Canvas initilisation
	  resize(gl.canvas);
	  gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
  	gl.clearColor(0.1, 0.2, 0.3, 1.0);
	  gl.clearDepth(1.0);                 // Clear everything
	  gl.enable(gl.DEPTH_TEST);           // Enable depth testing
		gl.depthFunc(gl.LEQUAL); 						// Near things obscure far things
		gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

	  // draw
	  type = gl.UNSIGNED_SHORT;
	  var primitiveType = gl.TRIANGLES;
	  var offset = 0;
	  var count = 6*6;
	  gl.drawElements(gl.TRIANGLES, count, type, offset);
	
	  requestAnimationFrame(draw);
	}
	requestAnimationFrame(draw);

}

function loadTexture(gl, url) {
  const texture = gl.createTexture();
  gl.bindTexture(gl.TEXTURE_2D, texture);

  // Because images have to be download over the internet
  // they might take a moment until they are ready.
  // Until then put a single pixel in the texture so we can
  // use it immediately. When the image has finished downloading
  // we'll update the texture with the contents of the image.
  const level = 0;
  const internalFormat = gl.RGBA;
  const width = 1;
  const height = 1;
  const border = 0;
  const srcFormat = gl.RGBA;
  const srcType = gl.UNSIGNED_BYTE;
  const pixel = new Uint8Array([0, 0, 255, 255]);  // opaque blue
  gl.texImage2D(gl.TEXTURE_2D, level, internalFormat,
                width, height, border, srcFormat, srcType,
                pixel);

  const image = new Image();
  image.crossOrigin = "anonymous";

  image.onload = function() {
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texImage2D(gl.TEXTURE_2D, level, internalFormat,
                  srcFormat, srcType, image);

    // WebGL1 has different requirements for power of 2 images
    // vs non power of 2 images so check if the image is a
    // power of 2 in both dimensions.
    if (isPowerOf2(image.width) && isPowerOf2(image.height)) {
       // Yes, it's a power of 2. Generate mips.
       gl.generateMipmap(gl.TEXTURE_2D);
    } else {
       // No, it's not a power of 2. Turn of mips and set
       // wrapping to clamp to edge
       gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
       gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
       gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    }
  };
  image.src = url;

  return texture;
}

function isPowerOf2(value) {
  return (value & (value - 1)) == 0;
}

main();
