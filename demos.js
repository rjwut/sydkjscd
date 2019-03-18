$(() => {
  const DEMOS = [
    'debugger', 'consoleTable', 'consoleDir', 'consoleTrace', 'templateLiteral',
    'spreadSyntaxApply', 'spreadSyntaxExpand', 'spreadSyntaxMerge', 'restParameters',
    'destructuring', 'objectLiteralShorthand', 'arrowFunction', 'defaultParameter', 'synth',
    'pageVisibility', 'video'
  ];
  DEMOS.forEach(id => {
    $('#' + id + 'Demo').click(() => {
      console.clear();
      window[id + 'Demo']();
    });
  });
});

const BAGGINSES = {
  "name": "Balbo Baggins",
  "spouse": "Berylla Boffin",
  "children": [
    {
      "name": "Mungo Baggins",
      "spouse": "Laura Grubb",
      "children": [
        {
          "name": "Bungo Baggins",
          "spouse": "Belladonna Took",
          "children": [
            { "name": "Bilbo Baggins" }
          ]
        },
        {
          "name": "Belba Baggins",
          "spouse": "Rudigar Bolger"
        },
        {
          "name": "Longo Baggins",
          "spouse": "Camellia Sackville",
          "children": [
            {
              "name": "Otho Sackville-Baggins",
              "spouse": "Lobelia Bracegirdle",
              "children": [
                { "name": "Lotho Sackville-Baggins" }
              ]
            }
          ]
        },
        {
          "name": "Linda Baggins",
          "spouse": "Bodo Proudfoot",
          "children": [
            {
              "name": "Odo Proudfoot",
              "children": [
                {
                  "name": "Olo Proudfoot",
                  "children": [
                    { "name": "Sancho Proudfoot" }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Bingo Baggins",
          "spouse": "Chica Chubb",
          "children": [
            {
              "name": "Falco Chubb-Baggins",
              "children": [
                {
                  "name": "Poppy Chubb-Baggins",
                  "spouse": "Filibert Bolger"
                }
              ]
            }
          ]
        },
      ]
    },
    {
      "name": "Ponto Baggins",
      "spouse": "Mimosa Bunce",
      "children": [
        {
          "name": "Rosa Baggins",
          "spouse": "Hildigrim Took",
          "children": [
            {
              "name": "Adalgrim Took",
              "children": [
                {
                  "name": "Paladin Took II",
                  "spouse": "Eglantine Banks",
                  "children": [
                    { "name": "Pearl Took" },
                    { "name": "Pimpernel Took" },
                    { "name": "Pervinca Took" },
                    { "name": "Peregrin Took I" }
                  ]
                },
                {
                  "name": "Esmeralda Took",
                  "spouse": "Saradoc Brandybuck",
                  "children": [
                    { "name": "Meriadoc Brandybuck" }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Polo Baggins",
          "children": [
            {
              "name": "Posco Baggins",
              "spouse": "Gilly Brownlock",
              "children": [
                {
                  "name": "Ponto Baggins II",
                  "children": [
                    { "name": "Angelica Baggins" }
                  ]
                },
                { "name": "Porto Baggins" },
                {
                  "name": "Peony Baggins",
                  "spouse": "Milo Burrows",
                  "children": [
                    { "name": "Mosco Burrows" },
                    { "name": "Moro Burrows" },
                    { "name": "Myrtle Burrows" },
                    { "name": "Minto Burrows" }
                  ]
                }
              ]
            },
            {
              "name": "Prisca Baggins",
              "spouse": "Wilibald Bolger"
            }
          ]
        }
      ]
    },
    {
      "name": "Largo Baggins",
      "spouse": "Tanta Hornblower",
      "children": [
        {
          "name": "Fosco Baggins",
          "spouse": "Ruby Bolger",
          "children": [
            { "name": "Dora Baggins" },
            {
              "name": "Drogo Baggins",
              "spouse": "Primula Brandybuck",
              "children": [
                { "name": "Frodo Baggins" }
              ]
            },
            {
              "name": "Dudo Baggins",
              "children": [
                {
                  "name": "Daisy Baggins",
                  "spouse": "Griffo Boffin"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Lily Baggins",
      "spouse": "Togo Goodbody"
    }
  ]
};

function debuggerDemo() {
  debugger;
}

function consoleTableDemo() {
  console.table([
    { id: '001', name: 'Bulbasaur', types: 'green, poison' },
    { id: '004', name: 'Charmander', types: 'fire' },
    { id: '007', name: 'Squirtle', types: 'water' },
    { id: '070', name: 'Caterpie', types: 'bug' }
  ]);
}

function consoleDirDemo() {
  console.dir(BAGGINSES);
}

function consoleTraceDemo() {
  console.trace('Don\'t blink. Blink and you\'re dead.');
}

function templateLiteralDemo() {
  emitProverb(true);
  emitProverb(false);
}

function emitProverb(vulcan) {
  console.log(`The needs of the ${vulcan ? 'many' : 'one'}
outweigh the needs of the ${vulcan ? 'few' : 'many'}.`);
}

function spreadSyntaxApplyDemo() {
  const args = [ 'Two', 'Hands', 'Blue' ];
  riverChant.apply(null, args); // old way
  riverChant(...args); // new hotness
}

function riverChant(count, parts, color) {
  console.log(`${count} by ${count}, ${parts} of ${color}.`);
}

function spreadSyntaxExpandDemo() {
  const adjectives = [ 'stuck-up', 'half-witted', 'scruffy-looking' ];
  insult(adjectives, 'nerf herder');
}

function insult(adjectives, noun) {
  const arr = [ ...adjectives, noun ];
  const arr2 = [ ...arr ]; // Look, easy array cloning...
  const arr3 = [ ...arr, ...arr ]; // ...and concatenation!
  console.log(`Why, you ${arr.join(', ')}!`);
}

function spreadSyntaxMergeDemo() {
  let fellowship = {
    frodo: true,
    sam: true,
    merry: true,
    pippin: true,
    aragorn: true
  };
  console.dir(fellowship);
  fellowship = { ...fellowship, ...{
    gandalf: true,
    legolas: true,
    gimli: true,
    boromir: true
  }};
  console.dir(fellowship);
  fellowship = { ...fellowship, ...{
    gandalf: false,
    boromir: false
  }};
  console.dir(fellowship);
  const clone = { ...fellowship }; // Works for cloning, too!
}

function restParametersDemo() {
  ringPoem('rule them all', 'find them', 'bring them all');
}

function ringPoem(...purposes) {
  purposes.forEach(function(purpose) {
    console.log(`One ring to ${purpose},`);
  });
  console.log('And in the darkness bind them.');
}

function destructuringDemo() {
  const [ name, ...nanas ] = [
    'Batman!',
    'Nana',
    'nana',
    'nana',
    'nana'
  ];
  console.log(name);
  console.log(nanas);
  const { robin, ...others } = {
    robin: 'ally',
    alfred: 'ally',
    joker: 'enemy',
    catwoman: 'complicated'
  };
  console.log(robin);
  console.log(others);
}

function objectLiteralShorthandDemo() {
  let name = 'Spider-man';
  let key1 = 'power', key2 = 'responsibility';
  let hero = {
    name,
    [key1]: 'great',
    [key2]: 'great',
    web() {
      console.log('Thwip!');
    }
  };
  console.dir(hero);
  hero.web();
}

function arrowFunctionDemo() {
  const planets = [
    { name: 'Aiur',     zerg: 231846396 },
    { name: 'Earth',    zerg: 0 },
    { name: 'Tarsonis', zerg: 742983 },
    { name: 'Korhal',   zerg: 9357 },
    { name: 'Shakuras', zerg: 1 },
    { name: 'Char',     zerg: 9972687442 }
  ];

  // arrow function
  let zerg = planets.map((planet) => {
    return planet.zerg;
  }).reduce((totalZerg, planetZerg) => {
    return totalZerg + planetZerg;
  });
  console.log('Total zerg: ' + zerg);

  // shorthand (one arg, single return statement)
  zerg = planets
    .map(planet => planet.zerg)
    .reduce((totalZerg, planetZerg) => totalZerg + planetZerg);
  console.log('Total zerg: ' + zerg);
}

function defaultParameterDemo() {
  equipIndy();
  equipIndy('Nazi uniform', 'military hat', 'pistol');
}

function equipIndy(
  clothes = 'leather jacket',
  hat = 'fedora',
  weapon = 'whip'
) {
  console.log(`Equip Indiana Jones:
Clothing: ${clothes}
Hat: ${hat}
Weapon: ${weapon}`);
}

function pageVisibilityDemo() {
  if (!window.visListener) {
    window.visListener = () => {
      const elapsed = (Date.now() - window.lastTime) / 1000;
      window.lastTime = Date.now();

      if (document.hidden) {
        console.log(`Nox. Page was visible for ${elapsed} s.`);
      } else {
        console.log(`Lumos. Page was hidden for ${elapsed} s.`);
      }
    };
    document.addEventListener('visibilitychange', window.visListener);
    window.lastTime = Date.now();
    console.log('Page visibility demo started');
  } else {
    document.removeEventListener('visibilitychange', window.visListener);
    delete window.visListener;
    console.log('Page visibility demo stopped');
  }
}

function synthDemo() {
  const synth = window.speechSynthesis;

  if (!synth) {
    console.err('Speech synthesis API not available');
    return;
  }

  synth.speak(new SpeechSynthesisUtterance(
    'Never go in against a Sicilian when death is on the line!'
  ));
}

function videoDemo() {
  if (!window.stream) {
    navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
      window.stream = stream;
      $('#videoCode').hide();
      const video = $('#video').show()[0];
      video.srcObject = stream;
    }).catch(error => {
      console.error(error);
    });
  } else {
    window.stream.getTracks()[0].stop();
    delete window.stream;
    $('#video').hide();
    $('#videoCode').show();
  }
}
