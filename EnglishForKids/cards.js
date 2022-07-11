const cardsList = [
    ['Action (set A)', 'Action (set B)', 'Animals (set A)', 'Animals (set B)', 'Fruit', 'Clothes', 'Food', 'Sweats'],
    [{
            word: 'shoot',
            InRussian: 'стрелять',
            image: 'assets/img/cards/shoot.jpg',
            voice: 'assets/audio/shoot.mp3'
        },
        {
            word: 'kick',
            InRussian: 'пинать',
            image: 'assets/img/cards/kick.jpg',
            voice: 'assets/audio/kick.mp3'
        },
        {
            word: 'walk',
            InRussian: 'ходить',
            image: 'assets/img/cards/walk.jpg',
            voice: 'assets/audio/walk.mp3'
        },
        {
            word: 'dance',
            InRussian: 'танцевать',
            image: 'assets/img/cards/dance.jpg',
            voice: 'assets/audio/dance.mp3'
        },
        {
            word: 'fly',
            InRussian: 'летать',
            image: 'assets/img/cards/fly.jpg',
            voice: 'assets/audio/fly.mp3'
        },
        {
            word: 'draw',
            InRussian: 'рисовать',
            image: 'assets/img/cards/draw.jpg',
            voice: 'assets/audio/draw.mp3'
        },
        {
            word: 'jump',
            InRussian: 'прыгать',
            image: 'assets/img/cards/jump.jpg',
            voice: 'assets/audio/jump.mp3'
        },
        {
            word: 'eat',
            InRussian: 'есть',
            image: 'assets/img/cards/eat.jpg',
            voice: 'assets/audio/eat.mp3'
        }
    ],
    //Action (set B)
    [{
            word: 'play',
            InRussian: 'играть',
            image: 'assets/img/cards/play.jpg',
            voice: 'assets/audio/play.mp3'
        },
        {
            word: 'talk',
            InRussian: 'говаривать',
            image: 'assets/img/cards/talk.jpg',
            voice: 'assets/audio/talk.mp3'
        },
        {
            word: 'open',
            InRussian: 'открывать',
            image: 'assets/img/cards/open.jpg',
            voice: 'assets/audio/open.mp3'
        },
        {
            word: 'swim',
            InRussian: 'плавать',
            image: 'assets/img/cards/swim.jpg',
            voice: 'assets/audio/swim.mp3'
        },
        {
            word: 'hike',
            InRussian: 'путешествовать пешком',
            image: 'assets/img/cards/hike.jpg',
            voice: 'assets/audio/hike.mp3'
        },
        {
            word: 'shout',
            InRussian: 'кричать',
            image: 'assets/img/cards/shout.jpg',
            voice: 'assets/audio/shout.mp3'
        },
        {
            word: 'skip',
            InRussian: 'пропускать, прыгать',
            image: 'assets/img/cards/skip.jpg',
            voice: 'assets/audio/skip.mp3'
        },
        {
            word: 'run',
            InRussian: 'бегать',
            image: 'assets/img/cards/run.jpg',
            voice: 'assets/audio/run.mp3'
        }
    ],
    //Animal (set A)
    [{
            word: 'dog',
            InRussian: 'собака',
            image: 'assets/img/cards/dog.jpg',
            voice: 'assets/audio/dog.mp3'
        },
        {
            word: 'cat',
            InRussian: 'кот',
            image: 'assets/img/cards/cat.jpg',
            voice: 'assets/audio/cat.mp3'
        },
        {
            word: 'puppy',
            InRussian: 'щенок',
            image: 'assets/img/cards/puppy.jpg',
            voice: 'assets/audio/puppy.mp3'
        },
        {
            word: 'panda',
            InRussian: 'панда',
            image: 'assets/img/cards/panda.jpg',
            voice: 'assets/audio/panda.mp3'
        },
        {
            word: 'rabbit',
            InRussian: 'кролик',
            image: 'assets/img/cards/rabbit.jpg',
            voice: 'assets/audio/rabbit.mp3'
        },
        {
            word: 'monkey',
            InRussian: 'обезьяна',
            image: 'assets/img/cards/monkey.jpg',
            voice: 'assets/audio/monkey.mp3'
        },
        {
            word: 'sheep',
            InRussian: 'овца',
            image: 'assets/img/cards/sheep.jpg',
            voice: 'assets/audio/sheep.mp3'
        },
        {
            word: 'horse',
            InRussian: 'лошадь',
            image: 'assets/img/cards/horse.jpg',
            voice: 'assets/audio/horse.mp3'
        }
    ],
    //Animals (Set B)
    [{
            word: 'penguin',
            InRussian: 'пингвин',
            image: 'assets/img/cards/penguin.jpg',
            voice: 'assets/audio/penguin.mp3'
        },
        {
            word: 'leopard',
            InRussian: 'леопард',
            image: 'assets/img/cards/leopard.jpg',
            voice: 'assets/audio/leopard.mp3'
        },
        {
            word: 'eagle',
            InRussian: 'орел',
            image: 'assets/img/cards/eagle.jpg',
            voice: 'assets/audio/eagle.mp3'
        },
        {
            word: 'fish',
            InRussian: 'рыба',
            image: 'assets/img/cards/fish.jpg',
            voice: 'assets/audio/fish.mp3'
        },
        {
            word: 'mouse',
            InRussian: 'мышь',
            image: 'assets/img/cards/mouse.jpg',
            voice: 'assets/audio/mouse.mp3'
        },
        {
            word: 'squirrel',
            InRussian: 'белка',
            image: 'assets/img/cards/squirrel.jpg',
            voice: 'assets/audio/squirrel.mp3'
        },
        {
            word: 'dolphin',
            InRussian: 'дельфин',
            image: 'assets/img/cards/dolphin.jpg',
            voice: 'assets/audio/dolphin.mp3'
        },
        {
            word: 'lion',
            InRussian: 'лев',
            image: 'assets/img/cards/lion.jpg',
            voice: 'assets/audio/lion.mp3'
        }
    ],
    //Fruit
    [{
            word: 'apple',
            InRussian: 'яблоко',
            image: 'assets/img/cards/apple.jpg',
            voice: 'assets/audio/apple.mp3'
        },
        {
            word: 'banana',
            InRussian: 'банан',
            image: 'assets/img/cards/banana.jpg',
            voice: 'assets/audio/banana.mp3'
        },
        {
            word: 'peach',
            InRussian: 'персик',
            image: 'assets/img/cards/peach.jpg',
            voice: 'assets/audio/peach.mp3'
        },
        {
            word: 'apricot',
            InRussian: 'абрикос',
            image: 'assets/img/cards/apricot.jpg',
            voice: 'assets/audio/apricot.mp3'
        },
        {
            word: 'watermelon',
            InRussian: 'арбуз',
            image: 'assets/img/cards/watermelon.jpg',
            voice: 'assets/audio/watermelon.mp3'
        },
        {
            word: 'mango',
            InRussian: 'манго',
            image: 'assets/img/cards/mango.jpg',
            voice: 'assets/audio/mango.mp3'
        },
        {
            word: 'strawberry',
            InRussian: 'клубника',
            image: 'assets/img/cards/strawberry.jpg',
            voice: 'assets/audio/strawberry.mp3'
        },
        {
            word: 'cherry',
            InRussian: 'вишня',
            image: 'assets/img/cards/cherry.jpg',
            voice: 'assets/audio/cherry.mp3'
        }
    ],
    //Clothes
    [{
            word: 'shirt',
            InRussian: 'рубашка',
            image: 'assets/img/cards/shirt.jpg',
            voice: 'assets/audio/shirt.mp3'
        },
        {
            word: 'skirt',
            InRussian: 'юбка',
            image: 'assets/img/cards/skirt.jpg',
            voice: 'assets/audio/skirt.mp3'
        },
        {
            word: 'pants',
            InRussian: 'брюки',
            image: 'assets/img/cards/pants.jpg',
            voice: 'assets/audio/pants.mp3'
        },
        {
            word: 'hat',
            InRussian: 'шляпа',
            image: 'assets/img/cards/hat.jpg',
            voice: 'assets/audio/hat.mp3'
        },
        {
            word: 'jackboot',
            InRussian: 'ботфорт',
            image: 'assets/img/cards/jackboot.jpg',
            voice: 'assets/audio/jackboot.mp3'
        },
        {
            word: 'shoe',
            InRussian: 'обувь',
            image: 'assets/img/cards/shoe.jpg',
            voice: 'assets/audio/shoe.mp3'
        },
        {
            word: 'dress',
            InRussian: 'платье',
            image: 'assets/img/cards/dress.jpg',
            voice: 'assets/audio/dress.mp3'
        },
        {
            word: 'coat',
            InRussian: 'пальто',
            image: 'assets/img/cards/coat.jpg',
            voice: 'assets/audio/coat.mp3'
        }
    ],
    //Food
    [{
            word: 'chicken',
            InRussian: 'жареная курочка',
            image: 'assets/img/cards/friedchicken.jpg',
            voice: 'assets/audio/chicken.mp3'
        },
        {
            word: 'potato',
            InRussian: 'картошка',
            image: 'assets/img/cards/potato.jpg',
            voice: 'assets/audio/potato.mp3'
        },
        {
            word: 'fry',
            InRussian: 'жарить',
            image: 'assets/img/cards/fry.jpg',
            voice: 'assets/audio/fry.mp3'
        },
        {
            word: 'burger',
            InRussian: 'бургер',
            image: 'assets/img/cards/burger.jpg',
            voice: 'assets/audio/burger.mp3'
        },
        {
            word: 'pizza',
            InRussian: 'пицца',
            image: 'assets/img/cards/pizza.jpg',
            voice: 'assets/audio/pizza.mp3'
        },
        {
            word: 'salmon',
            InRussian: 'лосось',
            image: 'assets/img/cards/salmon.jpg',
            voice: 'assets/audio/salmon.mp3'
        },
        {
            word: 'stake',
            InRussian: 'мясо',
            image: 'assets/img/cards/stake.jpg',
            voice: 'assets/audio/stake.mp3'
        },
        {
            word: 'bean',
            InRussian: 'фасоль',
            image: 'assets/img/cards/bean.jpg',
            voice: 'assets/audio/bean.mp3'
        }
    ],
    //Sweats
    [{
            word: 'chocolate',
            InRussian: 'шоколад',
            image: 'assets/img/cards/chocolate.jpg',
            voice: 'assets/audio/chocolate.mp3'
        },
        {
            word: 'marmalade',
            InRussian: 'мармелад',
            image: 'assets/img/cards/marmalade.jpg',
            voice: 'assets/audio/marmalade.mp3'
        },
        {
            word: 'candy',
            InRussian: 'конфеты',
            image: 'assets/img/cards/candy.jpg',
            voice: 'assets/audio/candy.mp3'
        },
        {
            word: 'cake',
            InRussian: 'кекс',
            image: 'assets/img/cards/cake.jpg',
            voice: 'assets/audio/cake.mp3'
        },
        {
            word: 'tart',
            InRussian: 'пирог',
            image: 'assets/img/cards/tart.jpg',
            voice: 'assets/audio/tart.mp3'
        },
        {
            word: 'lollipop',
            InRussian: 'леденец',
            image: 'assets/img/cards/lollipop.jpg',
            voice: 'assets/audio/lollipop.mp3'
        },
        {
            word: 'honey',
            InRussian: 'медовый',
            image: 'assets/img/cards/honey.jpg',
            voice: 'assets/audio/honey.mp3'
        },
        {
            word: 'bounty',
            InRussian: 'награда',
            image: 'assets/img/cards/bounty.jpg',
            voice: 'assets/audio/bounty.mp3'
        }
    ],
]