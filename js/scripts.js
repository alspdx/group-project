// Back end logic

// Object arrays
var pedalsArray = [];
var artistsArray = [];
var usersArray = [];

// Pedal constructor
function Pedal(name, brand, type, link, image, info){
  this.name = name;
  this.brand = brand;
  this.type = type;
  this.link = link;
  this.image = image;
  this.info = info;
  this.artists = [];
}

// Artist constructor
function Artist(name, group, pedals, image, info) {
  this.name = name;
  this.group = group;
  this.pedals = pedals;
  this.image = image;
  this.info = info;
}


//User constructor
function User(name, group, info, pedals, artists) {
  this.name = name;
  this.group = group;
  this.info = info;
  this.pedals = pedals;
  this.artists = artists;
}

// Pedal variables

pedalsArray.push(new Pedal ("Boss DS-1 Distortion", "Boss", "Distortion", "http://www.effectsdatabase.com/model/boss/compact/ds1", "img/pedals/bossDS1.jpg", "This is the classic distortion pedal launched a million guitar solos. Known by professional guitarists the world over as 'that orange BOSS distortion,' the DS-1 Distortion is still in production to this day, thanks to its distinct growling-yet-warm tone and bite. Plug it into your favorite stack and see what we mean."));

pedalsArray.push(new Pedal ("Boss RV-3 Reverb/Delay", "Boss", "Reverb/Delay", "http://www.effectsdatabase.com/model/boss/compact/rv3#related", "img/pedals/bossRV3.jpg", "The RV-3 is a popular professional-quality pedal that can produce reverb, delay or both. It offers four different high-density reverb modes plus three delay modes offering delay times up to 2,000ms."));

pedalsArray.push(new Pedal ("Electro-Harmonix Small Stone", "Electro-Harmonix", "Phaser", "http://www.effectsdatabase.com/model/eh/smallstone#forum", "img/pedals/ElectroSmallStone.jpg", "The Small Stone's full bodied, three dimensional phasing adds a special swirl to every musical style. Blues boys and babes dig its rapidly rotating speaker effect while Country players use it to add seasoning to their chicken' pickin'. Metal-heads and Industrialists dig the Stone's jet plane woosh. No matter what your musical pleasure, the Small Stone is guaranteed to increase it!"));

pedalsArray.push(new Pedal ("MXR Phase 90", "MXR", "Phaser", "http://www.effectsdatabase.com/model/mxr/m101", "img/pedals/MXRphase90.jpg", "This device has found its way into many of Eddie Van Halen's recordings, adding a shimmery velocity to lead passages or a more dramatic swoosh to muted strumming. Not just for guitars; it works well with bass, keyboards and even vocals. Vary the speed from a subtle, long cycle to a fast, watery warble...and myriad vintage vibrations in between."));

pedalsArray.push(new Pedal ("Boss BD-2 Blues Driver", "Boss", "Distortion/Overdrive", "http://www.effectsdatabase.com/model/boss/compact/bd2", "img/pedals/bossBD2.jpg", "The BD-2 Blues Driver delivers the creamy, yet crunchy sound associated with great blues guitar. This popular pedal provides instant access to the kind of warm overdrive and emotive distortion usually reserved for 30-year-old tube amps."))

pedalsArray.push(new Pedal("DigiTech DigiDelay", "DigiTech", "Delay", "http://www.effectsdatabase.com/model/digitech/x/xdd", "img/pedals/DigiDelay.jpg", "The DigiDelay™ pedal gives you loads of delay time, with up to 4 seconds of delay available. This is more than is found in many studio-quality, rack-mounted delay processors. And that's just the beginning! The DigiDelay™ also lets you select various delay types such as stereo ping pong and tape delay, and other phat delay sounds, plus tap tempo so you can set the delay time exactly to the beat (just hold, then tap the footswitch with your foot). Controls feature Level, Repeat, Time, and Mode. Outputs for both pedals include Out 1 (Mono) and Out 2 for stereo operation."));

