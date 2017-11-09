// Back end

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

//Pedals
pedalsArray.push(new Pedal ("Boss DS-1 Distortion", "Boss", "Distortion", "http://www.effectsdatabase.com/model/boss/compact/ds1", 'img/pedals/BossDS-1.png', "This is the classic distortion pedal launched a million guitar solos. Known by professional guitarists the world over as 'that orange BOSS distortion,' the DS-1 Distortion is still in production to this day, thanks to its distinct growling-yet-warm tone and bite. Plug it into your favorite stack and see what we mean."));

pedalsArray.push(new Pedal ("Boss RV-3 Reverb/Delay", "Boss", "Reverb", "http://www.effectsdatabase.com/model/boss/compact/rv3#related", 'img/pedals/BossRV-3.png', "The RV-3 is a popular professional-quality pedal that can produce reverb, delay or both. It offers four different high-density reverb modes plus three delay modes offering delay times up to 2,000ms."));

pedalsArray.push(new Pedal ("Electro-Harmonix Small Stone", "Electro-Harmonix", "Phaser", "http://www.effectsdatabase.com/model/eh/smallstone#forum", 'img/pedals/EHXSmallStone.png', "The Small Stone's full bodied, three dimensional phasing adds a special swirl to every musical style. Blues boys and babes dig its rapidly rotating speaker effect while Country players use it to add seasoning to their chicken' pickin'. Metal-heads and Industrialists dig the Stone's jet plane woosh. No matter what your musical pleasure, the Small Stone is guaranteed to increase it!"));

pedalsArray.push(new Pedal ("MXR Phase 90", "MXR", "Phaser", "http://www.effectsdatabase.com/model/mxr/m101", 'img/pedals/MXRPhase90.png', "This device has found its way into many of Eddie Van Halen's recordings, adding a shimmery velocity to lead passages or a more dramatic swoosh to muted strumming. Not just for guitars; it works well with bass, keyboards and even vocals. Vary the speed from a subtle, long cycle to a fast, watery warble...and myriad vintage vibrations in between."));

pedalsArray.push(new Pedal ("Boss BD-2 Blues Driver", "Boss", "Distortion/Overdrive", "http://www.effectsdatabase.com/model/boss/compact/bd2", 'img/pedals/BossBD-2.png', "The BD-2 Blues Driver delivers the creamy, yet crunchy sound associated with great blues guitar. This popular pedal provides instant access to the kind of warm overdrive and emotive distortion usually reserved for 30-year-old tube amps."))

pedalsArray.push(new Pedal ("Strymon Big Sky", "Strymon", "Reverb", "http://www.effectsdatabase.com/model/strymon/bigsky", 'img/pedals/StrymonBigSky.png', "Plug into BigSky and instantly lift your sound into the stratosphere. The world below you fades into the distance, and you're elevated into a glow of lush, glorious, radiant reverbs. To create a reverb experience as natural, beautiful, and immersive as BigSky required tremendous feats of sound engineering and artistic imagination. Using the fundamentals of acoustical science as our beacon, we carefully studied and scientifically analyzed reverb technology from the past fifty years. We faithfully captured the essence of these classic sounds, and forged ahead to dream up our vision of reverbs from the future."))

pedalsArray.push(new Pedal ("Boss GE-7 Equalizer", "Boss", "Equalizer", "http://www.effectsdatabase.com/model/boss/compact/ge7", 'img/pedals/BossGE-7.png', "The GE-7 Equalizer pedal offers seven bands of EQ ranging from 100Hz to 6.4kHz, ideal for guitar sounds, with boost/cut of +/- 15dB per band. This lets you completely control your sound and eliminate unwanted feedback, particularly when connected after a distortion effect."));

pedalsArray.push(new Pedal ("Maestro FZ-1 Fuzz-Tone", "Maestro", "Fuzz", "http://www.effectsdatabase.com/model/maestro/fz1", 'img/pedals/MaestroFZ-1.png', "It's been called the greatest Hippie Rock pedal of all time! It's the one, the only, the original Maestro FuzzToneTM . And it's back with the nastiest, most in your face FUZZZZZ you've ever heard. â€¢ If you were alive in 1965, you probably remember the first time you heard the sound that changed rock music forever. It was the sound of the Bad Boys of Rock, The Rolling Stones, with their latest song, Satisfaction. What was that lead guitar sound? It was the Maestro FuzzTone designed and made by Gibson Electronics of Kalamazoo, MI."));

pedalsArray.push(new Pedal ("Boss PN-2 Tremolo/Pan", "Boss", "Tremolo", "http://www.effectsdatabase.com/model/boss/compact/pn2", 'img/pedals/BossTU-2.png', "The tremolo effect is achieved by varying the volume of the original sound cyclically to create a pulsating speaker effect. The PN-2 has a Rate and Depth control in addition to a 4-way Mode switch giving you the options of Pan-sawtooth, Pan-square, Tremolo-sawtooth or Tremolo-square wave. There is an LED light that blinks along with the tempo of the oscillator, so it is easier to dial in rhythmic tremolo in a low light situation."));

pedalsArray.push(new Pedal ("DigiTech Whammy DT", "DigiTech", "Pitch Shift", "http://www.effectsdatabase.com/model/digitech/whammy/dt", 'img/pedals/DigiTechWhammyDT.png', "The Whammy pedal is a digital effects pedal designed for guitar and manufactured by DigiTech. The Whammy was the first widely known effects pedal that could do foot controlled pitch shifting effects. The pedal emulates sounds that a guitarist normally makes using the vibrato (whammy) bar on the guitar, but with a greatly enhanced pitch range and without tuning hassles associated with traditional vibrato bars."));

pedalsArray.push(new Pedal ("Zvex Lo-Fi Loop Junky", "Zvex", "Looper", "http://www.effectsdatabase.com/model/zvex/lofiloopjunky", 'img/pedals/ZvexLofiLoopJunky.png', "This is the Lo-Fi Loop Junky. It's really low fidelity… the recording of your guitar is filled with hiss, moan, distortion and warped-record strangeness, but everyone will be able to tell the loop from your real guitar. Because the processing of your direct guitar is done with my new bootstrap circuit, with the very highest impedance circuit I've ever developed (even higher than the super hard-on circuit) your direct guitar will have detail incomparable with anything you've ever heard. The juxtaposition of your direct guitar against the smashed, distorted, shimmering/warbling recording of the loop mechanism will make it clear once and for all who is the guitarist and what is the machinery."));

pedalsArray.push(new Pedal ("Electro-Harmonix Memory Man", "Electro-Harmonix", "Delay", 'http://www.effectsdatabase.com/model/eh/memoryman/deluxe', 'img/pedals/EHXdmm.png', 'Experience the warmth of analog. Nothing can compare to the organic sound of analog delay, and no one does analog like the Deluxe Memory Man! Up to 550ms of vibrant echo that rivals tape delay; lush, spatial chorus and haunting vibrato are just a few of the treats in the Memory Man\'s sonic schmorgasbord! Analog warmth that renders digital delay obsolete Memory Man echo with chorus/vibrato!'));

pedalsArray.push(new Pedal ("Strymon El Capistan", "Strymon", "dTape Echo", 'http://www.effectsdatabase.com/model/strymon/elcapistan', 'img/pedals/StrymonElCapistan.png', 'El Capistan provides three different tape machine types in one, each with three unique modes. With ten parameters to tweak, you get extensive control over tape quality, machine health and tone shaping. Go from the sound of a pristine, studio-quality tape machine to the heavily fluctuating sound of a machine in need of service. Get the full bodied sound of fresh tape all the way to the gnarled qualities of worn out tape. Because it\'s DSP driven, you get a range of tape experiences unattainable with a traditional tape machine. All of this without the headaches of tape machine maintenance and repair!'));

pedalsArray.push(new Pedal ("Diamond Compressor", "Diamond", "Compressor", 'http://www.effectsdatabase.com/model/diamond/compressor', 'img/pedals/DiamondCompressor.png', 'The Diamond Compressor is our take on a "guitar channel" - a dynamics and tone shaping tool for live and studio use - with low-noise, ultra-linear signal buffering, smooth opto-based compression, and a versatile tilt EQ that musically shifts overall frequency balance.'));

pedalsArray.push(new Pedal ("Klon Centaur", "Klon", "Overdrive", 'http://www.effectsdatabase.com/model/klon/centaur', 'img/pedals/KlonCentaur.png', 'The legend of the Klon Centaur, which debuted in the mid-\'90s, has taken on a life of its own as one of the most collectible effects pedals of all time. Its ground-breaking transparent overdrive circuit, its use by such players as John Mayer, Nels Cline and Joe Perry (to name just a few) and its relative scarcity on the used market have propelled prices to unprecedented levels. Builder Bill Finnegan has made Klons with both gold and silver casings as well as with an without the Centaur logo (commonly referred to as Horsie or Non-Horsie models). The circuits on all these editions are all the same, but the "Horsie" models are a bit rarer so command slightly higher values.'));

pedalsArray.push(new Pedal ("Empress Reverb", "Empress", "Reverb", 'http://www.effectsdatabase.com/model/empress/reverb', 'img/pedals/EmpressReverb.png', 'Realistic simulations of spaces, as well as never-before-heard surreal ambiances are represented with stunning sound quality. Sporting  ins and outs, a small footprint and all the controls at your finger-tips, it strikes the perfect balance of control and ease of use, avoiding laborious menus. Presets, the versatile control port, and MIDI open up a world of possibilities for live performances. Whether you\'re looking for a classic spring, realistic room or new sonic flavors to expand your creativity, this pedal delivers. And....it\'s got a beer mode! '));

pedalsArray.push(new Pedal ("Boss TU-3 Tuner", 'Boss', 'Tuner', 'http://www.effectsdatabase.com/model/boss/compact/tu3', 'img/pedals/BossTU-2.png', 'The world’s top-selling stage tuner, the BOSS TU-2, evolves and improves with the debut of the new TU-3. Housed in a tank-tough BOSS stompbox body, the TU-3 features a smooth 21-segment LED meter with a High-Brightness mode that cuts through the harshest outdoor glare. Choose between Chromatic or Guitar/Bass tuning modes, and enjoy visual pinpoint tuning verification with the Accu-Pitch Sign function.'));

