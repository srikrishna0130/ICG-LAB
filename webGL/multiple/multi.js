
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
  var colorLocation = gl.getUniformLocation(program, "u_color");
  var transformLocation = gl.getUniformLocation(program,"u_transform");
  var perspectiveLocation = gl.getUniformLocation(program,"u_perspective");

	
	////// Variables
  var vertices = [], indices = [];
  var SPHERE_DIV = 64;
  
  for (j = 0; j <= SPHERE_DIV; j++) {
    aj = j *2* Math.PI / SPHERE_DIV;
    sj = Math.sin(aj);
    cj = Math.cos(aj);
    for (i = 0; i <= SPHERE_DIV; i++) {
      ai = i * 2 * Math.PI / SPHERE_DIV;
      si = Math.sin(ai);
      ci = Math.cos(ai);

      vertices.push(si * sj);  // X
      vertices.push(cj);       // Y
      vertices.push(ci * sj);  // Z
    }
  }

  for (j = 0; j < SPHERE_DIV; j++) {
    for (i = 0; i < SPHERE_DIV; i++) {
      p1 = j * (SPHERE_DIV+1) + i;
      p2 = p1 + (SPHERE_DIV+1);

      indices.push(p1);
      indices.push(p2);
      indices.push(p1 + 1);

      indices.push(p1 + 1);
      indices.push(p2);
      indices.push(p2 + 1);
    }
  }

  var color_s = [0,1,1,1];
 
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

  var indices_c = [
    0,  1,  2,      0,  2,  3,    // front
    4,  5,  6,      4,  6,  7,    // back
    8,  9,  10,     8,  10, 11,   // top
    12, 13, 14,     12, 14, 15,   // bottom
    16, 17, 18,     16, 18, 19,   // right
    20, 21, 22,     20, 22, 23,   // left
];

gl.useProgram(program);



  ///////adding gravity to the sphere
var then =0;
var movez = -1;  
var backward = 1;
var cubeRotate = 0.0

var t = 0;
var a = -2;
var s = 0;
var u =0;
var v =0;
var e =0.8;

function draw(now) {

		now*=0.001;  //convert to seconds
		var delta = now-then;
		then = now;
    cubeRotate += delta;
    t += delta/2;
    movez -= backward*delta*5;
    
    s  += u*t + (a*t*t)/2;
    v = u + a*t;
    u = v; 

    if(movez >= -1 || movez <= -10){
      if (!s==-1){
        backward*=-1;
      }
    }

    if(s <= -2){    //boundary conditions
      s = -2;
      u =-u*e;    //coefficient of restitution
      t =0 ;
    }
    if(s >= 1){
      s=1;
      u =-u*e;
      t =0 ;
    }

	  // Create a buffer 
	  var positionBuffer = gl.createBuffer();
	  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
	  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
	  gl.enableVertexAttribArray(positionAttributeLocation);
	  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

	  var size = 3;
	  var type = gl.FLOAT; 
	  var normalize = false; 
	  var stride = 0;        
	  var offset = 0;       
	  gl.vertexAttribPointer(positionAttributeLocation, size, type, normalize, stride, offset);

	  var indiceBuffer = gl.createBuffer();
	  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indiceBuffer);
	  gl.bufferData(gl.ELEMENT_ARRAY_BUFFER,new Uint16Array(indices),gl.STATIC_DRAW);


		// setting up the uniforms
    var modelviewmatrix = mat4.create();
		var perspectivematrix = mat4.create();
		var angle = cubeRotate*Math.PI/180;
    var scale = [1/5,1/5,1/5];
		var translation = [0,s+1,movez];

    mat4.scale(modelviewmatrix,modelviewmatrix,scale);
    mat4.translate(modelviewmatrix,modelviewmatrix,translation);
    //mat4.rotate(modelviewmatrix,modelviewmatrix,angle,[1,1,0]);
    //mat4.rotate(modelviewmatrix,modelviewmatrix,angle,[0,0,1]);
    //perspective = m4.perspective(90*Math.PI/180,1,0.1,100);
    mat4.perspective(perspectivematrix,60*Math.PI/180,1,0.1,100);

    gl.uniformMatrix4fv(transformLocation,false,modelviewmatrix);
    gl.uniformMatrix4fv(perspectiveLocation,false,perspectivematrix);
    gl.uniform4fv(colorLocation,color_s);

    //////Canvas initilisation
    resize(gl.canvas);
    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
    gl.clearColor(0.4, 0.4, 0.4, 1.0);
    gl.clearDepth(1.0);                 // Clear everything
    gl.enable(gl.DEPTH_TEST);           // Enable depth testing
    gl.depthFunc(gl.LEQUAL);            // Near things obscure far things
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

	  // draw
	  type = gl.UNSIGNED_SHORT;
	  var primitiveType = gl.TRIANGLES;
	  var offset = 0;
	  var count = SPHERE_DIV*SPHERE_DIV*3;
	  gl.drawElements(gl.TRIANGLES, count, type, offset);


    gl.useProgram(program);
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

    var indiceBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indiceBuffer);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER,new Uint16Array(indices_c),gl.STATIC_DRAW);

    perspectivematrix = mat4.create();

    mat4.scale(modelviewmatrix,modelviewmatrix,scale);
    mat4.translate(modelviewmatrix,modelviewmatrix,[0,0,0]);
    mat4.rotate(modelviewmatrix,modelviewmatrix,angle,[1,1,0]);
    mat4.rotate(modelviewmatrix,modelviewmatrix,angle,[0,0,1]);    
    
    gl.uniformMatrix4fv(transformLocation,false,modelviewmatrix);
    gl.uniformMatrix4fv(perspectiveLocation,false,perspectivematrix);
    gl.uniform4fv(colorLocation,color_s); 


    // draw
    type = gl.UNSIGNED_SHORT;
    var primitiveType = gl.TRIANGLES;
    var offset = 0;
    var count = 6*6;
    gl.drawElements(gl.TRIANGLES, count, type, offset);	  
    //requestAnimationFrame(draw);
	}
	requestAnimationFrame(draw);

}


main();