pedalsArray.push(new Pedal ("Strymon Big Sky", "Strymon", "Reverb", "http://www.effectsdatabase.com/model/strymon/bigsky", "img/pedals/StrymonBigSky.jpg", "Plug into BigSky and instantly lift your sound into the stratosphere. The world below you fades into the distance, and you're elevated into a glow of lush, glorious, radiant reverbs. To create a reverb experience as natural, beautiful, and immersive as BigSky required tremendous feats of sound engineering and artistic imagination. Using the fundamentals of acoustical science as our beacon, we carefully studied and scientifically analyzed reverb technology from the past fifty years. We faithfully captured the essence of these classic sounds, and forged ahead to dream up our vision of reverbs from the future."))

pedalsArray.push(new Pedal ("Boss GE-7 Equalizer", "Boss", "Equalizer", "http://www.effectsdatabase.com/model/boss/compact/ge7", "img/pedals/bossGE7.jpg", "The GE-7 Equalizer pedal offers seven bands of EQ ranging from 100Hz to 6.4kHz, ideal for guitar sounds, with boost/cut of +/- 15dB per band. This lets you completely control your sound and eliminate unwanted feedback, particularly when connected after a distortion effect."));

pedalsArray.push (new Pedal ("Electro-Harmonix Small Clone", "Electro-Harmonix", "Chorus", "http://www.effectsdatabase.com/model/eh/smallclone", "img/pedals/ElectroSmallClone.jpg", "The classic chorus! Analog chorus pedal popularized by Kurt Cobain. The finest analog chorus sounds: from clear, rich and dimensional to warm pulsating warbles, can be intensified with the Depth Control. Simple tweaks generate exciting doubling effects. Chiming 12-string tone, or Leslie-like warbles."));

pedalsArray.push (new Pedal ("Maestro FZ-1 Fuzz-Tone", "Maestro", "Fuzz Distortion", "http://www.effectsdatabase.com/model/maestro/fz1", "img/pedals/maestroFZ1.jpg", "It's been called the greatest Hippie Rock pedal of all time! It's the one, the only, the original Maestro FuzzToneTM . And it's back with the nastiest, most in your face FUZZZZZ you've ever heard. â€¢ If you were alive in 1965, you probably remember the first time you heard the sound that changed rock music forever. It was the sound of the Bad Boys of Rock, The Rolling Stones, with their latest song, Satisfaction. What was that lead guitar sound? It was the Maestro FuzzTone designed and made by Gibson Electronics of Kalamazoo, MI."));

pedalsArray.push (new Pedal ("Boss PN-2 Tremolo/Pan", "Boss", "Tremolo", "http://www.effectsdatabase.com/model/boss/compact/pn2", "img/pedals/bossPN2.jpg", "The tremolo effect is achieved by varying the volume of the original sound cyclically to create a pulsating speaker effect. The PN-2 has a Rate and Depth control in addition to a 4-way Mode switch giving you the options of Pan-sawtooth, Pan-square, Tremolo-sawtooth or Tremolo-square wave. There is an LED light that blinks along with the tempo of the oscillator, so it is easier to dial in rhythmic tremolo in a low light situation."));

pedalsArray.push (new Pedal ("DigiTech Whammy DT", "DigiTech", "Pitch Shift", "http://www.effectsdatabase.com/model/digitech/whammy/dt", "img/pedals/DigiTechWhammyDT.jpg", "The Whammy pedal is a digital effects pedal designed for guitar and manufactured by DigiTech. The Whammy was the first widely known effects pedal that could do foot controlled pitch shifting effects. The pedal emulates sounds that a guitarist normally makes using the vibrato (whammy) bar on the guitar, but with a greatly enhanced pitch range and without tuning hassles associated with traditional vibrato bars."));

pedalsArray.push (new Pedal ("Z. Vex Lo-Fi Loop Junky", "Z. Vex", "Looper", "http://www.effectsdatabase.com/model/zvex/lofiloopjunky", "img/pedals/loopJunky.jpg", "This is the Lo-Fi Loop Junky. It's really low fidelity… the recording of your guitar is filled with hiss, moan, distortion and warped-record strangeness, but everyone will be able to tell the loop from your real guitar. Because the processing of your direct guitar is done with my new bootstrap circuit, with the very highest impedance circuit I've ever developed (even higher than the super hard-on circuit) your direct guitar will have detail incomparable with anything you've ever heard. The juxtaposition of your direct guitar against the smashed, distorted, shimmering/warbling recording of the loop mechanism will make it clear once and for all who is the guitarist and what is the machinery."));

