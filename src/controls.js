
// HUMAN TORCH GAME
// Player Controls

export class Controls {
    constructor() {
        this.keys = {};

        window.addEventListener('keydown', (event) => {
            this.keys[event.code] = true;
        });

        window.addEventListener('keyup', (event) => {
            this.keys[event.code] = false;
        });
    }

    isPressed(key) {
        const keyMap = {
            w: 'KeyW',
            a: 'KeyA',
            s: 'KeyS',
            d: 'KeyD',
            space: 'Space',
            shift: 'ShiftLeft',
            f: 'KeyF'
        };

        const code = keyMap[key.toLowerCase()] || key;

        return this.keys[code] === true;
    }
}
