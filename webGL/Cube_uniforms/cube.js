
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
  var rotateLocation = gl.getUniformLocation(program,"u_rotation");
  var perspectiveLocation = gl.getUniformLocation(program,"u_perspective");

	//////Canvas initilisation

  resize(gl.canvas);
  gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
  gl.clearDepth(1.0);                 // Clear everything
  gl.enable(gl.DEPTH_TEST);           // Enable depth testing
	gl.depthFunc(gl.LEQUAL); 						// Near things obscure far things
	gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

	
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

 var color = [

  	1,0,0,1,
  	1,0,0,1,
  	1,0,0,1,
  	1,0,0,1,

  	0,1,0,1,
  	0,1,0,1,
  	0,1,0,1,
  	0,1,0,1,

  	0,0,1,1,
  	0,0,1,1,
  	0,0,1,1,
  	0,0,1,1,

  	1,1,0,1,
  	1,1,0,1,
  	1,1,0,1,
  	1,1,0,1,

  	1,0,1,1,
  	1,0,1,1,
  	1,0,1,1,
  	1,0,1,1,

  	0,1,1,1,
  	0,1,1,1,
  	0,1,1,1,
  	0,1,1,1

  ] 
  gl.useProgram(program);

var then =0;
var cubeRotate = 0.0;
var now = 0;
var translatez = 0;

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
	  gl.vertexAttribPointer(positionAttributeLocation, size, type, normalize, stride, offset);

	  // Create a color buffer
	  var colorBuffer = gl.createBuffer();
	  gl.enableVertexAttribArray(colorAttributeLocation);
	  gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
	  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(color), gl.STATIC_DRAW);
	  
	  // Tell the color attribute how to get data out of colorBuffer (ARRAY_BUFFER)
	  var size = 4;          
	  var type = gl.FLOAT;   
	  var normalize = false; 
	  var stride = 0;        
	  var offset = 0;        
	  gl.vertexAttribPointer(
		  colorAttributeLocation, size, type, normalize, stride, offset);

	  var indiceBuffer = gl.createBuffer();
	  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indiceBuffer);
	  gl.bufferData(gl.ELEMENT_ARRAY_BUFFER,new Uint16Array(indices),gl.STATIC_DRAW);



		// setting up the uniforms
		var modelviewmatrix = mat4.create();
		var perspectivematrix = mat4.create();
		var angle = cubeRotate*Math.PI/180;
		var scale = [1/10,1/10,1/10];
		//translatez -= 0.02*delta;
		var translate = [0,0,-2];

		mat4.scale(modelviewmatrix,modelviewmatrix,scale);
		mat4.translate(modelviewmatrix,modelviewmatrix,translate);
		mat4.rotate(modelviewmatrix,modelviewmatrix,angle,[1,1,0]);
		mat4.rotate(modelviewmatrix,modelviewmatrix,angle,[0,0,1]);
		mat4.perspective(perspectivematrix,90*Math.PI/180,1,0.1,100);

		gl.uniformMatrix4fv(rotateLocation,false,modelviewmatrix);
		gl.uniformMatrix4fv(perspectiveLocation,false,perspectivematrix);



		//////Canvas initilisation
	  resize(gl.canvas);
	  gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
  	gl.clearColor(0.4, 0.4, 0.4, 1.0);
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


main();
