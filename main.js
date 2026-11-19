
import * as THREE from 'three';

import { Player } from './player.js';
import { CameraController } from './camera.js';
import { World } from './world.js';
import { Controls } from './controls.js';

class Game {
    constructor() {
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0x87ceeb);

        this.renderer = new THREE.WebGLRenderer({
            antialias: true
        });

        this.renderer.setSize(
            window.innerWidth,
            window.innerHeight
        );

        document.body.style.margin = '0';
        document.body.style.overflow = 'hidden';
        document.body.appendChild(this.renderer.domElement);

        this.player = new Player();
        this.controls = new Controls();
        this.world = new World(this.scene);

        this.camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );

        this.cameraController = new CameraController(
            this.camera,
            this.player
        );

        window.addEventListener('resize', () => {
            this.camera.aspect =
                window.innerWidth / window.innerHeight;

            this.camera.updateProjectionMatrix();

            this.renderer.setSize(
                window.innerWidth,
                window.innerHeight
            );
        });

        this.clock = new THREE.Clock();

        this.animate();
    }

    animate() {
        requestAnimationFrame(() => this.animate());

        const delta = Math.min(this.clock.getDelta(), 0.05);

        if (this.controls.isPressed('w')) {
            this.player.position.z -= this.player.speed * delta;
        }

        if (this.controls.isPressed('s')) {
            this.player.position.z += this.player.speed * delta;
        }

        if (this.controls.isPressed('a')) {
            this.player.position.x -= this.player.speed * delta;
        }

        if (this.controls.isPressed('d')) {
            this.player.position.x += this.player.speed * delta;
        }

        this.cameraController.update();

        this.renderer.render(this.scene, this.camera);
    }
}

window.addEventListener('DOMContentLoaded', () => {
    window.game = new Game();
});
