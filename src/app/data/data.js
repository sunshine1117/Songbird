const birdsData = [
  [
    {
      id: 1,
      name: 'Африканский филин',
      species: 'Bubo africanus',
      description:
        'Африканский филин достигает длины 45 см, и веса в 480—850 грамм. Окраска оперения серая или красновато-коричневая',
      image: 'https://live.staticflickr.com/7921/47257793372_93f03710f7.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/SGLTZLDXYI/XC490783-Spotted%20Eagle-owl%20male.mp3',
    },
    {
      id: 2,
      name: 'Цесарка',
      species: 'Numida meleagris',
      description:
        'Обыкновенная цеса́рка(Numida meleagris) — птица из семейства цесарковых. Единственный вид рода Numida, устаревшее название — Numida ptilorhynca, одомашнен человеком. ',
      image: 'https://live.staticflickr.com/2832/11586803815_137552061a.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/FAMEEAPTYE/XC530599-Helmented%20guineafowl710.mp3',
    },
    {
      id: 3,
      name: 'Страус',
      species: 'Struthio camelus',
      description:
        'Бескилевая нелетающая птица, единственный представитель семейства страусовых. Его научное название в переводе с греческого означает «воробей-верблюд».',
      image: 'https://live.staticflickr.com/65535/49694136866_a5ce5f79b4.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/YTUXOCTUEM/XC516153-Struthio_camelus_australis-FL%20quiet%20calls%20imm%20Polokwane%20GameRes%2030Oct19%208.05am%20LS115271a.mp3',
    },
    {
      id: 4,
      name: 'Сипуха',
      species: 'Barn owl',
      description:
        'Обыкновенная сипуха — самая распространенная птица из семейства Сипуховых. Это небольшая птица: размером 33-39 см, весом от 187 до 700 гр.',
      image: 'https://live.staticflickr.com/65535/50275126846_fdb507f04d.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/CTBGPXUOSF/XC551006-Effraie%20des%20clochers-260420-030213.mp3',
    },
    {
      id: 5,
      name: 'Птица-секретарь',
      species: 'Secretarybird',
      description:
        'Птица-секретарь — это птица из отряда Ястребообразных, единственный вид в семействе Птиц-секретарей. Своим забавным названием птица обязана черным перьям на макушке: они похожи на гусиные перья, которыми раньше писали секретари.',
      image: 'https://live.staticflickr.com/4771/40966459832_c62f73505e.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/YTUXOCTUEM/XC451525-Sagittarius_serpentarius-FL%20calls%20Samburu%20NP%2018Nov18%208.39am%20LS112540a.mp3',
    },
    {
      id: 6,
      name: 'Кречётка',
      species: 'Vanellus gregarius',
      description:
        ' Кулик размером с чибиса. Спинная сторона и грудь буровато-серые, верх головы и полоса от основания клюва через глаз черные. Лоб и полоса над глазом белые, низ головы и щеки белые с охристым налетом. Передняя часть брюха черная, задняя рыжая, надхвостье и подхвостье белые. Первостепенные маховые черные, второстепенные белые. ',
      image: 'https://live.staticflickr.com/65535/49316816423_02273aca5b.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC566869-JAREK-MATUSIAK-560%20(2)%20czajka%20towarzyska.mp3',
    },
  ],
  [
    {
      id: 1,
      name: 'Свиристель',
      species: 'Bohemian waxwing',
      description:
        'Длина тела составляет 18—23 см, масса — до 60—67 граммов. Есть заметный хохолок. Окраска розовато-серая, крылья чёрные с жёлтыми и белыми полосками, хвост, горло и полоска через глаза чёрные. ',
      image: 'https://live.staticflickr.com/65535/49580354847_1457a58efc.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/QAJPWEPSTL/XC541875-seide0650.mp3',
    },
    {
      id: 2,
      name: 'Грач',
      species: 'Corvus frugilegus',
      description:
        'Грачи очень умные и сообразительные птицы. С помощью клюва они создают и используют простейшие орудия. У грачей развит рефлекс на звуки трактора. Услышав «тарахтение», они летят на звук – трактор пашет землю, значит, в этом месте много корма.',
      image: 'https://live.staticflickr.com//65535//49347123322_291c86b016.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/RLRHCUIPIY/XC512540-gawron%20Suble%2019.12.19%20%2012.35.mp3',
    },
    {
      id: 3,
      name: 'Полевой жаворонок',
      species: 'Alauda arvensis',
      description:
        'Полевой жаворонок размером немного крупнее воробья и имеет неяркую, но привлекательную окраску оперения. Спина у него серого цвета, иногда коричнево-жёлтая с пёстрыми вкраплениями',
      image: 'https://live.staticflickr.com/65535/50240981817_d33f7e9101.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/RFRTVEHIZX/XC582350-200716_EurasianSkylark_song_Hilton_OC.mp3',
    },
    {
      id: 4,
      name: 'Певчий дрозд',
      species: 'Turdus philomelos',
      description:
        'Дрозд — лучший певец из отряда воробьиных. Песня состоит только из красивых звучных свистов и коротких трелей. Чаще всего её можно услышать в утреннее и вечернее время. Поют дрозды в течении всего периода гнездования.',
      image: 'https://live.staticflickr.com/65535/48979125763_e2534f54bd.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/BLMSIUFTFU/XC513326-190704_1146_TF-Glogow.mp3',
    },
    {
      id: 5,
      name: 'Клёст',
      species: 'Loxia',
      description:
        'Клесты́ — род птиц семейства вьюрковых (Fringillidae), отряда воробьинообразных (Passeriformes). Обитают в лесах Северного полушария, питаются главным образом семенами хвойных растений. Могут гнездоваться летом и зимой.',
      image: 'https://live.staticflickr.com/8016/7124950401_8da4577648.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/RFGQDPLDEC/XC535315-Furukorsnebb%201%20XC%20Stange%20Refsal%20Elias%20A.%20Ryberg20200312110733_111.mp3',
    },
    {
      id: 6,
      name: 'Сойка',
      species: 'Garrulus glandarius',
      description:
        'Когда сойка волнуется, хохолок на её голове взъерошивается. Птица старается создать устрашающее зрелище. Сойки умеют имитировать голоса других птиц, животных и звуки, которые создает человек. На зиму они делают большие запасы желудей и орехов.',
      image: 'https://live.staticflickr.com//65535//49369678956_9a7465c7f4.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/TFOGOENSTQ/XC501517-191008_1590%201300.%20Eichelh%C3%A4her%20D%2C%20NW%2C%20LEV.%20Stephan%20Risch.mp3',
    },
  ],
  [
    {
      id: 1,
      name: 'Глухарь',
      species: 'Western capercaillie',
      description:
        'Глухарь — самая крупная птица подсемейства тетеревиных. От других представителей подсемейства отличается сильно округлённым хвостом и удлинёнными перьями на горле. Обитает в хвойных, смешанных и лиственных лесах Евразии.',
      image: 'https://live.staticflickr.com/4160/33759506854_13dd2ee642.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/VLLMNTIBZB/XC551836-20200426_Prealps_Capercaillie3.mp3',
    },
    {
      id: 2,
      name: 'Вальдшнеп',
      species: 'Scolopax rusticola',
      description:
        'Довольно крупный, размером с сизого голубя, кулик плотного телосложения с длинным прямым клювом. Длина тела 33—38 см, размах крыльев 55—65 см, масса 210—460 г[4][5]. Окрас покровительственный — в целом ржавчато-буроватый, с чёрными, серыми или рыжими пестринами в верхней части тела. ',
      image: 'https://live.staticflickr.com/1921/44135316825_02e8fbce6b.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/SDPCHKOHRH/XC575715-Becasse%20des%20bois%20interactions%20en%20vol.mp3',
    },
    {
      id: 3,
      name: 'Горлица',
      species: 'Streptopelia turtur',
      description:
        'Горлица обитает в смешанных и широколиственных лесах, а также в городских парках и поселках. Птицы часто выбирают места жизни рядом с человеком и легко привыкают к людям. Благодаря мелодичному приятному пению горлиц часто разводят в домашних условиях.',
      image: 'https://live.staticflickr.com/65535/48063004977_84252f9ceb.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC324106-Turkawka_Streptopelia_turtur_Poland_Jarek_Matusiak_2011625_07.mp3',
    },
    {
      id: 4,
      name: 'Дятел',
      species: 'Dendrocopos major',
      description:
        'Дятел – заметная и шумная птица, часто живет рядом с человеком. С середины января до конца июня можно услышать «барабанную дробь» дятлов – трель от вибрации веток под быстрыми ударами клюва птицы. В хорошую погоду дробь слышна в радиусе 1,5 км.',
      image: 'https://live.staticflickr.com/65535/49339376578_e933426455.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC518928-AB-017%20dzi%C4%99cio%C5%82%20du%C5%BCy%20agresja%20%282%29.mp3',
    },
    {
      id: 5,
      name: 'Тетерев-косач',
      species: 'Lyrurus tetrix',
      description:
        'Относительно крупная птица с небольшой головой и коротким клювом. Самцы выглядят заметно крупнее самок — их длина составляет 49—58 см, вес 1,0—1,4 кг, тогда как аналогичные показатели самок 40—45 см и 0,7—1,0 кг соответственно. В окрасе ярко выраженный половой диморфизм.',
      image: 'https://live.staticflickr.com/7150/6706540277_fc8648a988.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/INCBVJJLBJ/XC559854-Default%20Project.mp3',
    },
    {
      id: 6,
      name: 'Ястреб-тетеревятник',
      species: 'Accipiter gentilis',
      description:
        'Ястребы-тетеревятники — самый крупный вид рода ястребов. Самцы обычно весят 630—1100 г, их длина составляет в среднем 55 см, размах крыльев варьирует в пределах 98—104 см',
      image: 'https://live.staticflickr.com/65535/50107772578_eda25d7fac.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/CDGCKQPQPG/XC578075-200719_1005_A.mp3',
    },
  ],
  [
    {
      id: 1,
      name: 'Жаворонок',
      species: 'Alauda arvensis',
      description:
        'Жаворонки — перелетные птицы. С начала сентября они отлетают на юг. Возвращаются они в начале марта, независимо от того, сошел снег или нет. По прилету жаворонков определяли наступление весны и пору, когда пора пахать землю.',
      image: 'https://live.staticflickr.com/65535/47105096764_f751fba568.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC462158-Skowronek_Alauda_arvensis_Poland_Jarek_Matusiak_%20-006%20skowronek%20%282%29.mp3',
    },
    {
      id: 2,
      name: 'Соловей',
      species: 'Luscinia luscinia',
      description:
        'Соловьи поют с начала мая и до конца лета. Каждая песня соловья состоит из 12 повторяющихся элементов, которые еще называют коленами. Кроме собственных трелей, соловьи легко и хорошо перенимают пение других птиц.',
      image: 'https://live.staticflickr.com/7605/27669397735_f3c21758f2.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/HILVWSADVL/XC513809-R07_0052%20Thrush%20Nightingale%20Snipe.mp3',
    },
    {
      id: 3,
      name: 'Лебедь',
      species: 'Cygnus',
      description:
        'Крупные или средних размеров птицы. Самцы обычно крупнее самок. Размах крыльев представителей рода 1,5—3,1 м, а масса может достигать 12,7—15 кг. Тело несколько грузное и вальковатое. ',
      image: 'https://live.staticflickr.com/65535/49483892178_466bc95dfc.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/FPDBIILGCX/XC572336-0_MIXPRE-2836_Black%20Swan_20200629_Narawntapu%20NP.mp3',
    },
    {
      id: 4,
      name: 'Цапли',
      species: 'Ardea',
      description:
        'Ца́пли[1] (лат. Ardea) — род крупных (80—100 см и выше) птиц семейства цаплевых. Эти птицы живут вдоль заболоченных территорий, где их добычей становится рыба, лягушки и другие водные животные. Еду цапли могут добывать как клювом, так и ногами',
      image: 'https://live.staticflickr.com/65535/50283586358_95e1831bda.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/INCBVJJLBJ/XC573925-Default%20Project.mp3',
    },
    {
      id: 5,
      name: 'Свиристель',
      species: 'Bombycilla garrulus',
      description:
        'У свиристели очень цепкие коготки, что помогает птице удерживаться на ветках и склевывать ягоды, которые труднее всего достать. В период ухаживаний самец предлагает самке ягоду или другое угощение. Если самка его принимает, то птицы создают пару.',
      image: 'https://live.staticflickr.com//65535//49367433842_1b06da0e6b.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC517421-AB-004%20%282%29%20jemio%C5%82uszka.mp3',
    },
    {
      id: 6,
      name: 'Горихвостка',
      species: 'Phoenicurus phoenicurus',
      description:
        'Птица размером 10—15 см. Окрас хвоста и брюшка — насыщенно-рыжий (отсюда название), спинка серая и иногда белый лоб. Самки обычно более бурого цвета. Птичка характерно подёргивает ярким хвостом, после чего ненадолго замирает. Во время подёргивания её хвост напоминает пламя, создаётся ощущение, что хвост птицы горит, отсюда и пошло название «горихвостка».',
      image: 'https://live.staticflickr.com/65535/47998139983_5662b87111.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/URREFGVMYF/XC573530-200626_1490-ampl-cut.mp3',
    },
  ],
  [
    {
      id: 1,
      name: 'Орёл',
      species: 'Aquila nipalensis',
      description:
        'В древние времена орел был символом солнца. Орлы часто парят над землей, при этом скорость их перемещения может достигать 240 км/ч. Иллюзия медленного движения происходит из-за высоты полета – более 700 метров',
      image: 'https://live.staticflickr.com//4835//43867392960_7105d71e19.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/KTBTZAHSXF/10_Aquila_nipalensis_al02D85.mp3',
    },
    {
      id: 2,
      name: 'Снежный гриф',
      species: 'Gyps himalayensis',
      description:
        'Обитает в высокогорьях (2000—5000 м) Гималаев, Монголии, Саян, Тибета, Хубсугула, Памира, Тянь-Шаня, Джунгарского и Заилийского Алатау. Совершает вертикальные сезонные кочевки, спускаясь зимой ниже. Питается падалью, в основном копытных животных.',
      image: 'https://live.staticflickr.com/4827/45365953384_0d01f7f2c2.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/QPDPKRWEEK/XC175964-Himalayan%20Vulture%202%20130609.mp3',
    },
    {
      id: 3,
      name: 'Лунь',
      species: 'Circus cyaneus',
      description:
        'Лунь – это небольшой сокол. Питается в основном мышевидными грызунами, основа его рациона – полёвки, хомяки, мыши. Оперение луня может быть пепельно-серым. С такой птицей связано сравнение «седой, как лунь».',
      image: 'https://live.staticflickr.com/4480/37240531151_b74619c99d.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/BLMSIUFTFU/XC513498-190709_1175_Cir.cyan-f.mp3',
    },
    {
      id: 4,
      name: 'Сокол',
      species: 'Falco peregrinus',
      description:
        'Латинское название сокола Falco произошло от слова «серп» из-за серповидной формы крыльев. Длинные и широкие крылья позволяют соколу высоко подниматься в небо и свободно парить. Скорость полёта сокола достигает 280-320 километров в час.',
      image: 'https://live.staticflickr.com//65535//49310710607_92a3a145a9.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/MMEJYLOPDO/XC496049-Pilgrimsfalk_06.mp3',
    },
    {
      id: 5,
      name: 'Гарпия',
      species: 'Harpia harpyja',
      description:
        'Гарпия — это лесной орёл, гнездящийся и охотящийся в тропических лесах.',
      image: 'https://live.staticflickr.com/7361/11893567896_621af671f3.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/JPBSNBUUEF/XC436991-Harpy%20Eagle,%20181002-006.mp3',
    },
    {
      id: 6,
      name: 'Белоплечий орлан',
      species: 'Haliaeetus pelagicus',
      description:
        'Общая длина птицы 105—112 см. Размах крыльев составляет от 195 до 250 см, рекорд составляет — 287 см . Вес самок варьирует от 6200 до 9500 граммов, в то время как самцы значительно легче, их вес - от 4900 до 6800 граммов. У взрослых птиц окраска состоит из сочетания тёмно-бурого цвета с белым (но есть и одноцветная тёмно-бурая вариация). ',
      image: 'https://live.staticflickr.com/1915/31683693388_7ef247b9cf.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/GNYVMVEMZX/XC528783-oowashi_200220_sub.mp3',
    },
  ],
  [
    {
      id: 1,
      name: 'Кулик-сорока',
      species: 'Haematopus ostralegus',
      description:
        'Кули́к-соро́ка - крупный кулик с длинным оранжевым клювом и чёрно-белым контрастным оперением. Наиболее распространённый вид небольшого семейства Haematopodidae, куда входят птицы, обитающие в основном на морских побережьях.',
      image: 'https://live.staticflickr.com/4904/32214175858_df72411c07.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC575597-2020.07.13_12.50_01.MP3',
    },
    {
      id: 2,
      name: 'Чёрный водорез',
      species: 'Rynchops nige',
      description:
        'Водоре́зы или ножеклювы — род птиц из семейства чайковых отряда ржанкообразных. В состав рода включают три вида. Некоторые систематики выделяют водорезов в подсемейство Rynchopinae',
      image: 'https://live.staticflickr.com/5491/11409462814_15c0b24346.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/UZCHJCUDEF/XC540248-Rynchops%20niger%20Varillal%202019.mp3',
    },
    {
      id: 3,
      name: 'Баклан',
      species: 'Microcarbo melanoleucos',
      description:
        'Это средние либо крупные птицы размером с утку или гуся. Длина тела 50—100 см, размах крыльев 80—160 см. Оперение у большинства видов чёрное с металлическим блеском; у некоторых видов есть белые пятна на голове и брюхе. ',
      image: 'https://live.staticflickr.com/65535/50123580446_34c0137c7c.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/CCUCXWCPSW/XC182028-2012_08_23%20Phalacrocorax%20melanoleucos.mp3',
    },
    {
      id: 4,
      name: 'Пеликан',
      species: 'Pelecanus',
      description:
        'Пеликаны — обитатели морей и рек. Ходят они неуклюже, но хорошо летают и плавают. Питаются в основном рыбой, устраивают коллективные охоты — выстроившись полукругом хлопают по воде крыльями и клювами и вытесняют напуганную рыбу на мелководье.',
      image: 'https://live.staticflickr.com/65535/49159147156_dcbbb5c12a.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/XAMHIHFTZG/XC331138-call1.mp3',
    },
    {
      id: 5,
      name: 'Пингвин',
      species: 'Aptenodytes forsteri',
      description:
        'Самец императорского пингвина достигает роста 130 см, его масса может приближаться к 50 кг. Из всех современных пингвинов этот вид – самый крупный. Питание пингвина состоит из рыбы, кальмаров и криля. Охотятся птицы в океане большими группами.',
      image: 'https://live.staticflickr.com/5202/5252413926_8e013a3efd.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/OOECIWCSWV/XC449827-LS100829%20King%20Penguin%20call%20A.mp3',
    },
    {
      id: 6,
      name: 'Бурая олуша',
      species: 'Larus argentatus',
      description:
        'Взрослая птица достигает длины от 65 до 75 см и весит от 900 гр до 1,5 кг. Размах крыльев составляет от 130 до 150 см. Тело имеет обтекаемую форму, типичную для олуш. Кроме того, у неё длинный, заострённый клюв,',
      image: 'https://live.staticflickr.com/65535/49763587086_67f0c22bd1.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/SNRCANJSRX/XC572191-Larus%20argentatus%20ad%20call%20fly%20HV%20200618%20b.mp3',
    },
  ],
];

export default birdsData;