// Artist variables

artistsArray.push(new Artist ("Kevin Parker", "Tame Impala", ["Boss DS-1 Distortion", "Electro-Harmonix Small Stone", "Boss BD-2 Blues Driver"], "img/artists/KevinParker.jpg", "Kevin Parker is an Australian singer, songwriter, multi-instrumentalist and record producer, best known for being the frontman and live guitarist of the Australian psychedelic rock band Tame Impala, for which he writes, records, and produces the music."));

artistsArray.push(new Artist ("Kurt Vile", "Kurt Vile & The Violators", ["Boss RV-3 Reverb/Delay"], "img/artists/KurtVile.jpg", "Kurt Vile is an American singer, songwriter, multi-instrumentalist and record producer. He is known for his solo work and as the former lead guitarist of rock band The War on Drugs. Both in the studio and during live performances, Vile is accompanied by his backing band, The Violators, which currently includes Jesse Trbovich (bass, guitar, saxophone), Rob Laakso (guitar, bass) and Kyle Spence (drums)."));

artistsArray.push(new Artist ("Ty Segall", "Ty Segall", ["Electro-Harmonix Small Stone"], "img/artists/TySegall.jpg", "Ty Segall is an American multi-instrumentalist, singer-songwriter and record producer. He is best known for his prolific solo career during which he has released nine studio albums, alongside various EPs and singles. Segall is also a member of the bands Fuzz, Broken Bat and GØGGS, and is a former member of The Traditional Fools, Epsilons, Party Fowl, Sic Alps, and The Perverts"));

artistsArray.push(new Artist ("Frank Zappa", "Frank Zappa", ["MXR Phase 90"], "img/artists/FrankZappa.jpg", "Frank Vincent Zappa was an American musician, composer, activist and filmmaker. His work was characterized by nonconformity, free-form improvisation, sound experiments, musical virtuosity, and satire of American culture. In a career spanning more than 30 years, Zappa composed rock, pop, jazz, jazz fusion, orchestral and musique concrète works, and produced almost all of the 60-plus albums that he released with his band the Mothers of Invention and as a solo artist. Zappa also directed feature-length films and music videos, and designed album covers. He is considered one of the most innovative and stylistically diverse rock musicians of his era."));

artistsArray.push(new Artist ("Courtney Barnett", "Courtney Barnett", ["Boss BD-2 Blues Driver"], "img/artists/CourtneyBarnett.jpg", "Courtney Barnett is an Australian singer, songwriter, and musician. Known for her witty, rambling lyrics and deadpan singing style, Barnett attracted attention with the release of her debut EP, I've Got A Friend Called Emily Ferris. International interest from the UK and North American music press came with the release of The Double EP: A Sea of Split Peas in October 2013. At her well-received performances at the CMJ Music Marathon, Barnett was mentioned by both Rolling Stone and The New York Times as a standout performer."));

artistsArray.push(new Artist ("Chelsea Wolfe", "Chelsea Wolfe", ["DigiTech DigiDelay"], "img/artists/ChelseaWolfe.jpg", "Chelsea Wolfe is an American singer-songwriter and musician. She has earned underground critical acclaim for her releases, The Grime and the Glow (2010) and Apokalypsis (2011), which blended elements of gothic rock and folk music, as well as her following albums, Pain Is Beauty (2013) and Abyss (2015), in which Wolfe incorporated elements of neofolk, electronic and heavy metal. Her music has been featured in promotional material for the 2017 Jaguar XE car as well as the television series Game of Thrones, Fear the Walking Dead and How to Get Away with Murder."));

artistsArray.push(new Artist ("Greta Kline", "Frankie Cosmos", ["Strymon Big Sky"], "img/artists/FrankieCosmos.jpg", "Greta Kline, better known by her stage name Frankie Cosmos, is an American musician and singer-songwriter. She is known for her independent releases, inspired by Frank O'Hara's poetry, DIY ethics of K Records and the early 2000s New York City's anti-folk scene. Kline is also the former bass guitarist of the band Porches. She is the daughter of actors Kevin Kline and Phoebe Cates."));

