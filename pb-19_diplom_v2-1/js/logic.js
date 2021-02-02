let players = ['x', 'o'];

// 🔥 В этой переменной должно быть значение или 1 или 2, не массив
let activePlayer = 0;  //Активный игрок
// 🔥 Это ненужная переменная
let countPlayers = 2;  //Количество игроков


// 🔥 Тут можно только объявить переменную доски, а присвоить значение внутри startGame
let board;

//Функция для вычисления случайного номера игрока, получаемого при старте: 0 или 1
function getRandomPlayers(countPlayers) {
  // 🔥 Math.floor(countPlayers) можно заменить на длину массива players
  return Math.floor(Math.random() * Math.floor(countPlayers));
}

function startGame() {
  activePlayer = getRandomPlayers(countPlayers); //Передаём переменной значение фукции для дальнейшей игры
  board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];
  renderBoard(board);
}

function click(row, col) {
  board[row][col] = players[activePlayer];
  renderBoard(board);
  //Проверка по горизонтали
  // 🔥 в условии массива не используйте фиксированную цифру, опирайтесь на длину массива
  // 🔥 Можно объединить в один цикл и в оодну if - else с четырьмя ветками, получится компактнее
  for (let row = 0; row < 3; row++) {
    if (board[row][0] === players[activePlayer]
      && board[row][1] === players[activePlayer]
      && board[row][2] === players[activePlayer]) {
      showWinner(activePlayer);
    }
  }
  //Проверка по вертикали
  for (let col = 0; col < 3; col++) {
    if (board[0][col] === players[activePlayer]
      && board[1][col] === players[activePlayer]
      && board[2][col] === players[activePlayer]) {
      showWinner(activePlayer);
    }
  }
  //Проверка по диагоналям
  if (board[0][0] === players[activePlayer]
    && board[1][1] === players[activePlayer]
    && board[2][2] === players[activePlayer]) {
    showWinner(activePlayer);
  }
  if (board[0][2] === players[activePlayer]
    && board[1][1] === players[activePlayer]
    && board[2][0] === players[activePlayer]) {
    showWinner(activePlayer);
  }

  changePlayer();
}

//Условие смены текущего игрока
function changePlayer() {
  // 🔥 Факультативно: попробуйте записать передачу хода в одну строку
  if (activePlayer === 1) {
    activePlayer = 0;
  } else {
    activePlayer = 1;
  }
}
