var WIDTH = window.innerWidth;
var HEIGHT = window.innerHeight;

var renderer = new THREE.WebGLRenderer({antialias:true});
renderer.setSize(WIDTH, HEIGHT);
renderer.setClearColor(0xDDDDDD, 1);
document.body.appendChild(renderer.domElement);

//initialising
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(70, WIDTH/HEIGHT,1,100);
//var camera = new THREE.OrthographicCamera(WIDTH / - 4, WIDTH / 4, HEIGHT / 4, HEIGHT / - 4, 1, 100);
var controls = new THREE.OrbitControls(camera);

//setting up camera and orbit controls
camera.position.z = 20;
camera.position.x = -20;
camera.position.y = 20;
controls.update();
scene.add(camera);

//adding point source light
var light = new THREE.PointLight(0xFFFFFF);
camera.add(light);

function addMesh(mesh,delay)
{
    setTimeout(function()
    {
        scene.add(mesh);
    },delay);
}

var cubeSize = 18;
var no_iter = 4;
var x=0,y=0,z=0;

draw_fractal(x,y,z,cubeSize,no_iter);
	
function draw_fractal(x,y,z,length,iterations) {

	if(iterations == 1){
		var box = new THREE.BoxGeometry(length, length, length);
		var material = new THREE.MeshLambertMaterial({color: 0x0095DD});
		//var join = new THREE.Mesh(box,material);
		
/*		var cube1 = new THREE.Mesh(box, material);
		//scene.add(cube1);
		cube1.position.set(x,y,z);
		addMesh(cube1,100);
*/		
		

		var cube1 = new THREE.Mesh(box, material);
		scene.add(cube1);
		cube1.position.set(x-length/3,y+length/3,z);
		
		var cube2 = new THREE.Mesh(box, material);
		scene.add(cube2);
		cube2.position.set(x,y+length/3,z);
		var join = new THREE.Mesh(cube1,cube2);
		
		var cube3 = new THREE.Mesh(box, material);
		scene.add(cube3);
		cube3.position.set(x+length/3,y+length/3,z);
		join = new THREE.Mesh(join,cube3);

		var cube4 = new THREE.Mesh(box, material);
		scene.add(cube4);
		cube4.position.set(x-length/3,y,z);
		join = new THREE.Mesh(join,cube4);

		var cube5 = new THREE.Mesh(box, material);
		scene.add(cube5);
		cube5.position.set(x+length/3,y,z);
		join = new THREE.Mesh(join,cube5);

		var cube6 = new THREE.Mesh(box, material);
		scene.add(cube6);
		cube6.position.set(x-length/3,y-length/3,z);
		join = new THREE.Mesh(join,cube6);

		var cube7 = new THREE.Mesh(box, material);
		scene.add(cube7);
		cube7.position.set(x,y-length/3,z);
		join = new THREE.Mesh(join,cube7);

		var cube8 = new THREE.Mesh(box, material);
		scene.add(cube8);
		cube8.position.set(x+length/3,y-length/3,z);
		join = new THREE.Mesh(join,cube8);
/////////////////////////////////////////////////////
		var cube12 = new THREE.Mesh(box, material);
		scene.add(cube12);
		cube12.position.set(x-length/3,y+length/3,z-length/3);
		join = new THREE.Mesh(join,cube12);
				
		var cube32 = new THREE.Mesh(box, material);
		scene.add(cube32);
		cube32.position.set(x+length/3,y+length/3,z-length/3);
		join = new THREE.Mesh(join,cube32);

		var cube62 = new THREE.Mesh(box, material);
		scene.add(cube62);
		cube62.position.set(x-length/3,y-length/3,z-length/3);
		join = new THREE.Mesh(join,cube62);

		var cube82 = new THREE.Mesh(box, material);
		scene.add(cube82);
		cube82.position.set(x+length/3,y-length/3,z-length/3);
		join = new THREE.Mesh(join,cube82);
////////////////////////////////////////////////////
		var cube13 = new THREE.Mesh(box, material);
		scene.add(cube13);
		cube13.position.set(x-length/3,y+length/3,z-2*length/3);
		join = new THREE.Mesh(join,cube13);
		
		var cube23 = new THREE.Mesh(box, material);
		scene.add(cube23);
		cube23.position.set(x,y+length/3,z-2*length/3);
		join = new THREE.Mesh(join,cube23);
		
		var cube33 = new THREE.Mesh(box, material);
		scene.add(cube33);
		cube33.position.set(x+length/3,y+length/3,z-2*length/3);
		join = new THREE.Mesh(join,cube33);

		var cube43 = new THREE.Mesh(box, material);
		scene.add(cube43);
		cube43.position.set(x-length/3,y,z-2*length/3);
		join = new THREE.Mesh(join,cube43);

		var cube53 = new THREE.Mesh(box, material);
		scene.add(cube53);
		cube53.position.set(x+length/3,y,z-2*length/3);
		join = new THREE.Mesh(join,cube53);

		var cube63 = new THREE.Mesh(box, material);
		scene.add(cube63);
		cube63.position.set(x-length/3,y-length/3,z-2*length/3);
		join = new THREE.Mesh(join,cube63);

		var cube73 = new THREE.Mesh(box, material);
		scene.add(cube73);
		cube73.position.set(x,y-length/3,z-2*length/3);
		join = new THREE.Mesh(join,cube73);

		var cube83 = new THREE.Mesh(box, material);
		scene.add(cube83);
		cube83.position.set(x+length/3,y-length/3,z-2*length/3);
		join = new THREE.Mesh(join,cube83);

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

function render() {
    requestAnimationFrame(render);
    controls.update();    
    renderer.render(scene, camera);
}
render();