pedalsArray.push(new Pedal ("Sonic Research ST-300 Turbo Tuner", 'Sonic Research', 'Tuner', 'http://www.effectsdatabase.com/model/sonicresearch/st200', 'img/pedals/SonicResearchST300.png', 'The LED ring on the Turbo Tuner is a true stroboscope. The LEDs are driven directly by the analog input signal and electronically strobed, showing the actual stroboscopic effect between the input signal and internally generated frequency reference. This gives instant response and extreme accuracy.'));

pedalsArray.push(new Pedal ('Korg Pitchblack Tuner', 'Korg', 'Tuner', 'http://www.effectsdatabase.com/model/korg/pitchblack/advance', 'img/pedals/KorgPitchblack.png', 'The Pitchblack Chromatic Pedal Tuner offers you high precision, advanced functionality, and sleek style to make it KORG\'s most advanced guitar/bass stompbox-style tuner yet. The Pitchblack tuner has a tough aluminum die-cast body that will endure hard use on the road or in the studio. The large LED meter and note name display with light-emitting surface is easy to read in any setting from daylight to stage light to no light.'));

pedalsArray.push(new Pedal ('TC Electronic Polytune', 'TC Electronic', 'Tuner', 'http://www.effectsdatabase.com/model/tcelectronic/polytune', 'img/pedals/TCElectronicPolytune.png', 'PolyTune is the epitome of what every tuning device should strive to be. Innovative, super fast, easy to read and most importantly, ultra-precise! Introduced in 2010, our proprietary PolyTune technology took the world by storm. No longer were musicians confined to plucking one string at a time to see if they were in tune. Now they could simply just strum all six strings and get an instant read-out of all strings at once, leaving more time for the thing that really matters, rockin\' out!'));

pedalsArray.push(new Pedal ('Analogman King Of Tone','Analogman', "Overdrive", 'http://www.effectsdatabase.com/model/analogman/kingoftone', 'img/pedals/AnalogmanKingOfTone.png', 'In the realm of overdrives, the King wears purple. The Analogman King of Tone takes any rig into pure, overdriven tube territory, perfect for classic rock, shoegaze, and blues. As a company, Analogman keeps production numbers low which has resulted in a many months long waiting list for pedals like the KoT. This also means that used examples that come up for sale tend to sell very quickly, making the King of Tone one of the hottest used pedals on the market.'));

pedalsArray.push(new Pedal ('Proco RAT', 'Proco', 'Distortion', 'http://www.effectsdatabase.com/model/proco/rat', 'img/pedals/ProCoRat.png', 'The ProCo RAT ranks as one of the most widely used distortion pedals ever, a favorite of such disparate musicians as Jonny Greenwood, Nels Cline, Kurt Cobain and John Scofield. The ProCo RAT 2 emerged in 1988 and continues to be a popular pedalboard staple for both guitarists and bass players with its characteristic jagged gristle, courtesy of the legendary LM308 chip.'));

pedalsArray.push(new Pedal ('Boss VB-2 Vibrato', 'Boss', 'Vibrato', 'http://www.effectsdatabase.com/model/boss/compact/vb2', 'img/pedals/BossVB-2.png', 'Featuring the coveted "pink label" circuitry and design of vintage Boss pedals and built with simple controls over rate, depth and rise time, the Boss VB-2 Vibrato gives classic tremolo/vibrato sound with classic analog warmth. Able to go from a slight vibey hum to a full-on swollen wobble, the VB-2 sports enough texture to act as a natural companion for shoegaze, indie rock or garage.'));

pedalsArray.push(new Pedal ('Boss DC-2 Dimension C', 'Boss', 'Chorus', 'http://www.effectsdatabase.com/model/boss/compact/dc2', 'img/pedals/BossDC-2.png', 'This simple analog chorus pedal by boss, made popular in the \'80s, comes with the "Dimension" chorus effect. This effect creates a sense of thickness, depth, and width that creates a sort of 3D effect. This pedal was sold only from 1985 to 1989 and has been discontinued. The DC-2 is now rather rare, but one of these chorus effects pedals would be a fantastic addition to pedalboard.'));

pedalsArray.push(new Pedal ('Boss CE-2 Chorus Ensemble', 'Boss', 'Chorus', 'http://www.effectsdatabase.com/model/boss/compact/ce2', 'img/pedals/BossCE-2.png', 'Produced from 1979 - 1992, the Boss CE-2 Chorus was the original compact chorus pedal. Thanks to its extremely durable made-in-Japan construction, many original specimens are still around and sound great. If you want a classic no-frills chorus, this is the pedal to get.'));

pedalsArray.push(new Pedal ('Boss CE-1 Chorus Ensemble', 'Boss', 'Chorus', 'http://www.effectsdatabase.com/model/boss/ce1', 'img/pedals/BossCE-1.png', 'Featuring a die-hard chassis, Bucket Brigade Driver chip and independent chorus/vibrato effects, the Boss CE-1 Chorus Ensemble provides the endless warm, analog effect musicians have come to covet. Created in 1976 when Roland founded Boss and viewed as one of the progenitors of the chorus/vibrato effect, the CE-1 is a timeless original ideal for guitar, bass or keys.'));

pedalsArray.push(new Pedal ('Boss PH-1 Phaser', 'Boss', 'Phaser', 'http://www.effectsdatabase.com/model/boss/compact/ph1', 'img/pedals/BossPH-1.png', 'The Boss PH-1 was the original phase shifter made in Japan by Boss, with a simple two-knob control. It was succeeded by the PH-1R with added resonance control. '));

pedalsArray.push(new Pedal ('Boss DD-2 Digital Delay', 'Boss', 'Delay', 'http://www.effectsdatabase.com/model/boss/compact/dd2', 'img/pedals/BossDD-2.png', 'The Boss DD-2 Digital Delay was first made in 1983, offering the first digital delay jammed into a stompbox. Using the same integrated circuit chip as the Roland SDE-3000, the Boss DD-2 brought long and crystal-clear digital delay to the masses. It features mono input, mono/stereo output, and up to 800ms of delay time.'));

pedalsArray.push(new Pedal ('Boss DM-2 Analog Delay', 'Boss', 'Delay', 'http://www.effectsdatabase.com/model/boss/compact/dm2', 'img/pedals/BossDM-2.png', 'Vintage analog delay pedals have made a comeback in a big way and the iconic Boss DM-2 leads the pack. The three button layout of repeat rate, intensity, and echo have become familiar, but in the early \'80s, bringing this much delay to a compact pedal was a major step forward. You see a wide range of prices for DM-2 as the chips used in the circuit changed a bit during its production.'));

pedalsArray.push(new Pedal ('Electro-Harmonix Big Muff Pi', 'Electro-Harmonix', 'Fuzz', 'http://www.effectsdatabase.com/model/eh/bigmuffpi', 'img/pedals/EHXBigMuff.png', 'The NYC original. Hendrix and Santana were among the first to get a piece of the Pi, and for over 40 years the Big Muff Pi has been defining the sound of rock guitar. Revered by contemporary guitarists and rock legends for its rich, creamy, violin-like sustain, from Pink Floyd to The White Stripes, everyone still wants a piece of the Pi!'));

pedalsArray.push(new Pedal ('Electro-Harmonix Electric Mistress Flanger', 'Electro-Harmonix', 'Flanger', 'http://www.effectsdatabase.com/model/eh/electricmistress/deluxe', 'img/pedals/EHXElectricMistress.png', 'The Electro-Harmonix Deluxe Electric Mistress is a flanger pedal featuring a noise filter to eliminate some of the noise found on the original Electric Mistress. It offers knobs controlling the Color, Range, and Rate, as well as separate Dry and Wet outputs.'));

pedalsArray.push(new Pedal ('Electro-Harmonix Cathedral Reverb', 'Electro-Harmonix', 'Reverb', 'http://www.effectsdatabase.com/model/eh/xo/cathedral', 'img/pedals/EHXCathedral.png', 'The versatile Electro-Harmonix Cathedral Stereo Reverb is a dream machine for the guitarist looking for limitless reverb options. Featuring eight programmable reverb modes (including Room, Plate and Grail Spring), a damping/tone knob for fine-sculpting, and built-in tap tempo, the Cathedral gives you options from the original Fender tweed reverb sound to the Boss RV-5.'));

pedalsArray.push(new Pedal ('Electro-Harmonix POG', 'Electro-Harmonix', 'Octaver', 'http://www.effectsdatabase.com/model/eh/pog', 'img/pedals/EHXPOG.png', 'This is the original POG by Electro-Harmonix, the octave pedal that gave birth to the POG 2 and the POG Nano. With the original POG, you can add up to two octaves up or one octave down to your signal and blend them together to your taste with each voice\'s separate volume control. An added lowpass filter with switchable resonance gives you even more control over the tone and voicing you get from the POG.'));

pedalsArray.push(new Pedal ('Electro-Harmonix Stereo Pulsar', 'Electro-Harmonix', 'Tremolo', 'http://www.effectsdatabase.com/model/eh/xo/pulsar', 'img/pedals/EHXStereoPulsar.png', 'The Stereo Pulsar is a compact, versatile unit aimed at emulating the analog tremolo and vibrato sounds of the 60s and 70s. The pedal, featuring a Wave Form switch for toggling between triangle and square wave forms and a Wave Shape knob to modify the pulse of the effect, is capable of everything from vintage tremolo and vibrato to experimental sounds.'));

pedalsArray.push(new Pedal ('Electro-Harmonix Memory Boy', 'Electro-Harmonix', 'Delay', 'http://www.effectsdatabase.com/model/eh/xo/memoryboy', 'img/pedals/EHXMemoryBoy.png', 'When the classic Memory Man is too big and too expensive of an option, the Memory Boy comes through in the clutch. Built with the same all-analog delay and feedback as the Memory Man, the Memory Boy boasts 550ms of delay time, chorus and vibrato modulation rates and square or triangle modulation forms, and a more compact pedal for maximizing pedalboard space.'));

pedalsArray.push(new Pedal ('EarthQuaker Devices Hoof-Reaper Fuzz', 'EarthQuaker Devices', 'Fuzz', 'http://www.effectsdatabase.com/model/earthquaker/hoofreaper', 'img/pedals/EQDHoofReaper.png', 'The EarthQuaker Devices Hoof Reaper is an octave fuzz that combines the Hoof and Tone Reaper pedals into one enclosure. You can use the Hoof, Reaper and octave-up circuits all independently, or in any combination for an all-out aggressive fuzz fest.'));

