var WIDTH = window.innerWidth;
var HEIGHT = window.innerHeight;

var renderer = new THREE.WebGLRenderer({antialias:true});
renderer.setSize(WIDTH, HEIGHT);
renderer.setClearColor(0xDDDDDD, 1);
document.body.appendChild(renderer.domElement);

//initialising
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(70, WIDTH/HEIGHT);
//var camera = new THREE.Camera();
var controls = new THREE.OrbitControls(camera);

//setting up camera and orbit controls
camera.position.z = 20;
controls.update();
scene.add(camera);

//adding point source light
var light = new THREE.PointLight(0xFFFFFF);
camera.add(light);

/*var cubeSize = 10;
var boxGeometry = new THREE.BoxGeometry(cubeSize, cubeSize, cubeSize);
var basicMaterial = new THREE.MeshLambertMaterial({color: 0x0095DD});
var cube = new THREE.Mesh(boxGeometry, basicMaterial);
scene.add(cube);
cube.rotation.set(0.4, 0.2, 0);
cube.position.set(-20,0,0);
var box = new THREE.BoxGeometry(10, 10, 10);
var cube = new THREE.Mesh(box, basicMaterial);
scene.add(cube);
cube.rotation.set(0.4, 0.2, 0);*/

var cubeSize = 18;
var no_iter = 3;
var x=0,y=0,z=0;
var adjust = cubeSize/Math.pow(3,no_iter)/2


//for each face invoke draw fractal function
//draw_fractal(x,y,z,1,cubeSize,no_iter);
draw_fractal(x,y,z-cubeSize+2*adjust,2,cubeSize,no_iter);
//draw_fractal(x-cubeSize/2+adjust,y,z-cubeSize/2+adjust,3,cubeSize,no_iter+1);
//draw_fractal(x+cubeSize/2-adjust,y,z-cubeSize/2+adjust,4,cubeSize,no_iter);
//draw_fractal(x,y+cubeSize/2-adjust,z-cubeSize/2+adjust,5,cubeSize,no_iter);
//draw_fractal(x,y-cubeSize/2+adjust,z-cubeSize/2+adjust,6,cubeSize,no_iter);


