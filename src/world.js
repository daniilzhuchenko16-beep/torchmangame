// HUMAN TORCH GAME
// Game World System

import * as THREE from 'three';

export class World {
    constructor(scene) {
        this.scene = scene;
        this.objects = [];

        this.setupLights();
        this.createBaseGround();
    }

    setupLights() {
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
        this.scene.add(ambientLight);

        const sunLight = new THREE.DirectionalLight(0xfff5e4, 1.2);
        sunLight.position.set(20, 40, 20);
        sunLight.castShadow = true;
        sunLight.shadow.mapSize.width = 2048;
        sunLight.shadow.mapSize.height = 2048;
        this.scene.add(sunLight);
    }

    createBaseGround() {
        // Базовая поверхность (в Шаге 3 расширится до квартиры, двора и 3 зданий)
        const groundGeo = new THREE.PlaneGeometry(100, 100);
        const groundMat = new THREE.MeshStandardMaterial({
            color: 0x2c3539,
            roughness: 0.85
        });

        const ground = new THREE.Mesh(groundGeo, groundMat);
        ground.rotation.x = -Math.PI / 2;
        ground.receiveShadow = true;
        this.addObject(ground);

        // Координатная сетка для визуального контроля скорости и перемещения
        const grid = new THREE.GridHelper(100, 50, 0xff6600, 0x444444);
        grid.position.y = 0.01;
        this.addObject(grid);
    }

    addObject(object) {
        this.scene.add(object);
        this.objects.push(object);
    }

    removeObject(object) {
        this.scene.remove(object);

        this.objects = this.objects.filter(
            item => item !== object
        );
    }

    clear() {
        for (const object of this.objects) {
            this.scene.remove(object);
        }

        this.objects = [];
    }
}