pedalsArray.push(new Pedal ('EarthQuaker Devices Transmisser Reverb', 'EarthQuaker Devices', 'Reverb', 'http://www.effectsdatabase.com/model/earthquaker/transmisser', 'img/pedals/EQDTransmisser.png', 'The EarthQuaker Devices Transmisser Resonant Reverberator isn\'t so much a reverb pedal as it is an entire soundscape galaxy in a box. It features a three-knob reverb control section with parameters for decay (tail length), freq (low pass filter frequency), and darkness (reverberated overtones) along with a three-knob modulation section with controls for rate (modulation speed), warp (modulation depth and length), and mix. Filling the room with enormous, lush digital reverb that\'s as tweakable as the universe is big, this pedal\'s added expression jack will have any player spending hours exploring deep space.'));

pedalsArray.push(new Pedal ('EarthQuaker Devices Sea Machine', 'EarthQuaker Devices', 'Chorus', 'http://www.effectsdatabase.com/model/earthquaker/seamachine', 'img/pedals/EQDSeamachine.png', 'Rumbling out of the depths and echoing the land throughout, the EarthQuaker Devices Sea Machine is a chorus beast of many talents. Featuring a three-knob digital delay and a three-knob LFO in one unit, the many effects tentacles of the Sea Machine are perfect for post-rock, shoegaze, and indie.'));

pedalsArray.push(new Pedal ('EarthQuaker Devices Avalanche Run Delay/Reverb', 'EarthQuaker Devices', 'Delay', 'http://www.effectsdatabase.com/model/earthquaker/avalancherun', 'img/pedals/EQDAvalancheRun.png', 'Just as a Swiss army knife is a necessity when scaling the Alps, the EarthQuaker Devices Avalanche Run Stereo Delay and Reverb Pedal is an essential multi-function tool for carving up and down your own sonic mountains. Combining a delay section built with up to three total seconds of delay time, six delay modes, and a tap tempo along with Earthquaker\'s first DSP-powered plate-style reverb section, this multi-function mammoth is designed for summoning the most expansive of soundscapes. An added three-way switch allows for reverse delay and swell reverb modes, rounding out this box of sound which cascades beautifully into psychedelia, ambient, and post-rock environments.'));

pedalsArray.push(new Pedal ('EarthQuaker Devices Afterneath Reverb', 'EarthQuaker Devices', 'Reverb', 'http://www.effectsdatabase.com/model/earthquaker/afterneath', 'img/pedals/EQDAfterneath.png', 'There are plenty of reverb pedals out there, but none quite like the EarthQuaker Devices Afterneath. Somewhere in between an ethereal, cavernous reverb and ensconcing swarm of delay, the Afterneath opens up sounds literally never heard before while maintaining a familiar, if haunting, feel.'));

pedalsArray.push(new Pedal ('Strymon DIG Dual Digital Delay', 'Strymon', 'Delay', 'http://www.effectsdatabase.com/model/strymon/dig', 'img/pedals/StrymonDig.png', 'Effortlessly create your own world of intricate and synchronized echoes, along with hypnotic and atmospheric repeats that blur the line between delay and reverb. Stretch your sonic horizons with five musically satisfying rhythmic subdivisions and three dual delay routing options. Go from syncopated, pulsating delay patterns, to evocative, spaced-out echo'));

pedalsArray.push(new Pedal ('Strymon Blue Sky Reverb', 'Strymon', 'Reverb', 'http://www.effectsdatabase.com/model/strymon/bluesky', 'img/pedals/StrymonBlueSky.png', 'With our blueSky reverb, we have applied the same philosophy as our dBucket pedals. We\'ve taken a super powerful SHARC DSP and dedicated it to doing one thing only … the best reverb ever. Since the entire DSP is dedicated only to doing powerful reverbs, and believe us, we squeeze every last drop of juice, the reverbs are lush and beautiful. Whether you\'re a classic spring reverb fan or more of a studio rack aficionado, you\'ll find your mojo here. The blueSky would be equally at home on top of a mixer or in front of a tube amp. We\'ve even thrown in a plate, unusual in a pedal form factor but extremely useful, versatile and unique sounding. A full pre-delay and damping section provide deep reverb tone shaping. Add to that mod and shimmer modes and you\'ll have unending fun.'));

pedalsArray.push(new Pedal ('Strymon Flint Reverb/Tremolo', 'Strymon', 'Reverb', 'http://www.effectsdatabase.com/model/strymon/flint', 'img/pedals/StrymonFlint.png', 'The magical combination of tremolo and reverb is the earliest example of a perfect guitar effects marriage. First pioneered within historic amplifiers of the 1960s, this harmonious coexistence has made it’s way onto countless records and performances—from early surf, swampy bayou blues, spaghetti westerns, film noir soundtracks, to modern day indie rock. There are certain things in life that just belong together—the blend of tremolo and reverb create the perfect pair.'));

pedalsArray.push(new Pedal('Strymon Timeline', 'Strymon', 'Delay', 'http://www.effectsdatabase.com/model/strymon/timeline', 'img/pedals/StrymonTimeline.png', 'TimeLine provides you with twelve different delay machines, each with extensive control over sonic character and feel. Tweak to your hearts content and save up to 200 presets of your favorite sounds. Go from crisp and clear, studio-quality digital delays all the way to the saturated and fluctuating sounds of tape delay machines. Get warm and fuzzy analog style repeats all the way to shimmery, sparkling, and crystalline ice delays.'));

pedalsArray.push(new Pedal('Fairfield Circuitry Meet Maude LO-FI Analog Delay', 'Fairfield Circuitry', 'Delay', 'http://www.effectsdatabase.com/model/fairfield/meetmaude', 'img/pedals/FairfieldCircuitryMeetMaude.png', 'Imparting a dark and tape-like quality to your sound, this analogue delay offers a rich and distinct character for you to wallow in luxury, self-righteousness and filth.  Using the tone and feedback controls, you can shape your repeats to be much more than simple reproductions of the input. Play right on the threshold of feedback, which you can mold as a low thundering growl or screeching wail, or let your echo slowly die out as the dynamic output filter gets darker every repeat. A random delay time modulation adds a true tape feel to the delay, like a reel-to-reel motor spinning not quite perfectly. Full CV capabilities allow you to control delay time and/or feedback with any external source, like an expression pedal.'));

pedalsArray.push(new Pedal('Fairfield Circuitry Randy\'s Revenge Ring Modulator', 'Fairfield Circuitry', 'Ring Modulator', 'http://www.effectsdatabase.com/model/fairfield/randysrevenge', 'img/pedals/FairfieldCircuitryRandysRevenge.png', 'At its finest, in a considerably small package, powered by your typical 9V power supply, all analogue, hand stamped, pure sine wave oscillator, low-pass filtered with a touch of class and apparently musical. These are the requirements of warp speed space travel; a regular occurrence when dealing with Randy\'s hardware. The lower oscillator frequencies create rich trem/vibe effects, excruciatingly slow or chopped up rhythmic flavours. As the frequency goes up, thick bells, tuned intervals, low-fidelity synth-like effects are only the beginning. Experimenting with the low-pass filter cutoff frequency and the dry/wet mix will yield tones as strange or subtle as desired.'));

pedalsArray.push(new Pedal('Fairfield Circuitry Shallow Water K-Field Modulator', 'Fairfield Circuitry', 'Modulation', 'http://www.effectsdatabase.com/model/fairfield/shallowwater', 'img/pedals/FairfieldCircuitryShallowWater.png', 'Poolside conversations while staring at your own reflection. The depths of which shall never be known, at least not for another couple thousand years. So it goes. Before the reflection, is the experience. Before phenomena, or even noumena, is that which is undefinable. K-field (Simulation mathematics), an undefined, two-dimensional, non-linear field where past and future forces interact at irregular intervals. Shallow Water generates this k-field by randomly modulating a short time delay to create unexpected shifts in pitch. The result is this non cyclical vibrato/chorus/flanger-type thing favouring old tape flavours. The water is shallow on this side of the pool. Do not dive and you will not drown.'));

pedalsArray.push(new Pedal('Fairfield Circuitry Barbershop Overdrive', 'Fairfield Circuitry', 'Overdrive', 'http://www.effectsdatabase.com/model/fairfield/barbershop', 'img/pedals/FairfieldCircuitryBarbershop.png', 'Represent the new millenia with this brand new take on our coveted Barbershop. Have you ever sat in a barber\'s chair wishing your tone was as slick as your freshly shaved upper lip? With the Barbershop Overdrive on your pedalboard, you could keep your moustache and sound good doing it. Less is more with this simple, original design. Handmade from JFETs matched to specs, this versatile pedal will treat your pickups with the respect they deserve. In return, they’ll thank you with some of them sweet tones.'));

pedalsArray.push(new Pedal('Zvex Fuzz Factory', 'Zvex', 'Fuzz', 'http://www.effectsdatabase.com/model/zvex/fuzzfactory', 'img/pedals/ZvexFuzzFactory.png', 'Packed with knobs that let you control everything from tight, radically fuzzy sounds that gate off instantly when you stop playing, to intermodulating oscillations that fight for control of your guitar as your notes decay, to shortwave radio sounds, ripping velcro and octave-like fuzz.'));

pedalsArray.push(new Pedal('Zvex Wooly Mammoth Fuzz', 'Zvex', 'Fuzz', 'http://www.effectsdatabase.com/model/zvex/woollymammoth', 'img/pedals/ZvexWoolyMammoth.png', 'Designed for bass, a favorite for guitar, this incredibly sub-frequency-preserving unit will hold on to the lowest lows like no fuzz ever heard before. It features a gentle gate for silencing your instrument between notes or phrases, and has an EQ control that smoothly selects between more bass and more treble.'));

pedalsArray.push(new Pedal('Zvex Box Of Rock Distortion', 'Zvex', 'Distortion', 'http://www.effectsdatabase.com/model/zvex/boxofrock', 'img/pedals/ZvexBoxofRock.png', 'The Box of Rock simulates Zachary Vex’s favorite amp turned up all the way, a 1966 Marshall JTM45. The tone control adjusts brightness and there’s a high-headroom low-noise boost.'));

pedalsArray.push(new Pedal('Mr. Black Supermoon Reverb', 'Mr. Black', 'Reverb', 'http://www.effectsdatabase.com/model/mrblack/supermoon', 'img/pedals/MrBlackSupermoon.png', 'Imagine your sound, drifting boundlessly through the galaxy. A celestial body warps its trajectory as planetary gravitational pulls steer it into momentary orbit. Millions of microscopic echoes converge into fluid dark matter, then gently evaporate into the black abyss.'));

