document.getElementById('submitGame').addEventListener('click', function() {
    const game = document.getElementById('gameInput').value;
    const console = document.getElementById('consoleInput').value;
    const playstyle = document.getElementById('playstyleInput').value;

    if (game, console, playstyle) {
        const message = ` Your Gamer Tag: ${playstyle}_${game}/${console}1234`;
        document.getElementById('output').textContent = message;
    } else {
        document.getElementById(`output`).textContent = `go back`
    }
});