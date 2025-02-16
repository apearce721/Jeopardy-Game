// Initialize game board on page load
initBoard()

function initBoard(){
    let board = document.getElementById('clueBoard')

    // Generate five rows, then place six boxes in each row
    for(let i = 0; i < 5; i++){
        let row = document.createElement('div')
        let boxValue = 200 * (i + 1)
        row.className = 'clueRow'

        for(let j = 0; i < 6; j++){
            let box = document.createElement('div')
            box.className = 'clueBox'
            box.textContent = '$' + boxValue
            box.addEventListener('click', getClue, false)
            row.appendChild(box)
        }

        board.appendChild(row)
    }
}