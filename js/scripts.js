// backend

// pedal constructor
function Pedal(pedalName, type, link, image, info){
  this.name = name;
  this.brand = brand;
  this.type = type;
  this.link = link;
  this.image = image;
  this.info = info;
}

// artist constructor
function Artist(artistName, group, pedals, info) {
  this.artistName = artistName;
  this.group = group;
  this.pedals = pedals;
  this.info = info;
}

// pedal variables
var bossDS1 = new Pedal ("Boss DS-1", "Boss", "Distortion", "http://www.effectsdatabase.com/model/boss/compact/ds1", "img/bossDS1.jpg", "This is the classic distortion pedal launched a million guitar solos. Known by professional guitarists the world over as 'that orange BOSS distortion,' the DS-1 Distortion is still in production to this day, thanks to its distinct growling-yet-warm tone and bite. Plug it into your favorite stack and see what we mean.");

var bossRV3= new Pedal ("Boss RV-3", "Boss", "Reverb/Delay", "http://www.effectsdatabase.com/model/boss/compact/rv3#related", "img/bossRV3.jpg", "The RV-3 is a popular professional-quality pedal that can produce reverb, delay or both. It offers four different high-density reverb modes plus three delay modes offering delay times up to 2,000ms.");

// artist variables
var kevinParker = new Artist ("Kevin Parker", "Tame Impala", "Boss DS-1", "Kevin Parker is an Australian singer, songwriter, multi-instrumentalist and record producer, best known for being the frontman and live guitarist of the Australian psychedelic rock band Tame Impala, for which he writes, records, and produces the music.");

var kurtVile = new Artist ("Kurt Vile", "Kurt Vile & The Violators", "Boss RV-3", "Kurt Vile is an American singer, songwriter, multi-instrumentalist and record producer. He is known for his solo work and as the former lead guitarist of rock band The War on Drugs. Both in the studio and during live performances, Vile is accompanied by his backing band, The Violators, which currently includes Jesse Trbovich (bass, guitar, saxophone), Rob Laakso (guitar, bass) and Kyle Spence (drums).");