//face = 1,2 north or south  XY plane
//face = 3,4 west or east  YZ plane
//face = 5,6 top or bottom  ZX plane	
function draw_fractal(x,y,z,face,length,iterations) {

	if(iterations == 1){
		var box = new THREE.BoxGeometry(length/3, length/3, length/3);
		var material = new THREE.MeshLambertMaterial({color: 0x0095DD});
		
		if (face == 1 || face == 2) {
			var cube1 = new THREE.Mesh(box, material);
			scene.add(cube1);
			cube1.position.set(x-length/3,y+length/3,z);
			
			var cube2 = new THREE.Mesh(box, material);
			scene.add(cube2);
			cube2.position.set(x,y+length/3,z);
			
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
		}

		if (face == 3 || face == 4) {
			var cube1 = new THREE.Mesh(box, material);
			scene.add(cube1);
			cube1.position.set(x,y+length/3,z-length/3);
			
			var cube2 = new THREE.Mesh(box, material);
			scene.add(cube2);
			cube2.position.set(x,y+length/3,z);
			
			var cube3 = new THREE.Mesh(box, material);
			scene.add(cube3);
			cube3.position.set(x,y+length/3,z+length/3);

			var cube4 = new THREE.Mesh(box, material);
			scene.add(cube4);
			cube4.position.set(x,y,z-length/3);

			var cube5 = new THREE.Mesh(box, material);
			scene.add(cube5);
			cube5.position.set(x,y,z+length/3);

			var cube6 = new THREE.Mesh(box, material);
			scene.add(cube6);
			cube6.position.set(x,y-length/3,z-length/3);

			var cube7 = new THREE.Mesh(box, material);
			scene.add(cube7);
			cube7.position.set(x,y-length/3,z);

			var cube8 = new THREE.Mesh(box, material);
			scene.add(cube8);
			cube8.position.set(x,y-length/3,z+length/3);
		}

		if (face == 5 || face == 6) {
			var cube1 = new THREE.Mesh(box, material);
			scene.add(cube1);
			cube1.position.set(x-length/3,y,z+length/3);
			
			var cube2 = new THREE.Mesh(box, material);
			scene.add(cube2);
			cube2.position.set(x,y,z+length/3);
			
			var cube3 = new THREE.Mesh(box, material);
			scene.add(cube3);
			cube3.position.set(x+length/3,y,z+length/3);

			var cube4 = new THREE.Mesh(box, material);
			scene.add(cube4);
			cube4.position.set(x-length/3,y,z);

			var cube5 = new THREE.Mesh(box, material);
			scene.add(cube5);
			cube5.position.set(x+length/3,y,z);

			var cube6 = new THREE.Mesh(box, material);
			scene.add(cube6);
			cube6.position.set(x-length/3,y,z-length/3);

			var cube7 = new THREE.Mesh(box, material);
			scene.add(cube7);
			cube7.position.set(x,y,z-length/3);

			var cube8 = new THREE.Mesh(box, material);
			scene.add(cube8);
			cube8.position.set(x+length/3,y,z-length/3);
		}

		return 0;
	}

	if (face == 1 || face == 2) {
		//outer faces
		draw_fractal(x-length/3,y-length/3,z,face,length/3,iterations-1);
		draw_fractal(x,y-length/3,z,face,length/3,iterations-1);
		draw_fractal(x+length/3,y-length/3,z,face,length/3,iterations-1);
		draw_fractal(x-length/3,y,z,face,length/3,iterations-1);
		draw_fractal(x+length/3,y,z,face,length/3,iterations-1);
		draw_fractal(x-length/3,y+length/3,z,face,length/3,iterations-1);
		draw_fractal(x,y+length/3,z,face,length/3,iterations-1);
		draw_fractal(x+length/3,y+length/3,z,face,length/3,iterations-1);


		if (face == 1){
			//inner faces
			draw_fractal(x-2*length/9,y,z-length/9,4,length/3,iterations-1);
			draw_fractal(x+2*length/9,y,z-length/9,3,length/3,iterations-1);
			draw_fractal(x,y+2*length/9,z-length/9,6,length/3,iterations-1);
			draw_fractal(x,y-2*length/9,z-length/9,5,length/3,iterations-1);
			//draw_fractal(x,y,z-4*length/9,1,length/3,iterations-1);
		}
		if (face == 2){
			//inner faces
			draw_fractal(x-2*length/9,y,z+length/9,3,length/3,iterations-1);
			draw_fractal(x+2*length/9,y,z+length/9,4,length/3,iterations-1);
			draw_fractal(x,y+2*length/9,z+length/9,5,length/3,iterations-1);
			draw_fractal(x,y-2*length/9,z+length/9,6,length/3,iterations-1);
			//draw_fractal(x,y,z+4*length/9,2,length/3,iterations-1);
		}

	}


	if (face == 3 || face == 4) {
		draw_fractal(x,y-length/3,z-length/3,face,length/3,iterations-1);
		draw_fractal(x,y-length/3,z,face,length/3,iterations-1);
		draw_fractal(x,y-length/3,z+length/3,face,length/3,iterations-1);
		draw_fractal(x,y,z-length/3,face,length/3,iterations-1);
		draw_fractal(x,y,z+length/3,face,length/3,iterations-1);
		draw_fractal(x,y+length/3,z-length/3,face,length/3,iterations-1);
		draw_fractal(x,y+length/3,z,face,length/3,iterations-1);
		draw_fractal(x,y+length/3,z+length/3,face,length/3,iterations-1);


		if (face == 3){
			//inner faces
			draw_fractal(x+length/9,y,z-2*length/9,2,length/3,iterations-1);
			draw_fractal(x+length/9,y,z+2*length/9,1,length/3,iterations-1);
			draw_fractal(x+length/9,y+2*length/9,z,5,length/3,iterations-1);
			draw_fractal(x+length/9,y-2*length/9,z,6,length/3,iterations-1);
			//draw_fractal(x+4*length/9,y,z,4,length/3,iterations-1);
		}
		if (face == 4){
			//inner faces
			draw_fractal(x-length/9,y,z-2*length/9,1,length/3,iterations-1);
			draw_fractal(x-length/9,y,z+2*length/9,2,length/3,iterations-1);
			draw_fractal(x-length/9,y+2*length/9,z,6,length/3,iterations-1);
			draw_fractal(x-length/9,y-2*length/9,z,5,length/3,iterations-1);
			//draw_fractal(x-4*length/9,y,z,3,length/3,iterations-1);
		}
	}


	if (face == 5 || face == 6) {
		draw_fractal(x-length/3,y,z-length/3,face,length/3,iterations-1);
		draw_fractal(x,y,z-length/3,face,length/3,iterations-1);
		draw_fractal(x+length/3,y,z-length/3,face,length/3,iterations-1);
		draw_fractal(x-length/3,y,z,face,length/3,iterations-1);
		draw_fractal(x+length/3,y,z,face,length/3,iterations-1);
		draw_fractal(x-length/3,y,z+length/3,face,length/3,iterations-1);
		draw_fractal(x,y,z+length/3,face,length/3,iterations-1);
		draw_fractal(x+length/3,y,z+length/3,face,length/3,iterations-1);


		if (face == 5){
			//inner faces
			draw_fractal(x-2*length/9,y-length/9,z,4,length/3,iterations-1);
			draw_fractal(x+2*length/9,y-length/9,z,3,length/3,iterations-1);
			draw_fractal(x,y-length/9,z+2*length/9,2,length/3,iterations-1);
			draw_fractal(x,y-length/9,z-2*length/9,1,length/3,iterations-1);
			//draw_fractal(x,y-4*length/9,z,5,length/3,iterations-1);
		}
		if (face == 6){
			//inner faces
			draw_fractal(x-2*length/9,y+length/9,z,3,length/3,iterations-1);
			draw_fractal(x+2*length/9,y+length/9,z,4,length/3,iterations-1);
			draw_fractal(x,y+length/9,z+2*length/9,1,length/3,iterations-1);
			draw_fractal(x,y+length/9,z-2*length/9,2,length/3,iterations-1);
			//draw_fractal(x,y+4*length/9,z,6,length/3,iterations-1);
		}
	}

}

function render() {
    requestAnimationFrame(render);
    controls.update();    
    renderer.render(scene, camera);
}
render();