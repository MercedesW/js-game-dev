window.addEventListener('load', function() {
    // https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = 1280;
    canvas.height = 720;

    /* agregar estos estilos acá en vez de hacerlo dentro del método draw, hace que
    tenga mejor performance. Sino se estaría agregando estas transformaciones
    todas las veces, acá se hace sólo una vez */ 
    ctx.fillStyle = 'white';
    ctx.lineWidth = 3;
    ctx.strokeStyle = 'white';

    class Player {
        constructor(game) {
            this.game = game;
            // posición del jugador
            this.collisionX = this.game.width * 0.5;
            this.collisionY = this.game.height * 0.5;
            // tamaño de la imagen del jugador
            this.collisionRadius = 30;
        }

        draw(context) {
            /* https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/beginPath */
            context.beginPath();
            /* https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/arc */
            // arc(x, y, radius, startAngle(en rad), endAngle(en rad), counterclockwise)
            // Math.PI * 2 hace un círculo entero
            context.arc(this.collisionX, this.collisionY, this.collisionRadius, 0, Math.PI * 2);
            /* con globalAlpha cambiamos la transparencia, pero se aplica a todo.
            Para aplicarlo sólo en el fill(relleno), encerramos el globalAlpha y el fill
            dentro de save y restore */
            context.save()
            context.globalAlpha = 0.5;
            context.fill();
            context.restore();
            context.stroke();// para que se muestre sólo el borde
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