pedalsArray.push(new Pedal('Mr. Black Doublechorus', 'Mr. Black', 'Chorus', 'http://www.effectsdatabase.com/model/mrblack/doublechorus', 'img/pedals/MrBlackDoublechorus.png', 'The diamond ocean. Pure, gentle light fluidly undulates and glistens as the complex aural syrup flows and morphs into a stunning harmonic nectar. Smooth, natural and comfy. This is the DoubleChorus.'));

pedalsArray.push(new Pedal('Mr. Black Eterna Shimmer Reverb', 'Mr. Black', 'Reverb', 'http://www.effectsdatabase.com/model/mrblack/eterna', 'img/pedals/MrBlackEterna.png', 'Infinity and the magnitude of time. The breath of yesterday delicately caresses a shadow of tomorrow, as a touch of shimmering radiance soars across the endless sky. What once was dissolves into forever.Breathtaking, beautiful and inspirational, we bring forth: Eterna. A remarkable, lush and fully capable reverberator.'));

pedalsArray.push(new Pedal('Analogman Chorus', 'Analogman', 'Chorus', 'http://www.effectsdatabase.com/model/analogman/chorus', 'img/pedals/AnalogmanChorus.png', 'The Analogman Bi-Chorus Pedal doubles up on the warm, swirling goodness of one of the company\'s most popular effects in one chassis. Sporting a dual stomp switch design with two sets of controls for speed and depth, the Bi-Chorus\'s all-analog design and easy operation make it a surefire hit for anyone after classic choral tone with boutique construction and design.'));

pedalsArray.push(new Pedal('Analogman Bi-Comprossor Compressor', 'Analogman', 'Compressor', 'http://www.effectsdatabase.com/model/analogman/bicomprossor', 'img/pedals/AnalogmanBiComprossor.png', 'The Analogman Bi-Comprossor compressor pedal combines the Comprossor and Juicer pedals into a single enclosure for plenty of squish and variety. The singing sustain of the "ROSS" side mates up perfectly with the more extended sound and more intense compression of the "OS" side of the pedal, modeled after the vintage Dan Armstrong "Orange Squeezer" circuit.'));

pedalsArray.push(new Pedal('Analogman ARDX20 Analog Delay', 'Analogman', 'Delay', 'http://www.effectsdatabase.com/model/analogman/ardx20', 'img/pedals/AnalogmanARDX20.png', 'The ARDX20 features a custom built Bucket Brigade Delay circuit, hand-wired internal circuitry, and the first model features an ergonomically designed enclosure. Additionally, the pedal features controls for delay time, feedback, and level.'));

pedalsArray.push(new Pedal('Boss TR-2 Tremolo', 'Boss', 'Tremolo', 'http://www.effectsdatabase.com/model/boss/compact/tr2', 'img/pedals/BossTR-2.png', 'The BOSS TR-2 Tremolo is designed to provide guitarists with classic tremolo effects in an easy-to-use compact pedal. Dedicated "Wave," "Rate," and "Depth" knobs provide a multitude of effect possibilities.'));
// // pedalsArray.push (new Pedal ('', '', '', link, image, info));


// Artists
artistsArray.push(new Artist ("Kevin Parker", "(Tame Impala)", ["Boss DS-1 Distortion", "Electro-Harmonix Small Stone", "Boss BD-2 Blues Driver"], "img/artists/KevinParker.jpg", "Kevin Parker is an Australian singer, songwriter, multi-instrumentalist and record producer, best known for being the frontman and live guitarist of the Australian psychedelic rock band Tame Impala, for which he writes, records, and produces the music."));

artistsArray.push(new Artist ("Kurt Vile", "(Kurt Vile & The Violators)", ["Boss RV-3 Reverb/Delay"], "img/artists/KurtVile.jpg", "Kurt Vile is an American singer, songwriter, multi-instrumentalist and record producer. He is known for his solo work and as the former lead guitarist of rock band The War on Drugs. Both in the studio and during live performances, Vile is accompanied by his backing band, The Violators, which currently includes Jesse Trbovich (bass, guitar, saxophone), Rob Laakso (guitar, bass) and Kyle Spence (drums)."));

artistsArray.push(new Artist ("Ty Segall", "", ["Electro-Harmonix Small Stone"], "img/artists/TySegall.jpg", "Ty Segall is an American multi-instrumentalist, singer-songwriter and record producer. He is best known for his prolific solo career during which he has released nine studio albums, alongside various EPs and singles. Segall is also a member of the bands Fuzz, Broken Bat and GØGGS, and is a former member of The Traditional Fools, Epsilons, Party Fowl, Sic Alps, and The Perverts"));

artistsArray.push(new Artist ("Frank Zappa", "", ["MXR Phase 90", "Boss DS-1 Distortion"], "img/artists/FrankZappa.jpg", "Frank Vincent Zappa was an American musician, composer, activist and filmmaker. His work was characterized by nonconformity, free-form improvisation, sound experiments, musical virtuosity, and satire of American culture. In a career spanning more than 30 years, Zappa composed rock, pop, jazz, jazz fusion, orchestral and musique concrète works, and produced almost all of the 60-plus albums that he released with his band the Mothers of Invention and as a solo artist. Zappa also directed feature-length films and music videos, and designed album covers. He is considered one of the most innovative and stylistically diverse rock musicians of his era."));

artistsArray.push(new Artist ("Courtney Barnett", "", ["Boss BD-2 Blues Driver", "Zvex Fuzz Factory"], "img/artists/CourtneyBarnett.jpg", "Courtney Barnett is an Australian singer, songwriter, and musician. Known for her witty, rambling lyrics and deadpan singing style, Barnett attracted attention with the release of her debut EP, I've Got A Friend Called Emily Ferris. International interest from the UK and North American music press came with the release of The Double EP: A Sea of Split Peas in October 2013. At her well-received performances at the CMJ Music Marathon, Barnett was mentioned by both Rolling Stone and The New York Times as a standout performer."));

artistsArray.push(new Artist ("Chelsea Wolfe", "", ["Boss BD-2 Blues Driver", "Boss DS-1 Distortion"], "img/artists/ChelseaWolfe.jpg", "Chelsea Wolfe is an American singer-songwriter and musician. She has earned underground critical acclaim for her releases, The Grime and the Glow (2010) and Apokalypsis (2011), which blended elements of gothic rock and folk music, as well as her following albums, Pain Is Beauty (2013) and Abyss (2015), in which Wolfe incorporated elements of neofolk, electronic and heavy metal. Her music has been featured in promotional material for the 2017 Jaguar XE car as well as the television series Game of Thrones, Fear the Walking Dead and How to Get Away with Murder."));

artistsArray.push(new Artist ("Greta Kline", "(Frankie Cosmos)", ["Strymon Big Sky", "Electro-Harmonix Memory Boy"], "img/artists/FrankieCosmos.jpg", "Greta Kline, better known by her stage name Frankie Cosmos, is an American musician and singer-songwriter. She is known for her independent releases, inspired by Frank O'Hara's poetry, DIY ethics of K Records and the early 2000s New York City's anti-folk scene. Kline is also the former bass guitarist of the band Porches. She is the daughter of actors Kevin Kline and Phoebe Cates."));

artistsArray.push(new Artist ("Corin Tucker", "(Sleater-Kinney)", ["Boss GE-7 Equalizer"], "img/artists/CorinTucker.jpg", "Corin Tucker is an American singer, songwriter, and guitarist, best known for her work with rock band Sleater-Kinney. Prior to forming Sleater-Kinney, Tucker was a member of the indie rock group Heavens to Betsy. She has also released work under the name The Corin Tucker Band."));

artistsArray.push(new Artist ("Rob Crow", "(Pinback)", ["EarthQuaker Devices Sea Machine"], "img/artists/RobCrow.jpg", "Rob Crow, Jr. is an American singer and multi-instrumentalist from San Diego, California known for the long list of bands and projects he is associated with, mostly in the genres of indie rock and math rock. He is best known for his involvement with the bands Pinback (co-led by Zach Smith from Three Mile Pilot), Heavy Vegetable, Physics, Optiganally Yours and Thingy; in addition he has also led or leads the bands Advertising, Alpha Males, Altron Tube, Cthugha, Fantasy Mission Force, Goblin Cock, Holy Smokes, The Ladies, Other Men and Remote Action Sequence Project, as well as performing and releasing solo records under his own name and under the name Snotnose."));

artistsArray.push(new Artist ("Donald Glover", "(Childish Gambino)", ["Maestro FZ-1 Fuzz-Tone"], "img/artists/ChildishGambino.jpg", "Donald Glover is an American actor, writer, producer, director, comedian, rapper, DJ, singer, and songwriter. He performs as a stage artist under the stage name Childish Gambino, and as a disc jockey, he performs under the name mcDJ. After several self-released albums and mixtapes, Glover signed to Glassnote Records in 2011. He released his first album, Camp, on November 15, 2011 to generally positive reviews. His second studio album, Because the Internet, was released on December 10, 2013. Glover was nominated for two Grammy Awards in 2015, Best Rap Album for Because the Internet and Best Rap Performance for his single 3005. Glover's third album, Awaken, My Love!, was released on December 2, 2016, spawning the hit single Redbone, which peaked at number 12 on the Billboard Hot 100."));

artistsArray.push(new Artist("Kevin Shields", "(My Bloody Valentine)", ["Z. Vex Lo-Fi Loop Junky", "DigiTech Whammy DT", "Boss PN-2 Tremolo/Pan", "Fairfield Circuitry Randy's Revenge Ring Modulator", "Boss GE-7 Equalizer", "Strymon Big Sky", "DigiTech DigiDelay", "Boss BD-2 Blues Driver", "MXR Phase 90", "Electro-Harmonix Small Stone", "Boss RV-3 Reverb/Delay", "Boss DS-1 Distortion"], "img/artists/KevinShields.jpg", "Kevin Shields is an American-born Irish musician, singer-songwriter, composer and producer, best known as the vocalist and guitarist of the alternative rock band My Bloody Valentine. Shields performed in a number of small unsuccessful bands in Dublin, Ireland, as a teenager, before forming My Bloody Valentine with drummer Colm Ó Cíosóig in 1983. Although initially experiencing limited success, the band would later become extremely influential on the evolution of alternative rock with their two original studio albums Isn't Anything (1988) and Loveless (1991), both of which pioneered a subgenre known as shoegazing. Shields' texturised guitar sound and his experimentation with his guitars' tremolo systems resulted in the creation of the glide guitar technique, which became a recognisable aspect of My Bloody Valentine's sound, along with his meticulous production techniques."));

