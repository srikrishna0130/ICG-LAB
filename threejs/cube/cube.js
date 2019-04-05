var WIDTH = window.innerWidth;
var HEIGHT = window.innerHeight;

var renderer = new THREE.WebGLRenderer({antialias:true});
renderer.setSize(WIDTH, HEIGHT);
renderer.setClearColor(0xDDDDDD, 1);
document.body.appendChild(renderer.domElement);

var scene = new THREE.Scene();


var camera = new THREE.PerspectiveCamera(70, WIDTH/HEIGHT);
var controls = new THREE.OrbitControls(camera);

camera.position.z = 50;
controls.update();
scene.add(camera);

var light = new THREE.PointLight(0xFFFFFF);
camera.add(light);

var boxGeometry = new THREE.BoxGeometry(10, 10, 10);
var basicMaterial = new THREE.MeshLambertMaterial({color: 0x0095DD});
var cube = new THREE.Mesh(boxGeometry, basicMaterial);
scene.add(cube);
cube.rotation.set(0.4, 0.2, 0);
cube.position.set(-20,0,0);
var box = new THREE.BoxGeometry(10, 10, 10);
var cube = new THREE.Mesh(box, basicMaterial);
scene.add(cube);
cube.rotation.set(0.4, 0.2, 0);

function render() {
    requestAnimationFrame(render);
    controls.update();    
    renderer.render(scene, camera);
}
render();