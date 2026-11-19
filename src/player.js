// HUMAN TORCH GAME
// Player Controller

import * as THREE from 'three';

export class Player {
    constructor() {
        this.position = {
            x: 0,
            y: 0,
            z: 0
        };

        this.speed = 5;
        this.energy = 100;

        this.mesh = this.createMesh();
    }

    createMesh() {
        const group = new THREE.Group();

        // Тело Ильи Воронова (базовый примитив до загрузки моделей)
        const bodyGeometry = new THREE.CapsuleGeometry(0.4, 1.0, 8, 16);
        const bodyMaterial = new THREE.MeshStandardMaterial({
            color: 0xff5500,
            emissive: 0x331100,
            roughness: 0.4
        });

        const bodyMesh = new THREE.Mesh(bodyGeometry, bodyMaterial);
        bodyMesh.position.y = 0.9; // Центр капсулы над уровнем земли (y = 0)
        bodyMesh.castShadow = true;
        bodyMesh.receiveShadow = true;

        group.add(bodyMesh);
        return group;
    }

    syncMesh() {
        this.mesh.position.set(
            this.position.x,
            this.position.y,
            this.position.z
        );
    }
}
