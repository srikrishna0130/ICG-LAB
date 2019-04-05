var WIDTH = window.innerWidth;
var HEIGHT = window.innerHeight;

var renderer = new THREE.WebGLRenderer({antialias:true});
renderer.setSize(WIDTH, HEIGHT);
renderer.setClearColor(0xDDDDDD, 1);
document.body.appendChild(renderer.domElement);

//initialising
var scene = new THREE.Scene();
scene.background = new THREE.Color( 0xCAE4DB);
var camera = new THREE.PerspectiveCamera(70, WIDTH/HEIGHT,1,1000);
var controls = new THREE.OrbitControls(camera);

//setting up camera and orbit controls
camera.position.set(10,50,-50);
controls.update();
scene.add(camera);

//adding point source light
var light = new THREE.PointLight(0xFFFFFF);
camera.add(light);
camera.lookAt(0,0,0);

function addMesh(mesh,delay)
{
    setTimeout(function()
    {
        scene.add(mesh);
    },delay);
}
var geo = new THREE.Geometry();
var cubeSize = 18;
var no_iter = 1;
var x=0,y=0,z=0;

draw_fractal(x+20,y,z,cubeSize,no_iter);
draw_fractal(x-20,y,z,cubeSize,no_iter+1);
draw_fractal(x,y+20,z+20,cubeSize,no_iter+2);

function draw_fractal(x,y,z,length,iterations) {

	if(iterations == 0){
		var box = new THREE.BoxGeometry(length, length, length);
		var material = new THREE.MeshLambertMaterial({color: 0x88e90});
		
		var cube1 = new THREE.Mesh(box, material);
		//scene.add(cube1);
		cube1.position.set(x,y,z);
		//geo.merge(cube1.geometry);
		//var g = new THREE.Mesh(geo, material); 
		addMesh(cube1,1000);
		
/*		var cube1 = new THREE.Mesh(box, material);
		scene.add(cube1);
		cube1.position.set(x-length/3,y+length/3,z);
		
		var cube2 = new THREE.Mesh(box, material);
		scene.add(cube2);
		cube2.position.set(x,y+length/3,z);
		var join = new THREE.Mesh(cube1,cube2);
		
		var cube3 = new THREE.Mesh(box, material);
		scene.add(cube3);
		cube3.position.set(x+length/3,y+length/3,z);

		var cube4 = new THREE.Mesh(box, material);
		scene.add(cube4);
		cube4.position.set(x-length/3,y,z);

		var cube5 = new THREE.Mesh(box, material);
		scene.add(cube5);
		cube5.position.set(x+length/3,y,z);

		var cube6 = new THREE.Mesh(box, material);
		scene.add(cube6);
		cube6.position.set(x-length/3,y-length/3,z);

		var cube7 = new THREE.Mesh(box, material);
		scene.add(cube7);
		cube7.position.set(x,y-length/3,z);

		var cube8 = new THREE.Mesh(box, material);
		scene.add(cube8);
		cube8.position.set(x+length/3,y-length/3,z);
/////////////////////////////////////////////////////
		var cube12 = new THREE.Mesh(box, material);
		scene.add(cube12);
		cube12.position.set(x-length/3,y+length/3,z-length/3);
				
		var cube32 = new THREE.Mesh(box, material);
		scene.add(cube32);
		cube32.position.set(x+length/3,y+length/3,z-length/3);

		var cube62 = new THREE.Mesh(box, material);
		scene.add(cube62);
		cube62.position.set(x-length/3,y-length/3,z-length/3);

		var cube82 = new THREE.Mesh(box, material);
		scene.add(cube82);
		cube82.position.set(x+length/3,y-length/3,z-length/3);
////////////////////////////////////////////////////
		var cube13 = new THREE.Mesh(box, material);
		scene.add(cube13);
		cube13.position.set(x-length/3,y+length/3,z-2*length/3);
		
		var cube23 = new THREE.Mesh(box, material);
		scene.add(cube23);
		cube23.position.set(x,y+length/3,z-2*length/3);
		
		var cube33 = new THREE.Mesh(box, material);
		scene.add(cube33);
		cube33.position.set(x+length/3,y+length/3,z-2*length/3);

		var cube43 = new THREE.Mesh(box, material);
		scene.add(cube43);
		cube43.position.set(x-length/3,y,z-2*length/3);

		var cube53 = new THREE.Mesh(box, material);
		scene.add(cube53);
		cube53.position.set(x+length/3,y,z-2*length/3);

		var cube63 = new THREE.Mesh(box, material);
		scene.add(cube63);
		cube63.position.set(x-length/3,y-length/3,z-2*length/3);

		var cube73 = new THREE.Mesh(box, material);
		scene.add(cube73);
		cube73.position.set(x,y-length/3,z-2*length/3);

		var cube83 = new THREE.Mesh(box, material);
		scene.add(cube83);
		cube83.position.set(x+length/3,y-length/3,z-2*length/3);*/

		return 0;
	}

	//outer faces
	draw_fractal(x-length/3,y-length/3,z,length/3,iterations-1);
	draw_fractal(x,y-length/3,z,length/3,iterations-1);
	draw_fractal(x+length/3,y-length/3,z,length/3,iterations-1);
	draw_fractal(x-length/3,y,z,length/3,iterations-1);
	draw_fractal(x+length/3,y,z,length/3,iterations-1);
	draw_fractal(x-length/3,y+length/3,z,length/3,iterations-1);
	draw_fractal(x,y+length/3,z,length/3,iterations-1);
	draw_fractal(x+length/3,y+length/3,z,length/3,iterations-1);

	z = z-length/3
	draw_fractal(x-length/3,y-length/3,z,length/3,iterations-1);
	draw_fractal(x+length/3,y-length/3,z,length/3,iterations-1);
	draw_fractal(x-length/3,y+length/3,z,length/3,iterations-1);
	draw_fractal(x+length/3,y+length/3,z,length/3,iterations-1);

	z = z-length/3
	draw_fractal(x-length/3,y-length/3,z,length/3,iterations-1);
	draw_fractal(x,y-length/3,z,length/3,iterations-1);
	draw_fractal(x+length/3,y-length/3,z,length/3,iterations-1);
	draw_fractal(x-length/3,y,z,length/3,iterations-1);
	draw_fractal(x+length/3,y,z,length/3,iterations-1);
	draw_fractal(x-length/3,y+length/3,z,length/3,iterations-1);
	draw_fractal(x,y+length/3,z,length/3,iterations-1);
	draw_fractal(x+length/3,y+length/3,z,length/3,iterations-1);

}

function clearThree(obj){
  while(obj.children.length > 0){ 
    clearThree(obj.children[0])
    obj.remove(obj.children[0]);
  }
  if(obj.geometry) obj.geometry.dispose()
  if(obj.material) obj.material.dispose()
  if(obj.texture) obj.texture.dispose()
}   


function render() {
    requestAnimationFrame(render);

    controls.update();    
    renderer.render(scene, camera);
}
render();