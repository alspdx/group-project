// backend

// pedal constructor
function Pedal(name, brand, type, link, image, info){
  this.name = name;
  this.brand = brand;
  this.type = type;
  this.link = link;
  this.image = image;
  this.info = info;
}

// artist constructor
function Artist(artistName, group, pedals, image, info) {
  this.artistName = artistName;
  this.group = group;
  this.pedals = pedals;
  this.image = image;
  this.info = info;
}

// object arrays
var pedalsArray = [];
var artistsArray = [];

// pedal variables

pedalsArray.push(new Pedal ("Boss DS-1", "Boss", "Distortion", "http://www.effectsdatabase.com/model/boss/compact/ds1", "img/pedals/bossDS1.jpg", "This is the classic distortion pedal launched a million guitar solos. Known by professional guitarists the world over as 'that orange BOSS distortion,' the DS-1 Distortion is still in production to this day, thanks to its distinct growling-yet-warm tone and bite. Plug it into your favorite stack and see what we mean."));

pedalsArray.push(new Pedal ("Boss RV-3", "Boss", "Reverb/Delay", "http://www.effectsdatabase.com/model/boss/compact/rv3#related", "img/pedals/bossRV3.jpg", "The RV-3 is a popular professional-quality pedal that can produce reverb, delay or both. It offers four different high-density reverb modes plus three delay modes offering delay times up to 2,000ms."));

pedalsArray.push(new Pedal ("Electro-Harmonix Small Stone - Phase Shifter", "Electro-Harmonix", "Phaser", "http://www.effectsdatabase.com/model/eh/smallstone#forum", "img/pedals/ElectroSmallStone.jgp", "The Small Stone's full bodied, three dimensional phasing adds a special swirl to every musical style. Blues boys and babes dig its rapidly rotating speaker effect while Country players use it to add seasoning to their chicken' pickin'. Metal-heads and Industrialists dig the Stone's jet plane woosh. No matter what your musical pleasure, the Small Stone is guaranteed to increase it!"));

pedalsArray.push(new Pedal ("MXR M-101 Phase 90", "MXR", "Phaser", "http://www.effectsdatabase.com/model/mxr/m101", "img/pedals/MXRphase90.jpg", "This device has found its way into many of Eddie Van Halen's recordings, adding a shimmery velocity to lead passages or a more dramatic swoosh to muted strumming. Not just for guitars; it works well with bass, keyboards and even vocals. Vary the speed from a subtle, long cycle to a fast, watery warble...and myriad vintage vibrations in between."));

// artist variables

artistsArray.push(new Artist ("Kevin Parker", "Tame Impala", ["Boss DS-1"], "img/artists/KevinParker.jpg", "Kevin Parker is an Australian singer, songwriter, multi-instrumentalist and record producer, best known for being the frontman and live guitarist of the Australian psychedelic rock band Tame Impala, for which he writes, records, and produces the music."));

artistsArray.push(new Artist ("Kurt Vile", "Kurt Vile & The Violators", ["Boss RV-3"], "img/artists/KurtVile.jpg", "Kurt Vile is an American singer, songwriter, multi-instrumentalist and record producer. He is known for his solo work and as the former lead guitarist of rock band The War on Drugs. Both in the studio and during live performances, Vile is accompanied by his backing band, The Violators, which currently includes Jesse Trbovich (bass, guitar, saxophone), Rob Laakso (guitar, bass) and Kyle Spence (drums)."));

artistsArray.push(new Artist ("Ty Segall", "Ty Segall", ["Electro-Harmonix Small Stone - Phase Shifter"], "img/artists/TySegall.jpg", "Ty Garrett Segall is an American multi-instrumentalist, singer-songwriter and record producer. He is best known for his prolific solo career during which he has released nine studio albums, alongside various EPs and singles. Segall is also a member of the bands Fuzz, Broken Bat and GØGGS, and is a former member of The Traditional Fools, Epsilons, Party Fowl, Sic Alps, and The Perverts"));

artistsArray.push(new Artist ("Frank Zappa", "Frank Zappa", ["MXR M-101 Phase 90"], "img/artists/FrankZappa.jpg", "Frank Vincent Zappa was an American musician, composer, activist and filmmaker. His work was characterized by nonconformity, free-form improvisation, sound experiments, musical virtuosity, and satire of American culture. In a career spanning more than 30 years, Zappa composed rock, pop, jazz, jazz fusion, orchestral and musique concrète works, and produced almost all of the 60-plus albums that he released with his band the Mothers of Invention and as a solo artist. Zappa also directed feature-length films and music videos, and designed album covers. He is considered one of the most innovative and stylistically diverse rock musicians of his era."))





// Front end
$(function() {

  $("#pedals").click(function() {
    pedalsArray.map(function(pedal) {
      $("#pedal-list").append("<li>" + pedal.name + "</li>");
    });
  });

  $("#pedal-list").on('click', 'li', function() {
    var pedalName = $(this).text();
    console.log("li tag " + pedalName);
    pedalsArray.map(function(pedal) {
      if (pedal.name === pedalName) {
        $("#pedal-info-output").html("<li>" + pedal.info + "</li>");
      };
    });
  });
});
