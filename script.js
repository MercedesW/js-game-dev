window.addEventListener('load', function() {
    // https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = 1280;
    canvas.height = 720;

    class Player {
        constructor(game) {
            this.game = game;
        }

        draw(context) {
            /* https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/beginPath */
            context.beginPath();
            /* https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/arc */
            // arc(x, y, radius, startAngle(en rad), endAngle(en rad), counterclockwise)
            // Math.PI * 2 hace un círculo entero
            context.arc(400, 500, 50, 0, Math.PI * 2);
            context.fill();
        }
    }

    class Game {
        constructor(canvas) {
            this.canvas = canvas;
            this.width = this.canvas.width;
            this.height = this.canvas.height;
            /* Al crear un juego, crea un player, y le pasa por referencia
            el juego entero */
            /* https://www.escuelafrontend.com/valor-y-referencia-en-javascript */
            this.player = new Player(this);
        }
        render(context) {
            this.player.draw(context);
        }
    }

    const game = new Game(canvas);// le pasa el canvas de la línea 3
    game.render(ctx); // línea 2
    console.log(game)
    // El orden de las clases importa
    // en la consola hay una recursión donde game tiene player y ese player tiene el game, etc( no sé si está bien)

})