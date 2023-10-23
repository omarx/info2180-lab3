document.addEventListener('DOMContentLoaded', () => {
    let X = 'X';
    let O = 'O';
    let lastVal = 0;
    let playerX = true;
    let winner = null;

    const gridBox = document.getElementById("board");
    const grid = gridBox.querySelectorAll('div');
    const statusDiv = document.getElementById('status');

    function checkWinner() {
        const winningCombos = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];

        for (let combo of winningCombos) {
            if (grid[combo[0]].innerHTML && grid[combo[0]].innerHTML === grid[combo[1]].innerHTML && grid[combo[0]].innerHTML === grid[combo[2]].innerHTML) {
                return grid[combo[0]].innerHTML;
            }
        }

        return null;
    }

    grid.forEach(e => {
        e.className = 'square';

        e.addEventListener('mouseover', function() {
            this.classList.add('hover');
        });

        e.addEventListener('mouseout', function (){
            this.classList.remove('hover');
        });

        e.addEventListener('click', function () {
            if (this.hasAttribute('data-value') || winner) {
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

            winner = checkWinner();
            if (winner) {
                statusDiv.textContent = `Congratulations! ${winner} is the Winner!`;
                statusDiv.classList.add('you-won');
            }

            playerX = !playerX;
        });
    });
});
