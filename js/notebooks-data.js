/* THE THINKING SHELF: YOUR CONTENT
   ---------------------------------------------------------------------------
   Edit this file to fill in your notebooks. The shelf code lives in notebooks.js.

   1. Put images in a folder per book, for example:  images/notebooks/sketch-2026-h2/page-01.jpg
   2. Add spreads to that book's `spreads` list below. A spread is one two-page view:

        {
          title:   'Onboarding flow sketches',
          caption: 'Early thinking on the first-run experience.',
          images:  [                                   // 1, 2, 3, 4, 5, 6 or 8 images per spread
            pic('sketch-2026-h2', 'page-01.jpg', 'Flow sketch with arrows', 'First pass at the flow'),
            pic('sketch-2026-h2', 'page-02.jpg', 'Wireframe of the welcome screen', 'Welcome screen wireframe')
          ],
          links:   [                                   // optional
            { label: 'Read the case study', href: 'case-study-alle-grow.html' }
          ]
        }

   Layouts by image count: 1 across the spread | 2 side by side | 3 = 2 + 1 | 4 = 2 + 2 | 5 = 3 + 2 | 6 = 3 + 3 | 8 = 4 + 4.
   (Other counts use the next smaller layout.) Up to 20 spreads per book. Images are cropped to fill their space.
   Give every image a caption (shown over the image) and alt text (for screen readers).
   A book with an empty `spreads: []` list shows placeholder pages, so the shelf never looks broken.
   `pic(folder, file, alt, caption, fit)` is shorthand for { src: 'images/notebooks/<folder>/<file>', alt, caption, fit }.
   Add 'contain' as the last argument to show a whole image (text posters, quotes) instead of cropping it. */
