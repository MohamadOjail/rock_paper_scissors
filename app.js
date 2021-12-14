class Parttaker {

    constructor() {
        this.score = 0;
    }
    set points(value) {
        this.score = Number(value);
    }
    get points() {
        return this.score;
    }

    set image(value) {
        switch (value) {
            case 0:
                this.pic = `images/rock.png`;
                this.hnd = `rock`;
                break;
            case 1:
                this.pic = `images/paper.png`;
                this.hnd = `paper`;
                break;
            case 2:
                this.pic = `images/scissors.png`;
                this.hnd = `scissors`;
                break;
            default:
                break;
        }
    }
    get hand() {
        return this.hnd;
    }
    get image() {
        return this.pic;
    }
};

let player = new Parttaker();
let computer = new Parttaker();

const playGame = () => {
    const pImage = document.querySelector(`.player-hand`);
    const cImage = document.querySelector(`.computer-hand`);
    const winner = document.querySelector(`.winner`);

    const btns = document.querySelectorAll(`.options button`);
    btns.forEach(button => {
        button.addEventListener(`click`, (e) => {
            winner.textContent = ``;
            switch (e.target) {
                case btns[0]:
                    player.image = 0;
                    break;
                case btns[1]:
                    player.image = 1;
                    break;
                case btns[2]:
                    player.image = 2;
                    break;
            }
            computer.image = Math.floor(Math.random() * 3);
            shake();
            setTimeout(() => {
                compare();
                updateScore();
                updateImages();
            }, 2100);

        })
    });

    const compare = () => {

        if (player.hand === computer.hand) {
            winner.textContent = `no winner`;
            return;
        }
        if (player.hand === `rock`) {
            if (computer.hand === `scissors`) {
                player.points++;
                winner.textContent = `You win!`;
            } else {
                computer.points++;
                winner.textContent = `Computer wins!`;
            }
            return;
        }
        if (player.hand === `paper`) {
            if (computer.hand === `rock`) {
                player.points++;
                winner.textContent = `You win!`;
            } else {
                computer.points++;
                winner.textContent = `Computer wins!`;
            }
            return;
        }
        if (player.hand === `scissors`) {
            if (computer.hand === `paper`) {
                player.points++;
                winner.textContent = `You win!`;
            } else {
                computer.points++;
                winner.textContent = `Computer wins!`;
            }
            return;
        }
    }

    const updateScore = () => {
        const pScore = document.querySelector(`.player-score`);
        const cScore = document.querySelector(`.computer-score`);
        pScore.textContent = player.points;
        cScore.textContent = computer.points;
    }

    const updateImages = () => {
        pImage.src = player.image;
        cImage.src = computer.image;
    }

    const shake = () => {
        pImage.src = `images/rock.png`;
        cImage.src = `images/rock.png`;

        const hands = document.querySelectorAll(".hands img");
        hands.forEach(hand => {
            hand.addEventListener('animationend', function () {
                hand.style.animation = '';
            });
        });

        pImage.style.animation = 'playerSake 2s ease';
        cImage.style.animation = 'computerSake 2s ease';
    }
}

playGame();