artistsArray.push(new Artist("Nels Cline", "(Wilco)", ["Analogman Bi-Comprossor Compressor", "Boss PH-1 Phaser", "Fairfield Circuitry Barbershop Overdrive"], "img/artists/NellsCline.jpg", "Nels Cline is an American guitarist and composer. He has been the guitarist for the band Wilco since 2004. He first came to prominence in the 1980s playing jazz, often in collaboration with his twin brother Alex Cline, a drummer. Since then, he has worked with a wide range of musicians in punk and alternative rock, notably Mike Watt and Thurston Moore. He also leads the groups the Nels Cline Singers and Nels Cline Trio."));

artistsArray.push(new Artist("Kurt Ballou", "(Converge)", ["Fairfield Circuitry Meet Maude LO-FI Analog Delay", "Mr. Black Doublechorus", "Zvex Fuzz Factory"], "img/artists/KurtBallou.jpg", "Kurt Ballou is an American musician and producer, best known as the guitarist from Massachusetts-based band Converge. Aside from his role in Converge, Ballou is a prolific producer, recording and producing out of his own GodCity Studio."));

artistsArray.push(new Artist("Johnny Marr", "(The Smiths)", ["Zvex Wooly Mammoth Fuzz", "EarthQuaker Devices Hoof-Reaper Fuzz", "TC Electronic Polytune", "Fairfield Circuitry Randy's Revenge Ring Modulator"], "img/artists/JohnnyMarr.jpg", "Johnny Marr is an English musician, songwriter and singer. Between 1982 and 1987 he was the guitarist and – with Morrissey – co-songwriter of The Smiths, an English rock band formed in Manchester. Marr has also been a member of Electronic, an alternative dance supergroup formed with Pet Shop Boys frontman Neil Tennant and New Order singer and guitarist Bernard Sumner; The The, an English musical and multimedia group led by singer/songwriter Matt Johnson; Modest Mouse, an American indie rock band formed in 1993 in Issaquah, Washington; and The Cribs, an English three-piece indie rock band originally from Wakefield, West Yorkshire. He has also worked as a prolific session musician. In 2013, he released a solo album titled The Messenger."));

artistsArray.push(new Artist("Ian MacKaye", "(Fugazi)", ["Strymon DIG Dual Digital Delay", "Empress Reverb", "Mr. Black Supermoon Reverb"], "img/artists/IanMacKaye.jpg", "Ian Thomas Garner MacKaye is an American singer, songwriter, guitarist, musician, record label owner and producer. Active since 1979, MacKaye is best known as the co-founder and owner of Dischord Records, a Washington, D.C.-based independent record label and the frontman of the influential hardcore punk band Minor Threat and the post-hardcore band Fugazi. MacKaye was also the frontman for the short-lived bands The Teen Idles, Embrace and Pailhead, a collaboration with the band Ministry. MacKaye is a member of The Evens, a two-piece indie rock group he formed with his wife Amy Farina in 2001. Along with his seminal band Minor Threat, he is credited with coining the term straight edge to describe a personal ideology that promotes independence by countering the popular appeal of drug and alcohol abuse, though MacKaye has stated that he did not intend to turn it into a movement."));

artistsArray.push(new Artist("Melina Duterte", "(Jay Som)", ["Mr. Black Eterna Shimmer Reverb", "Boss TU-3 Tuner", "Strymon El Capistan"], "img/artists/JaySom.jpg", "Jay Som is the musical project of the American, Oakland, California-based songwriter Melina Duterte. Her debut album, Turn Into, was released on Polyvinyl Records."));

artistsArray.push(new Artist("Martin Courtney", "(Real Estate)", ["Strymon Flint Reverb/Tremolo", "TC Electronic Polytune"], "img/artists/MartinCourtney.jpg", "Martin Courtney is an American musician and the frontman of the American indie rock band Real Estate. Courtney's most recent release is his first solo album, Many Moons."));

artistsArray.push(new Artist("Juan Mendez", "(Silent Servant)", ["Empress Reverb", "Klon Centaur"], "img/artists/SilentServant.jpg", "John Juan Mendez, who records as Silent Servant, is an American techno DJ and producer. Born in Central America, he was brought up in Los Angeles, where he grew up listening to The Smiths, The Cure, New Order, My Bloody Valentine and Sonic Youth; and started DJing at the age of 16. In 1999 he made contact with Regis, the founder of the Birmingham-based Downwards Records label, becoming a member of Regis's Sandwell District collective, with whom he released a series of singles throughout the 2000s."));

artistsArray.push(new Artist("Adrian Belew", "(King Crimson)", ["Klon Centaur", "MXR Phase 90", "Strymon Timeline"], "img/artists/AdrianBelew.jpg", "Adrian Belew is an American musician, songwriter, and record producer. A multi-instrumentalist primarily known as a guitarist and singer, Belew is noted for his unusual, impressionistic approach to guitar playing, which, rather than relying on standard instrumental tones, often resembles sound effects or noises made by animals and machines."));

artistsArray.push(new Artist("Aaron Dessner", "(The National)", ["Proco RAT", "Fairfield Circuitry Randy's Revenge Ring Modulator"], "img/artists/AaronDessner.jpg", "Aaron Brooking Dessner (born April 23, 1976) is an American songwriter, multi-instrumentalist and record producer. He is best known as a member of the rock band The National. Aaron writes the majority of the music for The National, collaborating on songs with singer Matt Berninger who writes their lyrics."));

artistsArray.push(new Artist("Tobin Sprout", "(Guided By Voices)", ["Fairfield Circuitry Meet Maude LO-FI Analog Delay", "Boss TU-3 Tuner"], "img/artists/TobinSprout.jpg", "Tobin Sprout is an American artist and musician. He is best known for his contributions as a member of indie rock group Guided by Voices."));

artistsArray.push(new Artist("Thurston Moore", "(Sonic Youth)", ["Boss CE-2 Chorus Ensemble", "Boss PN-2 Tremolo/Pan", "Boss TU-3 Tuner", "Boss RV-3 Reverb/Delay"], "img/artists/ThurstonMoore.jpg", "Thurston Moore is an American musician best known as a singer, songwriter and guitarist of Sonic Youth. He has also participated in many solo and group collaborations outside Sonic Youth, as well as running the Ecstatic Peace! record label. Moore was ranked 34th in Rolling Stone's 2004 edition of the 100 Greatest Guitarists of All Time. In May 2012, Spin published a staff-selected top 100 ranking Moore and his Sonic Youth bandmate Lee Ranaldo together on number 1."));

artistsArray.push(new Artist("Annie Clark", "(St. Vincent)", ["EarthQuaker Devices Avalanche Run Delay/Reverb", "Electro-Harmonix Memory Man", "Electro-Harmonix Stereo Pulsar", "Boss BD-2 Blues Driver"], "img/artists/StVincent.jpg", "Annie Clark, better known by her stage name St. Vincent, is an American musician, singer-songwriter, and multi-instrumentalist. After studying at Berklee College of Music for three years, she began her music career as a member of the Polyphonic Spree. Clark was also a member of Sufjan Stevens's touring band before forming her own band in 2006."));

artistsArray.push(new Artist("Michael Gira", "(Swans)", ["Electro-Harmonix Big Muff Pi", "Electro-Harmonix POG", "Klon Centaur", "Korg Pitchblack Tuner"], "img/artists/MichaelGira.jpg", "Michael Gira, is an American singer-songwriter, musician, author and artist. He is the main force behind the New York City musical group Swans and fronted Angels of Light. He is also the founder of Young God Records."));

artistsArray.push(new Artist("Doug Martsch", "(Built to Spill)", ["Zvex Box Of Rock Distortion", "Boss TU-3 Tuner", "Analogman Chorus"], "img/artists/DougMartsch.jpg", "Doug Martsch is an American singer and musician. He is best known for his distinctive vocals and guitar playing style in the band Built to Spill."));

artistsArray.push(new Artist ("Ryan Adams", "(Whiskeytown)", ["Analogman ARDX20 Analog Delay", "Analogman King Of Tone", "Boss DD-2 Digital Delay", "EarthQuaker Devices Transmisser Reverb"], "img/artists/RyanAdams.jpg", "Ryan Adams (born November 5, 1974) is an American singer-songwriter, musician, multi-instrumentalist, record producer and poet. He is best known for his solo career, during which he has released sixteen albums, and as a former member of alternative country band Whiskeytown, with whom he recorded three studio albums."));

artistsArray.push(new Artist ("Thom Yorke", "(Radiohead)", ["Fairfield Circuitry Shallow Water K-Field Modulator"], "img/artists/ThomYorke.jpg", "Thomas Edward Yorke is an English musician and composer best known as the singer and principal songwriter of the alternative rock band Radiohead. A multi-instrumentalist, Yorke mainly plays guitar and piano and works extensively with synthesisers, sequencers and programming. He is known for his falsetto vocals; in 2008, Rolling Stone ranked him the 66th greatest singer of all time."));

artistsArray.push(new Artist ("Rachel Goswell", "(Slowdive)", ["Electro-Harmonix POG", "Fairfield Circuitry Shallow Water K-Field Modulator", "Mr. Black Eterna Shimmer Reverb"], "img/artists/RachelGoswell.jpg", "Rachel Goswell is an English singer-songwriter and musician who rose to prominence as vocalist and guitarist of the shoegaze band Slowdive, which formed in 1989. Goswell, along with Neil Halstead, Ian McCutcheon and former Chapterhouse member Simon Rowe became Mojave 3 when Slowdive transitioned to a more country/folk rock style. She released a solo album in 2004, titled Waves Are Universal on 4AD Records."));

artistsArray.push(new Artist ("Matt Pike", "(Sleep)", ["Strymon Blue Sky Reverb", "Electro-Harmonix Electric Mistress Flanger", "EarthQuaker Devices Avalanche Run Delay/Reverb", "Boss VB-2 Vibrato"], "img/artists/MattPike.jpg", "Matt Pike is an American metal musician best known as the guitarist of the influential doom metal band Sleep and the frontman of High on Fire. He is well known in the metal scene for never wearing a shirt during live performances."));

