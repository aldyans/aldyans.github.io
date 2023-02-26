let arrEvent = document.querySelectorAll('.kotak');
let arrItem = document.querySelectorAll('.item'); 
let arrX = document.querySelectorAll('.close');
let arrO = document.querySelectorAll('.circle');
let lineHorizontal = [document.querySelector('.garis.h1.none'), document.querySelector('.garis.h2.none'), document.querySelector('.garis.h3.none')];
let lineVertikal = [document.querySelector('.garis.v1.none'), document.querySelector('.garis.v2.none'), document.querySelector('.garis.v3.none')];
let lineDiagonal = [document.querySelector('.garis.d1.none'), document.querySelector('.garis.d2.none')];
let ruleArr = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let num = 1;

function tambahKeArray(array, string, index) {
    let item = index.firstElementChild.firstElementChild.id;
    let itemInt = parseInt(item.charAt(5)); 
    array[itemInt] = string;
} 

function itemActive(check, element) {
    if (check != 'item active') {
        if (num % 2 == 1) {
                element.firstElementChild.classList.add('active');
                element.firstElementChild.firstElementChild.classList.add('active');
                tambahKeArray(ruleArr, 'x', element);
                num++;
        } else {
                element.firstElementChild.classList.add('active');
                element.firstElementChild.lastElementChild.classList.add('active');
                tambahKeArray(ruleArr, 'o', element);
                num++;
        };
    } else {
        return;
    }
}

function displayDraw() {
    const reset = document.querySelector('.reset active');
    reset.textContent = 'DRAW';
}

function animasiKedip(item) {
    setTimeout(() => {
        item.style.display = 'none';
    }, 500);
    setTimeout(() => {
        item.style.display = 'block';
    }, 800);
    setTimeout(() => {
        item.style.display = 'none';
    }, 1400);
    setTimeout(() => {
        item.style.display = 'block';
    }, 1700);
}

function penuh(arrayN, item, X, O) {
    item.forEach(element => {
        element.className = 'item';
    });
    X.forEach(element => {
        element.className.baseVal = 'close';
        element.className.animVal = 'close';
    });
    O.forEach(element => {
        element.className.baseVal = 'circle';
        element.className.animVal = 'circle';
    });
    for ( let i = 0; i < arrayN.length; i++) {
        arrayN[i] = 0;
    }
}

function reset() {
    let resetElement = document.querySelector('.reset');
    resetElement.classList.add('active');
    resetElement.addEventListener('click', function(e) {
        penuh(ruleArr, arrItem, arrX, arrO);
        displayDraw();

        lineHorizontal.forEach(element => {
            element.classList.add('none');
        });
        lineVertikal.forEach(element => {
            element.classList.add('none');
        });
        lineDiagonal.forEach(element => {
            element.classList.add('none');
        });

        setTimeout(() => {
            resetElement.classList.remove('active');
        }, 100);
    });
    
}

function check(array) {
    if (array[0] == 'x' && array[3] == 'x' && array[6] == 'x' ) {
        lineVertikal[0].classList.remove('none');
        animasiKedip(lineVertikal[0]);
        reset();
        console.log('X menang');
    } else if (array[1] == 'x' && array[4] == 'x' && array[7] == 'x') {
        lineVertikal[1].classList.remove('none');
        animasiKedip(lineVertikal[1]);
        reset();
        console.log('X menang');
    } else if (array[2] == 'x' && array[5] == 'x' && array[8] == 'x') {
        lineVertikal[2].classList.remove('none');
        animasiKedip(lineVertikal[2]);
        reset();
        console.log('X menang');
    } else if (array[0] == 'x' && array[1] == 'x' && array[2] == 'x') {
        lineHorizontal[0].classList.remove('none');
        animasiKedip(lineHorizontal[0]);
        reset();
        console.log('X menang');
    } else if (array[3] == 'x' && array[4] == 'x' && array[5] == 'x') {
        lineHorizontal[1].classList.remove('none');
        animasiKedip(lineHorizontal[1]);
        reset();
        console.log('X menang');
    } else if (array[6] == 'x' && array[7] == 'x' && array[8] == 'x') {
        lineHorizontal[2].classList.remove('none');
        animasiKedip(lineHorizontal[2]);
        reset();
        console.log('X menang');
    } else if (array[0] == 'x' && array[4] == 'x' && array[8] == 'x') {
        lineDiagonal[0].classList.remove('none');
        animasiKedip(lineDiagonal[0]);
        reset();
        console.log('X menang');
    } else if (array[2] == 'x' && array[4] == 'x' && array[6] == 'x') {
        lineDiagonal[1].classList.remove('none');
        animasiKedip(lineDiagonal[1]);
        reset();
        console.log('X menang');
    } // bagian 'o';
    else if (array[0] == 'o' && array[3] == 'o' && array[6] == 'o' ) {
        lineVertikal[0].classList.remove('none');
        animasiKedip(lineVertikal[0]);
        reset();
        console.log('O menang');
    } else if (array[1] == 'o' && array[4] == 'o' && array[7] == 'o') {
        lineVertikal[1].classList.remove('none');
        animasiKedip(lineVertikal[1]);
        reset();
        console.log('O menang');
    } else if (array[2] == 'o' && array[5] == 'o' && array[8] == 'o') {
        lineVertikal[2].classList.remove('none');
        animasiKedip(lineVertikal[2]);
        reset();
        console.log('O menang');
    } else if (array[0] == 'o' && array[1] == 'o' && array[2] == 'o') {
        lineHorizontal[0].classList.remove('none');
        animasiKedip(lineHorizontal[0]);
        reset();
        console.log('O menang');
    } else if (array[3] == 'o' && array[4] == 'o' && array[5] == 'o') {
        lineHorizontal[1].classList.remove('none');
        animasiKedip(lineHorizontal[1]);
        reset();
        console.log('O menang');
    } else if (array[6] == 'o' && array[7] == 'o' && array[8] == 'o') {
        lineHorizontal[2].classList.remove('none');
        animasiKedip(lineHorizontal[2]);
        reset();
        console.log('O menang');
    } else if (array[0] == 'o' && array[4] == 'o' && array[8] == 'o') {
        lineDiagonal[0].classList.remove('none');
        animasiKedip(lineDiagonal[0]);
        reset();
        console.log('O menang');
    } else if (array[2] == 'o' && array[4] == 'o' && array[6] == 'o') {
        lineDiagonal[1].classList.remove('none');
        animasiKedip(lineDiagonal[1]);
        reset();
        console.log('O menang');
    }
}

arrEvent.forEach(element => {
    element.addEventListener('click', function(e) {
        let first = e.target.firstElementChild.className;
        itemActive(first, e.target);
        check(ruleArr);
        let cari = ruleArr.includes(0);
        console.log(cari);
        if (cari == false) {
            reset();
        }
    });
});