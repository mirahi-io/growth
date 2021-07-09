import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
// import { ColladaLoader } from 'three/examples/jsm/loaders/ColladaLoader';

function App() {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize( window.innerWidth, window.innerHeight );
  document.body.appendChild( renderer.domElement );
  
  function render() {
    renderer.render(scene, camera);
  }

  const geometry = new THREE.CylinderGeometry(10,10,2,50);
  const material = new THREE.MeshBasicMaterial( { color: 0xfc0366 } );
  const cylinder = new THREE.Mesh( geometry, material );
  scene.add( cylinder );

  // const loader = new ColladaLoader();
  // loader.load( './mirahi-face.dae', function ( collada ) {
  // 	scene.add( collada.scene );
  // }, undefined, function ( error ) {
  // 	console.error( error );
  // } );

  camera.position.set(0,0,20);

  const rotate = function () {
    cylinder.rotation.x += 0.03;
    cylinder.rotation.y += 0.05;
    // cylinder.rotation.z += 0.01;
  }

  const animate = function () {
    requestAnimationFrame( animate );
    rotate();
    renderer.render( scene, camera );
      controls.update();
  };

  let controls = new OrbitControls(camera, renderer.domElement);
  controls.addEventListener('change', render);
  controls.enableZoom = true;
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;
  
  animate();

  return <div />
}

export default App;