artistsArray.push(new Artist ("Buzz Osborne", "(Melvins)", ["Analogman Chorus", "Boss CE-2 Chorus Ensemble", "Boss DS-1 Distortion", "Boss TR-2 Tremolo", "EarthQuaker Devices Hoof-Reaper Fuzz"], "img/artists/BuzzOsborne.jpg", "Buzz Osborne, also known as King Buzzo, is an American guitarist, vocalist and songwriter. He is a founding member of the Melvins, as well as Fantômas and Venomous Concept."));

artistsArray.push(new Artist("Jamie Roberts", "(Blawan)", ["Klon Centaur", "Fairfield Circuitry Barbershop Overdrive", "Boss VB-2 Vibrato", "Electro-Harmonix Big Muff Pi"], "img/artists/Blawan.png", "Jamie Roberts, better known by his stage name Blawan, is an English DJ and record producer from South Yorkshire. He is best known for his track Why They Hide Their Bodies Under My Garage and his remix of the Radiohead track Bloom, which appeared on their album TKOL RMX 1234567. He came to prominence with his debut release Fram on the label Hessle Audio and signed to R&S Records. He also started a hardware-only projecti Karenn, with fellow R&S producer Pariah. Credited as one of the artists spearheading the industrial techno revival, Blawan's post-dubstep sounds and raw, techno-influenced beats has earned him praise from DJs such as Surgeon and the Black Dog. According to Philip Sherburne of Pitchfork, his music is full of jackhammering kicks, splintered wooden percussion, and short-fuse breakdowns."));

artistsArray.push(new Artist("Autechre", "", ["DigiTech Whammy DT", "Electro-Harmonix POG", "Fairfield Circuitry Meet Maude LO-FI Analog Delay", "Klon Centaur", "Boss CE-1 Chorus Ensemble"], "img/artists/Autechre.jpg", "Autechre are an English electronic music duo consisting of Rob Brown and Sean Booth, both from Rochdale, Greater Manchester, England. Formed in 1987, they are one of the most popular acts signed to the Warp Records label, known for its pioneering electronic music and through which all of Autechre's albums have been released. The music of Autechre has exhibited a gradual shift in aesthetic throughout their career, from their earlier work with clear roots in techno, electro, and hip hop to later albums that are often considered experimental in nature, featuring complex patterns of rhythm and subdued melodies. While heavily associated with the 1990s electronic genre later known as intelligent dance music (IDM), Booth and Brown are ambivalent about relating their sound to established genres. Autechre have also recorded under various pseudonyms. One of the duo's earliest recordings was a 12 single released under the alias Lego Feet in 1991 by Skam Records. The majority of releases by the umbrella project Gescom have been attributed to Booth and Brown, among other artists, with one critic stating that Autechre create some of the most complicated music you could ever hope to drown in and are recognized as pioneers in experimental music"));

artistsArray.push(new Artist("Richard James", "(Aphex Twin)", ["Boss DC-2 Dimension C", "Analogman ARDX20 Analog Delay", "Strymon Big Sky"], "img/artists/AphexTwin.jpg", "Richard James, best known by his recording alias Aphex Twin, is an English electronic musician, known for his influential and idiosyncratic work in styles such as ambient techno and IDM in the 1990s, for which he received widespread critical acclaim. He is also the co-founder of Rephlex Records with Grant Wilson-Claridge. Initially releasing acid techno music under aliases such as AFX and Polygon Window, James first received widespread acclaim for his 1992 album Selected Ambient Works 85-92. He rose to mainstream popularity with his 1997 EP Come to Daddy and his 1999 single Windowlicker. After a period of relative inactivity under the moniker following his 2001 album Drukqs, James returned in 2014 with a new album titled Syro, which won him a Grammy Award for Best Dance/Electronic Album."));

artistsArray.push(new Artist("Demdike Stare", "", ["Zvex Box Of Rock Distortion", "Strymon Flint Reverb/Tremolo", "Boss TR-2 Tremolo", "Boss DC-2 Dimension C", "Boss CE-1 Chorus Ensemble"], "img/artists/DemdikeStare.jpg", "Demdike Stare was formed in 2009 by Sean Canty and Miles Whittaker, both of whom were already well-established in Manchester's music scene. Whittaker is also known for his work in Pendle Coven and under his solo projects, MLZ, Daughter of the Industrial Revolution, Suum Cuique, and Miles. Canty is a respected DJ and also known for his involvement with Finders Keepers, an archival label based in Manchester and London."));

artistsArray.push(new Artist("Zak Khutoretsky", "(DVS1)", ["Analogman Bi-Comprossor Compressor", "Analogman Chorus", "Boss PH-1 Phaser", "EarthQuaker Devices Afterneath Reverb", "EarthQuaker Devices Transmisser Reverb", "Electro-Harmonix Big Muff Pi"], "img/artists/DVS1.jpg", "Zak Khutoretsky, also known as DVS1 is an American DJ and techno producer based out of Minneapolis. He has toured extensively, headlined international music festivals such as Decibel and Dekmantel, and played along the likes of techno pioneers Jeff Mills and Robert Hood."));

artistsArray.push(new Artist("Jeff Mills", "", ["Strymon Flint Reverb/Tremolo", "TC Electronic Polytune", "Strymon Timeline", "Strymon El Capistan", "Strymon DIG Dual Digital Delay"], "img/artists/JeffMills.jpg", "Jeff Mills is an American DJ, record producer and composer Mills is a founder of Underground Resistance, a techno collective formed with 'Mad' Mike Banks in the late 1980s. While Mills left the group to explore his own ventures, the collective continues to be a mainstay of Detroit's music scene. He went by The Wizard, a moniker he used since the early 1980s, retiring the name in 2013."));

artistsArray.push(new Artist("David Letellier", "(Kangding Ray)", ["Analogman ARDX20 Analog Delay", "Analogman Bi-Comprossor Compressor", "Analogman King Of Tone", "Boss CE-1 Chorus Ensemble"], "img/artists/KangdingRay.jpg", "Kangding Ray is David Letellier. Born in France and based in Berlin, Letellier evolved as a guitarist and drummer in various bands whose influences ranged from rock and pop to jazz before moving into electronic music. His music is situated at the crossroads of digitality and sensitivity. In his compositions, melodies combine with machine sounds in a subtle and rythmic suite. He skillfully integrates guitar loops, bass lines, residual noise, acoustic instruments and digital anomalies to create a textured soundscape. This valuable musical openness is reflected in his particular way of merging beats and emotions into slowly evolving compositions. His live performances are known for being intense moments of musical experimentations, while he samples voices, and mix layers of different instruments, including analog machines, laptops, midi pads and guitar. Kangding Ray sometimes invites other musicians to join him on stage, for playing keyboard, guitar, or turning the knobs on a machine."));

artistsArray.push(new Artist("Strahil Velchev", "(Kink)", ["Boss PN-2 Tremolo/Pan", "Diamond Compressor", "EarthQuaker Devices Afterneath Reverb", "Mr. Black Doublechorus", "Korg Pitchblack Tuner"], "img/artists/Kink.jpg", "A house, techno, broken beat, experimental producer, and dj based in Sofia, Bulgaria."));

artistsArray.push(new Artist("Danny Wolfers", "(Legowelt)", ["Mr. Black Supermoon Reverb", "MXR Phase 90", "Fairfield Circuitry Shallow Water K-Field Modulator"], "img/artists/Legowelt.jpg", "Legowelt is a Dutch electronic musician who describes his musical style as a hybrid form of slam jack combined with deep Chicago house, romantic ghetto technofunk and EuroHorror Soundtrack. The majority of his work under the alias has been released on the Dutch label Bunker in addition to a number of compilation appearances, including the successful Disco Rout in 2002."));

artistsArray.push(new Artist("Lee Gamble", "", ["Mr. Black Supermoon Reverb", "Zvex Lo-Fi Loop Junky", "Strymon Big Sky"], "img/artists/LeeGamble.jpg", "Initially from Birmingham, the London-based producer and DJ Lee Gamble first emerged from the jungle scene, DJ'ing on pirate radio stations and as a founding member of the CYRK collective. He took his early influences and developed his sound productions with an experimental twist"));

artistsArray.push(new Artist("Richie Hawtin", "", ["Zvex Lo-Fi Loop Junky", "Maestro FZ-1 Fuzz-Tone", "Strymon DIG Dual Digital Delay"], "img/artists/RichieHawtin.jpg", "Richie Hawtin is a Canadian electronic musician and DJ and three-time DJ Awards winner. He was an influential part of Detroit techno's second wave of artists in the early 1990s and has been a leading exponent of minimal techno since the mid-1990s. He is best known for his work under the alias Plastikman and for his ENTER. events in Ibiza and around the world. Hawtin is known for DJing techno sets making use of laptop computers and digital mixing equipment."));

artistsArray.push(new Artist("Nicolas Jaar", "", ["Korg Pitchblack Tuner", "Maestro FZ-1 Fuzz-Tone", "Proco RAT", "Boss TR-2 Tremolo"], "img/artists/NicolasJaar.jpg", "Nicolas Jaar is a Chilean-American composer and recording artist based in New York. Among his notable works are the albums Space Is Only Noise (2011), Pomegranates (2015) and Sirens (2016). He is known in the club world for his various dance 12 EPs he put out from 2008 to 2011. Since his first album, he has embarked on more explorative directions, performing a five-hour improvisational concert at PS1, releasing a large volume of experimental recordings through his label Other People. In 2015, Jaar scored Dheepan by director Jacques Audiard. Jaar is also half of the band Darkside."));

artistsArray.push(new Artist("Minilogue", "", ["Diamond Compressor", "Boss GE-7 Equalizer", "TC Electronic Polytune", "EarthQuaker Devices Transmisser Reverb"], "img/artists/Minilogue.jpg", "Minilogue was a Scandinavian melodic Techno music group consisting of Sebastian Mullaert and Marcus Henriksson. The name is a blend of minimal (the musical style) and dialogue, which refers to music as a form of communication. Beside their music production as Minilogue, they were both involved in the group Son Kite, Trimatic and IMPS, Since 2014, their collaboration as Minilogue has ended."));

