// JavaScript + Three.js
import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 20);

const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

renderer.xr.enabled = true;
document.body.appendChild(ARButton.createButton(renderer, { requiredFeatures: ['hit-test'] }));

const light = new THREE.HemisphereLight(0xffffff, 0xbbbbff, 1);
scene.add(light);

const geometry = new THREE.BoxGeometry(0.1, 0.1, 0.1);
const material = new THREE.MeshStandardMaterial({ color: 0xff0000 });
const cube = new THREE.Mesh(geometry, material);
cube.position.set(0, 0, -0.5);
scene.add(cube);

function animate() {
  renderer.setAnimationLoop(() => {
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
  });
}

animate();
