let players = [ "(Player name)", "BOT" ]
let player = players[0];
let winner = null;

function square_clicked(element) {
    if (element.className == 'square') {
        if (player != players[1]) {
            element.className = 'square x'
            player = players[1]
        }
    }
}

function check_who_won() {
    let A1 = document.getElementById('A1');
    let A2 = document.getElementById('A2');
    let A3 = document.getElementById('A3');
    let B1 = document.getElementById('B1');
    let B2 = document.getElementById('B2');
    let B3 = document.getElementById('B3');
    let C1 = document.getElementById('C1');
    let C2 = document.getElementById('C2');
    let C3 = document.getElementById('C3');

    if (check_sequence(A1, A2, A3)) {
        console.log(winner)
    }

    if (check_sequence(B1, B2, B3)) {
        console.log(winner)
    }

    if (check_sequence(C1, C2, C3)) {
        console.log(winner)
    }

    if (check_sequence(A1, B1, C1)) {
        console.log(winner)
    }

    if (check_sequence(A2, B2, C2)) {
        console.log(winner)
    }

    if (check_sequence(A3, B3, C3)) {
        console.log(winner)
    }

    if (check_sequence(A1, B2, C3)) {
        console.log(winner)
    }

    if (check_sequence(A3, B2, C1)) {
        console.log(winner)
    }

    if (winner != null) { return }

    bot()
    requestAnimationFrame(check_who_won);
}

function bot() {
    function check_play(A, B) {
        if (A.className != 'square' && (A.className && B.className) == 'square x' && A.className == B.className) {
            return true
        }
    }

    function empty(A, B, C) {
        if ((A.className && B.className && C.className) == 'square') { return true }
        if ((C.className && B.className && A.className) == 'square') { return true }
        if ((B.className) == 'square') { return true }
    }

    function click(A) {
        if (A.className == 'square') {
            A.className = 'square o'
            player = players[0]
        }
    }

    if (player == players[1]) {
        // horizontal
        if (empty(A1, A2, A3)) {
            if (check_play(A1, A2)) {
                click(A3)
                return
            }

            if (check_play(A2, A3)) {
                click(A1)
                return
            }

            if (check_play(A1, A3)) {
                click(A2)
                return
            }
        }

        if (empty(B1, B2, B3)) {
            if (check_play(B1, B2)) {
                click(B3)
                return
            }

            if (check_play(B2, B3)) {
                click(B1)
                return
            }

            if (check_play(B1, B3)) {
                click(B2)
                return
            }
        }

        if (empty(C1, C2, C3)) {
            if (check_play(C1, C2)) {
                click(C3)
                return
            }

            if (check_play(C2, C3)) {
                click(C1)
                return
            }

            if (check_play(C1, C3)) {
                click(C2)
                return
            }
        }
        // end horizontal

        // vertical
        if (empty(A1, B1, C1)) {
            if (check_play(A1, B1)) {
                click(C1)
                return
            }

            if (check_play(B1, C1)) {
                click(A1)
                return
            }

            if (check_play(A1, C1)) {
                click(B1)
                return
            }
        }

        if (empty(A2, B2, C2)) {
            if (check_play(A2, B2)) {
                click(C2)
                return
            }

            if (check_play(B2, C2)) {
                click(A2)
                return
            }

            if (check_play(A2, C2)) {
                click(B2)
                return
            }
        }

        if (empty(A3, B3, C3)) {
            if (check_play(A3, B3)) {
                click(C3)
                return
            }

            if (check_play(B3, C3)) {
                click(A3)
                return
            }

            if (check_play(A3, C3)) {
                click(B3)
                return
            }
        }
        // end vertical

        if (empty(A1, B2, C3)) {
            if (check_play(A1, B2)) {
                click(C3)
                return
            }

            if (check_play(B2, C3)) {
                click(A1)
                return
            }

            if (check_play(A1, C3)) {
                click(B2)
                return
            }
        }

        if (empty(A3, B2, C1)) {
            if (check_play(A3, B2)) {
                click(C1)
                return
            }

            if (check_play(B2, C1)) {
                click(A3)
                return
            }

            if (check_play(A3, C1)) {
                click(B2)
                return
            }
        }

        if (A1.className == 'square') {
            click(A1)
            return
        }

        if (A2.className == 'square') {
            click(A2)
            return
        }

        if (A3.className == 'square') {
            click(A3)
            return
        }

        if (B1.className == 'square') {
            click(B1)
            return
        }

        if (B2.className == 'square') {
            click(B2)
            return
        }

        if (B3.className == 'square') {
            click(B3)
            return
        }

        if (C1.className == 'square') {
            click(C1)
            return
        }

        if (C2.className == 'square') {
            click(C2)
            return
        }

        if (C3.className == 'square') {
            click(C3)
            return
        }
    }
}

function check_sequence(A, B, C) {
    if (A.className != 'square' && A.className == B.className && B.className == C.className) {
        if ((A.className && B.className && C.className) == 'square x') { winner = players[0] }
        if ((A.className && B.className && C.className) == 'square o') { winner = players[1] }

        return true
    }
}

check_who_won()
