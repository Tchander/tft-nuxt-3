import { defineStore } from 'pinia'
import { CLASSES } from "assets/const";

export const useChampionsStore = defineStore('champions-store',{
    state: () => {
        return {
            champions: [
                {
                    id: 1,
                    name: 'Алистар',
                    ability: {
                        name: 'Сокрушение',
                        description: [
                            'Алистар совершает рывок к цели, отбрасывая ее на небольшое расстояние. Затем он бьет по земле, нанося ' +
                            'всем врагам поблизости X магического урона и оглушая их на X сек.'
                        ]
                    },
                    rank: 4,
                    classes: [CLASSES.hextech, CLASSES.colossus],
                    stats: {
                        health: 1400,
                        armor: 80,
                        mana: '85/170',
                        damage: 90,
                        speed: 0.6,
                        magicResist: 80,
                        dps: 150,
                        critChance: 0.25,
                        range: 1
                    },
                    avatar: 'alistar'
                },
                {
                    id: 2,
                    name: 'Ари',
                    ability: {
                        name: 'Сферы обмана',
                        description: [
                            'Ари выпускает перед собой сферу, которая пролетает X яч., а затем возвращается обратно. ' +
                            'Все пораженные враги получают X магического урона за касание. Если в противника попала сфера, ' +
                            'последующие сферы наносят ему X% урона. Каждый раз, когда Ари применяет умение, количество выпускаемых ' +
                            'сфер увеличивается на X до конца боя.'
                        ]
                    },
                    rank: 4,
                    classes: [CLASSES.syndicate, CLASSES.arcanist],
                    stats: {
                        health: 800,
                        armor: 30,
                        mana: '30/50',
                        damage: 45,
                        speed: 0.75,
                        magicResist: 30,
                        dps: 60,
                        critChance: 0.75,
                        range: 4
                    },
                    avatar: 'ahri'
                },
                {
                    id: 3,
                    name: 'Блицкранк',
                    ability: {
                        name: 'Ракетный захват',
                        description: [
                            'Блицкранк притягивает самого дальнего врага, нанося X магического урона и оглушая цель на X ' +
                            'сек. Его следующая атака подбрасывает цель на 1 сек. Союзники, которые находятся на расстоянии атаки, ' +
                            'начинают атаковать цель Блицкранка.'
                        ]
                    },
                    rank: 2,
                    classes: [CLASSES.scrap, CLASSES.bodyguard],
                    stats: {
                        health: 650,
                        armor: 45,
                        mana: '175/175',
                        damage: 65,
                        speed: 0.5,
                        magicResist: 45,
                        dps: 130,
                        critChance: 0.25,
                        range: 1
                    },
                    avatar: 'blitzcrank'
                },
                {
                    id: 4,
                    name: 'Браум',
                    ability: {
                        name: 'Вскрыватель хранилищ',
                        description: [
                            'Браум бьет по земле дверью от хранилища, создавая разлом в направлении цели. Враги в радиусе ' +
                            '2 ячеек от Браума и те, кого поразил разлом, оглушаются на X сек. и получают X магического урона.'
                        ]
                    },
                    rank: 4,
                    classes: [CLASSES.syndicate, CLASSES.bodyguard],
                    stats: {
                        health: 1100,
                        armor: 60,
                        mana: '120/200',
                        damage: 70,
                        speed: 0.6,
                        magicResist: 60,
                        dps: 117,
                        critChance: 0.25,
                        range: 1
                    },
                    avatar: 'braum'
                },
                {
                    id: 5,
                    name: 'Брэнд',
                    ability: {
                        name: 'Выгорание',
                        description: [
                            'Брэнд выпускает огненный шар в ближайшего врага, поджигая его на X сек. и нанося X магического урона. ' +
                            'Если враг уже горит, он дополнительно получает X магического урона и оглушается на X сек. (Общий урон: XX.)',

                            'VIP-статус: Брэнд выпускает 2-й огненный шар в другую цель поблизости (приоритет отдается подожженным ' +
                            'врагам), нанося на X% меньше урона.'
                        ]
                    },
                    rank: 1,
                    classes: [CLASSES.debonair, CLASSES.arcanist],
                    stats: {
                        health: 500,
                        armor: 20,
                        mana: '0/20',
                        damage: 40,
                        speed: 0.65,
                        magicResist: 20,
                        dps: 62,
                        critChance: 0.25,
                        range: 3
                    },
                    avatar: 'brand'
                },
                {
                    id: 6,
                    name: 'Вай',
                    ability: {
                        name: 'Пилтоверский сокрушитель',
                        description: [
                            'Вай накладывает на себя щит прочностью X и наносит X магического урона своей цели и врагам за ней.',

                            'Во время 2-го применения Вай также совершает рывок сквозь цель.',

                            'При 3-м применении Вай подбрасывает цель и с силой швыряет ее на землю, нанося X урона всем врагам вокруг.'
                        ]
                    },
                    rank: 4,
                    classes: [CLASSES.enforcer, CLASSES.rival, CLASSES.bruiser],
                    stats: {
                        health: 900,
                        armor: 50,
                        mana: '0/40',
                        damage: 70,
                        speed: 0.7,
                        magicResist: 50,
                        dps: 10,
                        critChance: 0.25,
                        range: 1
                    },
                    avatar: 'vi'
                },
                {
                    id: 7,
                    name: 'Варвик',
                    ability: {
                        name: 'Вечная жажда',
                        description: [
                            'Пассивно: атаки Варвика дополнительно наносят магический урон в размере X от текущего запаса здоровья ' +
                            'цели, а также восстанавливают ему X здоровья.'
                        ]
                    },
                    rank: 2,
                    classes: [CLASSES.chemtech, CLASSES.challenger],
                    stats: {
                        health: 750,
                        armor: 40,
                        mana: '0/0',
                        damage: 45,
                        speed: 0.75,
                        magicResist: 40,
                        dps: 60,
                        critChance: 0.25,
                        range: 1
                    },
                    avatar: 'warwick'
                },
                {
                    id: 8,
                    name: 'Вейгар',
                    rank: 5,
                    classes: [CLASSES['yordle-lord']],
                    stats: {
                        health: 800,
                        armor: 25,
                        mana: '0/75',
                        damage: 45,
                        speed: 0.8,
                        magicResist: 25,
                        dps: 56,
                        critChance: 0.25,
                        range: 4
                    },
                    avatar: 'veigar'
                },
                {
                    id: 9,
                    name: 'Векс',
                    ability: {
                        name: 'Личное пространство',
                        description: [
                            'Векс накладывает на себя щит прочностью X на X сек. Когда щит пропадает, он наносит X магического урона ' +
                            'всем врагам в радиусе 2 ячеек, а также дополнительно X магического урона, если он не был уничтожен.',

                            'Если же щит был уничтожен, Личное пространство становится на X% эффективнее до конца боя. Этот эффект ' +
                            'суммируется.'
                        ]
                    },
                    rank: 3,
                    classes: [CLASSES.yordle, CLASSES.arcanist],
                    stats: {
                        health: 850,
                        armor: 50,
                        mana: '50/90',
                        damage: 50,
                        speed: 0.6,
                        magicResist: 50,
                        dps: 83,
                        critChance: 0.25,
                        range: 2
                    },
                    avatar: 'vex'
                },
                {
                    id: 10,
                    name: 'Виктор',
                    ability: {
                        name: 'Лучи хаоса',
                        description: [
                            'Пассивно: атаки Виктора пробивают защиту врагов, уменьшая их броню на X% на X сек.',

                            'Виктор создает несколько сингулярностей, которые выпускают лучи смерти по прямой через все поле боя. ' +
                            'Лучи наносят противникам X магического урона, а также снижают оставшуюся прочность их щитов на X%.'
                        ]
                    },
                    rank: 5,
                    classes: [CLASSES.chemtech, CLASSES.arcanist],
                    stats: {
                        health: 850,
                        armor: 35,
                        mana: '0/145',
                        damage: 50,
                        speed: 0.8,
                        magicResist: 35,
                        dps: 62,
                        critChance: 0.25,
                        range: 4
                    },
                    avatar: 'viktor'
                },
                {
                    id: 11,
                    name: 'Галио',
                    ability: {
                        name: 'Появление колосса',
                        description: [
                            'Галио становится неуязвимым и взмывает в воздух, а затем обрушивается на самое большое скопление врагов. ' +
                            'Противники в большом радиусе получают X магического урона (X + X% от максимального запаса здоровья X ' +
                            'Галио) и подбрасываются на X сек.',

                            'Пассивно: при критических ударах Галио бьет по земле, дополнительно нанося X магического урона врагам ' +
                            'вокруг цели.'
                        ]
                    },
                    rank: 5,
                    classes: [CLASSES.socialite, CLASSES.bodyguard, CLASSES.colossus],
                    stats: {
                        health: 1300,
                        armor: 70,
                        mana: '200/300',
                        damage: 110,
                        speed: 0.65,
                        magicResist: 70,
                        dps: 169,
                        critChance: 0.25,
                        range: 1
                    },
                    avatar: 'galio'
                },
                {
                    id: 12,
                    name: 'Гангпланк',
                    ability: {
                        name: 'Аррргумент',
                        description: [
                            'Гангпланк стреляет в цель из пистолета, нанося X физического урона (X + X% от силы атаки X). Если эта ' +
                            'атака убивает чемпиона, Гангпланк крадет 1 золота.'
                        ]
                    },
                    rank: 3,
                    classes: [CLASSES.mercenary, CLASSES.twinshot],
                    stats: {
                        health: 750,
                        armor: 40,
                        mana: '0/50',
                        damage: 65,
                        speed: 0.75,
                        magicResist: 40,
                        dps: 87,
                        critChance: 0.25,
                        range: 1
                    },
                    avatar: 'gangplank'
                },
                {
                    id: 13,
                    name: 'Гнар',
                    ability: {
                        name: 'ГНА-А-А-Р!',
                        description: [
                            'Гнар принимает мегаформу до конца боя. Мега-Гнар швыряет булыжник в самого дальнего врага в радиусе 3 ' +
                            'ячеек, нанося X физического урона (X + X% от силы атаки X) всем противникам на пути.',

                            'В мегаформе Гнар становится чемпионом ближнего боя, его запас здоровья увеличивается на X, а затраты ' +
                            'маны уменьшаются на X.'
                        ]
                    },
                    rank: 3,
                    classes: [CLASSES.yordle, CLASSES.socialite, CLASSES.striker],
                    stats: {
                        health: 700,
                        armor: 40,
                        mana: '0/80',
                        damage: 60,
                        speed: 0.7,
                        magicResist: 40,
                        dps: 86,
                        critChance: 0.25,
                        range: 3
                    },
                    avatar: 'gnar'
                },
                {
                    id: 14,
                    name: 'Дариус',
                    ability: {
                        name: 'Истребление',
                        description: [
                            'Дариус совершает круговой удар топором, нанося X магического урона врагам вокруг себя и восстанавливая ' +
                            'себе X здоровья за каждого пораженного врага.'
                        ]
                    },
                    rank: 1,
                    classes: [CLASSES.syndicate, CLASSES.bodyguard],
                    stats: {
                        health: 650,
                        armor: 40,
                        mana: '70/120',
                        damage: 60,
                        speed: 0.5,
                        magicResist: 40,
                        dps: 120,
                        critChance: 0.25,
                        range: 1
                    },
                    avatar: 'darius'
                },
                {
                    id: 15,
                    name: 'Джарван IV',
                    ability: {
                        name: 'Вечный штандарт',
                        description: [
                            'Джарван призывает свой штандарт в выбранное место поблизости, увеличивая скорость атаки всех ближайших ' +
                            'союзников на X на X сек.'
                        ]
                    },
                    rank: 1,
                    classes: [CLASSES.hextech, CLASSES.striker],
                    stats: {
                        health: 700,
                        armor: 40,
                        mana: '50/100',
                        damage: 55,
                        speed: 0.6,
                        magicResist: 40,
                        dps: 92,
                        critChance: 0.25,
                        range: 1
                    },
                    avatar: 'jarvan'
                },
                {
                    id: 16,
                    name: 'Джейс',
                    ability: {
                        name: 'Ртутная пушка / Ртутный молот',
                        description: [
                            'Стойка с молотом (ближний бой): Джейс бьет молотом врагов поблизости, нанося урон и уменьшая их броню и ' +
                            'сопротивление магии.',

                            'Стойка с пушкой (дальний бой): Джейс создает врата ускорения, увеличивая скорость атаки союзников в том ' +
                            'же ряду, а затем выпускает заряд электричества в самое большое скопление врагов.'
                        ]
                    },
                    rank: 5,
                    classes: [CLASSES.enforcer, CLASSES.innovator, CLASSES.transformer],
                    stats: {
                        health: 1000,
                        armor: 30,
                        mana: '0/60',
                        damage: 85,
                        speed: 0.75,
                        magicResist: 30,
                        dps: 113,
                        critChance: 0.25,
                        range: 1
                    },
                    avatar: 'jayce'
                },
                {
                    id: 17,
                    name: 'Джин',
                    ability: {
                        name: 'Выход на поклон',
                        description: [
                            'Джин превращает свое оружие в мощную снайперскую винтовку на следующие 4 выстрела. Каждый выстрел ' +
                            'наносит X физического урона (X% от силы атаки X). Пули пронзают врагов насквозь и летят дальше, но ' +
                            'каждая последующая цель получает на X% меньше урона. 4-й выстрел всегда критический и наносит до X ' +
                            'дополнительного урона в зависимости от недостающего здоровья цели.',

                            'Пассивно: Джин всегда атакует X раза в секунду. Кроме того, он получает X силы атаки за каждый 1% от ' +
                            'дополнительной скорости атаки.'
                        ]
                    },
                    rank: 4,
                    classes: [CLASSES.clockwork, CLASSES.sniper],
                    stats: {
                        health: 700,
                        armor: 30,
                        mana: '0/60',
                        damage: 85,
                        speed: 2,
                        magicResist: 30,
                        dps: 43,
                        critChance: 0.25,
                        range: 4
                    },
                    avatar: 'jhin'
                },
                {
                    id: 18,
                    name: 'Джинкс',
                    ability: {
                        name: 'Супер-мега-ракета смерти!',
                        description: [
                            'Джинкс взмывает на своей ракете вверх, а затем обрушивается на врага, который находится ближе всего к ' +
                            'центру. При этом она наносит X магического урона противникам в эпицентре и X% всем остальным врагам в ' +
                            'большой области. Все бойцы в эпицентре, кроме Джинкс, поджигаются на X сек. Они получают чистый урон в ' +
                            'размере X% от своего максимального запаса здоровья, а эффективность получаемого ими лечения снижается на ' +
                            '50% до окончания действия эффекта.',

                            'После этого Джинкс переключается на ракетницу и атакует случайных бойцов до конца боя. Снаряды ее атак ' +
                            'начинают взрываться в небольшой области вокруг цели, нанося X физического урона (X% от силы атаки X).'
                        ]
                    },
                    rank: 5,
                    classes: [CLASSES.scrap, CLASSES.rival, CLASSES.twinshot],
                    stats: {
                        health: 888,
                        armor: 45,
                        mana: '0/99',
                        damage: 80,
                        speed: 1,
                        magicResist: 45,
                        dps: 80,
                        critChance: 0.25,
                        range: 4
                    },
                    avatar: 'jinx'
                },
                {
                    id: 19,
                    name: 'Дрейвен',
                    ability: {
                        name: 'Вращающиеся топоры',
                        description: [
                            'Пассивно: Дрейвен игнорирует X% от брони цели.',

                            'Дрейвен раскручивает топор, и его следующая атака дополнительно наносит X физического урона (X + X% от ' +
                            'силы атаки X). После этого топор возвращается в то же место, и если Дрейвен его ловит, усиление ' +
                            'срабатывает снова. Одновременно Дрейвен может раскрутить 2 топора.',

                            'VIP-бонус: дальность атаки Дрейвена бесконечна, и он игнорирует еще X% от брони цели.'
                        ]
                    },
                    rank: 4,
                    classes: [CLASSES.debonair, CLASSES.challenger],
                    stats: {
                        health: 800,
                        armor: 30,
                        mana: '0/40',
                        damage: 75,
                        speed: 0.8,
                        magicResist: 30,
                        dps: 94,
                        critChance: 0.25,
                        range: 4
                    },
                    avatar: 'draven'
                },
                {
                    id: 20,
                    name: 'Зайра',
                    ability: {
                        name: 'Цепкие колючки',
                        description: [
                            'Зайра выращивает тернии в ряду с наибольшим количеством врагов, нанося им X магического урона и оглушая ' +
                            'на X сек.'
                        ]
                    },
                    rank: 2,
                    classes: [CLASSES.syndicate, CLASSES.scholar],
                    stats: {
                        health: 600,
                        armor: 20,
                        mana: '60/120',
                        damage: 40,
                        speed: 0.7,
                        magicResist: 20,
                        dps: 57,
                        critChance: 0.25,
                        range: 4
                    },
                    avatar: 'zyra'
                },
                {
                    id: 21,
                    name: 'Зак',
                    ability: {
                        name: 'Чур, мое!',
                        description: [
                            'Зак вытягивает руки на расстояние до 3 ячеек и притягивает 2 самых дальних врагов к себе, нанося им X ' +
                            'магического урона. Во время применения этого умения Зак получает на X% меньше урона.'
                        ]
                    },
                    rank: 3,
                    classes: [CLASSES.chemtech, CLASSES.bruiser],
                    stats: {
                        health: 800,
                        armor: 45,
                        mana: '60/100',
                        damage: 60,
                        speed: 0.6,
                        magicResist: 45,
                        dps: 100,
                        critChance: 0.25,
                        range: 1
                    },
                    avatar: 'zac'
                },
                {
                    id: 22,
                    name: 'Зери',
                    ability: {
                        name: 'Короткое замыкание',
                        description: [
                            'Зери заряжается электричеством на X сек. Пока действует эффект, она целится в самого дальнего врага, ' +
                            'ее атаки проходят сквозь бойцов и она совершает рывок после каждого выстрела.',

                            'Пассивно: во время атак Зери выпускает несколько снарядов (X), каждый из которых наносит X физического ' +
                            'урона (X% от силы атаки X) плюс X дополнительного магического урона.',

                            'VIP-статус: электризация Зери действует до конца боя.'
                        ]
                    },
                    rank: 5,
                    classes: [CLASSES.debonair, CLASSES.sniper],
                    stats: {
                        health: 850,
                        armor: 30,
                        mana: '0/60',
                        damage: 75,
                        speed: 0.9,
                        magicResist: 30,
                        dps: 83,
                        critChance: 0.25,
                        range: 5
                    },
                    avatar: 'zeri'
                },
                {
                    id: 23,
                    name: 'Зиггс',
                    ability: {
                        name: 'Страшно небольшая бомба',
                        description: [
                            'Зиггс бросает бомбу в свою цель. Спустя некоторое время бомба взрывается, нанося X магического урона ' +
                            'врагу в эпицентре и половину этого урона примыкающим противникам.'
                        ]
                    },
                    rank: 1,
                    classes: [CLASSES.scrap, CLASSES.yordle, CLASSES.arcanist],
                    stats: {
                        health: 500,
                        armor: 15,
                        mana: '0/60',
                        damage: 55,
                        speed: 0.6,
                        magicResist: 15,
                        dps: 92,
                        critChance: 0.25,
                        range: 4
                    },
                    avatar: 'ziggs'
                },
                {
                    id: 24,
                    name: 'Зилеан',
                    ability: {
                        name: 'Бомба замедленного действия',
                        description: [
                            'Зилеан прикрепляет бомбу к ближайшему врагу, оглушая его на X сек. Когда оглушение заканчивается или ' +
                            'цель погибает, бомба взрывается, нанося X магического урона примыкающим врагам и уменьшая их скорость ' +
                            'атаки на X% на X сек.'
                        ]
                    },
                    rank: 2,
                    classes: [CLASSES.clockwork, CLASSES.innovator],
                    stats: {
                        health: 600,
                        armor: 20,
                        mana: '40/80',
                        damage: 40,
                        speed: 0.6,
                        magicResist: 20,
                        dps: 67,
                        critChance: 0.25,
                        range: 4
                    },
                    avatar: 'zilean'
                },
                {
                    id: 25,
                    name: 'Иллаой',
                    ability: {
                        name: 'Жестокий урок',
                        description: [
                            'Иллаой бьет свою цель, создавая связь между собой и ею на X сек., а также нанося X магического урона. ' +
                            'Пока существует связь, Иллаой лечится на X% от урона, полученного ее целью.'
                        ]
                    },
                    rank: 1,
                    classes: [CLASSES.mercenary, CLASSES.bruiser],
                    stats: {
                        health: 700,
                        armor: 40,
                        mana: '40/80',
                        damage: 60,
                        speed: 0.55,
                        magicResist: 40,
                        dps: 109,
                        critChance: 0.25,
                        range: 1
                    },
                    avatar: 'illaoi'
                },
                {
                    id: 26,
                    name: 'Ирелия',
                    ability: {
                        name: 'Пульсирующий клинок',
                        description: [
                            'Ирелия совершает рывок к цели и наносит ей X физического урона (X + X% от силы атаки X). Если умение ' +
                            'убивает цель, Ирелия еще раз применяет Пульсирующий клинок к врагу с самым низким уровнем здоровья.'
                        ]
                    },
                    rank: 4,
                    classes: [CLASSES.scrap, CLASSES.striker],
                    stats: {
                        health: 900,
                        armor: 50,
                        mana: '0/40',
                        damage: 70,
                        speed: 0.8,
                        magicResist: 50,
                        dps: 87,
                        critChance: 0.25,
                        range: 1
                    },
                    avatar: 'irelia'
                },
                {
                    id: 27,
                    name: 'Ка\'Зикс',
                    ability: {
                        name: 'Атака из Бездны',
                        description: [
                            'Ка\'Зикс прыгает к врагу с самым низким уровнем здоровья и наносит ему X физического урона (X + X% от ' +
                            'силы атаки X), а также увеличивает его максимальный запас маны на X% до применения умения.'
                        ]
                    },
                    rank: 4,
                    classes: [CLASSES.mutant, CLASSES.assassin],
                    stats: {
                        health: 800,
                        armor: 35,
                        mana: '0/40',
                        damage: 85,
                        speed: 0.9,
                        magicResist: 35,
                        dps: 94,
                        critChance: 0.25,
                        range: 1
                    },
                    avatar: 'khazix'
                },
                {
                    id: 28,
                    name: 'Кай\'Са',
                    ability: {
                        name: 'Муссон Икатии',
                        description: [
                            'Кай\'Са совершает рывок от всех врагов, а затем выпускает залп из X ракет, которые равномерно ' +
                            'распределяются между всеми врагами. Каждая ракета наносит X магического урона.',

                            'Кай\'Са выпускает дополнительную ракету за каждую атаку, которую она применила в этом бою.'
                        ]
                    },
                    rank: 5,
                    classes: [CLASSES.mutant, CLASSES.challenger],
                    stats: {
                        health: 850,
                        armor: 30,
                        mana: '75/150',
                        damage: 60,
                        speed: 1.2,
                        magicResist: 30,
                        dps: 50,
                        critChance: 0.25,
                        range: 3
                    },
                    avatar: 'kaisa'
                },
                {
                    id: 29,
                    name: 'Камилла',
                    ability: {
                        name: 'Защитный взмах',
                        description: [
                            'Камилла получает щит, который блокирует X урона в течение X сек., а затем совершает удар ногой, нанося ' +
                            'X магического урона врагам в конусе. Пока существует щит, атаки Камиллы восстанавливают ей X здоровья.'
                        ]
                    },
                    rank: 1,
                    classes: [CLASSES.clockwork, CLASSES.challenger],
                    stats: {
                        health: 700,
                        armor: 40,
                        mana: '0/60',
                        damage: 45,
                        speed: 0.6,
                        magicResist: 40,
                        dps: 75,
                        critChance: 0.25,
                        range: 1
                    },
                    avatar: 'camille'
                },
                {
                    id: 30,
                    name: 'Кассадин',
                    ability: {
                        name: 'Сфера пустоты',
                        description: [
                            'Кассадин выпускает сгусток энергии Бездны, который наносит цели X магического урона и увеличивает ' +
                            'стоимость ее следующего умения на X%. При этом Кассадин получает щит прочностью X, который уменьшает ' +
                            'входящий урон на X% на X сек.'
                        ]
                    },
                    rank: 1,
                    classes: [CLASSES.mutant, CLASSES.scholar],
                    stats: {
                        health: 750,
                        armor: 40,
                        mana: '60/100',
                        damage: 50,
                        speed: 0.65,
                        magicResist: 40,
                        dps: 77,
                        critChance: 0.25,
                        range: 1
                    },
                    avatar: 'kassadin'
                },
                {
                    id: 31,
                    name: 'Квинн',
                    ability: {
                        name: 'Обезоруживающий удар',
                        description: [
                            'Квинн посылает Вэлора к врагу с самой высокой скоростью атаки, нанося X магического урона цели и ' +
                            'другим противникам поблизости, а также обезоруживая их на X сек.'
                        ]
                    },
                    rank: 2,
                    classes: [CLASSES.mercenary, CLASSES.challenger],
                    stats: {
                        health: 550,
                        armor: 20,
                        mana: '70/140',
                        damage: 55,
                        speed: 0.7,
                        magicResist: 20,
                        dps: 79,
                        critChance: 0.25,
                        range: 4
                    },
                    avatar: 'quinn'
                },
                {
                    id: 32,
                    name: 'Кейтлин',
                    ability: {
                        name: 'Главный козырь',
                        description: [
                            'Кейтлин прицеливается в самого дальнего врага, а затем выпускает в его сторону убойную пулю, которая ' +
                            'наносит X магического урона первому пораженному врагу.'
                        ]
                    },
                    rank: 1,
                    classes: [CLASSES.enforcer, CLASSES.sniper],
                    stats: {
                        health: 500,
                        armor: 15,
                        mana: '0/100',
                        damage: 45,
                        speed: 0.8,
                        magicResist: 15,
                        dps: 56,
                        critChance: 0.25,
                        range: 4
                    },
                    avatar: 'caitlyn'
                },
                {
                    id: 33,
                    name: 'Корки',
                    ability: {
                        name: 'Бомбардировка',
                        description: [
                            'Корки выпускает в свою цель ракету, которая взрывается при попадании, нанося врагам в радиусе 1 ячейки ' +
                            'X магического урона.'
                        ]
                    },
                    rank: 2,
                    classes: [CLASSES.yordle, CLASSES.twinshot],
                    stats: {
                        health: 650,
                        armor: 25,
                        mana: '25/50',
                        damage: 55,
                        speed: 0.7,
                        magicResist: 25,
                        dps: 79,
                        critChance: 0.25,
                        range: 4
                    },
                    avatar: 'corki'
                },
                {
                    id: 34,
                    name: 'Леона',
                    ability: {
                        name: 'Солнечное затмение',
                        description: [
                            'Леона обрушивает на себя луч света, получая щит прочностью X на X сек. Кроме того, Леона и союзники в ' +
                            'радиусе 2 ячеек получают X брони и сопротивления магии на то же время.',

                            'VIP-статус: каждую секунду Леона восстанавливает себе X% от максимального запаса здоровья за каждого ' +
                            'бойца, выбравшего ее целью.'
                        ]
                    },
                    rank: 3,
                    classes: [CLASSES.debonair, CLASSES.bodyguard],
                    stats: {
                        health: 850,
                        armor: 50,
                        mana: '75/125',
                        damage: 50,
                        speed: 0.6,
                        magicResist: 50,
                        dps: 83,
                        critChance: 0.25,
                        range: 1
                    },
                    avatar: 'leona'
                },
                {
                    id: 35,
                    name: 'Лулу',
                    ability: {
                        name: 'Буйный рост',
                        description: [
                            'Лулу увеличивает союзников (X) с низким уровнем здоровья. При этом они получают X дополнительного ' +
                            'здоровья и подбрасывают врагов поблизости. Если союзник уже увеличен, вместо этого он лечится.'
                        ]
                    },
                    rank: 2,
                    classes: [CLASSES.yordle, CLASSES.enchanter],
                    stats: {
                        health: 600,
                        armor: 25,
                        mana: '60/125',
                        damage: 40,
                        speed: 0.65,
                        magicResist: 25,
                        dps: 62,
                        critChance: 0.25,
                        range: 3
                    },
                    avatar: 'lulu'
                },
                {
                    id: 36,
                    name: 'Люциан',
                    ability: {
                        name: 'Нескончаемая погоня',
                        description: [
                            'Люциан совершает рывок от своей текущей цели и делает несколько выстрелов (X) во врагов поблизости. ' +
                            'Каждый выстрел наносит X магического урона.'
                        ]
                    },
                    rank: 3,
                    classes: [CLASSES.hextech, CLASSES.twinshot],
                    stats: {
                        health: 700,
                        armor: 30,
                        mana: '0/40',
                        damage: 55,
                        speed: 0.75,
                        magicResist: 30,
                        dps: 73,
                        critChance: 0.25,
                        range: 3
                    },
                    avatar: 'lucian'
                },
                {
                    id: 37,
                    name: 'Мальзахар',
                    ability: {
                        name: 'Пагубные видения',
                        description: [
                            'Мальзахар наполняет разум ближайшей непораженной цели ужасными видениями, нанося X магического урона в ' +
                            'течение X сек. и уменьшая ее сопротивление магии на X%.',

                            'Если пораженная цель погибает, Пагубные видения распространяются на ближайших непораженных врагов (X) ' +
                            'и ослабляют их все оставшееся время действия.'
                        ]
                    },
                    rank: 3,
                    classes: [CLASSES.mutant, CLASSES.arcanist],
                    stats: {
                        health: 650,
                        armor: 30,
                        mana: '50/80',
                        damage: 40,
                        speed: 0.7,
                        magicResist: 30,
                        dps: 57,
                        critChance: 0.25,
                        range: 4
                    },
                    avatar: 'malzahar'
                },
                {
                    id: 38,
                    name: 'Мисс Фортуна',
                    ability: {
                        name: 'Свинцовый дождь',
                        description: [
                            'Мисс Фортуна обрушивает на область вокруг своей цели 4 волны пуль, нанося пораженным врагам X магического ' +
                            'урона суммарно и уменьшая эффективность получаемого ими лечения на X% на X сек.'
                        ]
                    },
                    rank: 3,
                    classes: [CLASSES.mercenary, CLASSES.sniper],
                    stats: {
                        health: 650,
                        armor: 25,
                        mana: '40/80',
                        damage: 55,
                        speed: 0.7,
                        magicResist: 25,
                        dps: 79,
                        critChance: 0.25,
                        range: 3
                    },
                    avatar: 'fortune'
                },
                {
                    id: 39,
                    name: 'Моргана',
                    ability: {
                        name: 'Оковы души',
                        description: [
                            'Моргана накладывает на себя щит прочностью X на X сек. и приковывает себя ко всем врагам в радиусе X яч. ' +
                            'Пока держится щит, эти бойцы получают X магического урона в секунду.',

                            'Если щит не уничтожается до конца его действия, все цели оглушаются на X сек. В противном случае Моргана ' +
                            'восстанавливает себе X маны.'
                        ]
                    },
                    rank: 3,
                    classes: [CLASSES.syndicate, CLASSES.enchanter],
                    stats: {
                        health: 800,
                        armor: 50,
                        mana: '70/130',
                        damage: 50,
                        speed: 0.6,
                        magicResist: 50,
                        dps: 83,
                        critChance: 0.25,
                        range: 2
                    },
                    avatar: 'morgana'
                },
                {
                    id: 40,
                    name: 'Ноктюрн',
                    ability: {
                        name: 'Невыразимый ужас',
                        description: [
                            'Ноктюрн пугает свою цель, оглушая ее на X сек. и нанося X магического урона в течение этого времени.'
                        ]
                    },
                    rank: 1,
                    classes: [CLASSES.hextech, CLASSES.assassin],
                    stats: {
                        health: 600,
                        armor: 25,
                        mana: '40/80',
                        damage: 45,
                        speed: 0.7,
                        magicResist: 25,
                        dps: 64,
                        critChance: 0.25,
                        range: 1
                    },
                    avatar: 'nocturne'
                },
                {
                    id: 41,
                    name: 'Орианна',
                    ability: {
                        name: 'Приказ: Ударная волна',
                        description: [
                            'Орианна отправляет свой шар к самому большому скоплению чемпионов, а затем приказывает ему выпустить ' +
                            'ударную волну. Союзники в радиусе 2 ячеек получают щит прочностью X на X сек., а враги в той же области ' +
                            'ненадолго подбрасываются и получают X магического урона. Противники, примыкающие к шару, притягиваются к ' +
                            'нему и оглушаются на X сек.'
                        ]
                    },
                    rank: 4,
                    classes: [CLASSES.clockwork, CLASSES.enchanter],
                    stats: {
                        health: 750,
                        armor: 30,
                        mana: '50/130',
                        damage: 50,
                        speed: 0.75,
                        magicResist: 30,
                        dps: 67,
                        critChance: 0.25,
                        range: 4
                    },
                    avatar: 'orianna'
                },
                {
                    id: 42,
                    name: 'Поппи',
                    ability: {
                        name: 'Бросок баклера',
                        description: [
                            'Поппи бросает баклер в самого дальнего врага, нанося ему магический урон в размере X% от ее брони. ' +
                            '(Всего: X.) После этого баклер отскакивает обратно к Поппи и дает ей щит прочностью X.'
                        ]
                    },
                    rank: 1,
                    classes: [CLASSES.yordle, CLASSES.bodyguard],
                    stats: {
                        health: 650,
                        armor: 40,
                        mana: '50/100',
                        damage: 60,
                        speed: 0.55,
                        magicResist: 40,
                        dps: 109,
                        critChance: 0.25,
                        range: 1
                    },
                    avatar: 'poppy'
                },
                {
                    id: 43,
                    name: 'Рек\'Сай',
                    ability: {
                        name: 'Яростный укус',
                        description: [
                            'Рек\'Сай кусает свою цель, нанося X физического урона (X + X% от силы атаки X), а также восстанавливая ' +
                            'себе X здоровья. Если она уже кусала цель, количество восстанавливаемого здоровья увеличивается до X.'
                        ]
                    },
                    rank: 2,
                    classes: [CLASSES.mutant, CLASSES.striker, CLASSES.bruiser],
                    stats: {
                        health: 750,
                        armor: 45,
                        mana: '60/80',
                        damage: 55,
                        speed: 0.7,
                        magicResist: 45,
                        dps: 79,
                        critChance: 0.25,
                        range: 1
                    },
                    avatar: 'reksai'
                },
                {
                    id: 44,
                    name: 'Рената Гласк',
                    ability: {
                        name: 'Ядовитая волна',
                        description: [
                            'Рената выпускает ядовитую волну в сторону самого большого скопления врагов в радиусе X яч., отравляя ' +
                            'всех пораженных противников на X сек. Отравленные враги теряют X% скорости атаки, а также получают X ' +
                            'магического урона в секунду. Урон от яда может суммироваться, но перестает наноситься, когда Рената ' +
                            'погибает.'
                        ]
                    },
                    rank: 4,
                    classes: [CLASSES.chemtech, CLASSES.scholar],
                    stats: {
                        health: 800,
                        armor: 30,
                        mana: '0/60',
                        damage: 40,
                        speed: 0.7,
                        magicResist: 30,
                        dps: 57,
                        critChance: 0.25,
                        range: 3
                    },
                    avatar: 'renata'
                },
                {
                    id: 45,
                    name: 'Свейн',
                    ability: {
                        name: 'Рука смерти',
                        description: [
                            'Свейн выпускает заряды мистической энергии в конусе в сторону своей цели. Пораженные враги получают X ' +
                            'магического урона, и каждый из них восстанавливает Свейну X здоровья.'
                        ]
                    },
                    rank: 2,
                    classes: [CLASSES.hextech, CLASSES.arcanist],
                    stats: {
                        health: 800,
                        armor: 45,
                        mana: '40/85',
                        damage: 40,
                        speed: 0.6,
                        magicResist: 45,
                        dps: 67,
                        critChance: 0.25,
                        range: 2
                    },
                    avatar: 'swain'
                },
                {
                    id: 46,
                    name: 'Седжуани',
                    ability: {
                        name: 'Ярость севера',
                        description: [
                            'Седжуани приказывает Щетинке совершить рывок, нанеся X магического урона и оглушив цель на X сек. После ' +
                            'этого Седжуани получает Морозную броню, которая увеличивает ее броню и сопротивление магии на X на X сек.'
                        ]
                    },
                    rank: 2,
                    classes: [CLASSES.hextech, CLASSES.enforcer, CLASSES.bruiser],
                    stats: {
                        health: 800,
                        armor: 45,
                        mana: '20/80',
                        damage: 55,
                        speed: 0.55,
                        magicResist: 45,
                        dps: 100,
                        critChance: 0.25,
                        range: 1
                    },
                    avatar: 'sejuani'
                },
                {
                    id: 47,
                    name: 'Сенна',
                    ability: {
                        name: 'Пронзающая тьма',
                        description: [
                            'Сенна выпускает луч в направлении своей цели, нанося всем пораженным врагам X физического урона (X + X% ' +
                            'от силы атаки X). За каждую пораженную цель Сенна лечит союзника с самым низким уровнем здоровья на X ' +
                            'от нанесенного урона.'
                        ]
                    },
                    rank: 3,
                    classes: [CLASSES.socialite, CLASSES.enchanter],
                    stats: {
                        health: 650,
                        armor: 25,
                        mana: '30/80',
                        damage: 60,
                        speed: 0.7,
                        magicResist: 25,
                        dps: 86,
                        critChance: 0.25,
                        range: 4
                    },
                    avatar: 'senna'
                },
                {
                    id: 48,
                    name: 'Серафина',
                    ability: {
                        name: 'Исполнение на бис',
                        description: [
                            'Серафина выпускает волну в сторону самого большого скопления вражеских бойцов, которая наносит ' +
                            'противникам X магического урона. Союзники, задетые волной, восстанавливают X здоровья и получают X% ' +
                            'дополнительной скорости атаки на X сек.'
                        ]
                    },
                    rank: 4,
                    classes: [CLASSES.socialite, CLASSES.innovator],
                    stats: {
                        health: 750,
                        armor: 30,
                        mana: '70/130',
                        damage: 40,
                        speed: 0.7,
                        magicResist: 30,
                        dps: 57,
                        critChance: 0.25,
                        range: 4
                    },
                    avatar: 'seraphine'
                },
                {
                    id: 49,
                    name: 'Сивир',
                    ability: {
                        name: 'Рикошет',
                        description: [
                            'Сивир усиливается на X сек., увеличивая скорость атаки на X. В течение этого времени ее атаки отскакивают ' +
                            'до X раз, нанося пораженным врагам X физического урона (X% от силы атаки X).'
                        ]
                    },
                    rank: 4,
                    classes: [CLASSES.hextech, CLASSES.sniper],
                    stats: {
                        health: 700,
                        armor: 30,
                        mana: '0/60',
                        damage: 60,
                        speed: 0.8,
                        magicResist: 30,
                        dps: 75,
                        critChance: 0.25,
                        range: 4
                    },
                    avatar: 'sivir'
                },
                {
                    id: 50,
                    name: 'Силко',
                    ability: {
                        name: 'Нестабильная смесь',
                        description: [
                            'Силко впрыскивает нестабильную смесь в союзников (X) с самым низким уровнем здоровья, увеличивая их ' +
                            'максимальный запас здоровья на X% и скорость атаки на X% на X сек. Кроме того, в течение этого времени ' +
                            'они невосприимчивы к эффектам контроля. Когда действие смеси заканчивается, эти бойцы погибают и ' +
                            'взрываются, нанося врагам поблизости X магического урона.'
                        ]
                    },
                    rank: 5,
                    classes: [CLASSES.mastermind, CLASSES.scholar],
                    stats: {
                        health: 850,
                        armor: 40,
                        mana: '0/40',
                        damage: 60,
                        speed: 0.65,
                        magicResist: 40,
                        dps: 92,
                        critChance: 0.25,
                        range: 4
                    },
                    avatar: 'silco'
                },
                {
                    id: 51,
                    name: 'Синджед',
                    ability: {
                        name: 'Бросок',
                        description: [
                            'Синджед бросает ближайшего врага в самое большое скопление противников. По приземлении цель оглушается ' +
                            'на X сек. Все примыкающие враги получают X магического урона и тоже ненадолго оглушаются.'
                        ]
                    },
                    rank: 1,
                    classes: [CLASSES.chemtech, CLASSES.innovator],
                    stats: {
                        health: 650,
                        armor: 40,
                        mana: '100/150',
                        damage: 60,
                        speed: 0.55,
                        magicResist: 40,
                        dps: 109,
                        critChance: 0.25,
                        range: 1
                    },
                    avatar: 'singed'
                },
                {
                    id: 52,
                    name: 'Синдра',
                    ability: {
                        name: 'Сила воли',
                        description: [
                            'Синдра швыряет ближайшего врага в сторону самого дальнего противника, нанося X магического урона всем ' +
                            'бойцам в радиусе 1 ячейки и оглушая брошенную цель на X сек.',

                            'VIP-статус: область поражения Силы воли увеличена на 1 ячейку, и умение подбрасывает задетых врагов на ' +
                            'X сек.'
                        ]
                    },
                    rank: 2,
                    classes: [CLASSES.debonair, CLASSES.scholar],
                    stats: {
                        health: 600,
                        armor: 20,
                        mana: '50/100',
                        damage: 40,
                        speed: 0.65,
                        magicResist: 20,
                        dps: 62,
                        critChance: 0.25,
                        range: 4
                    },
                    avatar: 'syndra'
                },
                {
                    id: 53,
                    name: 'Таам Кенч',
                    ability: {
                        name: 'Хватай-глотай',
                        description: [
                            'Таам Кенч проглатывает свою цель, нанося ей X магического урона в течение X сек. Пока боец находится в ' +
                            'желудке, он невосприимчив к урону из других источников, а сам Таам Кенч получает на X% меньше урона.',

                            'Если цель умирает внутри, Таам Кенч выплевывает случайный компонент, который был у этого врага, или ' +
                            'золото в размере его стоимости. В противном случае он выплевывает бойца в сторону самого дальнего врага, ' +
                            'ненадолго оглушая всех пораженных противников.',

                            'Если цель невосприимчива к эффектам контроля, она получает X магического урона.'
                        ]
                    },
                    rank: 5,
                    classes: [CLASSES.mercenary, CLASSES.bruiser, CLASSES.glutton],
                    stats: {
                        health: 1000,
                        armor: 60,
                        mana: '30/60',
                        damage: 70,
                        speed: 0.55,
                        magicResist: 60,
                        dps: 127,
                        critChance: 0.25,
                        range: 1
                    },
                    avatar: 'tahm'
                },
                {
                    id: 54,
                    name: 'Талон',
                    ability: {
                        name: 'Острие клинка',
                        description: [
                            'Пассивно: 1-я атака Талона против цели вызывает у нее кровотечение, которое наносит X магического урона ' +
                            'в течение X сек. Каждая 3-я атака против одной и той же цели снова вызывает кровотечение.',

                            'VIP-статус: кровотечение Талона наносит чистый урон и длится на X% дольше.'
                        ]
                    },
                    rank: 2,
                    classes: [CLASSES.debonair, CLASSES.assassin],
                    stats: {
                        health: 650,
                        armor: 20,
                        mana: '0/0',
                        damage: 45,
                        speed: 0.7,
                        magicResist: 20,
                        dps: 64,
                        critChance: 0.25,
                        range: 1
                    },
                    avatar: 'talon'
                },
                {
                    id: 55,
                    name: 'Твич',
                    ability: {
                        name: 'Пронизывающий снаряд',
                        description: [
                            'Твич выпускает мощный снаряд в сторону своей цели, который проходит сквозь врагов, нанося им X ' +
                            'физического урона (X + X% от силы атаки X), а также снижает эффективность получаемого ими лечения на ' +
                            'X% на X сек.'
                        ]
                    },
                    rank: 1,
                    classes: [CLASSES.chemtech, CLASSES.assassin],
                    stats: {
                        health: 450,
                        armor: 15,
                        mana: '0/45',
                        damage: 45,
                        speed: 0.7,
                        magicResist: 15,
                        dps: 64,
                        critChance: 0.25,
                        range: 3
                    },
                    avatar: 'twitch'
                },
                {
                    id: 56,
                    name: 'Триндамир',
                    ability: {
                        name: 'Удар вихря',
                        description: [
                            'Триндамир совершает рывок по прямой, стараясь задеть как можно больше врагов. Все пораженные противники ' +
                            'получают X физического урона (X + X% от силы атаки X). Три следующие атаки Триндамира после этого наносят ' +
                            'на X% больше урона.'
                        ]
                    },
                    rank: 3,
                    classes: [CLASSES.chemtech, CLASSES.challenger],
                    stats: {
                        health: 750,
                        armor: 35,
                        mana: '40/100',
                        damage: 70,
                        speed: 0.75,
                        magicResist: 35,
                        dps: 93,
                        critChance: 0.25,
                        range: 1
                    },
                    avatar: 'tryndamere'
                },
                {
                    id: 57,
                    name: 'Чо\'Гат',
                    ability: {
                        name: 'Пир',
                        description: [
                            'Чо\'Гат пожирает врага с наименьшим количеством здоровья на расстоянии атаки, нанося ему X магического ' +
                            'урона. Если цель погибает, Чо\'Гат получает заряд Пира (два заряда в \'\'Ва-банке\'\'). Максимум ' +
                            'зарядов – X. Каждый заряд Пира навсегда увеличивает его запас здоровья и размер на X%.'
                        ]
                    },
                    rank: 3,
                    classes: [CLASSES.mutant, CLASSES.bruiser, CLASSES.colossus],
                    stats: {
                        health: 750,
                        armor: 50,
                        mana: '100/165',
                        damage: 90,
                        speed: 0.55,
                        magicResist: 50,
                        dps: 164,
                        critChance: 0.25,
                        range: 1
                    },
                    avatar: 'chogath'
                },
                {
                    id: 58,
                    name: 'Эзреаль',
                    ability: {
                        name: 'Мистический выстрел',
                        description: [
                            'Эзреаль выпускает в свою цель заряд, который наносит X физического урона (X + X% от силы атаки X). Если ' +
                            'заряд попадает во врага, Эзреаль получает X скорости атаки (прибавка суммируется). Максимальная ' +
                            'прибавка – X X при X зарядах.'
                        ]
                    },
                    rank: 1,
                    classes: [CLASSES.scrap, CLASSES.innovator],
                    stats: {
                        health: 500,
                        armor: 15,
                        mana: '0/40',
                        damage: 45,
                        speed: 0.65,
                        magicResist: 15,
                        dps: 69,
                        critChance: 0.25,
                        range: 4
                    },
                    avatar: 'ezreal'
                },
                {
                    id: 59,
                    name: 'Экко',
                    ability: {
                        name: 'Параллельная конвергенция',
                        description: [
                            'Экко создает свое отражение, которое бросает устройство в сторону самой большой группы врагов. По ' +
                            'приземлении оно наносит X магического урона всем противникам в области поражения и уменьшает их скорость ' +
                            'атаки на X% на X сек. Союзники в этой области получают X дополнительной скорости атаки на X сек.'
                        ]
                    },
                    rank: 3,
                    classes: [CLASSES.scrap, CLASSES.innovator, CLASSES.assassin],
                    stats: {
                        health: 700,
                        armor: 40,
                        mana: '60/120',
                        damage: 55,
                        speed: 0.7,
                        magicResist: 40,
                        dps: 79,
                        critChance: 0.25,
                        range: 1
                    },
                    avatar: 'ekko'
                },
                {
                    id: 60,
                    name: 'Эш',
                    ability: {
                        name: 'Залп',
                        description: [
                            'Эш выпускает в сторону своей цели веер из X стрел, каждая из которых наносит пораженным врагам X ' +
                            'физического урона (X% от силы атаки X) и уменьшает их скорость атаки на X% на X сек.'
                        ]
                    },
                    rank: 2,
                    classes: [CLASSES.syndicate, CLASSES.sniper],
                    stats: {
                        health: 600,
                        armor: 20,
                        mana: '30/60',
                        damage: 60,
                        speed: 0.7,
                        magicResist: 20,
                        dps: 86,
                        critChance: 0.25,
                        range: 4
                    },
                    avatar: 'ashe'
                }
            ]
        }
    },
})
