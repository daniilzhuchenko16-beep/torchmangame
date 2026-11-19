
// HUMAN TORCH GAME
// Third Person Camera Controller

import * as THREE from 'three';

export class CameraController {
    constructor(camera, player) {
        this.camera = camera;
        this.player = player;

        this.offset = new THREE.Vector3(0, 4, 8);
        this.smoothness = 5;

        this.targetPosition = new THREE.Vector3();
        this.lookTarget = new THREE.Vector3();
    }

    update(delta = 0.016) {
        this.lookTarget.set(
            this.player.position.x,
            this.player.position.y + 1.2,
            this.player.position.z
        );

        this.targetPosition.copy(this.lookTarget);
        this.targetPosition.add(this.offset);

        const alpha = 1 - Math.exp(-this.smoothness * delta);

        this.camera.position.lerp(this.targetPosition, alpha);
        this.camera.lookAt(this.lookTarget);
    }
}
