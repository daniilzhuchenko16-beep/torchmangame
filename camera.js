
// HUMAN TORCH GAME
// Third Person Camera System

export class CameraController {
    constructor(camera, player) {
        this.camera = camera;
        this.player = player;

        this.offset = {
            x: 0,
            y: 5,
            z: 9
        };

        this.smoothness = 0.08;
    }

    update() {
        const targetX =
            this.player.position.x + this.offset.x;

        const targetY =
            this.player.position.y + this.offset.y;

        const targetZ =
            this.player.position.z + this.offset.z;

        this.camera.position.x +=
            (targetX - this.camera.position.x) *
            this.smoothness;

        this.camera.position.y +=
            (targetY - this.camera.position.y) *
            this.smoothness;

        this.camera.position.z +=
            (targetZ - this.camera.position.z) *
            this.smoothness;

        this.camera.lookAt(
            this.player.position.x,
            this.player.position.y + 1.5,
            this.player.position.z
        );
    }
}