artistsArray.push(new Artist ("Corin Tucker", "Sleater-Kinney", ["Boss GE-7 Equalizer"], "img/artists/CorinTucker.jpg", "Corin Tucker is an American singer, songwriter, and guitarist, best known for her work with rock band Sleater-Kinney. Prior to forming Sleater-Kinney, Tucker was a member of the indie rock group Heavens to Betsy. She has also released work under the name The Corin Tucker Band."));

artistsArray.push(new Artist ("Rob Crow", "Pinback", ["Electro-Harmonix Small Clone"], "img/artists/RobCrow.jpg", "Rob Crow, Jr. is an American singer and multi-instrumentalist from San Diego, California known for the long list of bands and projects he is associated with, mostly in the genres of indie rock and math rock. He is best known for his involvement with the bands Pinback (co-led by Zach Smith from Three Mile Pilot), Heavy Vegetable, Physics, Optiganally Yours and Thingy; in addition he has also led or leads the bands Advertising, Alpha Males, Altron Tube, Cthugha, Fantasy Mission Force, Goblin Cock, Holy Smokes, The Ladies, Other Men and Remote Action Sequence Project, as well as performing and releasing solo records under his own name and under the name Snotnose."));

artistsArray.push(new Artist ("Donald Glover", "Childish Gambino", ["Maestro FZ-1 Fuzz-Tone"], "img/artists/ChildishGambino.jpg", "Donald Glover is an American actor, writer, producer, director, comedian, rapper, DJ, singer, and songwriter. He performs as a stage artist under the stage name Childish Gambino, and as a disc jockey, he performs under the name mcDJ. After several self-released albums and mixtapes, Glover signed to Glassnote Records in 2011. He released his first album, Camp, on November 15, 2011 to generally positive reviews. His second studio album, Because the Internet, was released on December 10, 2013. Glover was nominated for two Grammy Awards in 2015, Best Rap Album for Because the Internet and Best Rap Performance for his single 3005. Glover's third album, Awaken, My Love!, was released on December 2, 2016, spawning the hit single Redbone, which peaked at number 12 on the Billboard Hot 100."));

artistsArray.push(new Artist("Kevin Shields", "My Bloody Valentine", ["Z. Vex Lo-Fi Loop Junky", "DigiTech Whammy DT", "Boss PN-2 Tremolo/Pan", "Electro-Harmonix Small Clone", "Boss GE-7 Equalizer", "Strymon Big Sky", "DigiTech DigiDelay", "Boss BD-2 Blues Driver", "MXR Phase 90", "Electro-Harmonix Small Stone", "Boss RV-3 Reverb/Delay", "Boss DS-1 Distortion"], "img/artists/KevinShields.jpg", "Kevin Shields is an American-born Irish musician, singer-songwriter, composer and producer, best known as the vocalist and guitarist of the alternative rock band My Bloody Valentine. Shields performed in a number of small unsuccessful bands in Dublin, Ireland, as a teenager, before forming My Bloody Valentine with drummer Colm Ó Cíosóig in 1983. Although initially experiencing limited success, the band would later become extremely influential on the evolution of alternative rock with their two original studio albums Isn't Anything (1988) and Loveless (1991), both of which pioneered a subgenre known as shoegazing. Shields' texturised guitar sound and his experimentation with his guitars' tremolo systems resulted in the creation of the glide guitar technique, which became a recognisable aspect of My Bloody Valentine's sound, along with his meticulous production techniques."));

usersArray.push(new User("Michael Pinaud", "LDX-ROE", "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", ["Electro-Harmonix Small Clone", "Boss GE-7 Equalizer", "Strymon Big Sky", "DigiTech DigiDelay"], ["Kevin Shields", "Chelsea Wolfe"]));

// Back end functions
artistsArray.map(function(artist) {
  artist.pedals.map(function(pedalName) {
    pedalsArray.map(function(pedal) {
      if (pedal.name === pedalName) {
        pedal.artists.push(artist.name);
      };
    });
  });
});

