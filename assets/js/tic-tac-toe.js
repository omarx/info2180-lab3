document.addEventListener('DOMContentLoaded', () => {
    let X = 'X';
    let O = 'O';
    let gridArr = [];  // this is declared but not used
    let lastVal = 0;
    let playerX = true;

    const gridBox = document.getElementById("board");
    const grid = gridBox.querySelectorAll('div');

    grid.forEach(e => {
        e.className = 'square';

        e.addEventListener('mouseover', function() {
            this.classList.add('hover');
        });

        e.addEventListener('mouseout', function() {
            this.classList.remove('hover');
        });

        e.addEventListener('click', function() {
            if (this.hasAttribute('data-value')) {
                return;
            }

            this.setAttribute('data-value', lastVal + 1);
            lastVal++;

            if (playerX) {
                this.classList.add('X');
                this.innerHTML = X;
            } else {
                this.classList.add('O');
                this.innerHTML = O;
            }
            playerX = !playerX;
        });
    });
});