(function () {
  'use strict';
  const pic = (folder, file, alt, caption, fit) => ({ src: `images/notebooks/${folder}/${encodeURI(file)}`, alt: alt || '', caption: caption || '', fit: fit || '' });

  window.NOTEBOOK_DATA = {

    /* ---- Top shelf: sketchbooks, newest on the left. Q3/4 = second half, Q1/2 = first half. ---- */
    sketchbooks: [
      { id: 'sketch-2026-h2', year: 2026, label: 'Q3/4', width: 42, spreads: [] },
      { id: 'sketch-2026-h1', year: 2026, label: 'Q1/2', width: 45, spreads: [] },
      { id: 'sketch-2025-h2', year: 2025, label: 'Q3/4', width: 48, spreads: [] },
      { id: 'sketch-2025-h1', year: 2025, label: 'Q1/2', width: 42, spreads: [] },
      { id: 'sketch-2024-h2', year: 2024, label: 'Q3/4', width: 45, spreads: [] },
      { id: 'sketch-2024-h1', year: 2024, label: 'Q1/2', width: 48, spreads: [] },
      { id: 'sketch-2023-h2', year: 2023, label: 'Q3/4', width: 42, spreads: [] },
      { id: 'sketch-2023-h1', year: 2023, label: 'Q1/2', width: 45, spreads: [] },
      { id: 'sketch-2022-h2', year: 2022, label: 'Q3/4', width: 48, spreads: [] },
      { id: 'sketch-2022-h1', year: 2022, label: 'Q1/2', width: 42, spreads: [] }
    ],

    /* ---- Bottom shelf: books that inspire me. bg = spine background (any CSS), fg = text color. ---- */
    shelf: [
      { id: 'art', title: 'Art', bg: '#c23b17', fg: '#fff', width: 44, height: 172, spreads: [
        {
          title: 'Pattern and color',
          caption: 'Color, rhythm, and repetition.',
          images: [
            pic('art', '04-Art-mayaUniverse2.jpg', 'Colorful abstract burst of overlapping circles and stripes', 'Maya Universe')
          ]
        },
        {
          title: 'Hockney',
          caption: 'Flat color and still water.',
          images: [
            pic('art', '06-Art-david-hockney-a-bigger-splash-1967.jpg', 'A splash beside a diving board in a blue pool', 'David Hockney, A Bigger Splash (1967)'),
            pic('art', '10-Art-hockney.jpg', 'Two figures and a seated sculpture before a modernist house', 'David Hockney')
          ]
        },
        {
          title: 'Grids',
          caption: 'Lines, blocks, and primary color.',
          images: [
            pic('art', '03-Art-mondrian.jpg', 'Composition of red, yellow, blue, and white blocks divided by black lines', 'Mondrian, composition in red, yellow, and blue'),
            pic('art', '12-Art-mondrian2.jpg', 'Pale composition with a blue-gray block and a small red square', 'Mondrian, a quieter composition'),
            pic('art', 'abstract_composition.jpg', 'Abstract bands of color on a pale ground', 'Abstract composition')
          ]
        },
        {
          title: 'Faces',
          caption: 'Portraits, real and rebuilt.',
          images: [
            pic('art', '09-Art-Fridakahlo.jpg', 'Frida Kahlo with a hawk on her shoulder against a teal wall', 'Frida Kahlo'),
            pic('art', '2460394878146_4uQNBn4a_l.jpg', 'Portrait of a woman with a flower crown', 'Frida Kahlo, portrait'),
            pic('art', '15-Art-painting.jpg', 'Fragmented painted portrait of a face', 'Fragmented portrait'),
            pic('art', 'michael_willis03.jpg', 'Two profiles of a man in a suit with colored shapes overlaid', 'Michael Willis')
          ]
        },
        {
          title: 'Marks and monochrome',
          caption: 'Loud marks, quiet color.',
          images: [
            pic('art', '17-Art-basquait.jpg', 'Basquiat figure in red, black, and yellow with a crown', 'Basquiat'),
            pic('art', 'basquait2.jpg', 'Basquiat canvas full of words, figures, and symbols', 'Basquiat, words as image'),
            pic('art', '13-Art-YvesKlein.jpg', 'A deep blue monochrome above a handwritten document', 'Yves Klein, blue'),
            pic('art', '11-Art-JeronenAllart.jpg', 'Teal sky above a small row of orange rooftops', 'Jeroen Allart'),
            pic('art', '01-Art-M_Petrol.jpg', 'A gas station canopy glowing in a dark landscape', 'M. Petrol')
          ]
        },
        {
          title: 'Strange worlds',
          caption: 'Odd scenes that stay with me.',
          images: [
            pic('art', '18-Art-joshkeyes_ANP scorch-1.jpg', 'A shark in a block of water with smoke rising from a fire above', 'Josh Keyes'),
            pic('art', 'joshkeys.jpg', 'A wolf perched on a glass box scene with fish', 'Josh Keyes, another world'),
            pic('art', '16-Art-remake.jpg', 'American Gothic recreated with modern people', 'A remake of American Gothic'),
            pic('art', 'rafael_coronel_otra_vez_la_libelula.jpg', 'A figure in a pointed hat with a dragonfly', 'Rafael Coronel, Otra vez la libélula'),
            pic('art', 'monh_06.jpg', 'A mouse lemur on a green background with a Latin label', 'Mouse lemur (Microcebus murinus)'),
            pic('art', '20-Art-inflateddeflated.jpg', 'A green deflated balloon with handwritten text', 'Inflated, deflated')
          ]
        },
        {
          title: 'Studies',
          caption: 'Figures, objects, and the making.',
          images: [
            pic('art', '02-Art-andrewbmyers1.jpg', 'A small television above a spiral of toy cars', 'Andrew B. Myers'),
            pic('art', '05-Art-dress.jpg', 'A sculpted dress on a stand', 'A dress as sculpture'),
            pic('art', '14-Art-composition.jpg', 'A colorful geometric composition', 'Composition'),
            pic('art', '19-Art-scheule.jpg', 'Expressive figure drawing of a seated nude', 'Egon Schiele'),
            pic('art', 'd4b32c2ce3d0bd34e5cf4320171b5b7095914949_m.jpg', 'Painting of two embracing figures', 'Figure study'),
            pic('art', 'bryan-5jpg-480x360.jpg', 'A sculptor shaping a stone in a studio', 'Sculpting in the studio'),
            pic('art', 'FukyFA0aIAEBpez.jpeg', 'A busy digital doodle made in a paint program', 'A digital doodle'),
            pic('art', 'watercolor.jpg', 'Watercolor portrait of an older man with a white beard', 'Watercolor portrait')
          ]
        }
      ] },
      { id: 'architecture', title: 'Architecture', bg: '#4a5a75', fg: '#fff', width: 52, height: 186, spreads: [
        {
          title: 'Superstudio',
          caption: 'A continuous grid monument stretching across the landscape',
          images: [
            pic('architecture', '01-Architecture-Superstudio-Monumento-Continuo.jpg', 'A white gridded monument running through a coastal landscape', 'Superstudio, Il Monumento Continuo')
          ]
        },
        {
          title: 'Supersurface',
          caption: 'The world as a flat, gridded plane.',
          images: [
            pic('architecture', '02-Architecture-Superstudio-Supersurface.jpg', 'Collage of people picnicking on a gridded surface by a lake', 'Superstudio, Supersurface'),
            pic('architecture', '03-Architecture-Superstudio-Life-Supersurface.jpg', 'Collage of a group of people gathered on a gridded surface before mountains', 'Superstudio, Life on the Supersurface')
          ]
        },
        {
          title: 'Radical design',
          caption: 'Architecture as an idea first.',
          images: [
            pic('architecture', '04-Architecture-Superstudio-MAXXI.jpg', 'Collage with a woman at a gridded table and fragments of images', 'Superstudio, from the MAXXI exhibition'),
            pic('architecture', '05-Architecture-Toraldo-di-Francia.jpg', 'A man at a tiled grid table in black and white', 'Cristiano Toraldo di Francia, Superstudio'),
            pic('architecture', '06-Architecture-Superstudio-Beach-Grid.jpg', 'Two people walking on a gridded beach', 'Superstudio, a grid for the beach')
          ]
        },
        {
          title: 'Masters',
          caption: 'The names I keep coming back to.',
          images: [
            pic('architecture', '07-Architecture-Le-Corbusier-Maison-Dom-ino.jpg', 'Line drawing of a three-slab concrete frame with a stair', 'Le Corbusier, Maison Dom-ino'),
            pic('architecture', '08-Architecture-Bauhaus-Dessau.jpeg', 'The Bauhaus building with its name down the glass facade', 'The Bauhaus, Dessau'),
            pic('architecture', '09-Architecture-Mies-van-der-Rohe.jpg', 'A man and woman reviewing an architectural model', 'Mies van der Rohe'),
            pic('architecture', '10-Architecture-Calatrava-Bridge.jpg', 'A white cable-stayed bridge with a tall angled mast', 'Santiago Calatrava, bridge')
          ]
        },
        {
          title: 'Mid-century and modern',
          caption: 'Glass, roofs that float, and the views.',
          images: [
            pic('architecture', '11-Architecture-Case-Study-House-22.jpg', 'A cantilevered roof over a pool with a city view', 'Case Study House No. 22, photographed by Julius Shulman'),
            pic('architecture', '12-Architecture-Neutra-by-Shulman.jpg', 'Black and white view of a glass house lit at night', 'Richard Neutra, photographed by Julius Shulman'),
            pic('architecture', '13-Architecture-House-on-Stilts.jpg', 'A small modern house on stilts beneath a large tree', 'A modern house raised on stilts'),
            pic('architecture', '14-Architecture-Glass-Pavilion.jpg', 'A glass-walled pavilion among tall trees', 'A glass pavilion in the trees'),
            pic('architecture', '15-Architecture-Carport-House.jpg', 'A low modern house with an open carport and a yellow car', 'A low house with an open carport')
          ]
        },
        {
          title: 'Wood, glass, and light',
          caption: 'Warm materials and a lot of windows.',
          images: [
            pic('architecture', '16-Architecture-Cantilevered-Wood-House.jpg', 'A house with a wood-clad upper level above a driveway', 'A wood-clad upper level above the drive'),
            pic('architecture', '17-Architecture-Courtyard-Interior.jpg', 'Warm timber interior around a landscaped courtyard', 'Timber around a sunken courtyard'),
            pic('architecture', '18-Architecture-Timber-House-Slope.jpg', 'A timber house stepping down a grassy slope', 'A timber house on a slope'),
            pic('architecture', '19-Architecture-Timber-Kitchen.jpeg', 'A kitchen under a timber ceiling with a wall of windows', 'A kitchen under a timber ceiling'),
            pic('architecture', '20-Architecture-Dark-Cabin.jpeg', 'A dark cabin with angled roofs in the forest', 'A dark cabin in the forest'),
            pic('architecture', '21-Architecture-Concrete-Interior.jpg', 'A man seated on a bench in a board-formed concrete space', 'A bench in board-formed concrete')
          ]
        },
        {
          title: 'Systems and structures',
          caption: 'How things are built, drawn, and put together.',
          images: [
            pic('architecture', '22-Architecture-Paperlux-Novum.jpg', 'Colorful faceted triangles forming a polyhedron pattern', 'Paperlux, Novum'),
            pic('architecture', '23-Architecture-Geodesic-Dome.jpg', 'A white geodesic dome built inside a warehouse', 'A geodesic dome in a warehouse'),
            pic('architecture', '24-Architecture-Buckminster-Fuller.jpg', 'A man holding a geodesic sphere over his face', 'Buckminster Fuller'),
            pic('architecture', '25-Architecture-Grid-Over-City.jpeg', 'A white gridded pathway cutting through a city with parachutists above', 'A gridded path across a city'),
            pic('architecture', '26-Architecture-Layered-Drawing.jpg', 'Layered architectural drawing of towers in green and black lines', 'A layered architectural drawing'),
            pic('architecture', '27-Architecture-Wireframe-Study.jpg', 'Two wireframe structure studies in gray', 'A wireframe structure study'),
            pic('architecture', '28-Architecture-Side-Panels.jpg', 'Diagram of stacked side panels with annotations', 'A diagram of layered side panels'),
            pic('architecture', '29-Architecture-House-Systems-Diagram.jpg', 'Isometric diagram of a house with red ducts and pipes', 'A house and its systems')
          ]
        },
        {
          title: 'Details and in-betweens',
          caption: 'The small things that make a space.',
          images: [
            pic('architecture', '30-Architecture-Front-to-Back-Infill.jpg', 'A narrow modern infill house with warm glowing windows', 'Front to Back Infill house'),
            pic('architecture', '31-Architecture-Stairwell.jpg', 'Looking down a square spiral stair with a patterned floor', 'Looking down a stairwell'),
            pic('architecture', '32-Architecture-Curved-Wood-Bench.jpeg', 'A curved wooden bench against a wall with a checkered floor', 'A curved wooden bench'),
            pic('architecture', '33-Architecture-Mirrored-Water.jpg', 'Collage of white forms mirrored in a lake', 'White forms and mirrored water')
          ]
        }
      ] },
      { id: 'design', title: 'Design', bg: '#1a5bc4', fg: '#fff', width: 38, height: 160, spreads: [
        {
          title: 'Information design',
          caption: 'Charts that tell a story.',
          images: [
            pic('design', '01-Design-Minard-Napoleon-Map.png', 'Flow map of Napoleon\'s march on Russia with a shrinking band', 'Minard, the march on Russia')
          ]
        },
        {
          title: 'Grids and geometry',
          caption: 'Order underneath everything.',
          images: [
            pic('design', '02-Design-Apple-Logo-Grid.jpg', 'The Apple logo drawn over a grid of circles', 'The Apple logo and its circles'),
            pic('design', '03-Design-Villard-Diagram.png', 'Line diagram dividing a page into proportional columns', 'Villard diagram, page proportions')
          ]
        },
        {
          title: 'Order',
          caption: 'Grids, lines, and a very good pattern.',
          images: [
            pic('design', '04-Design-The-Grid-System.jpeg', 'Pink grid overlay on a web page called The Grid System', 'The Grid System'),
            pic('design', '05-Design-Josef-Albers.jpg', 'White line drawing of interlocking shapes on dark paper', 'Josef Albers'),
            pic('design', '06-Design-Gabbani-Poster.jpg', 'Black and white op-art pattern beside Italian restaurant text', 'Op-art for the Gabbani restaurant')
          ]
        },
        {
          title: 'Identity systems',
          caption: 'Marks that hold together.',
          images: [
            pic('design', '07-Design-NJ-Transit-Logo.jpg', 'Construction drawing of the NJ Transit logo on a grid', 'NJ Transit logo, built on a grid'),
            pic('design', '08-Design-Mexico-68.jpg', 'Striped Mexico 68 Olympic lettering above two women', 'Mexico 68 Olympics identity'),
            pic('design', '09-Design-American-Airlines-Specs.jpg', 'Identity guidelines sheet for American Airlines', 'American Airlines identity guidelines'),
            pic('design', '10-Design-1882-Identity.jpg', 'Black and white stationery for the 1882 identity', '1882 identity')
          ]
        },
        {
          title: 'Letters',
          caption: 'Type as the main event.',
          images: [
            pic('design', '11-Design-Tatuaje-Cigars.jpg', 'Script lettering reading Tatuaje Cigars', 'Tatuaje Cigars lettering'),
            pic('design', '12-Design-Ligatures-Sign.jpg', 'A wooden sign painted with the word Ligatures', 'Ligatures'),
            pic('design', '13-Design-Whale-Lettering.gif', 'Lettering poster in a whale shape in white on black', 'Whale lettering'),
            pic('design', '14-Design-We-Design-Everything.jpg', 'A black sign listing what a studio designs and for how much', 'We design everything'),
            pic('design', '15-Design-Typography-Architecture.jpg', 'Framed text about typography being two-dimensional architecture', 'Typography as architecture')
          ]
        },
        {
          title: 'Posters with a point',
          caption: 'Posters that picked a side.',
          images: [
            pic('design', '16-Design-Freedom-Posters.jpg', 'Two red wartime posters with a crown and bold white type', 'Freedom is in peril, your courage'),
            pic('design', '17-Design-Soviet-Industrialization.jpg', 'Soviet poster with a photomontage of workers', 'Soviet photomontage poster'),
            pic('design', '18-Design-Constructivist-Poster.jpg', 'Red poster with a hand and a bowler hat', 'Constructivist poster'),
            pic('design', '19-Design-Mayakovsky-Pro-Eto.jpg', 'Book cover with a woman\'s face above the name Mayakovsky', 'Mayakovsky, About This (cover by Rodchenko)'),
            pic('design', '20-Design-Dutch-Telegram-Poster.gif', 'Blue and red Dutch poster about telephoning telegrams', 'A Dutch poster about telegrams'),
            pic('design', '21-Design-Le-Modulor.jpg', 'Poster for Le Corbusier with the word Modulor', 'Le Corbusier, Le Modulor')
          ]
        },
        {
          title: 'Signs and small things',
          caption: 'Objects you can hold or walk past.',
          images: [
            pic('design', '22-Design-Uptown-London-Shoe-Shop.jpg', 'Red and yellow neon sign for a shoe shop', 'Uptown London Shoe Shop'),
            pic('design', '23-Design-Eat-Road-Sign.jpg', 'A vintage EAT arrow sign against pink clouds', 'A vintage EAT sign'),
            pic('design', '24-Design-Keystone-Matchbook.jpg', 'Orange matchbook for Keystone, Colorado', 'Keystone, Colorado matchbook'),
            pic('design', '25-Design-Welsh-Rabbit-Cards.jpg', 'Business cards for The Welsh Rabbit Cheesery', 'The Welsh Rabbit Cheesery cards'),
            pic('design', '26-Design-Prompt-Tag.jpg', 'A letterpress shipping tag from Prompt in San Francisco', 'A letterpress shipping tag'),
            pic('design', '27-Design-Tape-Deck-Invitation.jpg', 'Letterpress invitation with a boombox in turquoise and yellow', 'A letterpress tape deck invitation'),
            pic('design', '28-Design-Ampersand-Mark.jpg', 'A line-drawn ampersand inside a diamond on white paper', 'An ampersand mark'),
            pic('design', '29-Design-Teixido-Site.jpg', 'Website with a yellow ribbon and the name Teixido', 'Teixido website')
          ]
        },
        {
          title: 'Bauhaus',
          caption: 'Costume, geometry, and play.',
          images: [
            pic('design', '30-Design-Triadic-Ballet.jpg', 'Black and white photo of dancers in geometric costumes', 'Bauhaus, the Triadic Ballet')
          ]
        },
        {
          title: 'Rules and workshops',
          caption: 'Making design a practice.',
          images: [
            pic('design', '31-Design-Corita-Rules.jpg', 'Orange sheet listing ten rules for an art department', 'Corita Kent, the art department rules'),
            pic('design', '32-Design-Computer-Free-Day.jpg', 'Blue and red workshop poster for Computer Free Day', 'Computer Free Day poster')
          ]
        },
        {
          title: 'Good design',
          caption: 'What good design means.',
          images: [
            pic('design', '33-Design-Vitsoe-Good-Design.jpeg', 'Ten principles of good design on a teal page', 'Dieter Rams, ten principles of good design'),
            pic('design', '34-Design-Design-Is-Thinking.jpg', 'Maroon poster with a quote about design being thinking made visual', 'Design is thinking made visual'),
            pic('design', '35-Design-Design-Is-Everything.jpg', 'Text on a blue background about what lives between the things we make', 'Design is in everything we make')
          ]
        },
        {
          title: 'Attitude',
          caption: 'Design with a point of view.',
          images: [
            pic('design', '36-Design-Design-Life-Beauty.jpg', 'Two white posters reading Design is for life and Design is for beauty', 'Design is for life, for beauty'),
            pic('design', '37-Design-Graphic-Designers-Are-People.jpg', 'A poster reading Graphic designers are people', 'Graphic designers are people'),
            pic('design', '38-Design-Everything-You-Want.jpg', 'A lit marquee sign reading Everything you want right now', 'Everything you want, right now'),
            pic('design', '39-Design-Wheels-For-The-Mind.jpg', 'A coaster with a cyclist and the words Wheels for the Mind', 'Wheels for the Mind')
          ]
        },
        {
          title: 'Thinking in diagrams',
          caption: 'Making thinking visible.',
          images: [
            pic('design', '40-Design-Thinking-Model.jpeg', 'Hand-drawn model with abstract and concrete axes', 'A hand-drawn thinking model'),
            pic('design', '41-Design-Cone-Of-Futures.jpg', 'A diagram of a cone of possible futures', 'The cone of possible futures'),
            pic('design', '42-Design-Eyes-Diagram.jpg', 'An engraving of eyes and the lines of sight', 'A diagram of vision'),
            pic('design', '43-Design-Pythagoras.jpg', 'A bust of Pythagoras above a right triangle', 'Pythagoras and the triangle'),
            pic('design', '44-Design-Proust-Quote.jpg', 'Text over a photo reading discovery consists in seeing with new eyes', 'Proust on seeing with new eyes')
          ]
        },
        {
          title: 'Illustration',
          caption: 'Drawn and printed.',
          images: [
            pic('design', '45-Design-Mountain-Sphere.jpg', 'A gray collage of a mountain inside a sphere under power lines', 'A mountain in a sphere'),
            pic('design', '46-Design-1956.jpg', 'An illustration of a mid-century building with the year 1956 and a sun', '1956'),
            pic('design', '47-Design-Overprint-Antelope.jpg', 'A red letter and antelope overprinted in blue', 'Overprint'),
            pic('design', '48-Design-Red-And-Blue.jpg', 'A portrait split into red and blue light on black', 'Red and blue'),
            pic('design', '49-Design-Wolf-Illustration.jpg', 'A black and gold illustration of a snarling wolf', 'A snarling wolf'),
            pic('design', '50-Design-Toothbrush-Illustration.jpg', 'A pink and red toothbrush illustration on blue', 'A toothbrush, illustrated')
          ]
        },
        {
          title: 'Play and systems',
          caption: 'Playing with rules.',
          images: [
            pic('design', '51-Design-Barcelona-B.jpg', 'A colorful faceted letter B for Barcelona', 'Barcelona, a faceted B'),
            pic('design', '52-Design-Lego-Periodic-Table.jpg', 'A periodic table made from Lego bricks', 'A periodic table in Lego'),
            pic('design', '53-Design-Man-And-Woman.jpg', 'A control panel of knobs labeled Man and Woman', 'Man and Woman, a control panel'),
            pic('design', '54-Design-Stones-Alphabet.jpg', 'Stones arranged in rows as letters and numbers', 'Stones as an alphabet'),
            pic('design', '55-Design-Hand-Bird-Scissors.jpg', 'Three icons: a hand, a bird, and scissors', 'Hand, bird, and scissors'),
            pic('design', '56-Design-USA-Map-Lines.jpg', 'A line-drawn map of the United States', 'The USA, in lines'),
            pic('design', '57-Design-Mates-Of-State.jpg', 'A poster with a hedgehog on teal for Mates of State', 'Mates of State poster'),
            pic('design', '58-Design-Musee-Elysee.jpg', 'Black and white striped poster for the Musee de l\'Elysee', 'Musee de l\'Elysee, Lausanne')
          ]
        },
        {
          title: 'Layouts and ads',
          caption: 'Information, laid out.',
          images: [
            pic('design', '59-Design-Yes-Info-Sheet.gif', 'A typographic information sheet in red and cream', 'A typographic information sheet'),
            pic('design', '60-Design-Table-Layout.jpeg', 'A long table layout in pink and white', 'A table layout'),
            pic('design', '61-Design-Porsche-Turbo-Ad.jpeg', 'A Porsche Turbo advertisement with large type', 'Porsche Turbo advertisement'),
            pic('design', '62-Design-Cubism-Abstract-Art.gif', 'A chart tracing the lines of influence of cubism and abstract art', 'Cubism and Abstract Art, the chart'),
            pic('design', '63-Design-Toothbrush-Poster.jpg', 'A black poster of toothbrushes lined up on shelves', 'A toothbrush poster')
          ]
        },
        {
          title: 'Loud',
          caption: 'A louder corner of the wall.',
          images: [
            pic('design', '64-Design-Revolver-Graphic.jpg', 'A revolver built from black and white shapes with an orange comma', 'A revolver in graphic shapes'),
            pic('design', '65-Design-Never-Mind-Poster.jpg', 'A yellow and pink punk poster', 'Never Mind, the Sex Pistols')
          ]
        }
      ] },
      { id: 'space', title: 'Space', bg: 'radial-gradient(circle at 30% 20%, #fff 0 1px, transparent 1.5px) 0 0 / 18px 22px, radial-gradient(circle at 70% 60%, #9fd8ff 0 1px, transparent 1.5px) 0 0 / 24px 26px, #1b1a4a', fg: '#fff', width: 46, height: 180, spreads: [
        {
          title: 'The universe',
          caption: 'Time, scale, and the whole timeline.',
          images: [
            pic('space', '01-Space-Universe-Timeline.jpg', 'Timeline of the universe from the big bang with R2-D2 at the start', 'The whole timeline of the universe')
          ]
        },
        {
          title: 'Deep space',
          caption: 'Galaxies and what bends around them.',
          images: [
            pic('space', '02-Space-Spiral-Galaxy.jpeg', 'A glowing spiral galaxy with colorful orbit lines', 'A spiral galaxy'),
            pic('space', '03-Space-Star-Bending-Light.jpeg', 'A bright sun at the center of bending colorful lines', 'A star bending the lines around it')
          ]
        },
        {
          title: 'Planets',
          caption: 'One by one.',
          images: [
            pic('space', '04-Space-Year-Of-Astronomy.jpg', 'Navy poster of planets on elliptical orbits for the International Year of Astronomy', 'International Year of Astronomy, 2009'),
            pic('space', '05-Space-Planets-Poster.jpg', 'Poster of planets on black panels, one by one', 'The planets, one by one'),
            pic('space', '06-Space-Pluto-Views.jpg', 'Three views of Pluto at 90, 180 and 270 degrees', 'Pluto from three sides')
          ]
        },
        {
          title: 'Moon and sun',
          caption: 'How the sky keeps time.',
          images: [
            pic('space', '07-Space-Sun-Positions.jpg', 'A string of bright dots arcing across a night sky', 'Positions of the sun across the sky'),
            pic('space', '08-Space-Moon-Phases.jpg', 'Rows of the moon in each phase on black', 'Phases of the moon'),
            pic('space', '09-Space-Today-Moon.jpg', 'The word TODAY over a desert landscape and a pale moon', 'Today'),
            pic('space', '10-Space-Red-Moon-Triangle.jpg', 'A red moon inside a black triangle over glacier ice', 'A red moon in a triangle')
          ]
        },
        {
          title: 'Machines and visitors',
          caption: 'Landers, robots, and flying saucers.',
          images: [
            pic('space', '11-Space-Lunar-Lander.jpg', 'A white lunar module with a US flag and four legs', 'A lunar lander'),
            pic('space', '12-Space-Robby-The-Robot.jpg', 'Robby the Robot with a glass dome head', 'Robby the Robot'),
            pic('space', '13-Space-Space-Station-Painting.jpg', 'A painted space station with towers and glowing lights', 'A space station, painted'),
            pic('space', '14-Space-Flying-Saucer.png', 'A flying saucer above a hillside with hikers below', 'A flying saucer over a hillside'),
            pic('space', '15-Space-Pixel-Star-Wars.jpg', 'Star Wars characters drawn as pixel art', 'Star Wars, in pixels')
          ]
        },
        {
          title: 'The suits',
          caption: 'What it takes to leave the ground.',
          images: [
            pic('space', '16-Space-Spacesuits-On-Display.jpg', 'Four spacesuits on display stands against a red carpet', 'Spacesuits on display'),
            pic('space', '17-Space-White-Spacesuit.jpg', 'A white spacesuit with the number 52 on the helmet', 'A white spacesuit, number 52'),
            pic('space', '18-Space-Fitting-The-Suit.jpg', 'A technician beside an astronaut in a suit in front of blue tiles', 'Fitting a spacesuit'),
            pic('space', '19-Space-Vintage-Pressure-Suit.jpg', 'A vintage pressure suit with a round dome helmet', 'A vintage pressure suit'),
            pic('space', '20-Space-Mercury-Seven.jpg', 'Seven astronauts in silver suits on a blue background', 'The Mercury Seven'),
            pic('space', '21-Space-Two-Astronauts-Dish.jpg', 'Two astronauts in orange suits in front of a radio dish', 'Two astronauts and a radio dish')
          ]
        },
        {
          title: 'Astronauts, imagined',
          caption: 'The astronaut as an image.',
          images: [
            pic('space', '22-Space-The-Last-Planet.jpg', 'An astronaut forming an island in the sea beneath the words The Last Planet', 'The Last Planet'),
            pic('space', '23-Space-Astronaut-Coca-Cola.jpg', 'A silver astronaut beside a Coca-Cola vending machine', 'An astronaut and a Coca-Cola machine'),
            pic('space', '24-Space-Helmet-On-The-Moon.jpg', 'A gold moon surface with a helmet visor in a circle', 'A helmet on the moon'),
            pic('space', '25-Space-Astronaut-In-Circles.jpg', 'An astronaut inside concentric brown circles', 'An astronaut in circles'),
            pic('space', '26-Space-Constellation-Astronaut.jpg', 'White constellation lines over a dark astronaut', 'Constellations over an astronaut'),
            pic('space', '27-Space-Astronaut-Circle-Moon.jpg', 'An astronaut inside a circle beside a small moon', 'A circle, an astronaut, a moon'),
            pic('space', '28-Space-Moonwalk-Triangles.png', 'An astronaut on the moon inside layered triangles', 'A moonwalk in triangles'),
            pic('space', '29-Space-Astronauts-Restroom.jpg', 'Two astronauts in a tiled restroom', 'Astronauts in a restroom')
          ]
        },
        {
          title: 'Looking down',
          caption: 'Light from above.',
          images: [
            pic('space', '30-Space-Runway-Light-Trail.jpg', 'A looping light trail over a city at dusk', 'A light trail over a runway')
          ]
        },
        {
          title: 'Flight',
          caption: 'Planes, grids, and cities.',
          images: [
            pic('space', '31-Space-City-From-The-Wing.jpg', 'A city at night seen from an airplane wing', 'A city at night from the wing'),
            pic('space', '32-Space-Airplanes-Grid.jpg', 'A grid of small airplanes in a pale blue sky', 'Airplanes in a grid')
          ]
        },
        {
          title: 'Pilots and eagles',
          caption: 'Who flies, and how.',
          images: [
            pic('space', '33-Space-Pilot-Visor.jpg', 'A pilot in a red helmet with a heads-up display on the visor', 'A pilot\'s visor'),
            pic('space', '34-Space-Pilot-Helmet.jpg', 'A black and white pilot in a helmet with an oxygen mask', 'A pilot in a pressure helmet'),
            pic('space', '35-Space-Eagles.jpg', 'Two eagles in flight over snowy mountains', 'Two eagles, mid-air')
          ]
        },
        {
          title: 'Faces in helmets',
          caption: 'Portraits behind glass.',
          images: [
            pic('space', '36-Space-Astronaut-Portrait.jpg', 'A woman in a silver astronaut helmet', 'Astronaut portrait'),
            pic('space', '37-Space-Astronaut-Profile.jpg', 'Black and white profile of a woman in a helmet', 'Astronaut in profile'),
            pic('space', '38-Space-Earth-Visor.jpg', 'Gold helmet visor with the word EARTH across it', 'Earth in a visor'),
            pic('space', '39-Space-Astronaut-Above-Earth.jpg', 'An astronaut in a capsule with the Earth below', 'An astronaut above the Earth')
          ]
        },
        {
          title: 'Diagrams',
          caption: 'Drawing how it works.',
          images: [
            pic('space', '40-Space-Light-Trails.jpg', 'White light trails sweeping through a dark field', 'Light trails, from LIFE'),
            pic('space', '41-Space-Orbit-Diagrams.jpg', 'Gold line diagrams of orbits and figure eights on black', 'Diagrams of orbits'),
            pic('space', '42-Space-Celestial-Sphere.jpg', 'A sketch of the celestial sphere with the ecliptic', 'The celestial sphere'),
            pic('space', '43-Space-Curved-Surfaces.png', 'A line drawing of curved surfaces and spheres', 'Curved surfaces, drawn in lines'),
            pic('space', '44-Space-Huygens-Fresnel-Refraction.svg', 'Diagram of a wave refracting through a surface', 'Refraction, the Huygens-Fresnel principle')
          ]
        },
        {
          title: 'Lines and maps',
          caption: 'Fields, grids, and wires.',
          images: [
            pic('space', '45-Space-Magnetic-Field.jpg', 'A glowing magnetic field around a horseshoe magnet', 'A magnetic field'),
            pic('space', '46-Space-Airview-Map.jpg', 'A map of a city showing its traffic ways', 'An air-view map of the trafficways'),
            pic('space', '47-Space-Dotted-Globe.png', 'A website with a globe made of dots', 'A globe made of dots'),
            pic('space', '48-Space-Wire-Planes.jpg', 'Black and red wire planes floating in space', 'Wire planes in black and red'),
            pic('space', '49-Space-Josef-Albers-Lines.jpg', 'White lines on dark paper forming interlocking shapes', 'Josef Albers, lines in space'),
            pic('space', '50-Space-Vector-Grid.jpg', 'A gold vector grid on a deep red background', 'A vector grid in gold')
          ]
        },
        {
          title: 'Space in culture',
          caption: 'Space in music, film, and print.',
          images: [
            pic('space', '51-Space-Alex-Witjas.jpg', 'A yellow-green collage of space icons and letters', 'Alex Witjas'),
            pic('space', '52-Space-Holst-The-Planets.jpg', 'Album cover of two costumed figures for Holst The Planets', 'Holst, The Planets, album cover'),
            pic('space', '53-Space-Bowie.jpg', 'Black and white portrait of David Bowie', 'David Bowie'),
            pic('space', '54-Space-Silver-Suits.jpg', 'Two figures in silver suits facing each other', 'Silver suits, face to face'),
            pic('space', '55-Space-Astronauts-Synthesizers.jpg', 'Two silver astronauts among racks of synthesizers', 'Astronauts and synthesizers'),
            pic('space', '56-Space-Teacher-In-Space.jpg', 'NASA Teacher in Space patch with a shuttle', 'Teacher in Space, a NASA patch'),
            pic('space', '57-Space-Milky-Way-Prints.jpg', 'Two framed prints of colorful nebulae', 'Milky Way prints'),
            pic('space', '58-Space-Space-Collage.jpg', 'A black collage of a hand, planet, and crystals', 'A space collage')
          ]
        },
        {
          title: 'Weightless and strange',
          caption: 'Floating, clouds, and odd things.',
          images: [
            pic('space', '59-Space-Hero-Holding-Rock.jpg', 'A figure in orange holding a rock overhead in a desert', 'A hero with a rock'),
            pic('space', '60-Space-Floating-Astronauts.jpg', 'Collage of astronauts floating above a blue grid', 'Floating astronauts on a grid'),
            pic('space', '61-Space-Weightless.jpg', 'A figure floating in a black void', 'Weightless'),
            pic('space', '62-Space-Floating-Figure.jpg', 'A small figure suspended against black', 'A floating figure'),
            pic('space', '63-Space-Cloud-Maker.jpg', 'A man blowing clouds out of his mouth', 'Making clouds'),
            pic('space', '64-Space-Cloud-And-Rain.jpg', 'A cumulus cloud with rain falling beneath it', 'A cloud and its rain'),
            pic('space', '65-Space-Bubble-Fingertip.jpg', 'A fingertip touching a large bubble', 'A bubble on a fingertip'),
            pic('space', '66-Space-Sea-Turtle.jpg', 'A sea turtle swimming underwater', 'A sea turtle')
          ]
        },
        {
          title: 'Tributes and dreams',
          caption: 'Remembering, and imagining.',
          images: [
            pic('space', '67-Space-Walk-To-Launch.jpg', 'An astronaut walking in an orange glow', 'The walk to the launch'),
            pic('space', '68-Space-Challenger-1986.jpg', 'A white smoke plume against a black sky after the Challenger accident', 'The Challenger accident, 1986'),
            pic('space', '69-Space-Tribute-Collage.jpg', 'A collage of a figure with a pink planet and stars', 'A tribute collage'),
            pic('space', '70-Space-Mark-Weaver.jpg', 'A woman\'s portrait in a circle on a moon-like surface', 'Mark Weaver'),
            pic('space', '71-Space-Pink-Sun.jpg', 'A pink sun above green hills', 'A pink sun over green hills'),
            pic('space', '72-Space-Tron.jpg', 'Two figures in Tron-style helmets, black and white', 'Tron')
          ]
        }
      ] },
      { id: 'writing', title: 'Writing', bg: '#e8dcc0', fg: '#2a2218', width: 36, height: 150, spreads: [
        {
          title: 'Process',
          caption: 'One shape for how design goes.',
          images: [
            pic('writing', '01-Writing-Double-Diamond.png', 'Diagram of the double diamond design process', 'The double diamond', 'contain')
          ]
        },
        {
          title: 'Venn diagrams',
          caption: 'Where the circles overlap.',
          images: [
            pic('writing', '02-Writing-What-We-Do-Venn.jpg', 'Venn diagram of what we do well, want to do, and can be paid to do', 'Bud Caddell, what we do well', 'contain'),
            pic('writing', '03-Writing-Modernism-Venn.png', 'Venn diagram of form and function with the word Modernism', 'Modernism, form and function', 'contain')
          ]
        },
        {
          title: 'Frameworks',
          caption: 'Little frames for thinking.',
          images: [
            pic('writing', '04-Writing-Nerd-Spectrum.jpg', 'Venn diagram of intelligence, obsession, and social ineptitude', 'The nerd spectrum', 'contain'),
            pic('writing', '05-Writing-Problem-Statement-Madlib.jpeg', 'A fill-in-the-blank problem statement worksheet', 'Problem statement, mad libs', 'contain'),
            pic('writing', '06-Writing-Where-You-Are.jpg', 'Sketch of where you are and where you want to be with lots and lots of work between', 'Where you are, where you want to be', 'contain')
          ]
        },
        {
          title: 'Ontology and problem solving',
          caption: 'What things are, and how to solve them.',
          images: [
            pic('writing', '07-Writing-Ontology-Epistemology.jpeg', 'Chart linking ontology, epistemology, and methodology', 'Ontology, epistemology, methodology', 'contain'),
            pic('writing', '08-Writing-Ontology-Computer-Science.png', 'Diagram of ontology as concepts and relationships in computer science', 'Ontology, in computer science', 'contain'),
            pic('writing', '09-Writing-What-Is-Ontology.jpg', 'Slide titled What is Ontology with a head and a flow diagram', 'What is ontology?', 'contain'),
            pic('writing', '10-Writing-Genjitsu-Problem-Solving.webp', 'A slide on problem solving training and going to the real place', 'Genjitsu, going to the real place', 'contain')
          ]
        },
        {
          title: 'Diagrams of how things go',
          caption: 'Curves, charts, and layouts.',
          images: [
            pic('writing', '11-Writing-Prototypes-Not-Final.jpg', 'A graph under the words Digital prototypes are not final products', 'Digital prototypes are not final products', 'contain'),
            pic('writing', '12-Writing-Geeks-Repetitive-Tasks.png', 'Chart of time spent on repetitive tasks for geeks and non-geeks', 'Geeks and repetitive tasks', 'contain'),
            pic('writing', '13-Writing-Undulating-Disaster.jpg', 'Sketch of three stages of disaster across physical, emotional, and intellectual', 'Three kinds of disaster', 'contain'),
            pic('writing', '14-Writing-Guide-To-Composition.jpg', 'A hand-drawn guide to composition with sixteen layouts', 'A beginner\'s guide to composition', 'contain'),
            pic('writing', '15-Writing-Shape-Of-Stories.jpg', 'Hand-drawn curves showing the shape of stories', 'The shape of stories', 'contain')
          ]
        },
        {
          title: 'On design',
          caption: 'Short lines about the work.',
          images: [
            pic('writing', '16-Writing-Ray-Eames-Quote.jpg', 'Quote: What works good is better than what looks good, because what works good lasts. Ray Eames', 'Ray Eames', 'contain'),
            pic('writing', '17-Writing-Designer-Fight-Ugliness.jpg', 'Quote: The life of a designer is a life of fight against the ugliness', 'The life of a designer', 'contain'),
            pic('writing', '18-Writing-Design-Thinking-Made-Visual.jpg', 'Maroon poster: design is thinking made visual', 'Saul Bass, design is thinking made visual', 'contain'),
            pic('writing', '19-Writing-IA-Quote.png', 'Quote: No amount of bells and whistles will be as effective as clear user flows, good information architecture, and strong copywriting', 'Clear flows beat bells and whistles', 'contain'),
            pic('writing', '20-Writing-Le-Corbusier-Drawing.jpg', 'Sketch of a house with the quote I prefer drawing to talking. Le Corbusier', 'Le Corbusier, on drawing', 'contain'),
            pic('writing', '21-Writing-Proust-New-Eyes.jpg', 'Quote over a wing: Discovery consists not in seeking new lands but in seeing with new eyes. Marcel Proust', 'Marcel Proust, new eyes', '')
          ]
        },
        {
          title: 'Words, machines, and people',
          caption: 'Writing for people and for the machine.',
          images: [
            pic('writing', '22-Writing-Apple-New-Bicycle.jpg', 'Apple Computer ad: When we invented the personal computer, we created a new kind of bicycle', 'Apple, a new kind of bicycle', 'contain'),
            pic('writing', '23-Writing-Bicycle-For-The-Mind.jpeg', 'Steve Jobs quote about building tools to amplify human ability, beside a tall bicycle', 'Steve Jobs, a bicycle for the mind', 'contain'),
            pic('writing', '24-Writing-Steve-Jobs-Lettering.jpg', 'Hand-lettered quote about what people want from a computer, 1955 to 2011', 'Steve Jobs, hand-lettered', 'contain'),
            pic('writing', '25-Writing-Welcome-IBM.png', 'Apple ad headline: Welcome, IBM. Seriously.', 'Welcome, IBM. Seriously.', 'contain'),
            pic('writing', '26-Writing-Quitting-Tobacco-Letter.jpg', 'A letter headed Why I am quitting tobacco', 'Why I\'m quitting tobacco, a letter', 'contain'),
            pic('writing', '27-Writing-Copywriting-Cheatsheet.jpeg', 'A copywriting cheat sheet with frameworks and hooks', 'A copywriting cheat sheet', 'contain'),
            pic('writing', '28-Writing-The-Grid-System.jpeg', 'A pink grid overlay on the Grid System website', 'The Grid System', 'contain'),
            pic('writing', '29-Writing-Design-Survival.jpg', 'Type anatomy poster titled Design Survival', 'Design survival', 'contain')
          ]
        },
        {
          title: 'Stay curious',
          caption: 'Keep your curiosity fresh.',
          images: [
            pic('writing', '30-Writing-Sketch-Everything.jpg', 'Lettering: Sketch everything and keep your curiosity fresh', 'Sketch everything, keep your curiosity fresh', 'contain')
          ]
        },
        {
          title: 'Explaining it simply',
          caption: 'Making it plain.',
          images: [
            pic('writing', '31-Writing-Explain-It-Simply.jpg', 'Quote: If you can\'t explain it simply, you don\'t understand it well enough. Albert Einstein', 'If you can\'t explain it simply', 'contain'),
            pic('writing', '32-Writing-Ira-Glass-The-Gap.jpg', 'Ira Glass on the gap between taste and your work', 'Ira Glass, the gap', 'contain')
          ]
        },
        {
          title: 'Steal like an artist',
          caption: 'Where good ideas come from.',
          images: [
            pic('writing', '33-Writing-Good-Artists-Copy.jpg', 'Blue poster: Good artists copy, great artists steal', 'Good artists copy, great artists steal', 'contain'),
            pic('writing', '34-Writing-Steal-From-Anywhere.jpg', 'Jim Jarmusch\'s list: nothing is original, steal from anywhere that resonates', 'Jim Jarmusch, nothing is original', 'contain'),
            pic('writing', '35-Writing-Dada-Soiree-1922.jpg', 'A dense Dada poster of mixed type for the Kleine Dada Soiree, 1922', 'Kleine Dada Soiree, 1922', 'contain')
          ]
        },
        {
          title: 'Keep going',
          caption: 'Make it happen.',
          images: [
            pic('writing', '36-Writing-Woody-Allen-Failing.jpg', 'Chalkboard quote: If you\'re not failing every now and again, it\'s a sign you\'re not doing anything very innovative', 'Woody Allen, on failing', 'contain'),
            pic('writing', '37-Writing-Stop-Waiting.png', 'Poster: Stop waiting for things to happen, go out and make them happen', 'Make things happen', 'contain'),
            pic('writing', '38-Writing-Ray-Bradbury-Impossible.png', 'Ray Bradbury quote: We are an impossibility in an impossible universe', 'Ray Bradbury', 'contain'),
            pic('writing', '39-Writing-Warhol-Anonymous.jpg', 'Poster: In the future everyone will be anonymous for 15 minutes', 'In the future, everyone will be anonymous for 15 minutes', 'contain'),
            pic('writing', '40-Writing-Love-Sex-Music.jpg', 'A hand-lettered sign: I don\'t believe in science, only love, sex, and music', 'Only love, sex, and music', 'contain')
          ]
        },
        {
          title: 'Hard questions',
          caption: 'Words that push back.',
          images: [
            pic('writing', '41-Writing-Tony-Benn-Questions.jpg', 'Tony Benn\'s five questions to ask anyone with power', 'Tony Benn, five questions for power', 'contain'),
            pic('writing', '42-Writing-Nietzsche-Corrupt-Youth.jpg', 'Nietzsche quote on the surest way to corrupt a youth', 'Nietzsche', 'contain'),
            pic('writing', '43-Writing-Hunter-Thompson-Happier-Man.jpg', 'Hunter S. Thompson quote about who is the happier man', 'Hunter S. Thompson', 'contain'),
            pic('writing', '44-Writing-Johnny-Cash-America.png', 'Red poster: America is the continent, not this country. Johnny Cash', 'Johnny Cash', 'contain'),
            pic('writing', '45-Writing-CS-Lewis-How-We-Behave.jpeg', 'C.S. Lewis passage How We Behave with highlighted lines', 'C.S. Lewis, how we behave', 'contain')
          ]
        },
        {
          title: 'Letters and curiosities',
          caption: 'Notes, letters, and odd exercises.',
          images: [
            pic('writing', '46-Writing-Vonnegut-Ideas.jpg', 'Kurt Vonnegut on where he gets his ideas', 'Kurt Vonnegut, where ideas come from', 'contain'),
            pic('writing', '47-Writing-Rolling-Stones-Letter.jpg', 'A typed letter on Rolling Stones Ltd letterhead', 'A letter from the Rolling Stones', 'contain'),
            pic('writing', '48-Writing-Jim-Henson-Letter.jpeg', 'Jim Henson\'s letter to his children', 'Jim Henson\'s letter to his children', 'contain'),
            pic('writing', '49-Writing-Mirror-Writing.jpg', 'Writing on a framed mirror', 'Writing on a mirror', 'contain'),
            pic('writing', '50-Writing-Foot-And-Hand.png', 'Handwritten exercise: lift your foot and draw the number 6 with your hand', 'Foot and hand', 'contain'),
            pic('writing', '51-Writing-Lemons-Gin-Tonic.jpg', 'Yellow poster: When life hands you lemons, make gin and tonic', 'Lemons, gin, and tonic', 'contain')
          ]
        },
        {
          title: 'Love and loss',
          caption: 'What we write when it matters.',
          images: [
            pic('writing', '52-Writing-Kiss-Is-A-Trick.png', 'Quote: A kiss is a lovely trick designed by nature to stop speech when words become superfluous. Ingrid Bergman', 'A kiss is a lovely trick', 'contain'),
            pic('writing', '53-Writing-Love-Hurts.jpg', 'Text on a hazy sky about being in love', 'Neil Gaiman, on love', 'contain'),
            pic('writing', '54-Writing-Whispered-Into-My-Heart.jpg', 'Text: For it was not into my ear you whispered, but into my heart', 'Into my heart', 'contain'),
            pic('writing', '55-Writing-Never-Give-Up.gif', 'Text: Never give up on someone you can\'t go a day without thinking about', 'Never give up on someone', 'contain'),
            pic('writing', '56-Writing-Miranda-July.png', 'Miranda July quote about life being ridiculously gorgeous', 'Miranda July', 'contain'),
            pic('writing', '57-Writing-EE-Cummings.jpg', 'Hand-lettered e.e. cummings quote about being nobody but yourself', 'e.e. cummings', 'contain'),
            pic('writing', '58-Writing-Dreams-Lawrence.jpg', 'The poem Dreams on black, about people who dream by day', 'Dreams, by Lawrence', 'contain'),
            pic('writing', '59-Writing-Today-Will-Be-Awesome.jpg', 'Lettering: Today will be awesome', 'Today will be awesome', 'contain')
          ]
        },
        {
          title: 'Say it loud',
          caption: 'Quotes with the volume up.',
          images: [
            pic('writing', '60-Writing-Art-College-Attitude.jpg', 'Yellow poster about what art college gave the speaker', 'All I got was this attitude', 'contain'),
            pic('writing', '61-Writing-Palahniuk-Revenge.jpg', 'Chuck Palahniuk quote about happiness being the best revenge', 'Chuck Palahniuk', 'contain'),
            pic('writing', '62-Writing-Expect-The-Best.jpg', 'Poster: Expect the best, be prepared for the worst, and do your own thing', 'Do your own thing', 'contain'),
            pic('writing', '63-Writing-Go-After-Her.jpg', 'A long text rant about going after love', 'A rant on love', 'contain'),
            pic('writing', '64-Writing-Save-The-Planet.jpg', 'George Carlin on saving the planet and the people', 'George Carlin, save the planet', 'contain'),
            pic('writing', '65-Writing-HS-Thompson-Advocate.jpg', 'Hunter S. Thompson quote beside a smoking portrait', 'Hunter S. Thompson', 'contain'),
            pic('writing', '66-Writing-Rent-Free.jpg', 'Window text: Holding a grudge is letting someone live rent-free in your head', 'Rent-free', 'contain'),
            pic('writing', '67-Writing-Made-In-America.jpeg', 'Map of the United States with a quote about great American things', 'Made in America', 'contain')
          ]
        },
        {
          title: 'Odd and wonderful',
          caption: 'Charts, signs, and strange things.',
          images: [
            pic('writing', '68-Writing-Give-Away-Your-Ideas.jpg', 'A man holding a sign: do not covet your ideas, give away everything you know', 'Give away what you know', 'contain'),
            pic('writing', '69-Writing-Am-I-A-Horse.jpg', 'Flow chart titled Am I a horse', 'Am I a horse?', 'contain'),
            pic('writing', '70-Writing-Aroma-Wheel.jpg', 'A wine aroma wheel', 'The wine aroma wheel', 'contain'),
            pic('writing', '71-Writing-Cubism-Abstract-Art-Chart.gif', 'Chart tracing the influences of cubism and abstract art', 'Cubism and Abstract Art, the chart', 'contain'),
            pic('writing', '72-Writing-Ear-Horns.gif', 'A man wearing large parabolic ear horns', 'Ear horns', ''),
            pic('writing', '73-Writing-Keep-Calm-Original.jpg', 'The original Keep Calm and Carry On poster', 'Keep Calm and Carry On, the original', 'contain')
          ]
        }
      ] },
      { id: 'ux-ui', title: 'UX/UI', bg: '#0e8c8a', fg: '#fff', width: 42, height: 168, spreads: [
        {
          title: 'The spectrum of UX',
          caption: 'Where UX sits.',
          images: [
            pic('ux-ui', '01-UX-UI-UX-Spectrum-Venn.gif', 'Venn diagram titled The Spectrum of User Experience', 'The spectrum of user experience', 'contain')
          ]
        },
        {
          title: 'What is UX?',
          caption: 'The disciplines inside it.',
          images: [
            pic('ux-ui', '02-UX-UI-UX-Venn.jpg', 'Venn diagram of design, interface design, information architecture, and interaction design with UX at the center', 'What sits inside UX', 'contain'),
            pic('ux-ui', '03-UX-UI-What-Is-UX.jpeg', 'A diagram of the disciplines of user experience', 'What is user experience?', 'contain')
          ]
        },
        {
          title: 'Venns',
          caption: 'Where the circles overlap.',
          images: [
            pic('ux-ui', '04-UX-UI-Good-Infodesign-Venn.png', 'Venn diagram of what makes good information design', 'What makes good information design', 'contain'),
            pic('ux-ui', '05-UX-UI-Critical-Design-Thinking.jpg', 'Venn diagram of critical thinking and design thinking', 'Critical thinking and design thinking', 'contain'),
            pic('ux-ui', '06-UX-UI-Fundamentals-Of-Experience-Design.png', 'Infographic on the fundamentals of experience design', 'Fundamentals of experience design', 'contain')
          ]
        },
        {
          title: 'Journeys and decisions',
          caption: 'How people choose.',
          images: [
            pic('ux-ui', '07-UX-UI-Design-As-Meaningful-Interaction.jpg', 'Slide on design as meaningful interaction in layers', 'Design as meaningful interaction', 'contain'),
            pic('ux-ui', '08-UX-UI-Experience-Map.jpg', 'An experience map for a social game', 'An experience map for a social game', 'contain'),
            pic('ux-ui', '09-UX-UI-Customer-Journey-Cycle.jpg', 'A customer journey purchase cycle in hexagons', 'A customer journey, as a cycle', 'contain'),
            pic('ux-ui', '10-UX-UI-Consumer-Decision.jpg', 'Chart of rational and emotional factors in a consumer decision', 'Rational and emotional decisions', 'contain')
          ]
        },
        {
          title: 'Habits',
          caption: 'How behavior sticks.',
          images: [
            pic('ux-ui', '11-UX-UI-Hook-Model.png', 'The Hook Model with trigger, action, variable reward, and investment', 'The Hook Model', 'contain'),
            pic('ux-ui', '12-UX-UI-Path-To-Habit.png', 'Five steps from disrupt to maintain a new behavior', 'Disrupt, activate, reinforce, train, maintain', 'contain'),
            pic('ux-ui', '13-UX-UI-Habit-Automaticity.png', 'Graph of how habits become automatic over days', 'How habits become automatic', 'contain'),
            pic('ux-ui', '14-UX-UI-Habits-Venn.gif', 'Venn diagram of knowledge, skill, and desire forming habits', 'Knowledge, skill, and desire', 'contain'),
            pic('ux-ui', '15-UX-UI-Valley-Of-Paradox.png', 'Curves of association and dissociation across a valley of paradox', 'The valley of paradox', 'contain')
          ]
        },
        {
          title: 'Sketching first',
          caption: 'Pencil before pixels.',
          images: [
            pic('ux-ui', '16-UX-UI-Sketch-Before-Design.webp', 'Pencil wireframe sketches on paper', 'Sketch before you design', 'contain'),
            pic('ux-ui', '17-UX-UI-Notebook-App-Sketches.jpg', 'A notebook with mobile app wireframes sketched in it', 'Sketching an app in a notebook', 'contain'),
            pic('ux-ui', '18-UX-UI-Storyboard-Sketches.jpg', 'Storyboard sketches for an interaction perspective', 'Storyboarding an interaction', 'contain'),
            pic('ux-ui', '19-UX-UI-Storyboarding-Sketchnote.jpg', 'A sketchnote about storyboarding as a design tool', 'A sketchnote on storyboarding', 'contain'),
            pic('ux-ui', '20-UX-UI-Sketch-To-Screen.png', 'Sketched page layouts becoming web design elements', 'From sketch to screen', 'contain'),
            pic('ux-ui', '21-UX-UI-Wireframe-Flow-Sketch.png', 'A wireframe flow sketched on a page', 'A wireframe flow', 'contain')
          ]
        },
        {
          title: 'Grids, forms, and fidelity',
          caption: 'From rough to refined.',
          images: [
            pic('ux-ui', '22-UX-UI-Low-High-Fidelity.png', 'Low fidelity and high fidelity wireframes side by side', 'Low and high fidelity wireframes', 'contain'),
            pic('ux-ui', '23-UX-UI-Fidelity-Differences.png', 'Thumbnail comparing low and high fidelity wireframes', 'Low versus high fidelity', 'contain'),
            pic('ux-ui', '24-UX-UI-Grid-Sketch.jpg', 'A pale grid sketch for a page', 'A grid sketch', 'contain'),
            pic('ux-ui', '25-UX-UI-Pink-Column-Grid.jpg', 'A web layout with a pink column grid overlay', 'A column grid, overlaid', 'contain'),
            pic('ux-ui', '26-UX-UI-Do-Not-Want-Form.jpg', 'A gift complaint form headed Do Not Want', 'The Do Not Want form', 'contain'),
            pic('ux-ui', '27-UX-UI-Campfire-Notes.jpeg', 'A sketch of a campfire with notes on active and passive inspiration', 'Campfire, step three', 'contain'),
            pic('ux-ui', '28-UX-UI-While-Do-While.jpg', 'Flowcharts of a while loop and a do-while loop', 'While and do-while', 'contain'),
            pic('ux-ui', '29-UX-UI-Green-Circle-Grid.gif', 'A green circle on a grid beside shape options', 'A circle on a grid', 'contain')
          ]
        },
        {
          title: 'Ubiquitous computing',
          caption: 'Everything connected.',
          images: [
            pic('ux-ui', '30-UX-UI-Ubicomp-Diagram.jpg', 'A diagram of ubiquitous computing', 'Ubiquitous computing', 'contain')
          ]
        },
        {
          title: 'Layers',
          caption: 'Separating the concerns.',
          images: [
            pic('ux-ui', '31-UX-UI-Layered-Architecture.jpg', 'Diagram of application architecture in presentation, business, and data layers', 'Layered architecture', 'contain'),
            pic('ux-ui', '32-UX-UI-Layer-Diagram.jpeg', 'A layered system diagram in green, orange, and red', 'A layered system', 'contain')
          ]
        },
        {
          title: 'Systems and process',
          caption: 'How the parts fit.',
          images: [
            pic('ux-ui', '33-UX-UI-Systems-Map.jpeg', 'A dense map of a complex system', 'A complex system, mapped', 'contain'),
            pic('ux-ui', '34-UX-UI-Users-Tech-Business.png', 'Pyramid with users, technology, and business at the corners', 'Users, technology, business', 'contain'),
            pic('ux-ui', '35-UX-UI-Process-Loops.png', 'Diagram of adaptive and iterative loops through exploration', 'Adaptive and iterative loops', 'contain')
          ]
        },
        {
          title: 'John Dewey',
          caption: 'On learning by doing.',
          images: [
            pic('ux-ui', '36-UX-UI-Dewey-Not-Preparation.jpg', 'Quote: Education is not preparation for life; education is life itself. John Dewey', 'John Dewey, education is life itself', 'contain'),
            pic('ux-ui', '37-UX-UI-Dewey-Teach-Today.jpg', 'Quote: If we teach today\'s students as we taught yesterday\'s, we rob them of tomorrow. John Dewey', 'John Dewey, we rob them of tomorrow', 'contain'),
            pic('ux-ui', '38-UX-UI-Dewey-Desire-To-Learn.jpg', 'Quote: The most important attitude that can be formed is that of desire to go on learning. John Dewey', 'John Dewey, the desire to go on learning', 'contain'),
            pic('ux-ui', '39-UX-UI-Dewey-Responsibility.jpg', 'Quote on education having no more serious responsibility. John Dewey', 'John Dewey, on responsibility', 'contain')
          ]
        },
        {
          title: 'Learning and values',
          caption: 'Ladders, chains, and maps.',
          images: [
            pic('ux-ui', '40-UX-UI-Dewey-Give-Pupils-Something.png', 'Quote: Give the pupils something to do, not something to learn. John Dewey', 'John Dewey, something to do', 'contain'),
            pic('ux-ui', '41-UX-UI-Ladder-Of-Inference.jpg', 'A ladder of inference drawn inside a person', 'The ladder of inference', 'contain'),
            pic('ux-ui', '42-UX-UI-Means-End-Chain.jpg', 'Pyramid of values, consequences, and attributes', 'A means-end chain', 'contain'),
            pic('ux-ui', '43-UX-UI-Hierarchical-Value-Map.jpeg', 'A hierarchical value map of boxes and links', 'A hierarchical value map', 'contain'),
            pic('ux-ui', '44-UX-UI-Inclusive-Design.jpeg', 'Inclusive design grid of permanent, temporary, and situational impairments', 'Inclusive design, by Microsoft', 'contain')
          ]
        },
        {
          title: 'Interaction and affordance',
          caption: 'What the object says it can do.',
          images: [
            pic('ux-ui', '45-UX-UI-Gesture-Card.jpg', 'A chart of touch gestures: tap, drag, flick, pinch, spread, press', 'Touch gestures', 'contain'),
            pic('ux-ui', '46-UX-UI-Device-Interactions.jpeg', 'Icons for coherence, synchronization, screen sharing, and device shifting', 'How devices work together', 'contain'),
            pic('ux-ui', '47-UX-UI-Remote-Affordance.jpeg', 'Two remote controls with handwritten labels taped on', 'Remote affordances, relabeled', 'contain'),
            pic('ux-ui', '48-UX-UI-Dashboard-UI.jpg', 'A dashboard with dials and charts', 'A dashboard', 'contain'),
            pic('ux-ui', '49-UX-UI-UI-Controls.webp', 'A colorful set of sliders, dials, and switches', 'Controls and sliders', ''),
            pic('ux-ui', '50-UX-UI-Information-Scent.jpg', 'Diagram of information scent and effort', 'Information scent', 'contain')
          ]
        },
        {
          title: 'Websites, part one',
          caption: 'Sites worth studying.',
          images: [
            pic('ux-ui', '51-UX-UI-Qubiq-Site.jpg', 'A cyan FAQ page for Qubiq with a hexagon logo', 'Qubiq, FAQ page', 'contain'),
            pic('ux-ui', '52-UX-UI-Business-Design-Site.jpg', 'A website on a monitor about transformative business design', 'A business design site', 'contain'),
            pic('ux-ui', '53-UX-UI-Mark-Shale-Site.jpg', 'An orange and black web page for Mark Shale', 'Mark Shale', 'contain'),
            pic('ux-ui', '54-UX-UI-TOW-Site.jpg', 'A white web page shown on a monitor', 'A gallery site on a monitor', 'contain'),
            pic('ux-ui', '55-UX-UI-Detail-Site.jpg', 'A dark website with an olive photograph', 'A site in olive and amber', ''),
            pic('ux-ui', '56-UX-UI-Lucid-Site.png', 'A cream website with the word Lucid', 'Lucid', 'contain'),
            pic('ux-ui', '57-UX-UI-Hip-Store-Site.jpg', 'A menswear store web page with photos in a grid', 'The Hip Store', 'contain'),
            pic('ux-ui', '58-UX-UI-Work-Clients-Site.jpg', 'A gray and orange studio site with navigation tabs', 'A studio site', 'contain')
          ]
        },
        {
          title: 'Websites, part two',
          caption: 'More sites and screens.',
          images: [
            pic('ux-ui', '59-UX-UI-Christian-Woo-Site.jpg', 'A web page of a craftsman at a bench', 'A craftsmanship site', 'contain'),
            pic('ux-ui', '60-UX-UI-Steven-Holl-Site.png', 'A website for an architecture studio over a mountain valley', 'Steven Holl Architects', 'contain'),
            pic('ux-ui', '61-UX-UI-News-Site.jpg', 'A dark news website with sports photos', 'A news site', 'contain'),
            pic('ux-ui', '62-UX-UI-Imac-Site.jpg', 'A coral and white website on an iMac', 'A site on an iMac', 'contain'),
            pic('ux-ui', '63-UX-UI-Bonobos-Checkout.png', 'The Bonobos checkout page', 'Bonobos checkout', 'contain'),
            pic('ux-ui', '64-UX-UI-Eastfield-Site.jpg', 'A website welcoming people to Eastfield Village on an iMac', 'Eastfield Village', 'contain'),
            pic('ux-ui', '65-UX-UI-Magazine-Spread.jpg', 'A magazine spread with two portraits and text columns', 'A magazine spread', 'contain'),
            pic('ux-ui', '66-UX-UI-Postcards-Infographic.jpg', 'A pale blue infographic with big numbers 169 and 347', 'An infographic in blue', 'contain')
          ]
        },
        {
          title: 'Icons and marks',
          caption: 'Small symbols with a big job.',
          images: [
            pic('ux-ui', '67-UX-UI-Iconwerk-Set.png', 'A set of small interface icons on white', 'An interface icon set', 'contain'),
            pic('ux-ui', '68-UX-UI-Gold-Icons-Furniture.jpg', 'Gold line icons of furniture on black', 'Furniture icons', ''),
            pic('ux-ui', '69-UX-UI-Gold-Icons-Weather.jpg', 'Gold line icons of weather on black', 'Weather icons', ''),
            pic('ux-ui', '70-UX-UI-Gold-Icons-Tools.jpg', 'Gold line icons of tools on black', 'Tool icons', ''),
            pic('ux-ui', '71-UX-UI-Outdoor-Icons.jpg', 'Black icons of camping and outdoors gear', 'Outdoor icons', 'contain'),
            pic('ux-ui', '72-UX-UI-Vintage-Logos.jpg', 'A grid of small vintage logos', 'Vintage logos', 'contain'),
            pic('ux-ui', '73-UX-UI-Logo-Sheet.jpg', 'A dense black and white sheet of logos and marks', 'A sheet of marks', 'contain'),
            pic('ux-ui', '74-UX-UI-Bat-Pattern.jpg', 'A pattern of black bat silhouettes', 'A bat pattern', 'contain')
          ]
        },
        {
          title: 'Shapes and strangeness',
          caption: 'Odd images I keep.',
          images: [
            pic('ux-ui', '75-UX-UI-Futurists-Collage.jpg', 'A collage of a bearded man over a modernist building with an elk', 'Futurist collage', ''),
            pic('ux-ui', '76-UX-UI-Camaro-Speedometer.jpg', 'A round speedometer from a 1967 Camaro', 'A 1967 Camaro speedometer', ''),
            pic('ux-ui', '77-UX-UI-Tined-Geometry.jpg', 'A pale line drawing of a double pyramid', 'A geometric line drawing', ''),
            pic('ux-ui', '78-UX-UI-Fibonacci-Spiral.png', 'A Fibonacci spiral drawn in squares', 'The Fibonacci spiral', 'contain'),
            pic('ux-ui', '79-UX-UI-TV-Promo-Collage.jpg', 'A collage of TV promo frames with faces', 'A TV promo collage', ''),
            pic('ux-ui', '80-UX-UI-Repeated-Faces.jpg', 'Repeated portraits of a woman in a grid on black', 'Faces, repeated', ''),
            pic('ux-ui', '81-UX-UI-Hand-Strings.jpeg', 'A black and white hand with strings above it', 'A hand on strings', ''),
            pic('ux-ui', '82-UX-UI-Houdini-Collage.jpg', 'A collage of animals and hands', 'A collage in pale blue', '')
          ]
        },
        {
          title: 'Time, loops, and objects',
          caption: 'Cycles and things.',
          images: [
            pic('ux-ui', '83-UX-UI-Computer-Sketches.png', 'Old sketches of computer interfaces and a monitor', 'Early computer interface sketches', 'contain'),
            pic('ux-ui', '84-UX-UI-Feedback-Loop.jpg', 'A teal feedback loop diagram', 'A feedback loop', 'contain'),
            pic('ux-ui', '85-UX-UI-Time-Diagram.jpg', 'A diagram of future, past, here, now, and elsewhere', 'Past, future, here, elsewhere', 'contain'),
            pic('ux-ui', '86-UX-UI-Signpost-Distances.png', 'A signpost listing distances to cities around the world', 'A signpost to everywhere', ''),
            pic('ux-ui', '87-UX-UI-Glowing-Molecules.jpg', 'Glowing molecules on black', 'Glowing molecules', ''),
            pic('ux-ui', '88-UX-UI-Parking-Graphic.png', 'Graphic of parking meters beside a poster and a diagram', 'A parking system', 'contain'),
            pic('ux-ui', '89-UX-UI-Turntable.jpg', 'A white turntable with a clear lid', 'A turntable', ''),
            pic('ux-ui', '90-UX-UI-Striped-Sphere.gif', 'An orange striped sphere on black', 'A striped sphere', '')
          ]
        },
        {
          title: 'People and ideas',
          caption: 'Faces, books, and a good question.',
          images: [
            pic('ux-ui', '91-UX-UI-Boss-And-Leader.jpeg', 'Illustration comparing a boss driving workers and a leader pulling with them', 'Boss and leader', 'contain'),
            pic('ux-ui', '92-UX-UI-Club-Pencils.jpg', 'Pencils stamped with club names in a row', 'Club pencils', 'contain'),
            pic('ux-ui', '93-UX-UI-Corita-Rules.jpg', 'Orange sheet listing ten rules for an art department', 'Corita Kent, the art department rules', 'contain'),
            pic('ux-ui', '94-UX-UI-Functional-Graphic-Design.jpg', 'The book cover of Functional Graphic Design in the 20s', 'Functional Graphic Design in the 20s', 'contain'),
            pic('ux-ui', '95-UX-UI-TV-With-Wires.jpg', 'A black and white photo of a small TV with wires', 'A TV with wires', ''),
            pic('ux-ui', '96-UX-UI-Norman-Klein.jpg', 'A black ink caricature of a tall man', 'An ink caricature', ''),
            pic('ux-ui', '97-UX-UI-Chalkboard-Student.jpg', 'A student in glasses at a chalkboard', 'A student at the chalkboard', ''),
            pic('ux-ui', '98-UX-UI-Landscape.jpg', 'A pastel landscape with a lake and mountains', 'A landscape', '')
          ]
        },
        {
          title: 'Rules, jokes, and spirals',
          caption: 'The last odds and ends.',
          images: [
            pic('ux-ui', '99-UX-UI-Developers-Comic.jpeg', 'A comic of developers talking about code and variables', 'A developer comic', 'contain'),
            pic('ux-ui', '100-UX-UI-We-Design-Everything.jpg', 'A black sign listing what a studio designs and for how much', 'We design everything', 'contain'),
            pic('ux-ui', '101-UX-UI-Interactive-Narrative-Venn.png', 'Venn diagram of ludology, narratology, and game design', 'Interactive narrative design', 'contain'),
            pic('ux-ui', '102-UX-UI-Vitsoe-Ten-Principles.jpeg', 'Ten principles for good design on a teal page', 'Dieter Rams, ten principles', 'contain'),
            pic('ux-ui', '103-UX-UI-Thinking-At-A-Desk.jpeg', 'A sketch of a person at a computer with thoughts in a cloud', 'A person thinking at a computer', 'contain'),
            pic('ux-ui', '104-UX-UI-Misty-Window.jpg', 'A misted window with a faint drawing', 'A misted window', ''),
            pic('ux-ui', '105-UX-UI-Spiral-Model.png', 'A spiral model of software development', 'The spiral model', 'contain'),
            pic('ux-ui', '106-UX-UI-APARTS.jpg', 'A sheet reading APARTS with prompts for each letter', 'APARTS', 'contain')
          ]
        }
      ] },
      { id: 'weird-stuff', title: 'Weird Stuff', bg: 'repeating-linear-gradient(45deg, #d8a21f 0 8px, #b8860f 8px 16px)', fg: '#1a1304', width: 50, height: 176, spreads: [] }
    ]
  };
  window.NOTEBOOK_PIC = pic;
})();