artistsArray.push(new Artist("Peter Van Hoesen", "", ["Boss DD-2 Digital Delay", "Electro-Harmonix Cathedral Reverb", "EarthQuaker Devices Hoof-Reaper Fuzz", "Strymon El Capistan", "Proco RAT"], "img/artists/PeterVanHoesen.jpg", "Belgium's Peter Van Hoesen has never been that typical techno artist. Although considered as one of the genre's tastemakers he is someone who sculpts sounds for many different environments - the club, the home, the gallery or museum. He does so with a true sense of personality. On his own label Time to Express he releases textural compositions and he also records to great acclaim as Sendai alongside Yves de Mey. In performance terms, Peter lays down dark and arresting techno sets as well as captivating, story-telling live musical journeys. Peter currently resides in Berlin."));

artistsArray.push(new Artist("Raime", "", ["Proco RAT", "Strymon Timeline", "Sonic Research ST-300 Turbo Tuner", "Zvex Fuzz Factory", "Analogman Chorus"], "img/artists/Raime.jpg", "Raime is the London-based duo of Joe Andrews and Tom Halstead. They were responsible for the first two 12″ releases on Blackest Ever Black, back in the Autumn/Winter of 2010. But their first contribution to the label came even earlier, in the shape of their You Can’t Hide Your Headcrack mix, first released as a free, limited edition CD-R in Summer 2010. This idiosyncratic selection not only provided a context for their own work, but also proved influential, helping to stimulate wider, renewed interest in late ’70s and early ’80s iconoclasts like Ike Yard, Rema-Rema and German Shepherds."));

artistsArray.push(new Artist("Karl O'Connor", "(Regis)", ["Analogman Chorus", "DigiTech Whammy DT", "Strymon Blue Sky Reverb", "Mr. Black Eterna Shimmer Reverb"], "img/artists/Regis.jpg", "Regis is a British techno musician and record label owner. As co-founder of Downwards Records, O'Connor, alongside his label-mate Surgeon (aka Anthony Child), was one of the originators of the Birmingham sound, forging a sound that blended Chicago house with darker European electronics. Although initially his plan was to take a director of operations role (he cites Daniel Miller has his greatest influence), O'Connor and his label partner Peter Sutton (aka Female) found it increasingly difficult to find artists to share their vision, and to this day still work with the same core artists."));

artistsArray.push(new Artist("Voiski", "", ["Zvex Fuzz Factory", "MXR Phase 90", "Strymon Timeline", "Zvex Box Of Rock Distortion", "Maestro FZ-1 Fuzz-Tone"], "img/artists/Voiski.jpg", "For several years, Voiski has struck a singular path in techno music, oscillating between experimental projects and the production of tracks marked by his signature style. Within the large spectrum of his interventions, Voiski stands out for rigor of his infinitely repetitive loops. These, combined with acerbic drum beats, construct an analog excitation that carries his music to the heart of futurist and sentimental layerings. From his proximity to the intriguing electrodance duo Kartei to the experimental label Silicate Musique which he codirects, the amplitude of his activity bears witness to the authenticity of his engagement, one which reconciles the demands of dance floor techno with the construction of an introspective vision."));

artistsArray.push(new Artist("Louis Cachet", "(Varg Vikernes)", ["Boss CE-2 Chorus Ensemble", "Strymon El Capistan", "EarthQuaker Devices Avalanche Run Delay/Reverb"], "img/artists/VargVikernes.jpg", "Varg Vikernes, is a Norwegian musician and writer. In 1991, he founded the one-man music project Burzum, which is considered one of the most influential black metal acts."));

artistsArray.push(new Artist("Michel Amato", "(The Hacker)", ["EarthQuaker Devices Avalanche Run Delay/Reverb", "Diamond Compressor", "Fairfield Circuitry Meet Maude LO-FI Analog Delay", "Korg Pitchblack Tuner", "Fairfield Circuitry Barbershop Overdrive"], "img/artists/TheHacker.jpg", "The Hacker, is a French electroclash and techno producer who has worked extensively with Miss Kittin. His work has been influenced by electro artists like Kraftwerk, new wave artists such as The Cure and Depeche Mode, as well as the French rave scene of the early 1990s. His artist name comes from the Jeff Mills' track of the same name."));

artistsArray.push(new Artist("Morphology", "", ["Fairfield Circuitry Barbershop Overdrive", "TC Electronic Polytune", "Mr. Black Doublechorus", "Zvex Wooly Mammoth Fuzz", "Fairfield Circuitry Shallow Water K-Field Modulator", "Mr. Black Eterna Shimmer Reverb"], "img/artists/Morphology.jpg", "‘Morphology’, a new collaboration from Finland consisting of Michael Diekmann who records under the alias CRC and Matti Turunen otherwise known as Näköradiomies. Morphology fuses early electro sounds with haunting melodies to create a deep blend of atmospheric future funk."));

artistsArray.push(new Artist("Daniel Segerstad", "(Sync 24)", ["Mr. Black Eterna Shimmer Reverb", "Boss VB-2 Vibrato", "Boss TU-3 Tuner", "Diamond Compressor", "EarthQuaker Devices Afterneath Reverb"], "img/artists/Sync24.jpg", "SYNC24 is Daniel Segerstad (born Ringström) from the already famous Carbon Based Lifeforms. Started in early years experimenting with tape recorders and simple music players on the Commodore 64 and gradually upgrading equipment and techniques. Having Carbon Based Lifeforms as his main focus with a couple of projects on the side, there's always room for personal reflections. SYNC24 is the result of sudden impulse of inspiration, late nights without interference from others."));

artistsArray.push(new Artist("Drexciya", "", ["EarthQuaker Devices Afterneath Reverb", "Boss RV-3 Reverb/Delay", "Diamond Compressor", "EarthQuaker Devices Avalanche Run Delay/Reverb", "EarthQuaker Devices Transmisser Reverb"], "img/artists/Drexciya.jpg", "Detroit electro-techno outfit Drexciya was conceived in 1989, but first came into the public eye in 1994 with Aquatic Invasion - the first of a thematic series of releases. Drexciya's James Stinson and Gerald Donald remained hidden behind their alias for much of the group's existence, communicating a complex personal mythology of a Drexciyan race of underwater dwellers descended from pregnant slave women thrown overboard during trans-Atlantic deportation. Within this fiction, their music - which they claimed was recorded live in the studio rather than programmed - was imagined as a dimensional jumphole between their black African roots and the contemporary USA."));

artistsArray.push(new Artist("Liz Harris", "(Grouper)", ["EarthQuaker Devices Transmisser Reverb", "Electro-Harmonix Electric Mistress Flanger", "Electro-Harmonix Memory Man", "Electro-Harmonix POG", "Zvex Wooly Mammoth Fuzz"], "img/artists/Grouper.jpg", "Grouper is the solo project of musician and artist Liz Harris. After releasing material independently beginning in 2005, Harris released the critically acclaimed Dragging a Dead Deer Up a Hill (2008), followed by four more records, including a two-part concept album, A I A. Her tenth studio album, Ruins, was released on October 31, 2014. Harris' music, described as ethereal and hazy, often consists of guitar layered with vocals and tape loops. She has collaborated with a number of other artists, including Xiu Xiu, Tiny Vipers, Lawrence English, and Jefre Cantu-Ledesma. She resides on the Oregon Coast."));

artistsArray.push(new Artist("Austin Post", "(Post Malone)", ["Sonic Research ST-300 Turbo Tuner", "Diamond Compressor", "EarthQuaker Devices Afterneath Reverb", "Boss GE-7 Equalizer", "Boss DS-1 Distortion", "Boss DM-2 Analog Delay"], "img/artists/PostMalone.jpg", "Austin Richard Post (born July 4, 1995), known professionally as Post Malone, is an American rapper, singer, songwriter, record producer, and guitarist. He first gained major recognition in February 2015, after the release of his debut single White Iverson. In August 2015, Malone landed a record deal with Republic Records. On December 9, 2016, he released his debut studio album Stoney."));

artistsArray.push(new Artist("Chancelor Bennett", "(Chance the Rapper)", ["Boss DM-2 Analog Delay", "Boss PH-1 Phaser", "Boss DC-2 Dimension C", "EarthQuaker Devices Hoof-Reaper Fuzz", "Mr. Black Eterna Shimmer Reverb"], "img/artists/ChanceTheRapper.jpg", "Chancelor Bennett (born April 16, 1993), known professionally as Chance the Rapper, is an American rapper, singer, songwriter, record producer and actor from the West Chatham neighborhood of Chicago, Illinois. In 2013, he began to gain recognition following the release of his second mixtape, Acid Rap. He has worked as the lead vocalist for the band The Social Experiment; they released the album Surf in May 2015. In May 2016, Bennett released his third mixtape Coloring Book to critical acclaim. It earned him three Grammy awards, including for Best Rap Album."));

artistsArray.push(new Artist("Dieuson Octave", "(Kodak Black)", ["Mr. Black Eterna Shimmer Reverb", "Boss DC-2 Dimension C", "Boss TU-3 Tuner"], "img/artists/KodakBlack.jpg", "Dieuson Octave, better known by his stage name Kodak Black, is an American rapper from Pompano Beach, Florida. He is noted for his singles No Flockin and Tunnel Vision, as well as his numerous legal issues."));

artistsArray.push(new Artist("Jahseh Onfroy", "(XXXTentacion)", ["Boss TU-3 Tuner", "Boss DM-2 Analog Delay", "Electro-Harmonix Cathedral Reverb", "Klon Centaur"], "img/artists/Xxxtentacion.jpg", "Jahseh Onfroy, known professionally as XXXTentacion, and often referred to as X; is an American rapper, singer, and songwriter from Lauderhill, Florida. Onfroy found success from the audio distribution platform SoundCloud, where he is a pioneer of SoundCloud rap, which is a microgenre that was inspired by trap and lo-fi music. Born and raised in Plantation, Florida, Onfroy spent most of his childhood in Lauderhill, Florida. X began writing music after being released from a youth correction center and eventually released his first song on SoundCloud in 2014. Onfroy released his debut album, 17, on August 25, 2017. The album debuted at No. 2 on the Billboard 200 and was supported by the lead single, Jocelyn Flores which debuted at 31 on the Billboard Hot 100."));

artistsArray.push(new Artist("Shayaa Abraham-Joseph", "(21 Savage)", ["Klon Centaur", "Zvex Wooly Mammoth Fuzz", "Sonic Research ST-300 Turbo Tuner", "Boss DM-2 Analog Delay", "Electro-Harmonix Stereo Pulsar"], "img/artists/21savage.jpg", "Shayaa Abraham-Joseph, better known by his stage name 21 Savage, is an American rapper from Atlanta, Georgia. He was best known for his mixtapes, The Slaughter Tape and Slaughter King and his extended plays Free Guwop and Savage Mode with Metro Boomin before the release of his debut album, ISSA and its lead single, Bank Account."));

