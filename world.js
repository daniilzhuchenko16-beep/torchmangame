// HUMAN TORCH GAME
// Game World System

export class World {
    constructor(scene) {
        this.scene = scene;
        this.objects = [];
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
