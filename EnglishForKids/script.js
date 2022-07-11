class EnglishForKids {
    constructor() {

        this.elements = {
            audioElement: new Audio(),
            main: document.querySelector('.main-container'),
            burgerMenu: document.querySelector('.burger-menu'),
            burger: document.querySelector('.burger'),
            menuItems: document.querySelectorAll('.list-item'),
            cards: document.querySelectorAll('.card'),
            cardImages: document.querySelectorAll('.card-img'),
            cardName: document.querySelectorAll('.card-name'),
            scrollerOn: document.querySelector('.scroller'),
            buttonSwitch: document.querySelectorAll('.card-switch'),
            wrapperLine: document.querySelectorAll('.wrapper-line'),
            switchAround: document.querySelectorAll('.scrollIt'),
            playGame: document.querySelector('.switcher'),
            startButton: document.querySelector('.start'),
            playText: document.querySelector('.switch-text'),
            score: document.querySelector('.score'),
            table: document.querySelector('.table-wrapper'),
            tableBody: document.querySelector('.table-body'),
            removeGameImg: document.querySelector('.game-img'),
            removeGameText: document.querySelector('.game-title'),
            removePopup: document.querySelector('.popup-game')
        }

        this.elementsCheck = {
            burgerCheck: false,
            mainPageCheck: false,
            switchCheck: false,
            buttonSwitchCheck: false,
            tableCheck: false,
            reverseCheck: false,
        }

        this.group = 0;
        this.arr = [];
        this.mistake = 0;
        this.index = 0;
        this.handlerShim = (e) => { this.gameSuccessEvent(e) }
    }

    audio(element) {
        if (!this.elementsCheck.mainPageCheck && element.currentTarget.classList[1] !== 'off' && !this.elementsCheck.switchCheck) {
            this.elements.audioElement.src = `${cardsList[this.group][element.currentTarget.classList[1] - 1].voice}`
            this.elements.audioElement.play()
        }
    }


    loadPage() {
        this.elements.main.removeChild(this.elements.main.firstElementChild);
        let contWrap = this.elements.main.appendChild(document.createElement('div'));
        consWrap.classList.add('wrapper');

        for (let i = 0; i < 2; i++) {
            let wrappingLine = contWrap.appendChild(document.createElement('div'))
            wrappingLine.classList.add('wrapper-line')
            for (let i = 0; i < 4; i++) {
                wrappingLine.innerHTML += `<div class="card ${i+1}" id="${i+2}">\n<div class="card-img"></div>\n<div class="card-text">\n<h2 class="card-name"></h2>\n<div class="card-switch visable">\n<img src="img/switch2.png" alt="swith" class="scrollIt" id="${i+1}">\n</div>\n</div>\n</div>\n`
            }
        }
    }

    burgerOn() {
        this.elements.burger.classList.toggle('burger-active');
        this.elementsCheck.burgerCheck = !this.elementsCheck.burgerCheck;
        if (this.elementsCheck.burgerCheck) {
            this.elements.burgerMenu.style.left = '0px';
        } else {
            this.elements.burgerMenu.style.left = '-700px';
        }
    }

    loadCards() {
        this.elementsCheck.mainPageCheck = true;
        this.elementsCheck.buttonSwitchCheck = false;

        for (let i = 0; i < this.elements.cardImages.length; i++) {
            this.elements.cardImages[i].style.background = `center / cover no-repeat url(${cardsList[i+1][0].image})`;
            this.elements.cardName[i].innerHTML = cardsList[0][i];
        }
    }

    reverseImg(e) {
        this.elementsCheck.reverseCheck = true
        this.elements.cards.forEach(item => {

            let combinator = e.target.id
            this.elements.switchAround[combinator - 1].classList.add('visable')

            if (item.classList.contains(combinator)) {
                item.style.transform = 'rotateY(180deg)'

                this.elements.cardName[combinator - 1].innerHTML = cardsList[this.group][combinator - 1].InRussian

                for (let i = 0; i < item.children.length; i++) {
                    item.children[i].style.transform = 'rotateY(180deg)'
                }

                item.addEventListener('mouseleave', () => {
                    if (this.elementsCheck.reverseCheck) {
                        item.style.transform = 'rotateY(0deg)';

                        this.elements.cardName[combinator - 1].innerHTML = cardsList[this.group][combinator - 1].word
                        for (let i = 0; i < item.children.length; i++) {
                            item.children[i].style.transform = 'rotateY(0deg)'
                        }
                    }
                    this.elementsCheck.reverseCheck = false
                    this.elements.switchAround[combinator - 1].classList.remove('visable')
                })
            }
        })
    }

    showSwitch() {
        this.elements.buttonSwitch.forEach(item => {
            if (item.classList.contains('visable') && !this.elementsCheck.mainPageCheck) {
                item.classList.remove('visable');
            } else if (this.elementsCheck.mainPageCheck || this.elementsCheck.switchCheck) {
                item.classList.add('visable');
            }
        })
    }

    switchPage(id) {

        if (this.elements.burger.classList.contains('burger-active')) {
            this.burgerOn()
        }

        if (id.target.id === '1') {
            this.loadCards()
            this.showSwitch()
            this.removeTable()
        } else if (id.target.id === '10') {
            this.crateTable()
            this.elements.main.classList.add('visable')
            this.elements.table.classList.remove('visable')
        } else {
            this.group = id.target.classList[1]
            this.elementsCheck.mainPageCheck = false
            this.elementsCheck.buttonSwitchCheck = true
            if (this.elementsCheck.tableCheck) {
                this.removeTable()
            }

            for (let i = 0; i < this.elements.cardImages.length; i++) {
                this.elements.cardImages[i].style.background = `center / cover no-repeat url(${cardsList[id.target.classList[1]][i].image})`
                this.elements.cardName[i].innerHTML = cardsList[id.target.classList[1]][i].word
            }

            this.showSwitch()
            this.training()
        }
    }

    training() {
        if (this.elementsCheck.switchCheck) {
            if (this.elementsCheck.mainPageCheck) {
                this.finishGame()
            } else {
                this.elements.startButton.classList.remove('visable')
                this.elements.scrollerOn.style.left = '85px'
                this.elements.playText.textContent = 'Play'
                this.elements.playText.style.right = '85px'
                if (!this.elementsCheck.mainPageCheck) {
                    this.elements.cardName.forEach(item => {
                        item.classList.add('visable')
                    })
                    this.showSwitch()
                }
            }

        } else {
            this.elements.score.textContent = ''
            this.elements.cards.forEach(item => {
                item.style.opacity = '1'
            })
            this.elements.scrollerOn.style.left = '5px'
            this.elements.playText.textContent = 'Train'
            this.elements.playText.style.right = '5px'
            this.elements.startButton.classList.add('visable')
            this.elements.cardName.forEach(item => {
                item.classList.remove('visable')
            })
            this.showSwitch()
        }
    }

    crateTable() {
        this.elementsCheck.tableCheck = true;
        let x = 0;
        let y = 0;
        for (let i = 0; i < 64; i++) {
            if (i % 8 === 0 && i !== 0 && i !== 1) {
                x++
                y = 0
            }
            let section = this.elements.tableBody.appendChild(document.createElement('tr'));

            for (let c = 0; c < 6; c++) {
                let col = section.appendChild(document.createElement('td'))
                if (c === 0) {
                    col.innerHTML = cardsList[0][x]
                } else if (c === 1) {
                    col.innerHTML = cardsList[x + 1][y].word
                } else if (c === 2) {
                    col.innerHTML = cardsList[x + 1][y].InRussian
                }
            }
            y++
        }
    }

    randomiser() {
        this.arr = [];
        cardsList[this.group].forEach(item => {
            this.arr.push(item.voice)
        })
        this.arr.sort(() => Math.random() - 0.5)
        this.index = 0
        this.gameSuccess()
    }

    gameSuccess() {
        this.elements.cards.forEach(item => {
            item.removeEventListener('click', this.handlerShim)
        })
        if (this.index === 8) {
            this.finishGame(this.elements.score.textContent)
        } else {
            this.elements.audioElement.src = this.arr[this.index]
            setTimeout(() => {
                this.elements.audioElement.play()
            }, 1000);
            this.elements.cards.forEach(item => {
                item.addEventListener('click', this.handlerShim)
            })
        }
    }

    gameSuccessEvent(e) {
        if (cardsList[this.group][e.currentTarget.classList[1] - 1].voice === this.arr[this.index]) {
            this.elements.score.innerHTML += '<div class="star">\n<img src="assets/img/true.png" alt="star" class="star-pick">\n</div>'
            this.elements.audioElement.src = 'assets/audio/true.mp3'
            this.elements.audioElement.play()
            e.currentTarget.style.opacity = '0.5'
                ++this.index
            setTimeout(() => {
                this.gameSuccess()
            }, 1500);

        } else {
            if (e.currentTarget.style.opacity !== '0.5') {
                this.elements.audioElement.src = 'assets/audio/error.mp3'
                this.elements.audioElement.play()
                this.mistake++
                    this.elements.score.innerHTML += '<div class="star">\n<img src="assets/img/false.png" alt="star" class="star-pick">\n</div>'
            }
        }
    }

    finishGame(str) {
        this.elements.removePopup.style.display = 'flex';
        this.elements.removeGameText.textContent = '';
        this.elements.removeGameImg.src = '';

        if (this.elementsCheck.mainPageCheck) {
            this.elements.removeGameText.textContent = 'Before you start training, please choose a theme'
        } else {
            if (this.mistake === 0) {
                this.elements.audioElement.src = 'assets/audio/success.mp3'
                this.elements.removeGameImg.src = 'assets/img/smile.png'
                this.elements.removeGameText.textContent = 'congratulation, You win'
                this.elements.audioElement.play()
            } else {
                this.elements.audioElement.src = 'assets/audio/failure.mp3'
                this.elements.removeGameText.textContent = `${this.mistake} Errors`
                this.elements.audioElement.play()
            }
            this.elements.score.textContent = ''
            this.elements.cards.forEach(item => {
                item.style.opacity = '1'
            })
            this.loadCards()
            this.elements.scrollerOn.style.left = '7px';
            this.elements.playText.style.right = '7px';
            this.elements.playText.textContent = 'Train';
            this.elements.startButton.classList.add('visable')
            this.elements.cardName.forEach(item => {
                item.classList.remove('visable')
            })
        }
        setTimeout(() => {
            this.elements.removePopup.style.display = 'none'
        }, 3000);
    }

    action() {
        this.loadCards()

        for (let i = 0; i < this.elements.menuItems.length; i++) {
            let menuItem = this.elements.menuItems[i]
            menuItem.addEventListener('click', (e) => {
                this.switchPage(e)
                this.group = e.target.id - 1
            })
        }

        this.elements.burger.addEventListener('click', this.burgerOn.bind(this))

        for (let i = 0; i < this.elements.cards.length; i++) {
            let card = this.elements.cards[i]
            card.addEventListener('click', (e) => {
                this.audio(e)
                if (this.elementsCheck.mainPageCheck) {
                    this.switchPage(e)
                    this.group = e.currentTarget.id - 1
                }
            })
        }
        for (let i = 0; i < this.elements.switchAround.length; i++) {
            let pick = this.elements.switchAround[i]
            pick.addEventListener('click', (e) => {
                this.reverseImg(e)
            })
        }

        this.elements.startButton.addEventListener('click', () => {
            this.randomiser()
        })

        this.elements.playGame.addEventListener('click', () => {
            this.elementsCheck.switchCheck = !this.elementsCheck.switchCheck
            this.training()
        })
    }

    openStatistics() {
        this.elements.main.removeChild(this.elements.main.firstElementChild);
        let wrap = this.elements.main.appendChild(document.createElement('div'));
        wrap.classList.add('wrapper');
    }

    removeTable() {
        this.elementsCheck.tableCheck = false;
        this.elements.main.classList.remove('visable');
        this.elements.table.classList.add('visable');
    }
}


const englishForKIds = new EnglishForKids();
window.addEventListener('DOMContentLoaded', () => {
    englishForKIds.action();
})