artistsArray.push(new Artist("Michael White", "(Trippie Redd)", ["Analogman King Of Tone", "Boss DD-2 Digital Delay", "EarthQuaker Devices Sea Machine", "Electro-Harmonix Electric Mistress Flanger", "TC Electronic Polytuney", "Electro-Harmonix Stereo Pulsar"], "img/artists/TrippieRed.jpg", "Michael White, better known by his stage name Trippie Redd, is an American rapper and singer from Ohio. He is best known for his song Love Scars and his collaborations with rapper XXXTentacion."));

// artistsArray.push(new Artist("name", "from", ["pedals"], "img/artists/.jpg", "info"));

// Users
usersArray.push(new User("Michael Pinaud", "LDX-ROE", "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", ["Boss GE-7 Equalizer", "Strymon Big Sky", "DigiTech DigiDelay"], ["Kevin Shields", "Chelsea Wolfe"]));

usersArray.push(new User("Zachary Marston", "Epicodus", "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", ["DigiTech DigiDelay", "Boss RV-3 Reverb/Delay"], ["Donald Glover", "Chancelor Bennett", "Austin Post", "Dieuson Octave", "Jahseh Onfroy", "Michael White", "Shayaa Abraham-Joseph"]));

usersArray.push(new User("Rick Sanchez", "Wubalubs", "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", ["Boss GE-7 Equalizer", "Boss DS-1 Distortion"], ["Kevin Shields", "Kevin Parker"]));

usersArray.push(new User("Tim Richardson", "The NoNos", "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", ["DigiTech DigiDelay", "Boss RV-3 Reverb/Delay"], ["Kevin Shields", "Kevin Parker", "Rob Crow"]));

usersArray.push(new User("Keith Ape", "88rising", "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", ["Boss BD-2 Blues Driver", "Maestro FZ-1 Fuzz-Tone", "Boss RV-3 Reverb/Delay"], ["Childish Gambino", "Chelsea Wolfe"]));

usersArray.push(new User("Voy Boy", "Dignitas", "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", ["DigiTech DigiDelay"], ["Ty Segall", "Greta Kline", "Courtney Barnett", "Chelsea Wolfe"]));

usersArray.push(new User("Bill Nye", "science", "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", ["Boss DS-1 Distortion"], ["Rob Crow", "Frank Zappa"]));

usersArray.push(new User("Elon Musk", "SpaceX", "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", ["Electro-Harmonix Small Stone", "Z. Vex Lo-Fi Loop Junky"], ["Kurt Vile"]));

usersArray.push(new User("Steve Rodgers", "Avengers", "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", ["Z. Vex Lo-Fi Loop Junky", "Boss PN-2 Tremolo/Pan",], ["Corin Tucker", "Kevin Parker"]));



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

artistsArray.sort(function(a, b) {
  if (a.name < b.name)
    return -1;
  if (a.name > b.name)
    return 1;
  return 0;
});

pedalsArray.sort(function(a, b) {
  if (a.name < b.name)
    return -1;
  if (a.name > b.name)
    return 1;
  return 0;
});

usersArray.sort(function(a, b) {
  if (a.name < b.name)
    return -1;
  if (a.name > b.name)
    return 1;
  return 0;
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
function attachClick() {
  $('.pedal-click').off('click', 'li').on('click', 'li', function() {
    pedalClick($(this).text());
  });
  $('.artist-click').off('click', 'li').on('click', 'li', function() {
    artistClick($(this).text());
  });
  $('.user-click').off('click', 'li').on('click', 'li', function() {
    userClick($(this).text());
  });
}

function makePedalOutput(foundPedal) {
  $("#info-output").html('<div class="removable-main">' +
                            '<li><h2>' + foundPedal.name + '<h2></li>' +
                            '<li><img src="' + foundPedal.image + '" alt="' + foundPedal.name + '" class="info-image"></li>' +
                            '<li>' + foundPedal.info + '</li>' +
                            '<li><a href="' + foundPedal.link + '" target="_blank">Click here for more information</a></li>' +
                            '<li><h4>These artists use this effect pedal:</h4><li>' +
                            '<ul id="pedal-user-output" class="artist-click clickable hover">' +
                            '</ul>' +
                          '</div>'
                        );

  foundPedal.artists.map(function(artist) {
    $('#pedal-user-output').append('<li>' + artist + '</li>');
  });
  attachClick();
}

function makeArtistOutput(foundArtist) {
  $('#info-output').html('<div class="removable-main">' +
                            '<li><h2>' + foundArtist.name + ' ' + foundArtist.group + '</h2></li>' + ' <br> ' +
                            '<li><img src="' + foundArtist.image + '" alt="' + foundArtist.name + '" class="info-image">' +
                            '<li>' + foundArtist.info + '</li>' + ' <br> ' +
                            '<li><h4>' + foundArtist.name + ' uses the following pedals:</h4></li>' +
                            '<ul id="artist-pedal-output" class="pedal-click clickable hover">' +
                            '</ul>' +
                          '</div>'
                        );

  foundArtist.pedals.map(function(pedal) {
    $('#artist-pedal-output').append('<li>' + pedal + '</li>');
  });
  attachClick();
}

function makeUserOutput(foundUser) {
  $('#info-output').html('<div class="removable-main">' +
                            '<li>' + foundUser.name + ' from ' + foundUser.group + '</li>' +
                            '<li>' + foundUser.info + '</li>' +
                            '<li><h3>' + foundUser.name + ' uses the following pedals:</h3></li>' +
                            '<ul id="user-pedals-output" class="pedal-click clickable hover">' +
                            '</ul>' +
                            '<li><h3>' + ' Follows: ' + '</h3></li>' +
                            '<ul id="user-artists-output" class="artist-click clickable hover">' +
                            '</ul>' +
                          '</div>'
                        );

  foundUser.pedals.map(function(pedal) {
    $('#user-pedals-output').append('<li>' + pedal + '</li>');
  });
  foundUser.artists.map(function(artist) {
    $('#user-artists-output').append('<li>' + artist + '</li>');
  });
  attachClick();
}

function makeFormOutput() {
  $('#info-output').html('<form id="contact-input" class="removable-main form-margin">' +
                              '<div class="form-group">' +
                              '<input type="text" class="form-control" placeholder="Name" id="name">' +
                              '<input type="text" class="form-control" placeholder="Band/Group" id="group">' +
                              '<input type="text" class="form-control" placeholder="About me" id="about-me">' +
                              '<div id="add-pedals">' +
                              '<select class="custom-select form control col add-pedal add-pedal-select clickable" required>' +
                              '<option>' + '</option>' +
                              '</select>' +
                              '</div>' +
                              '<button type="button" id="add-another-pedal" class="clickable">Add another pedal</button>' +
                              '<div id="add-artists">' +
                              '<select class="custom-select form control col add-artist add-artist-select clickable" required>' +
                              '<option value="">' + '</option>' +
                              '</select>' +
                              '</div>' +
                              '<button type="button" id="add-another-artist" class="clickable">Follow another artist</button>' +
                              '</div>' +
                              '<button id="contact-info" type="submit" class="btn btn-outline-black btn-lg btn-block head clickable">Submit</button>' +
                              '</form>'
                            );
  pedalsArray.map(function(pedal) {
    $(".add-pedal-select").append('<option value="' + pedal.name + '">' + pedal.name + '</option>');
  });
  artistsArray.map(function(artist) {
    $(".add-artist-select").append('<option value="' + artist.name + '">' + artist.name + '</option>');
  });

  //when add another pedal button is clicked
  $('#add-another-pedal').click(function() {
    $('.add-pedal-select').removeClass("add-pedal-select");
    $('#add-pedals').append('<select class="custom-select form control col add-pedal add-pedal-select">' +
                              '<option value=""></option>' +
                            '</select>');
    pedalsArray.map(function(pedal) {
      $(".add-pedal-select").append('<option value="' + pedal.name + '">' + pedal.name + '</option>');
    });
  })

  //when follow another artist is clicked
  $('#add-another-artist').click(function() {
    $('.add-artist-select').removeClass("add-artist-select");
    $('#add-artists').append('<select class="custom-select form control col add-artist add-artist-select">' +
                              '<option value=""></option>' +
                            '</select>');
    artistsArray.map(function(artist) {
      $(".add-artist-select").append('<option value="' + artist.name + '">' + artist.name + '</option>');
    });
  })

  $("#contact-input").submit(function(event){
    event.preventDefault();
    var userName = $("input#name").val();
    var userGroup = $("input#group").val();
    var userAboutMe = $("input#about-me").val();
    var userPedals = [];
    var userArtists = [];
    $('.add-pedal').each(function() {
      var inputtedPedal = $(this).val();
      userPedals.push(inputtedPedal);
    })
    $('.add-artist').each(function() {
      var inputtedArtist = $(this).val();
      userArtists.push(inputtedArtist);
    })
    var newUser = new User(userName, userGroup, userAboutMe, userPedals, userArtists);
    usersArray.push(newUser);
    $("#users-list").append("<li class='clickable removable-sidebar hover'>" + newUser.name + "</li>");
    attachClick();
    $("#contact-input").hide();
  });
}

// Front end logic
$(function() {
  $('.step-1').click(function() {
    $('.step-2').removeClass('step-2');
    $('.step-1').addClass('step-2');
  });

  $('#pedals').click(function() {
    $('.removable-sidebar').remove();
    pedalsArray.map(function(pedal) {
      $('#pedal-list').append('<li class="clickable removable-sidebar">' + pedal.name + '</li>');
    });
    attachClick();
  });

  $('#artists').click(function(){
    $('.removable-sidebar').remove();
    artistsArray.map(function(artist) {
      $('#artist-list').append('<li class="clickable removable-sidebar">' + artist.name + '</li>');
    });
    attachClick();
  });

  $("#users").click(function(){
    $(".removable-sidebar").remove();
    usersArray.map(function(user) {
      $("#users-list").append("<li class='clickable removable-sidebar'>" + user.name + "</li>");
    });
    attachClick();
  });

  $('#add-users').click(function() {
    $(".removable-sidebar").remove();
    usersArray.map(function(user) {
      $("#users-list").append("<li class='clickable removable-sidebar hover'>" + user.name + "</li>");
    });
    makeFormOutput();
  })

});