function pedalClick(text) {
  pedalsArray.map(function(pedal) {
    if (pedal.name === text) {
      makePedalOutput(pedal);
    };
  });
};

function artistClick(text) {
  artistsArray.map(function(artist) {
    if (artist.name === text) {
      makeArtistOutput(artist);
    };
  });
};

function userClick(text) {
  usersArray.map(function(user) {
    if (user.name === text) {
      makeUserOutput(user);
    };
  });
};

// Front end functions
function makePedalOutput(foundPedal) {
  $("#info-output").html('<div class="removable-main">' +
                            '<li>' + foundPedal.info + '</li>' +
                            '<li><a href="' + foundPedal.link + '" target="_blank">Click here for more information</a></li>' + '<li><img src="' + foundPedal.image + '" alt="' + foundPedal.name + '"></li>' +
                            '<h3>These artists use this effect pedal:</h3>' +
                            '<ul id="pedal-user-output" class="artist-click clickable">' +
                            '</ul>' +
                          '</div>'
                        );

  foundPedal.artists.map(function(artist) {
    $('#pedal-user-output').append('<li>' + artist + '</li>');
  });
  $('.artist-click').on('click', 'li', function() {
    artistClick($(this).text());
  });
}

function makeArtistOutput(foundArtist) {
  $('#info-output').html('<div class="removable-main">' +
                            '<li>' + foundArtist.name + ' from ' + foundArtist.group + '</li>' +
                            '<li><img src="' + foundArtist.image + '" alt="' + foundArtist.name + '">' +
                            '<li>' + foundArtist.info + '</li>' +
                            '<h3>' + foundArtist.name + ' uses the following pedals:</h3></li>' +
                            '<ul id="artist-pedal-output" class="pedal-click clickable">' +
                            '</ul>' +
                          '</div>'
                        );

  foundArtist.pedals.map(function(pedal) {
    $('#artist-pedal-output').append('<li>' + pedal + '</li>');
  });
  $('.pedal-click').on('click', 'li', function() {
    pedalClick($(this).text());
  });
}

function makeUserOutput(foundUser) {
  $('#info-output').html('<div class="removable-main">' +
                            '<li>' + foundUser.name + ' from ' + foundUser.group + '</li>' +
                            '<li>' + foundUser.info + '</li>' +
                            '<h3>' + foundUser.name + ' uses the following pedals:</h3>' +
                            '<ul id="user-pedals-output" class="pedal-click clickable">' +
                            '</ul>' +
                            '<h3>' + ' Follows: ' + '</h3>' +
                            '<ul id="user-artists-output" class="artist-click clickable">' +
                            '</ul>' +
                          '</div>'
                        );

  foundUser.pedals.map(function(pedal) {
    $('#user-pedals-output').append('<li>' + pedal + '</li>');
  });
  foundUser.artists.map(function(artist) {
    $('#user-artists-output').append('<li>' + artist + '</li>');
  });
  $('.pedal-click').on('click', 'li', function() {
    pedalClick($(this).text());
  });
  $('.artist-click').on('click', 'li', function() {
    artistClick($(this).text());
  });
}

// Front end logic
$(function() {

  $('#pedals').click(function() {
    $('.removable-sidebar').remove();
    pedalsArray.map(function(pedal) {
      $('#pedal-list').append('<li class="clickable removable-sidebar">' + pedal.name + '</li>');
    });
    $('.pedal-click').on('click', 'li', function() {
      pedalClick($(this).text());
    });
  });

  $('#artists').click(function(){
    $('.removable-sidebar').remove();
    artistsArray.map(function(artist) {
      $('#artist-list').append('<li class="clickable removable-sidebar">' + artist.name + '</li>')
    });
    $('.artist-click').on('click', 'li', function() {
      artistClick($(this).text());
    });
  });

  $("#users").click(function(){
    $(".removable-sidebar").remove();
    usersArray.map(function(user) {
      $("#users-list").append("<li class='clickable removable-sidebar'>" + user.name + "</li>")
    });
    $('.user-click').on('click', 'li', function() {
      userClick($(this).text());
    });
  });
});
