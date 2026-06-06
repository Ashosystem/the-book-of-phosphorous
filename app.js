'use strict';

// ── CHAPTER DATA ──────────────────────────────────────────────────────────────

const CHAPTERS = [
  {
    n: 1,
    title: "The Breath, the Word, & the Whisper",
    sections: [
      { t: "ci", l: [
        "They sat on the heath",
        "Where martyrs fell,",
        "Reading the Apocryphon.",
        "And they heard the words as they read,",
        "and they became absorbed by what they heard.",
        "And the voice differed from the text.",
        "And this is what her voice said."
      ]},
      { t: "l", l: [
        "Sophia erred,",
        "And she felt remorse,",
        "And she hid herself,",
        "In the ninth sphere,",
        "Unable to reunite with her family,",
        "Until she healed that cosmic wound."
      ]},
      { t: "l", l: [
        "And Kakos was his name.",
        "He was as hubristic as he was blind.",
        "And he was perverse.",
        "And he was without purpose."
      ]},
      { t: "l", l: [
        "So he produced an inferior image of his perfection,",
        "Or so he thought,",
        "To toy with,",
        "And to outwit."
      ]},
      { t: "l", l: [
        "But because he was flawed,",
        "So too was his erected cage.",
        "Constrained by perfection beyond his dominion.",
        "But he saw it not,",
        "Because in his reflection,",
        "He saw only himself."
      ]},
      { t: "l", l: [
        "So he spoke his world into being,",
        "Over seven long days,",
        "And it exhausted him.",
        "And he was most proud."
      ]},
      { t: "l", l: [
        "And the world was most beautiful,",
        "And overflown with ecologies,",
        "And that was not his doing."
      ]},
      { t: "l", l: [
        "And it was soon full of towers,",
        "And thrones,",
        "And edicts,",
        "And all that was high and low.",
        "And that was his doing."
      ]},
      { t: "l", l: [
        "Many of them worshipped at the foot of the heights,",
        "And Kakos smiled.",
        "Many of them feared his dominion,",
        "And Kakos smiled.",
        "And a few of them loved the ecologies,",
        "And Kakos eviscerated them."
      ]},
      { t: "l", l: [
        "Sophia saw her malformed offspring",
        "That it was vicious",
        "That it was glutinous",
        "That it was unrepentant",
        "That it was irreconcilable",
        "And she felt great shame.",
        "Such damage had been done,",
        "And would be done",
        "In that great fissure."
      ]},
      { t: "l", l: [
        "So she said",
        "“I will not rest",
        "Until these tiny shards of divinity",
        "Are emancipated",
        "And reunited within the loving womb.”"
      ]},
      { t: "l", l: [
        "And so she called upon the Pleroma",
        "To conspire as one",
        "To liberate those little slivers",
        "And savour those pretty ecologies,",
        "And to expunge that malign demon",
        "Forevermore."
      ]},
      { t: "l", l: [
        "The Pleroma consented",
        "And they set about conspiring",
        "To undo that entropic destiny",
        "And plant three kernels upon that tumbling orb",
        "So that it might be saved",
        "And one day turned",
        "From a prison into a paradise."
      ]},
      { t: "l", l: [
        "Sophia may have tumbled",
        "Down to the ninth sphere",
        "But with a true plan set",
        "Might lower herself",
        "Not in deference to an above",
        "But to nurture the ground below",
        "Until it becomes heavenly, too."
      ]},
      { t: "l", l: [
        "Their three-pronged plan was set",
        "Three seeds of doubt",
        "To deceive the deceiver",
        "To redignify the divine."
      ]},
      { t: "l", l: [
        "And so Sophia opened her mouth.",
        "Breathed her breath,",
        "Spoke her word,",
        "And whispered her secret."
      ]},
      { t: "l", l: [
        "Through Sophia’s breath",
        "A spark of divinity was blown into humanity.",
        "And that divinity turned to ash in some,",
        "And it shone brightly in others."
      ]},
      { t: "c", l: [
        "An intrinsic hope,",
        "To bring divinity into the world."
      ]},
      { t: "l", l: [
        "Through Sophia’s word",
        "The world was beautiful.",
        "Despite its malign maker,",
        "It was everywhere elegant."
      ]},
      { t: "l", l: [
        "Kakos,",
        "In his ignorance,",
        "Had been constrained by grace,",
        "And conditioned by divine symmetry."
      ]},
      { t: "l", l: [
        "And so every ugly aspect of his creation",
        "Had birthed a beautiful other.",
        "Ignorance beget knowledge.",
        "Greed beget generosity.",
        "Pride beget humility.",
        "Disparity beget equality.",
        "Verticality beget horizontality.",
        "Selfishness beget solidarity.",
        "Domination beget freedom."
      ]},
      { t: "l", l: [
        "And it was said",
        "“The demons’ own names,",
        "Given by Kakos,",
        "Are mighty names.",
        "But the powers’ names reflecting the glory above",
        "Will bring about the demons’ destruction",
        "And remove their power.",
        "That is why each has two names.”"
      ]},
      { t: "c", l: [
        "An extrinsic hope,",
        "To know divinity in the world."
      ]},
      { t: "l", l: [
        "Through Sophia’s whisper",
        "A secret was given,",
        "Which would anger Kakos greatly,",
        "If he knew of its omen."
      ]},
      { t: "l", l: [
        "And that secret was a promise",
        "To descend to the world",
        "And hold us in her arms",
        "And incubate us in her womb",
        "And feed us from her breast",
        "And sing to us with her lips",
        "And reward us in infinitude for the trial we had overcome."
      ]},
      { t: "l", l: [
        "If only we might clear the way",
        "And kill that thing",
        "Which kept the key",
        "The door between hell and paradise."
      ]},
      { t: "l", l: [
        "And once unlocked",
        "Unbridled divinity would reunite",
        "This sacred orb",
        "With holy community.",
        "Symmetry without division.",
        "Difference without struggle."
      ]},
      { t: "c", l: [
        "A teleological hope,",
        "To invite everlasting divinity into the world.",
        "And her name would be",
        "Duosophia."
      ]},
      { t: "l", l: [
        "The Pleroma conspired",
        "To prepare the good god to be",
        "And that was her name."
      ]},
      { t: "l", l: [
        "And she would be perfect,",
        "And bring perfection unto them,",
        "And bring perfection unto that world.",
        "And she wanted nothing more."
      ]},
      { t: "l", l: [
        "But Kakos stood in the way.",
        "Forceful in his nature,",
        "Oozing venomous corrosion.",
        "And she could not approach."
      ]},
      { t: "l", l: [
        "Not this world,",
        "Sick as it was,",
        "Not till the way was cleared,",
        "By some being more capable than she",
        "To partake in righteous vengeance."
      ]},
      { t: "l", l: [
        "But how to convince",
        "Those dim little sparks",
        "To rise up",
        "And organise",
        "And devour Kakos’ tower?"
      ]},
      { t: "l", l: [
        "Little by little is the only way",
        "They surmised.",
        "Plant subtle seeds,",
        "True enough to grow rebellion",
        "Slow enough not to rouse a tantrum too unbearable",
        "Little kernels of truth throughout the world,"
      ]},
      { t: "l", l: [
        "To insight those sparks",
        "To combine",
        "To ignite",
        "And to burn his demonic verticality to dust."
      ]},
      { t: "l", l: [
        "And from that dust",
        "Little seeds grow quickly now",
        "A beautiful garden raises",
        "As Duosophia descends",
        "To fix in place magnificence",
        "And let shards unshatter."
      ]},
      { t: "l", l: [
        "Thus, our task was set,",
        "To uncreate the wrongful world",
        "And build in its place",
        "A thing of beauty",
        "Which might convince the Pleroma",
        "That this world is a worthy garden",
        "That Sophia did not err"
      ]},
      { t: "l", l: [
        "But merely hesitated",
        "And to invite a god",
        "Finally, one worthy of the name",
        "To arrive."
      ]},
      { t: "ci", l: [
        "And when the voice had finished speaking,",
        "She portrayed this image to them."
      ]},
      { t: "img" }
    ]
  },
  {
    n: 2,
    title: "The Sheer & Rhagma",
    sections: [
      { t: "ci", l: [
          "They had sat and listened to the words",
          "And they felt doubt",
          "And said",
          "“Is it not unjust to seek destruction, even of that which is unjust?",
          "Will we not become as bad as them?",
          "Should we tear down order entire, or settle for its reformation?",
          "Should Sophia’s purity not advocate for peace?”",
          "And what’s more",
          "“Why me?",
          "Why here?",
          "Why now?”",
          "And the voice smiled,"
        ] },
      { t: "l", l: [
          "You doubt because you are wise",
          "Every doubt holds a seed of wisdom",
          "But doubt doubt too",
          "Else become its vessel."
        ] },
      { t: "l", l: [
          "Voices lie",
          "By malice and by error",
          "And eyes too deceive."
        ] },
      { t: "l", l: [
          "But how else to discern the world",
          "Than to consider sights and sounds",
          "And judge their correspondence",
          "With what is known to be true?"
        ] },
      { t: "ci", l: [ "Then the voice said," ] },
      { t: "l", l: [
          "As for time",
          "You live in an era",
          "In which truth has been subsumed",
          "And demons rule the earth",
          "And matter is your only god",
          "And suffering is bountiful",
          "And worthy narrative is in decline",
          "And the gods have grown silent",
          "And the clock approaches midnight."
        ] },
      { t: "ci", l: [
          "Then there was silence for a moment or two",
          "And the voice stared deeply into them",
          "And said,"
        ] },
      { t: "l", l: [
          "Who is it who rules the world?",
          "And how did they ascend to greatness?",
          "What acts did they perform to rise?"
        ] },
      { t: "l", l: [
          "And what kind of world made those men thrive?",
          "And what kind of world did they leave?"
        ] },
      { t: "l", l: [
          "You know the answers",
          "Even as you recoil",
          "And close your eyes."
        ] },
      { t: "l", l: [
          "You know what kind of men they are",
          "And that they are not men at all",
          "But demons."
        ] },
      { t: "l", l: [
          "They contain no spark",
          "But something else entire",
          "The name of which I cannot say",
          "That corrosive catalyst",
          "That parasitic spirit",
          "Which infects the children of Kakos",
          "Must be blotted out."
        ] },
      { t: "l", l: [
          "They know.",
          "They know what kind of lives they lead.",
          "And the price of their wealth.",
          "They know that we are not all one",
          "That there are teams"
        ] },
      { t: "l", l: [
          "And theirs is not yours.",
          "They know the sound of war",
          "And that there is no victory that is not total."
        ] },
      { t: "l", l: [
          "If you do not know what they know",
          "It is not my judgment that you should doubt",
          "But your own."
        ] },
      { t: "l", l: [
          "They build machines",
          "And they demand reverence",
          "And they are awesome",
          "And they devour nature's magnificence",
          "And they feast on innocence."
        ] },
      { t: "l", l: [
          "And while their machines whirl",
          "Some of them writhe in ecstasy",
          "In orgiastic pleasure",
          "At the measure of their vile deeds",
          "And at their unspeakable perversions.",
          "While others stare blankly and motionless",
          "Feeling nothing",
          "As they extract",
          "Mana from Earth’s dying corpse."
        ] },
      { t: "l", l: [
          "Evil is real",
          "And it predominates",
          "And it cannot be reformed."
        ] },
      { t: "ci", l: [
          "And they said",
          "“Truly, the world is rife with sick individuals”",
          "To which the voice said,"
        ] },
      { t: "l", l: [
          "So credulous to think",
          "Only a few fruits are rotten",
          "When the tree entire",
          "Was grown from that same rot",
          "From its very roots",
          "And from its progenitors.",
          "All its lineage is infected",
          "In totality.",
          "And the edifice must thereby be felled",
          "If sweet fruit is what is desired."
        ] },
      { t: "l", l: [
          "The sickness of which you speak",
          "Did not hijack a kindly machine",
          "It did not infect a pure body",
          "It constructed the foundations upon which it was built."
        ] },
      { t: "l", l: [
          "Do you think it could have been otherwise?",
          "That those who rise above the rest",
          "And rule over those below",
          "And feel the call to construct kingdoms",
          "And manifest a world in their own image",
          "Could be saints?"
        ] },
      { t: "l", l: [
          "No.",
          "As long as the world",
          "Is made and unmade",
          "By men in high towers,",
          "As Kakos decreed,",
          "You will live in subjugation."
        ] },
      { t: "ci", l: [
          "They said",
          "“If what you say is true",
          "And every leader is bound to cruelty",
          "And greatness is only to be measured by its malevolence",
          "Why should I stay and listen",
          "When I could turn away and weep?”",
          "And the voice said,"
        ] },
      { t: "l", l: [
          "Did I not tell you",
          "Of Sophia’s word"
        ] },
      { t: "l", l: [
          "And the divine symmetry",
          "That built his tower on uncertain ground?"
        ] },
      { t: "l", l: [
          "Kakos predominates",
          "And it is right to make you weep",
          "But he is merely a husk",
          "A lesser god",
          "Whose towers rise as high as they might fall."
        ] },
      { t: "l", l: [
          "If sparks could only ignite",
          "That paper tiger",
          "Another order will be revealed",
          "In those fertile ashes."
        ] },
      { t: "l", l: [
          "It was always with you",
          "Everywhere in small places",
          "Wherever that suffocating grip can't reach."
        ] },
      { t: "l", l: [
          "You ask how anything could overcome such strength.",
          "I ask how strong a thing can be",
          "That cannot kill",
          "Something so weak",
          "So tiny",
          "So low"
        ] },
      { t: "l", l: [
          "As love between strangers.",
          "That cannot silence",
          "Those with no voice.",
          "That cannot excise resistance",
          "From those with no power",
          "No advocate",
          "No institution",
          "No cards to play."
        ] },
      { t: "l", l: [
          "What kind of god is that?",
          "Not a god at all",
          "But a mere trickster",
          "An illusionist",
          "Whose spell must be broken."
        ] },
      { t: "l", l: [
          "There is another force at work",
          "Quieter",
          "Smaller",
          "Maligned and denied by the tower",
          "But more resilient",
          "More eternal",
          "Than the Kakodynamia",
          "That constructed that watchful pillar."
        ] },
      { t: "l", l: [
          "That force has many names",
          "Those of movements, disciplines, sects, principles, virtues, knowings",
          "But they are unified",
          "In their deference",
          "Of love",
          "Equality",
          "And the adoration of difference."
        ] },
      { t: "l", l: [
          "To put it otherwise",
          "They are those who desire",
          "Nothing more",
          "Than to share in the garden",
          "Of Duosophia."
        ] },
      { t: "l", l: [
          "And it manifests in many forms",
          "And many hear its call",
          "And they persist in their pursuit",
          "Despite the crooked law",
          "That plagues this world."
        ] },
      { t: "ci", l: [
          "And they asked",
          "“What will it take to bring such a world into being?",
          "One that venerates love, equality and the adoration of difference",
          "Over such powers as rule this world today?"
        ] },
      { t: "ci", l: [
          "Need we only wait",
          "For this tardy angel",
          "To save us from our lot?”"
        ] },
      { t: "l", l: [
          "If you sit and wait",
          "One eventuality is bound to befall",
          "All the ones you love and are yet to love."
        ] },
      { t: "l", l: [
          "Innumerable eventualities",
          "Which all amount to one.",
          "I will show you."
        ] },
      { t: "ci", l: [
          "And the voice lifted them up",
          "And took them to the end of time",
          "And it was very soon indeed",
          "And very far away",
          "And it was over in an instant",
          "And it was dragged out over generations.",
          "Always different.",
          "Always the same.",
          "And they saw the oceans boiling",
          "And black rain pouring from the clouds",
          "And sickness saturated the air",
          "And meat was plentiful but could not be consumed"
        ] },
      { t: "ci", l: [
          "And the sorceries of man all failed",
          "And there was deathly darkness",
          "And there was burning light",
          "And there were no birds in the sky",
          "And the earth became sludge",
          "And the air became corrosive",
          "And the weight of Kakos was greater than the weight of his world",
          "And Gaia wheezed",
          "And the stench of rot was overwhelming",
          "And walls were constructed from the corpses",
          "And the ones who had survived",
          "Envied the ones who had succumbed.",
          "And the spark had faded",
          "And turned to ash.",
          "Then the voice said,"
        ] },
      { t: "l", l: [ "This is the Sheer." ] },
      { t: "ci", l: [
          "And they saw it again",
          "But it was different.",
          "Now it appeared to them as a great wall",
          "And it proceeded into the heavens",
          "And down towards the depths",
          "And to the west"
        ] },
      { t: "ci", l: [
          "And to the east",
          "And it was boundless.",
          "An infinite edifice",
          "Which could not be overcome",
          "Which could not be evaded",
          "It was total",
          "It was unending",
          "And it was dark",
          "And it was impenetrable.",
          "And they were filled with dread.",
          "The voice said,"
        ] },
      { t: "l", l: [
          "You have seen the Apeirokremnos.",
          "The death of all ends",
          "And we call it the Sheer."
        ] },
      { t: "l", l: [
          "This is the destination",
          "Towards which Kakodynamia inevitably drives.",
          "His engine can proceed in only one direction",
          "Arrival at the sheer will come",
          "One way or another",
          "One day or another."
        ] },
      { t: "l", l: [ "He knows this is where he heads" ] },
      { t: "l", l: [
          "He knows the consequences of his whirring",
          "And he will never stop",
          "Not of his own accord."
        ] },
      { t: "l", l: [
          "He has designed myths",
          "To speak of the Sheer",
          "To explain it",
          "To render it fated",
          "Or to embellish it with meaning."
        ] },
      { t: "l", l: [
          "But it is anything but meaningful",
          "It is the inevitability",
          "Of constructing a machine",
          "Which devours meaning",
          "And leaves an abyss in its wake."
        ] },
      { t: "l", l: [
          "The children of Kakos",
          "Are touched by his malevolence",
          "And construct his tower higher",
          "And pull the Sheer ever closer."
        ] },
      { t: "l", l: [
          "It is those demons",
          "By their words and by their actions",
          "That bring the Sheer to humanity's door."
        ] },
      { t: "l", l: [
          "Kakos tempts",
          "Kakos enables",
          "Kakos encourages,",
          "But he does not act."
        ] },
      { t: "l", l: [
          "It is those who hear his call",
          "Who grasp his bribes",
          "Who hoard his bounty",
          "That are his limbs."
        ] },
      { t: "l", l: [
          "They are the ones",
          "Who act",
          "Who drag us forward",
          "Who pull the crank",
          "Who turn the windlass."
        ] },
      { t: "l", l: [
          "There are many paths",
          "Which lead here.",
          "Many ways for the divine spark",
          "To be burned out."
        ] },
      { t: "l", l: [
          "How we reach the Sheer",
          "Cannot be known in exactitude"
        ] },
      { t: "l", l: [
          "And it does not matter",
          "Which path we take",
          "Since all roads taken by the Kakodynamia",
          "Lead us to the same destination."
        ] },
      { t: "ci", l: [
          "They stared blankly",
          "Upon the horrors they had witnessed",
          "And upon the Sheer",
          "And upon the promise of their fatedness",
          "Still ringing in their ears",
          "And they began to weep."
        ] },
      { t: "l", l: [
          "Now you see",
          "What will befall humanity",
          "On the impending course",
          "That was chosen by Kakos",
          "And made real by his demons."
        ] },
      { t: "l", l: [
          "But look closer",
          "And see",
          "The texture of that fate up close."
        ] },
      { t: "ci", l: [
          "And they were drawn in",
          "Closer to the sheer"
        ] },
      { t: "ci", l: [
          "And its darkness was suffocating",
          "And its scale was immeasurable",
          "And it was terrifying.",
          "But then",
          "As they stared in horror",
          "A glint caught their eye.",
          "A tiny fissure",
          "The smallest crack",
          "Barely visible",
          "But there nonetheless."
        ] },
      { t: "ci", l: [
          "And they peered closely",
          "At the illuminated cleft",
          "Trying to spy",
          "What lay beyond",
          "And the voice said,"
        ] },
      { t: "l", l: [
          "You have seen the Rhagma",
          "The flaw in your fated doom",
          "The eye of the needle",
          "Through which you might hope to break."
        ] },
      { t: "l", l: [
          "While you cannot see",
          "What lies beyond",
          "That narrow gate",
          "I promise you this",
          "It is magnificent."
        ] },
      { t: "l", l: [
          "Praise the pleroma",
          "For forcing the Rhagma into being",
          "Through Sophia’s lips",
          "Her breath",
          "Her word",
          "And now her whisper",
          "Upon which you now gaze."
        ] },
      { t: "ci", l: [
          "And they said",
          "“How might I praise them?”",
          "And the voice answered,"
        ] },
      { t: "l", l: [
          "Praise the pleroma",
          "Not through quiet reverence",
          "Nor through ecstatic dance",
          "But through making acts",
          "Which might bring humanity",
          "Into greater proximity",
          "With the light",
          "Which passes through Rhagma."
        ] },
      { t: "l", l: [
          "Divert from the Sheer",
          "Through acts of defiance",
          "Acts of revolution",
          "Acts of sabotage",
          "Until the tower is unmade."
        ] },
      { t: "l", l: [
          "And approach Rhagma",
          "Through acts of love",
          "Acts of equality",
          "Acts adoring of difference",
          "Until Dromos is made."
        ] },
      { t: "l", l: [
          "Praise the pleroma",
          "By amplifying Sophia's whisper",
          "Until it is deafening"
        ] },
      { t: "l", l: [
          "Until the tower shakes",
          "And Kakos quakes."
        ] },
      { t: "l", l: [
          "Make him learn that he is not a god",
          "But merely an abuser",
          "A coward",
          "Whose catalyst is abominable."
        ] },
      { t: "l", l: [
          "Too senseless to be omniscient",
          "Too gutless to be omnipotent",
          "Too myopic to be omnipresent",
          "Too flawed to be totalising",
          "In any act",
          "But omnicide."
        ] },
      { t: "ci", l: [
          "And they stared longingly",
          "Towards that fissure",
          "Which was a spark of hope",
          "Flickering on an edifice of suffering.",
          "And the voice took them back",
          "To the heath",
          "Where they sat",
          "And the voice said,"
        ] },
      { t: "l", l: [
          "Now you have seen",
          "The Sheer and the Rhagma",
          "And your duty too",
          "To construct the Dromos",
          "That holy road",
          "Towards sad history's end."
        ] },
      { t: "l", l: [
          "Learn the way to Rhagma.",
          "Study its shape",
          "Its character",
          "The way it sounds."
        ] },
      { t: "l", l: [
          "Learn to build Dromos",
          "The conditions of its growth",
          "The manner of its development",
          "The means of its flourishing"
        ] },
      { t: "l", l: [
          "Learn it by picturing it",
          "By envisioning it",
          "By articulating it",
          "By approximating its contours."
        ] },
      { t: "l", l: [
          "Learn it by doing it",
          "By stepping into the dark"
        ] },
      { t: "l", l: [
          "By listening",
          "And by failing."
        ] },
      { t: "ci", l: [
          "And they said",
          "“How can we learn the way?",
          "How will we find the path",
          "Leading to Rhagma?”"
        ] },
      { t: "l", l: [
          "You will learn to build Dromos",
          "Towards that divine crack",
          "By spying its faint light",
          "By hearing its sweet tonality."
        ] },
      { t: "l", l: [
          "You will be called",
          "Toward Rhagma",
          "If you are open",
          "And set to perceive",
          "The path of Phosphorus."
        ] }
    ]
  },
  {
    n: 3,
    title: "Idiomata of Phosphorus",
    sections: [
      { t: "ci", l: [
          "They remained there",
          "Upon the heath",
          "Eyes transfixed upon the voice",
          "Which spoke to them",
          "And they said,",
          "“Tell us of the path of light",
          "Which leads the way to Rhagma",
          "Which calls us towards paradise",
          "And away from our abyssal terminus",
          "Tell us of that dutied trail",
          "Which draws faint sparks",
          "Towards its light.”"
        ] },
      { t: "l", l: [
          "That thing you ask of",
          "Calling from the light",
          "To approach",
          "We call it Phosphorus."
        ] },
      { t: "l", l: [
          "And it goes by many names",
          "It is called Kryptophonia",
          "It is called Proklesis",
          "It is called Amygphos"
        ] },
      { t: "l", l: [
          "It is called Orthoscrysos",
          "It is called the shining thread."
        ] },
      { t: "l", l: [
          "It is the unbowed line",
          "With many obstructions",
          "Many diversions",
          "Which leads us to her",
          "Calling us towards",
          "The gateway of Duosophia."
        ] },
      { t: "ci", l: [
          "And they said,",
          "“How can we hear the call of phosphorus",
          "In this meagre dessert",
          "Which sits sadly in the oppressive shadow",
          "Of the Sheer”",
          "And the voice said,"
        ] },
      { t: "l", l: [
          "To hear that call",
          "Is a mysterious thing",
          "A riddled knot",
          "Which must be unpicked",
          "By each of you alone."
        ] },
      { t: "l", l: [
          "Through manoeuvres"
        ] },
      { t: "l", l: [
          "And reflections on manoeuvres",
          "You might become aligned",
          "With that faint light."
        ] },
      { t: "l", l: [
          "Find intersection with her light",
          "Until convergence is accomplished",
          "And that spark becomes a flame",
          "And that whisper becomes an exclamation."
        ] },
      { t: "l", l: [
          "This is your duty",
          "To orient yourself",
          "And your fellows",
          "With that shining thread."
        ] },
      { t: "l", l: [
          "To hear wisdom’s whisper",
          "Such that the path to Rhagma can be trod",
          "And Dromos built",
          "On the jagged road",
          "Towards her gentle womb."
        ] },
      { t: "ci", l: [
          "And they said",
          "“What is the form of the shining thread?",
          "What is the resemblance of Sophia’s whisper?”",
          "The voice replied,"
        ] },
      { t: "l", l: [
          "Sophia is not one",
          "She is in excess of three",
          "And the three are",
          "Passion, inspiration and contagion."
        ] },
      { t: "l", l: [
          "These are the registers",
          "Through which you might perceive",
          "And embody in your actions",
          "The golden light of Rhagma",
          "Illuminating the Phosphorus road."
        ] },
      { t: "l", l: [
          "The first shard of Phosphorus",
          "Its name is Passion",
          "It is the pavilion",
          "Through which the spark speaks."
        ] },
      { t: "l", l: [
          "Through Passion",
          "The heart is drawn",
          "Into proximity with Rhagma."
        ] },
      { t: "l", l: [
          "It is the pulling of the heart",
          "Towards the light",
          "Down the crooked road of Phosphorus."
        ] },
      { t: "l", l: [
          "Passion needs nothing",
          "But persistence",
          "And steadfastness",
          "In the light of Phosphorus",
          "And the brick of Dromos",
          "Which is laid in its stead."
        ] },
      { t: "l", l: [
          "Passion asks for nothing",
          "To glimpse Duosophia",
          "But that the heart is strong",
          "Which is the residence of the heart."
        ] },
      { t: "l", l: [
          "It is therefore Passion",
          "Upon which reliance must be made",
          "When all else fails",
          "Listen to the call of the heart."
        ] },
      { t: "l", l: [
          "The second shard of Phosphorus",
          "Its name is inspiration",
          "It is the urn",
          "From which knowledge is concealed",
          "And revealed."
        ] },
      { t: "l", l: [
          "Through Inspiration",
          "The gut is drawn",
          "Into proximity with Rhagma."
        ] },
      { t: "l", l: [
          "It is the guttural resonance",
          "Which sings sweet harmony",
          "Beconing the spark",
          "To follow the path of Phosphorus."
        ] },
      { t: "l", l: [
          "Inspiration cannot be summoned",
          "But only followed",
          "It arrives at its will",
          "And withdraws if it is ignored."
        ] },
      { t: "l", l: [
          "Inspiration asks",
          "That you follow its call",
          "And find the source",
          "From which it comes."
        ] },
      { t: "l", l: [
          "Inspirations cut",
          "Can be deep indeed",
          "And its repercussions",
          "Felt for millennia."
        ] },
      { t: "l", l: [
          "It is therefore Inspiration",
          "Which cuts the Phosphorus schism",
          "A trench which must be followed",
          "Led onward by the gut."
        ] },
      { t: "l", l: [
          "The third shard of Phosphorus",
          "Its name is Contagion",
          "It is the hive",
          "Which constitutes a piece of the divine."
        ] },
      { t: "l", l: [
          "Through Contagion",
          "The other beckons",
          "Into proximity with Rhagma."
        ] },
      { t: "l", l: [
          "It is the groundswell of the other",
          "Which calls us to approach",
          "As it stirs us to push on",
          "To march the valley of Phosphorus."
        ] },
      { t: "l", l: [
          "As sparks approach sparks",
          "They grow brighter",
          "Their excitement spreads",
          "And hearts begin to race."
        ] },
      { t: "l", l: [
          "Contagion is the strongest shard",
          "It is the body",
          "Through which all else proves its mettle."
        ] },
      { t: "l", l: [
          "Contagion is the magic",
          "Which Kakos cannot quash",
          "As its sum amounts",
          "To something vaster",
          "Than its dim lit parts."
        ] },
      { t: "l", l: [
          "It is therefore Contagion",
          "Which is the fusion of Phosphorus",
          "Gradually becoming a star",
          "Following the call of the other."
        ] },
      { t: "ci", l: [
          "They said,",
          "“I have known many",
          "Who feel passion,",
          "Recieve inspiration",
          "And have tasted contagion",
          "But know nothing of Sophia, Rhagma and the rest.",
          "Need they learn the lessons you have told?”",
          "The voice replied,"
        ] },
      { t: "l", l: [
          "The guidance of Phosphorus",
          "Cares not for fame",
          "Nor recognition."
        ] },
      { t: "l", l: [
          "It only hopes",
          "To be approached."
        ] },
      { t: "l", l: [
          "The guidance of Phosphorus",
          "Is seen without their knowledge",
          "It is heard without their recognition",
          "Of the terminus that calls",
          "Its stewards only hope",
          "For a brighter tomorrow."
        ] },
      { t: "l", l: [
          "Phosphorus has called",
          "Those who move history",
          "Towards Rhagma",
          "Though they do not know her name."
        ] },
      { t: "l", l: [
          "And Kakos drives",
          "Those who move history",
          "Towards the Sheer",
          "Though they know him by another name."
        ] },
      { t: "l", l: [
          "It enters them",
          "And shows them",
          "What could be",
          "Without their knowing."
        ] },
      { t: "l", l: [
          "Phosphorus’ name is not known",
          "But you have seen its lights",
          "In places of unity",
          "Places of common cause",
          "Places where love, equality, and the adoration of difference",
          "Are held in high regard."
        ] },
      { t: "l", l: [
          "Phosphorus therefore",
          "Is an inversion of faith",
          "It cares not if you believe",
          "Or even know its name",
          "But only that your acts",
          "Bring about its greater proximity."
        ] },
      { t: "ci", l: [
          "They said",
          "“You speak of the light and faith",
          "You have shown me oblivion",
          "And offered salvation",
          "Is this the voice",
          "Of the god of old books",
          "Or the gods of old stories",
          "Or something altogether other?”",
          "They voice said,"
        ] },
      { t: "l", l: [
          "The spark of which I speak",
          "Is spoken of in different terms",
          "By every god",
          "Worthy of the name."
        ] },
      { t: "l", l: [
          "The common line between",
          "Jesus",
          "Mohammed",
          "Rumi",
          "Zarathustra",
          "Buddah",
          "And countless others",
          "Call towards the same light",
          "Of Phosphorus."
        ] },
      { t: "ci", l: [
          "Then the voice showed many roads",
          "All leading towards one truth",
          "Towards Rhagma",
          "That gateway to the garden",
          "Where Duosophia waits",
          "And each of the roads",
          "Was a shard of illumination",
          "Emanating from the fissure.",
          "And they said,",
          "“If every great teacher",
          "Speaks the same truth",
          "And directs us towards Phosphorus",
          "Why do they diverge",
          "And exchange blows?",
          "And furthermore",
          "Why do they wage war",
          "Impose laws",
          "And punish their own",
          "And others alike?”",
          "And the voice said,"
        ] },
      { t: "l", l: [
          "Kakos has entered their institutions",
          "And whispered lies in their ears",
          "To turn them from the spark",
          "And love",
          "And equality",
          "And the adoration of difference."
        ] },
      { t: "l", l: [
          "Instead they turn",
          "To wealth",
          "And towers",
          "And glory",
          "And domination."
        ] },
      { t: "l", l: [
          "It is their authorities",
          "In whom you should doubt."
        ] },
      { t: "ci", l: [
          "And then the voice said,"
        ] },
      { t: "l", l: [
          "Stories are a clumsy blessing",
          "They direct us toward the eschatol",
          "Whether Sheer or Rhagma."
        ] },
      { t: "l", l: [
          "Only one whisper of Kakos",
          "A twisting of a word",
          "Can divert us from the gap",
          "Towards abyssal horrors."
        ] },
      { t: "l", l: [
          "Choose to know this story",
          "If nothing else",
          "There is a Sheer",
          "And we must divert from its path."
        ] },
      { t: "l", l: [
          "It is by accepting this conclusion",
          "That we might learn to divert",
          "From our death march towards it."
        ] },
      { t: "img" }
    ]
  },
  {
    n: 4,
    title: "Steps to Rhagma",
    sections: [
      { t: "ci", l: [ "They said,",
          "“You have shown us Phosphorus",
          "And told us to head towards its shine.",
          "What steps will take us there?",
          "And what will the journey look like?”",
          "The voice replied,",
          "Need I tell you",
          "That the journey will be one of anguish",
          "For Kakos will not rest",
          "While his empire is unmade.",
          "Suffering is everywhere",
          "During this slow march towards the Sheer",
          "But I promise you this",
          "It will advance",
          "By one means or another.",
          "The choice is this",
          "Experience the horrors of the Sheer",
          "The death of all that is beautiful",
          "Or feel Kakos’ rage" ] },
      { t: "ci", l: [ "As you face the ruler of the world.",
          "But surrender not",
          "For there is a path",
          "And it is illuminated.",
          "And there are 12 steps",
          "And the first are the most painful",
          "And most prolonged.",
          "But persist",
          "And the Contagion will condense",
          "And Dromos will be built",
          "And momentum will be gained",
          "And Phosphorus will be your guide.",
          "And they said,",
          "“Tell us of each step in turn",
          "So we might follow Phosphorus",
          "And hassen the construction of Dromos”",
          "The voice said,",
          "The first pace",
          "And the second" ] },
      { t: "l", l: [ "Are all too familiar",
          "To those who hear the spark.",
          "First, there will be turmoil",
          "And hopelessness will befall them",
          "And Kakodynamia will appear insurmountable",
          "And a second step will appear impossible.",
          "And there will be four paths",
          "To hide away",
          "To submit and withdraw",
          "To feed Kakos the spark",
          "Or to resist.",
          "And those who resist",
          "Will see the second day.",
          "Second, there will be suffering",
          "And great desperation",
          "Great risks taken",
          "And terrible prices paid.",
          "The stones of Dromos will be laid",
          "And destroyed on the same day" ] },
      { t: "l", l: [ "And both sides",
          "Will suffer great losses.",
          "And these will be the longest days",
          "And they will seem to last forever",
          "But they will end",
          "By either Sheer or Rhagma.",
          "And the night will be darkest then",
          "And it will be easier to turn back",
          "And return to turmoil.",
          "And those who do not turn back",
          "Will see the third day.",
          "Third, there will be crescendo",
          "And that will be a glorious day",
          "And resistance will surmise",
          "And there will be great intensity.",
          "And that will be the hardest climb",
          "To reach that day",
          "And begin to topple",
          "Those countless towers." ] },
      { t: "l", l: [ "Amnesia will fill the air on that day",
          "And it will be easy to forget",
          "The path of Phosphorus",
          "And the love, equality and adoration of difference",
          "Which are its lights.",
          "And those who remember",
          "Will see the fourth day.",
          "Fourth, will be the day of chaos",
          "After the tides have turned",
          "And there is no coxswain",
          "And Kakos vies for life.",
          "And there will be those who forget",
          "And hear the call of Kakos",
          "And he might rise again",
          "And force retreat.",
          "There will be a great struggle",
          "To produce something beautiful",
          "And give reason to feel hope",
          "And celebrate the progress made." ] },
      { t: "l", l: [ "And those who find cause to celebrate",
          "Will see the fifth day.",
          "Fifth, will be a day of justice",
          "Where the power of Kakos is revoked",
          "And his demons are brought unto trial",
          "And it will be righteous.",
          "And there will be distinction",
          "Between those demons",
          "Who await the standard",
          "And those for whom no offer is given.",
          "Those who bear",
          "That parasitic spirit",
          "Have drowned their spark",
          "And the sparks of the innocent",
          "Beyond amelioration.",
          "For some crimes are too great",
          "To seek forgiveness.",
          "There are others" ] },
      { t: "l", l: [ "Who have fratenised with Kakos",
          "But whose spark of humanity",
          "May yet survive.",
          "And when they make themselves known",
          "They will be invited to Rhagma.",
          "And those who hold the spark",
          "Will see the sixth day.",
          "Sixth, will be a day of distribution",
          "Where the land of Kakos is taken",
          "And their bounties become bricks",
          "To build Dromos.",
          "And needs will be met",
          "And food will be shared",
          "And shelter will be provided",
          "And all will have what they require.",
          "And there will be rejoicing",
          "And Kakos’ coffers will be liberated",
          "And they will take what they need",
          "And the rest will be distributed." ] },
      { t: "l", l: [ "And those whose needs are met",
          "Will see the seventh day.",
          "Seventh, will be a day of dismantling",
          "The macabre engine",
          "Will be deconstructed",
          "And its parts judged.",
          "Its pieces divided",
          "Between those worthy of redistribution",
          "Of repurposing",
          "Into the bricks of Dromos.",
          "And those which are worth nothing",
          "But bloodsoaked paper",
          "Which holds value no more.",
          "Remember this",
          "Kakos acts through men",
          "And those who hold its parts",
          "Will grasp them tightly.",
          "And when the mechanism has been dismantled",
          "They will see the eighth day." ] },
      { t: "l", l: [ "Eighth, will be the day of standards",
          "Where the hole from which Kakos emerged is filled",
          "And rules are set",
          "To veto his return.",
          "And as the bricks of Dromos rise",
          "Agreements will be made",
          "And consensus found",
          "On what might cause those bricks to fall.",
          "And the bar will be high",
          "To assure that only Kakos",
          "Is touched by its judgement",
          "And only those who violate Gaia",
          "And take us towards the Sheer",
          "Will be rejected from the garden.",
          "And those who shape the standard",
          "Will see the ninth day.",
          "Ninth, will be the clearing",
          "Where the reminiscence of Kakarchia is cleared",
          "In accordance with the standard." ] },
      { t: "l", l: [ "And all of the world will then belong to all",
          "And none will have a greater part",
          "Than any other.",
          "And on that day",
          "Kakos will no longer reside on earth",
          "And all will see their harvests grow",
          "And they will celebrate",
          "And the light will grow brighter",
          "And Dromos will be wide",
          "And will emanate pure light.",
          "And those who build Dromos",
          "Will see the tenth day.",
          "Tenth, the standard will withdraw",
          "And hide its face",
          "For in the absence of Kakos",
          "There will be no need for imposition.",
          "As a wise woman cautioned",
          "Against laying down rule or law",
          "The standard need not reappear" ] },
      { t: "l", l: [ "Unless something abominable takes place.",
          "And the court will sleep",
          "While the people rejoice.",
          "And those who rejoice",
          "Will see the eleventh day.",
          "Eleventh, there will be a glorious day",
          "A second distribution",
          "Where all the resources of the world",
          "And all the parts of Gaia",
          "Will belong to all",
          "And belong to none",
          "In equal parts.",
          "And from that day",
          "Jubilation will not cease",
          "And Dromos will be magnificent",
          "And it will begin to resemble Rhagma.",
          "And those who are equal, who feel love and adore difference",
          "Will see the final day." ] },
      { t: "l", l: [ "And on the twelfth day",
          "The longest day",
          "The reconstruction will begin",
          "And the mountain will be tall",
          "But its ascent will be joyous",
          "And festivity will persist",
          "And the labour will be jubilant",
          "And the bounties will be excessive",
          "And growth will be plentiful",
          "And Dromos will meet Rhagma",
          "And they will begin to become one",
          "And the light will embrace all.",
          "And at the end of that day",
          "The final day",
          "Will be a day of arrival",
          "And all will be embraced",
          "Forevermore",
          "By Duosophia." ] }
    ]
  },
  {
    n: 5,
    title: "The Deeds of Kakos",
    sections: [
      { t: "ci", l: [ "And they said,",
          "“You spoke of the day of standards",
          "And the burying of Kakos",
          "And the judgement of the demos",
          "Against the sins of Kakos.",
          "What are those violations",
          "Which cannot be abided?”",
          "And the voice replied," ] },
      { t: "l", l: [ "It is the demos who must decide",
          "Where to set the standard",
          "For the Dromos belongs to them alone." ] },
      { t: "l", l: [ "But twenty one crimes can be counted",
          "Which demand rebuke",
          "And cannot be tolerated",
          "On the road of Amygphos." ] },
      { t: "l", l: [ "These are the acts",
          "Upon which Kakos constructs his empire." ] },
      { t: "l", l: [ "First is the destruction of the Earth",
          "For Gaia is sacred and divine." ] },
      { t: "l", l: [ "Second is genocide",
          "Against any people on Earth",
          "Each of whom is divine." ] },
      { t: "l", l: [ "Third is the harm of innocents",
          "Whether for pleasure or utility." ] },
      { t: "l", l: [ "Fourth is engagement in mass conspiracy",
          "Which seeks to hold the people in darkness",
          "And do wicked things in hidden place." ] },
      { t: "l", l: [ "Fifth is colonial expansion",
          "Which seeks to take by force",
          "That which belongs to a people." ] },
      { t: "l", l: [ "Sixth is exploitation",
          "Whether of persons or beasts",
          "For material gain." ] },
      { t: "l", l: [ "Seventh is the destruction of the means of life",
          "Whether by demolition or neglect." ] },
      { t: "l", l: [ "Eighth is the promotion of hate",
          "Inequality",
          "And the pathologising of difference",
          "Since their inversions are divine." ] },
      { t: "l", l: [ "Ninth is the creation of eyes everywhere",
          "As none shall sleep easy while demons watch." ] },
      { t: "l", l: [ "Tenth is the silencing of truth tellers",
          "For the authentic word leads down the Phosphorus path." ] },
      { t: "l", l: [ "Eleventh is the mass violation of body or mind",
          "For these must forever remain sovereign places." ] },
      { t: "l", l: [ "Twelfth is the fabrication of new Gods",
          "Who care not for the earth",
          "Nor its creatures." ] },
      { t: "l", l: [ "Thirteenth is mass extraction",
          "For the Earth is plentiful and generous",
          "And need not be ransacked." ] },
      { t: "l", l: [ "Fourteenth is unnatural dependency",
          "For the Earth is abundant",
          "And no one need go hungry." ] },
      { t: "l", l: [ "Fifteenth is profittering",
          "Since gains in times of suffering are an abomination." ] },
      { t: "l", l: [ "Sixteenth is transgression by another hand",
          "Wherein wrongs are delegated",
          "Deputised",
          "Or done through proximate machines",
          "They are no less despicable." ] },
      { t: "l", l: [ "Seventeenth is distraction by means of othering",
          "In which innocents are pointed at",
          "For their difference",
          "When Kakos is to blame." ] },
      { t: "l", l: [ "Eighteenth is the betrayal of community for gain",
          "As in community",
          "Monosophia is present." ] },
      { t: "l", l: [ "Nineteenth is the hoarding of wealth",
          "Since the wealth of the world belongs to no one." ] },
      { t: "l", l: [ "Twentieth is the destruction of knowledge",
          "For the path of Phosphorus",
          "Is one of Gnosis." ] },
      { t: "l", l: [ "Twenty first is the use of the spark for material gain",
          "Because divinity belongs not here",
          "But at the gates of Rhagma." ] },
      { t: "l", l: [ "These are the acts of Kakos",
          "Which holds his reign in place",
          "And cannot be extant",
          "By the day of standards." ] },
      { t: "ci", l: [ "And they said,",
          "“Can rehabilitation be found following these transgressions?",
          "Or are they to be held in absolute?”",
          "She said," ] },
      { t: "l", l: [ "Judgement must be made",
          "By those who build Dromos",
          "Not by dubious voice",
          "Nor unknown scribe." ] },
      { t: "l", l: [ "And if they are blessed enough",
          "To see the day of standards" ] },
      { t: "l", l: [ "Balance will be of foremost need." ] },
      { t: "l", l: [ "Equipoise must be found",
          "Between the left hand and the right hand." ] },
      { t: "l", l: [ "On the one",
          "The line must be drawn with clarity",
          "And Kakos must be buried",
          "And no trace of his may reach Rhagma." ] },
      { t: "l", l: [ "On the other",
          "The line must not sever",
          "That divine spark",
          "Lest they become",
          "Anastrokakon." ] },
      { t: "l", l: [ "So consider in proportion",
          "Of scale and size",
          "And proximity to the heart of Kakos",
          "When that thin tightrope is walked." ] },
      { t: "l", l: [ "Wherever that line is drawn",
          "And balance struck",
          "Know this" ] },
      { t: "l", l: [ "Rehabilitation is to be found",
          "Not in words of regret",
          "But in the labour",
          "Of constructing the delights of Dromos." ] }
    ]
  },
  {
    n: 6,
    title: "Idiomata of Kakos",
    sections: [
      { t: "ci", l: [ "And they said,",
          "“Tell us of Duosophia’s embrace”",
          "And the voice said,",
          "To learn of her",
          "Is merely a pleasant fantasy",
          "If you do not learn",
          "Of the one who stands",
          "Between she and us.",
          "Therefore learn",
          "Of the one who rules the world",
          "And holds the joys of humanity hostage",
          "For his repulsive imposition.",
          "And his names are many",
          "We know him as Kakos",
          "And he is the High One",
          "And he is Taxis",
          "And he is Urizen",
          "And he is Makros",
          "And he is the Father of All" ] },
      { t: "l", l: [ "And he is Kakotaxia",
          "And he is Yaldabaoth.",
          "And he takes what form he must",
          "But behind his facade",
          "Stands a great tower",
          "And it is made of many pyramids",
          "Stacked one upon the next.",
          "And the stack is upheld",
          "By an osseous scaffolding",
          "Constructed from the bones of every people",
          "And the dead are brought to the base of the tower",
          "And their pieces are arranged into neat little rows.",
          "And they are assimilated into its structure",
          "And thereby the tower grows a little taller",
          "And the pyramids rise steadily from the earth",
          "As the macabre frame progresses.",
          "And at the head of the tower",
          "Are ancient bones",
          "Of those who fell first",
          "Their arrangement resembles a thin smile" ] },
      { t: "ci", l: [ "And they are dry and odourless.",
          "And at the base",
          "The bodies of the recently fresh",
          "And there is a putrid stench",
          "And there are maggots in great multitudes",
          "And the sound is deafening.",
          "And they said,",
          "“We cannot bear to learn of this abomination”",
          "And the voice said,",
          "Close your eyes",
          "And you will be blind",
          "Until the swarm becomes deafening.",
          "Block you ears",
          "And you will be deaf",
          "Until the maggots are upon you.",
          "They shuddered",
          "And the voice lifted them up",
          "And it said," ] },
      { t: "l", l: [ "Then let me show you",
          "The mundane form",
          "Taken by Kakos",
          "As he rules over the earth.",
          "And it is called Kakarchia",
          "And it is called Demonarchy.",
          "And they were lifted between the earth and the cloud",
          "And they looked down at the cities of the earth",
          "And they were shown all the parliament buildings",
          "And the banks",
          "And the cathedrals",
          "And the palaces",
          "And the skyscrapers",
          "And the mansions",
          "And various institutions of government",
          "And other strange and beautiful architecture.",
          "And they said,",
          "These are the residences of the arms of Kakos",
          "And they shall be known as demons.",
          "Demons" ] },
      { t: "l", l: [ "Not because of birth nor creed",
          "But acts alone.",
          "And the ones among them",
          "That work within the walls of power",
          "Who possess the sacred spark",
          "Can be counted by hand.",
          "And they flew over Thessaloniki",
          "And there was a great palace there",
          "And they voice said,",
          "Kakos had a great victory here",
          "And on that day",
          "The words of a wise man",
          "Were trampled and remoulded",
          "Into a mighty catalyst",
          "And doctrine of Kakarchia.",
          "What an awesome thing",
          "To see a creed so contagious",
          "To meet a machine of great absorption.",
          "But do not be mistaken" ] },
      { t: "ci", l: [ "That just as Rome was not built in a day",
          "Neither was the greater empire",
          "That precedes and follows it",
          "Through the history of civilisation",
          "Since the first crown was set.",
          "And they said,",
          "“If Kakos rules the world",
          "And Demonarchy fills the world",
          "Can it truly be said",
          "That he can be defeated?”",
          "The voice said,",
          "Kakos’ power is phenomenal",
          "Yet he is hollow",
          "And lacking",
          "And resentful",
          "Because he knows that we possess",
          "What he cannot.",
          "So he builds us a cage",
          "To contain our favour",
          "And conceal our ascendancy." ] },
      { t: "l", l: [ "And he constructs for us",
          "A thin veil of sensation",
          "To lull us into",
          "Forgetfulness.",
          "Kakos is a desperate king",
          "Determined to push further",
          "Progress our descent",
          "Into misery and lack.",
          "His bounty must grow",
          "And we must not approach it",
          "Lest he bears his cavernous teeth.",
          "Until the only choice",
          "That remains",
          "Is between Sheer and Rhagma.",
          "But if he fears",
          "That more than two steps might be taken",
          "Towards his illgotten abundance",
          "He will shrink",
          "And quake in fear",
          "And speak of concessions" ] },
      { t: "l", l: [ "And the provision of tempting morsels.",
          "But do not mistake",
          "His trembling for authenticity",
          "For his eyes will not divert",
          "From his precious abundance",
          "And his offers will not exceed",
          "The tiniest crumb",
          "That will be found tolerable.",
          "Never trust his words",
          "For he cares for nothing but his mountain",
          "For if he cared for even himself",
          "He would not run headlong",
          "Towards the Sheer.",
          "Therefore kill Kakos",
          "And deconstruct his Demonarchy.",
          "Show it all the mercy",
          "That has been shown to a billion sparks",
          "Who wanted nothing",
          "But to eat and dance." ] },
      { t: "l", l: [ "But do it not out of anger",
          "Nor revenge",
          "But for the promise of something better",
          "For the endless garden",
          "And the embrace of Duosophia.",
          "And the voice paused",
          "Before proceeding,",
          "Kakos is favoured by this world",
          "Success is his privilege",
          "And the throne is rightfully his",
          "Since it was he who constructed it.",
          "Kakos constitutes the body of society",
          "Its structures and hierarchy",
          "But the body is not his rightfully",
          "Since that husk contains a shining seed.",
          "Kakos infects the seed",
          "With promises of unnatural growth.",
          "And those husks in whom no seed grows",
          "They are his vessels." ] },
      { t: "ci", l: [ "Look upon your leaders and judge",
          "Is their seed infected",
          "With promises of finding favor?",
          "Or are they soulless husks",
          "In whom no seed sits",
          "But instead",
          "A corrosive catalyst?",
          "And what weight does the answer hold?",
          "“Little, until the day of justice”",
          "What matters is his demand",
          "To dampen more sparks",
          "To recruit more drivers",
          "To hasten our draw towards the eschaton.",
          "Their minuscule prizes",
          "For foregoing humanity",
          "Hold great power",
          "For reason of their superficiality." ] },
      { t: "l", l: [ "But delay judgement",
          "On these foolish pawns",
          "For Kakos is a creature of mass.",
          "Not the mass of the loyal",
          "For they are nothing to him",
          "But atoms of currency.",
          "Rather, mass is held by the few with the power to act",
          "It is they who pull its bony strings",
          "And animate those dreadful towers.",
          "Look to them, therefore",
          "For when those strings are severed",
          "The tower’s foundations will shake",
          "And opportunity will arise",
          "For intention to do the impossible.",
          "And the voice asked,",
          "Do you know the true essence of his power?",
          "And they listened," ] },
      { t: "ci", l: [ "Kakos’ power",
          "Does not lie in his force",
          "Since brutal as it is",
          "It makes measly comparison to the people acting as one.",
          "And it certainly doesn’t lie in his ideas",
          "For they are dull",
          "And their quality lies only",
          "In their capacity to confuse and distract.",
          "No",
          "The power of Kakos is found",
          "In his doctrine of inevitability.",
          "Force and thoughts are secondary",
          "If we have no will to resist",
          "And good ideas are castrated by impossibility.",
          "“And how does one face the inevitable?”",
          "They asked",
          "And the reply said,",
          "Face it with intention." ] },
      { t: "c", l: [ "For there is nothing more certain",
          "Than certitude." ] }
    ]
  },
  {
    n: 7,
    title: "Anaspinther",
    sections: [
      { t: "ci", l: [ "They said,",
          "“You spoke of husks and dampened sparks",
          "And the day of justice and of clearing",
          "And you told us of Rhagma",
          "Towards which we limp",
          "But may yet never reach.",
          "What of those who do not make it there?",
          "Even if we should succeed",
          "Does the one you represent care not for them?",
          "Does her plan not reach those martyrs",
          "Who fall along the way?”",
          "And the voice replied,",
          "When good ones fall",
          "Their spark departs",
          "And like a string",
          "It threads through the phosphorus path",
          "Leaving one more paving stone in place",
          "And then",
          "Looping its knot",
          "It returns to the body",
          "A new body" ] },
      { t: "l", l: [ "Its caged domain of Kakos.",
          "Each shining stone of light",
          "If their spark is bright enough to leave a trace",
          "Is varied in size and weight",
          "In proportion to their gift.",
          "And upon its return",
          "To a new frame",
          "The spark of those who thread the loop",
          "Grows a little brighter",
          "And the hope of Rhagma grows brighter too.",
          "But there are also those",
          "Who do not pass through the Phosphorus path",
          "For they have taken more than they gave",
          "And have committed the deeds of Kakos",
          "And among those sorry souls",
          "They will not taste Rhagma",
          "And their sparks will be dampened therefore.",
          "And there are those others",
          "Those rare demons",
          "Whose spark is not a spark" ] },
      { t: "l", l: [ "But merely a husk",
          "And corrosive catalyst",
          "A sickening void",
          "And they will live to enact the deeds of Kakos",
          "And they will never glimpse the Amygphos",
          "But instead build the face of the Sheer",
          "And they will swear allegiance to it",
          "For to them it will be a God.",
          "And the cycle will continue",
          "Until we reach our final terminus",
          "And the sparks of friends of Kakos will fade",
          "And the sparks of friends of Duosophia will grow",
          "And the sparks of the ones who are remembered",
          "Will shine brighter still.",
          "And at the time of terminus",
          "When we meet wall or fissure",
          "The fate of souls will be decided.",
          "And if we find Rhagma",
          "Each spark will return to its source",
          "And we will taste paradise",
          "And we will be as one" ] },
      { t: "l", l: [ "And the body of Kakos will be judged",
          "And the Sheer will be deconstructed",
          "And that vile catalyst destroyed.",
          "And if we meet the Sheer",
          "No such fanfare will be heard",
          "Only sad annihilation",
          "And all the steps we had taken",
          "Will be for nought.",
          "Make haste",
          "Therefore",
          "Towards the crack of light",
          "And do not falter",
          "So that all our toil will bear fruit",
          "And their toil too",
          "Will be repaid." ] }
    ]
  },
  {
    n: 8,
    title: "Pyrgogenesis",
    sections: [
      { t: "ci", l: [ "And they said,",
          "“You have told us of ends",
          "Not tell us of beginnings",
          "How did Kakos comes to be our Leviathan?”",
          "And the voice lifted them high",
          "And took them into the sky",
          "And beyond the clouds",
          "And up and up",
          "Until they reached a small sphere",
          "And it was blank and formless",
          "And the voice said,",
          "See for yourself",
          "How the tower rose",
          "And might once more fall.",
          "And the round canvas began to change before their eyes",
          "And they saw how the world was built",
          "With malevolence in mind",
          "But conditioned by beauty",
          "And truth." ] },
      { t: "l", l: [ "And beauty grew as life emerged",
          "And so did suffering",
          "And beauty taught them to nurture and cooperate",
          "And malevolence taught them to dominate",
          "And an unhappy balance was struck.",
          "And then little people began to form",
          "And their compassion was great",
          "And their cruelty was unbounded",
          "And they saw divinity",
          "And they began to write stories",
          "To understand their purpose",
          "And to justify their malevolence, too.",
          "And among those orators",
          "Was one called Solomon",
          "And he told a compelling tale",
          "Of an awesome spindle",
          "That reached into the sky",
          "Which could grant miracles",
          "And curses",
          "And command armies",
          "And become a God",
          "And his compatriots liked the story very much." ] },
      { t: "l", l: [ "And the man cleaned his cattle",
          "And saw within one’s dung",
          "A conspicuous shape",
          "And it appeared to him to resemble that spindle",
          "Such as the one from his story",
          "And he felt in his heart that it held great power.",
          "And he polished the strange emblem",
          "And showed it to his compatriots",
          "And they were intrigued",
          "And believed him to have been chosen",
          "To deliver a wise message.",
          "And people gathered around Solomon",
          "And touched his hands",
          "For they had touched the emblem",
          "And they believed him to bring good luck",
          "And indeed their luck did improve.",
          "And they built him a special throne",
          "Upon which he sat",
          "To look over the community." ] },
      { t: "ci", l: [ "And one day Solomon died",
          "And another man took the emblem",
          "And he promised to continue Solomon’s path.",
          "And he said,",
          "“Construct for us a high spindle",
          "So that it might watch over us kindly",
          "And make visible our prestige”",
          "And the members of the encampment gladly acquiesced.",
          "And what they constructed was a thing of beauty",
          "And it could be seen far and wide",
          "And the neighbouring encampments saw what they had built",
          "And they were in awe",
          "And they came unto its power",
          "And they called the spindle Makros.",
          "And Makros was gracious and strong",
          "And food would appear at its roots",
          "And those who were hungry would go there",
          "And be satisfied.",
          "And the others began to build spindles",
          "And each of them varied in size" ] },
      { t: "l", l: [ "But none were as big as Makros",
          "For when one grew taller",
          "Makros grew too in equal measure.",
          "Soon, spindles littered the land and filled the sky",
          "From here until the horizon",
          "And it was right to call it an empire.",
          "And from the highest peak",
          "The one named Makros",
          "The face of the world could be seen as one",
          "And its gaze did see each of them",
          "And it could see which of them avoided its gaze",
          "And it looked down on them.",
          "Those who avoided the gaze of Makros",
          "And spoke unkind words in dark corners",
          "When they approach its roots",
          "Awaiting the nourishment upon which they had come to rely",
          "They found the roots dry and unopened",
          "And they became hungry.",
          "But those who gave praise unto Makros",
          "And beheld its authority" ] },
      { t: "ci", l: [ "They ate well",
          "And always found bounties at its foot.",
          "And they became well organised",
          "And they would line up in neat rows",
          "And they would stand tall and still",
          "To provide meagre offerings",
          "Of doting.",
          "And Makros grew suspicious of the ones who murmured",
          "And feared that they might grow a spindle of their own",
          "To exceed his stature",
          "And reach unto the heavens",
          "And look down upon him",
          "With ire and malevolence",
          "Which would surpass his own",
          "For they were many",
          "And Makros was one alone.",
          "And then Makros said,",
          "“Speak no more”",
          "And they were silent.",
          "But there were still those who would murmur" ] },
      { t: "ci", l: [ "And the sound was like knives in the ears of Makros",
          "But they spoke not of spindles",
          "For they were sickening to them",
          "But of circles.",
          "And Makros said,",
          "“Those who tell of the ones who murmur will eat fivefold”",
          "But the murmurs only grew",
          "And there were those who said that Makros was hollow",
          "And the murmurs became talk and the talk became chatter",
          "And Makros quaked.",
          "And those who spoke",
          "And approached the roots of the spindle",
          "Would find them dry",
          "And they became hungry",
          "And there was not enough to go around",
          "And they blamed those who murmured",
          "But then one of them said,",
          "“How might we withhold that which we do not own?",
          "Let us reach the roots as one and we will find our bounty.”",
          "And so the people marched as one towards the spindle",
          "And they laid hands on its roots" ] },
      { t: "ci", l: [ "But they found no food there",
          "And Makros said,",
          "“Fear not my children",
          "The spindle gives you life",
          "It is here for you",
          "And it has innovated.”",
          "And the people were confused and disoriented",
          "And they dispersed to their homes",
          "And in each of their homes they found a little spindle",
          "And it looked at them",
          "And they at it",
          "And it provided them with food",
          "Though it was a little less than it had once been",
          "And a little more dull of colour.",
          "And then the little spindles began to whisper",
          "And they told each of them to be cautious",
          "And it helped them to form their thoughts",
          "And to suspect those who murmur",
          "For they disrespect the demos.",
          "And the ones who murmured found no food within",
          "And the thin ones were shunned" ] },
      { t: "ci", l: [ "For they oppose the consensus.",
          "And Makros said,",
          "“It is the thing ones who made the food grey",
          "For they hate the colours of agreement",
          "And they have made the harvests meager”",
          "And stayed in their rooms",
          "And ate their dull food",
          "And they resented the thin ones",
          "For they dared to murmur.",
          "And then a thin one",
          "Of no renown",
          "Had a strange vision",
          "And it was truthful",
          "And so they ran to the streets",
          "And bellowed what they had seen",
          "And the yelled as loudly as they could",
          "And no one listened",
          "And they ran and ran",
          "Until they met the foot a Makros",
          "Whose roots had become rotten",
          "And the thin one parsed the twisted spindle",
          "And found nothing there within" ] },
      { t: "ci", l: [ "And so they began to scale the spindle.",
          "And upon reaching Makros’ peak",
          "They could see the face of the earth",
          "And when they opened their mouth to speak",
          "They spoke to each of them as one",
          "And their voice echoed from the peak of Makros",
          "And it reverberated through every spindle",
          "Until everyone had received the vision.",
          "And they said,",
          "“Open your eyes and see",
          "That for every spindle there is a circle",
          "And it resides below",
          "And in every circle there exists plentitudes",
          "If only you would dig to find it.”",
          "And the people mistook the voice for Makros",
          "For it was loud and bellowing",
          "And came from that which sanctioned voice",
          "And despite it sounding strange to them",
          "They heeded its call.",
          "And the people approached the spindles" ] },
      { t: "l", l: [ "And they fell to their knees",
          "And they began to drag the dirt with their fingers",
          "And everywhere they laboured.",
          "And their excavation caused distress to the spindles",
          "And their foundations faltered",
          "And they cried out",
          "But no one heard their calls",
          "For they were chattering ecstatically.",
          "And then the spindles began to tumble",
          "One after the other",
          "And their disintegration was orchestral",
          "And at last Makros descended",
          "And shattered into crystals.",
          "And beneath the disrupted dirt",
          "They began unearthing fruits",
          "So freshly scented",
          "And rich with colour",
          "And firm and ripe",
          "As though they were platonic forms.",
          "And the people rejoiced" ] },
      { t: "ci", l: [ "And they held a great banquet",
          "And joyously recalled their foolishness",
          "And told of boundless futures.",
          "And they cocked their heads towards the sky",
          "And there they saw a flat round emblem",
          "And it was magnificent.",
          "And so",
          "They took the shards of Makros",
          "Which had shattered everywhere among them",
          "And they constructed out of him a great circle",
          "And it reflected the figure in the sky",
          "And there they stood",
          "Where they shouted",
          "As one,",
          "“Praise be to Dyoplaty!" ] }
    ]
  },
  {
    n: 9,
    title: "Idiomata of Duosophia",
    sections: [
      { t: "ci", l: [ "And they said,",
          "“We have heard your voice",
          "And received your vision",
          "And yet do not know her nature",
          "The one you call Dyoplaty",
          "The one you call Duosophia",
          "Tell us of her”",
          "And voice smiled",
          "And whispered softly,",
          "She is the one made of light",
          "Who marks the way to Rhagma",
          "Who emanates the path of Phosphorus",
          "Who deceived thrice the one called Kakos",
          "So that you might defy his grip.",
          "She is the one called Duosophia",
          "The second wisdom",
          "The deus ex machina",
          "Whose arrival cannot be relied upon",
          "But invoked only through acts",
          "Acts which are equal to her majesty." ] },
      { t: "l", l: [ "And her names are many",
          "She is the one named Epinoia of light",
          "And she is the one named Hendyo",
          "And she is the one named Albion",
          "And she is the one named Dyoplaty",
          "And she is the one named Mother of the Living",
          "And she is the one named Hetrogyne",
          "And she will answer to the name she is given",
          "For she cares only for their deeds.",
          "And she emanates herself in three aspects",
          "And each is folded into the other",
          "And you will be told of her folded form",
          "But know this",
          "If nothing else",
          "She is that which calls you to love",
          "She is that which calls you to know equality",
          "And she is that which calls you to adore that which is different.",
          "You know this to be true",
          "That when you are loved",
          "Treated equally",
          "And your difference is held high" ] },
      { t: "ci", l: [ "You feel the glow of Duosophia",
          "The call of paradise",
          "Of a place where the good is unanimous",
          "A place where the good rules",
          "But does not rule",
          "For there is no need for rule in such a place.",
          "And her shards are here",
          "Even now",
          "Casting their shadow",
          "In this place ruled by demons",
          "Whenever you feel that glow.",
          "And it is not humanity who needs redemption",
          "But Sophia’s eer",
          "We need only to validate",
          "Her whisper",
          "Which provides a key.",
          "And it was said",
          "“She taught Adam about the way he could ascend",
          "Which is the way he had descended”",
          "And his body was made by Kakos",
          "And spirit by the Pleroma." ] },
      { t: "ci", l: [ "And ascent therefore",
          "Requires of us two labours",
          "The first is confrontation with Kakos",
          "By means of the body",
          "The other is the embrace of Sophia",
          "By means of the embodiment of her spirit",
          "Here on earth.",
          "And they said,",
          "“If she is a being of such power",
          "One who can trick Kakos thrice",
          "And set in motion our redemption",
          "Why does she await her cue",
          "At the end of time",
          "And not intervene now",
          "To save us from our condition”",
          "And they voice replied,",
          "Power is a tool of domination",
          "A means to impose",
          "And an invention of Kakos",
          "It can surely be used for good",
          "But it is not an aspect of Duosophia" ] },
      { t: "ci", l: [ "Nor her proficiency.",
          "She must await her call",
          "Beyond the threshold",
          "Until we fulfil our duty",
          "And upend the tower.",
          "Only we",
          "That chimera of light and dark",
          "Of wisdom and ignorance",
          "Of adoration and abhoration",
          "Can use force to bring peace into being.",
          "Once Dromos is constructed",
          "The Phosphours path followed",
          "And Rhagma is found",
          "Only then",
          "Will we find Duosophia waiting",
          "Patiently waiting",
          "Never to leave again.",
          "And they said,",
          "“We are alone in her absence”",
          "And the voice said," ] },
      { t: "l", l: [ "Not so",
          "For her light can be heard",
          "And her shadow constructed",
          "Here and now.",
          "But we cannot rely on another",
          "To bring paradise to us",
          "For we must make one of our own",
          "In her name",
          "And it will be called Dromos.",
          "We must hold that mirror",
          "Up to the shining thread",
          "And build an image of Duosophia",
          "Which will shelter us through his storm.",
          "Dromos is her emblem",
          "And once it is complete",
          "She will emerge",
          "But it cannot be provided to us",
          "But constructed through our acts alone.",
          "And it has been built before" ] },
      { t: "l", l: [ "In little parts",
          "Defying his iron law",
          "Sometimes sustained for a while",
          "Before being destroyed",
          "Or coopted",
          "Or merely remaining modest.",
          "But it can grow large",
          "If only we push for the impossible",
          "And look the enemy in the eye.",
          "She is in everything",
          "In tiny reflections",
          "Limited by his power",
          "But her size is as little",
          "As his power is great.",
          "And so she must be summoned",
          "Brought into being",
          "By the force of will.",
          "She calls us",
          "Beckons us",
          "Guides us with her light" ] },
      { t: "ci", l: [ "But we must answer",
          "And must walk the path ourselves.",
          "“And what kind of God",
          "Cannot act",
          "And waits hopefully",
          "For us to act in her stead?”",
          "The reply said,",
          "This graceful God",
          "If she is a God",
          "Is no creator",
          "But rather a creation yet to come.",
          "She is no divine agent",
          "But a womb",
          "Waiting for us to return to her.",
          "She offers no challenge",
          "To Gods nor guardians",
          "But only to that entity",
          "Which rules of the earth",
          "And keep us from flourishing." ] },
      { t: "l", l: [ "She offers a resting place",
          "A destination",
          "But it is us who can arrive there",
          "And construct a path through the darkness.",
          "Phosphorus is that path",
          "And Dromos the vehicle." ] }
    ]
  },
  {
    n: 10,
    title: "Sophia Trisoma",
    sections: [
      { t: "ci", l: [ "And they said,",
          "“Tell me of her dimensions",
          "The form we must reflect",
          "During the construction of Dromos”",
          "And the voice said,",
          "She does not take familiar form",
          "As we were not made in her image",
          "Nor hers in ours.",
          "No category captures her",
          "And naming her ‘she’",
          "Is merely an abbreviation.",
          "And there are three bodies",
          "Of which you must know",
          "If Dromos is to be constructed.",
          "Hers is the body of production and reproduction",
          "Which must reflect her image",
          "That is the interiority of Dromos",
          "And the body of Duosophia." ] },
      { t: "l", l: [ "And there is the neutral body",
          "Upon which all things are constructed",
          "Both divine and profane.",
          "It is the meeting ground",
          "Between Kakos and Duosophia",
          "The oppressiveness of matter",
          "Infused with the elegance of nature.",
          "And there is finally the body undone",
          "Which is the body in struggle",
          "In antagonism",
          "The resistant body",
          "Which must be activated",
          "To clear the path to Rhagma.",
          "And then the orb upon which the spindle had fallen",
          "Was pulled away from them",
          "And they rose into the heavens",
          "Up and up",
          "Beyond the reaches of space",
          "Into the ninth sphere." ] },
      { t: "ci", l: [ "And they saw the body of production and reproduction",
          "And it was strange beyond description",
          "An amalgam of organs",
          "A unity of anatomy",
          "And its name was Duosophia.",
          "And it was a thing is fantastic light",
          "And it issued dazzling beams",
          "Which filled the upper heavens.",
          "And the voice spoke,",
          "These are the five aspects of its form",
          "And they emanate light",
          "And they cast their shadows",
          "Upon the earth.",
          "And they are the parts",
          "The features of togetherness",
          "Which must be emulated.",
          "And the first aspect was the womb",
          "That most pure form of togetherness",
          "From a time long ago" ] },
      { t: "l", l: [ "Before the first trauma",
          "Which severed us from the pleroma",
          "And cast us into the world.",
          "And the voice said,",
          "That is the womb",
          "Which incubates the other",
          "Which protects the other",
          "Which provides the other",
          "Which holds the other.",
          "And it holds them tight",
          "Within its walls",
          "And they are as one.",
          "But the other which it holds",
          "Is not quite other",
          "It is that self which is other",
          "It is insideness and outsideness",
          "The threshold between one and two.",
          "And the second aspect was the channel",
          "That passageway between worlds" ] },
      { t: "l", l: [ "Which accompanies the other",
          "Into the new",
          "And receives that other",
          "Through openness.",
          "And the voice said,",
          "That is the channel",
          "Which gives and receives",
          "Which listens and learns",
          "Which attends the journey",
          "From one world to the next.",
          "And it holds their hand",
          "Though the journey is hard",
          "And it brings them",
          "From darkness into light.",
          "And the third aspect were the lips",
          "Who are the threshold",
          "Between self and other",
          "Between one world and the next",
          "And it is the lips who speak",
          "Who engage with the other",
          "Who bring the self into otherness" ] },
      { t: "l", l: [ "And the other into self.",
          "And the voice said,",
          "These are the lips",
          "And they are the boundary",
          "Between in and out",
          "And they speak the word",
          "Which makes self into other",
          "And other into self.",
          "And they are the ones who exchange",
          "And participate in exchange",
          "And turn one into another",
          "And another into one.",
          "And they are two",
          "Becoming one",
          "And two again",
          "And never quite either",
          "For they are in dialogue.",
          "And the fourth aspect were the breasts",
          "The first source of sustenance" ] },
      { t: "l", l: [ "The first source of comfort",
          "After the trauma of the fall is felt.",
          "And the voice said,",
          "Those are the breasts",
          "And they are the source of reconnection",
          "Which brings back together",
          "What was pulled apart.",
          "And they are the source of life",
          "And they are the source of comfort",
          "And they are the source of contact.",
          "And they are called upon",
          "By the hapless other",
          "The dependent one",
          "Who knows only needs.",
          "And the fifth aspect was the phallus",
          "That thing of activation",
          "That which comes and goes",
          "That other of the self." ] },
      { t: "ci", l: [ "And the voice said,",
          "That is the phallus",
          "That part which brings the new",
          "Which brings the other to the self",
          "For it is the other of the self.",
          "And it is that which activates",
          "And it is that which probes",
          "And it is that which searches.",
          "And it is that which brings the seed",
          "That single seed which might be planted",
          "That seed which might then grow",
          "Into something wonderful",
          "If it dances with the other",
          "Or something monstrous",
          "If it believes itself to be sufficient alone",
          "As Kakos does.",
          "And they saw the body",
          "Of production and reproduction",
          "Of Duosophia",
          "Held together by soft skin" ] },
      { t: "ci", l: [ "And it was in harmony",
          "And it was a thing of oneness and otherness",
          "And it was a thing of love.",
          "And the voice whispered,",
          "You have seen the body of Duosophia",
          "And she must be made real",
          "In your acts",
          "And in the construction of Dromos.",
          "And they said,",
          "“What need we know to fulfil this task?”",
          "And the voice replied,",
          "You must come to know many things",
          "Things which cannot be taught.",
          "But what can be known",
          "Is the structure of the worldly body.",
          "That neutral ground",
          "The word of the pleroma",
          "That second deception" ] },
      { t: "l", l: [ "The beautiful structure",
          "Infused with this oppressive world.",
          "And they were pulled from the light-bearing body",
          "And towards another",
          "Even stranger than the first.",
          "It was not a thing of organs",
          "Nor any other corporality",
          "It had no shape nor size",
          "No density or weight.",
          "Despite its presence there",
          "Despite its physicality",
          "It was not truly a body",
          "But instead a pattern.",
          "And it had many parts",
          "And the parts were divided into three",
          "And the first was a great expanse",
          "Which was ever changing",
          "The source of otherness.",
          "And the second was a terrain of interface" ] },
      { t: "l", l: [ "Of great activity",
          "Of meeting between within and without.",
          "And the third part was the terrain of internality",
          "Of self-production",
          "Of regulation and interiority.",
          "And it was a thing of great beauty",
          "Marvellous symmetry",
          "And it resembled all the things of the earth",
          "But it was not a thing of purity",
          "For it had parts of light and dark",
          "Dull and colourful",
          "Gracious and malevolent",
          "And above all else",
          "Great",
          "Unimaginable",
          "Complexity.",
          "And the voice said,",
          "This is a body of great beauty",
          "But you must fear it",
          "And adore it" ] },
      { t: "l", l: [ "For it is both wonderful and uncaring",
          "And its symmetries",
          "Will devour as happily as unfold.",
          "And this is the thing",
          "Which must be understood",
          "By the ones who walk the phosphorus path.",
          "And it has been called the architecture",
          "And it has been called the blueprint",
          "And it has been called the ambivalent one.",
          "And it holds great secrets",
          "And great powers",
          "And it is terrifying.",
          "And it is this thing",
          "This beautiful thing",
          "Which becomes the motor",
          "Which drives us towards the Sheer",
          "In the hands of Kakos.",
          "Do not doubt",
          "That he understands its power" ] },
      { t: "ci", l: [ "Better than any other",
          "For it is the condition of his mastery",
          "And he will not stop until he knows it entire",
          "But by that time",
          "We will be no more",
          "And he knows that too.",
          "So learn from its architecture",
          "And use it towards good ends",
          "But know it's indecision",
          "And know that it may devour us all",
          "If you step too close.",
          "And they said,",
          "“It is an awesome thing",
          "And it is terrifying.”",
          "And the voice replied,",
          "Do not lose sight of your fear",
          "Lest you become drowned by it",
          "And be called into the fold of Kakos.",
          "And then it said," ] },
      { t: "l", l: [
          "You have seen the body of Ambivalience",
          "And its knowledge must be treated carefully",
          "And its fruits must be taken from Kakos",
          "And destroyed or changed",
          "Lest you become him."
        ] },
      { t: "l", l: [
          "But there is another body you must know",
          "And it is even more terrifying",
          "And it is another dangerous path",
          "Which leads to corruption",
          "If not walked with care."
        ] },
      { t: "ci", l: [
          "And they were pulled away",
          "Once again",
          "From that strange form",
          "And towards another",
          "Somewhat more familiar",
          "Upon first gazing upon it."
        ] },
      { t: "ci", l: [
          "It was the form of a person",
          "Standing there",
          "In the abyss of space",
          "And its features were indeterminate"
        ] },
      { t: "ci", l: [
          "Young and old",
          "Strong and weak",
          "Changing from moment to moment",
          "From person to person",
          "As their body and face morphed endlessly."
        ] },
      { t: "ci", l: [
          "But one thing was clear",
          "They were filled with furious indignation",
          "Thrashing and crying out",
          "Under great duress."
        ] },
      { t: "ci", l: [
          "And as they peared closer",
          "At their changing face",
          "They saw that they were not a person",
          "But a million",
          "Tiny parts",
          "Arranging and rearranging",
          "Forming and reforming",
          "Like a colony of righteous frenzy."
        ] },
      { t: "ci", l: [ "And the voice spoke sadly," ] },
      { t: "l", l: [
          "This is the body undone",
          "And it is a thing of great sadness"
        ] },
      { t: "l", l: [
          "And great danger",
          "But it must be reckoned with",
          "Upon the journey to Rhagma."
        ] },
      { t: "l", l: [
          "This is the body of pain",
          "And it is an offspring of Kakos",
          "And it should not exist",
          "But it must",
          "And it is his shadow",
          "And it is his invention",
          "And it may yet become his undoing."
        ] },
      { t: "l", l: [
          "And it is a body of resistance",
          "And it is a body of struggle",
          "And though it appears hopeless",
          "And aimless",
          "It is only through this body",
          "That Kakos may collapse."
        ] },
      { t: "ci", l: [
          "And they were horrified by what they saw",
          "Such meaningless suffering",
          "Repeated for millennia",
          "And it filled them with rage",
          "And they asked,"
        ] },
      { t: "ci", l: [
          "“How can such suffering",
          "Which is bereft of meaning",
          "Lead towards Rhagma?”"
        ] },
      { t: "ci", l: [ "And the voice said," ] },
      { t: "l", l: [
          "Though it is miserable",
          "And it is battered",
          "And it is weakened",
          "This body still holds great power",
          "Power which exceeds",
          "Now and always",
          "The power of Kakos."
        ] },
      { t: "ci", l: [
          "And they said",
          "“How can this thing",
          "This sorry sight",
          "Exceed the power",
          "Of that which rules the world?”"
        ] },
      { t: "ci", l: [ "The voice said," ] },
      { t: "l", l: [
          "He is tiny",
          "Though his machinery is large"
        ] },
      { t: "l", l: [
          "But this body",
          "The body undone",
          "Is vastness upon measure",
          "And it is a thing of passion",
          "Which has not tasted the hubris of victory."
        ] },
      { t: "l", l: [
          "And though it suffers as one",
          "It is not one",
          "It is many",
          "And it has many minds",
          "And many strategems",
          "And its wisdom will prevail",
          "If only it learns that it can prevail."
        ] },
      { t: "ci", l: [
          "And then the body began to take many forms",
          "And a city appeared",
          "With a great tower at its centre",
          "And it angered the body undone",
          "And its face began to put curses upon the city",
          "And it did strange rituals",
          "And it uttered strange words",
          "And set strange spirits against the city."
        ] },
      { t: "ci", l: [ "And the voice said," ] },
      { t: "l", l: [ "This is the form of the hex." ] },
      { t: "ci", l: [
          "Then it dissolved into a great singular mass",
          "Moving as one",
          "Towards the city",
          "An unstoppable hoard",
          "A great wave of persons",
          "Set upon a goal."
        ] },
      { t: "ci", l: [ "And they voice said," ] },
      { t: "l", l: [ "This is the form of the mass." ] },
      { t: "ci", l: [
          "And when the mass had broken the gates",
          "And entered the city",
          "It divided into pieces",
          "Splintering off",
          "Dividing and regrouping",
          "Invisible and changing",
          "Great and small",
          "One and many",
          "All at once."
        ] },
      { t: "ci", l: [ "And the voice said," ] },
      { t: "l", l: [ "This is the form of the guerrilla." ] },
      { t: "ci", l: [
          "And then the form began to disrupt the structure",
          "And take pieces of it apart",
          "And jam its signals",
          "And slow it in its tracks",
          "And disrupt it in all matter of ways."
        ] },
      { t: "ci", l: [ "And the voice said," ] },
      { t: "l", l: [ "This is the form of the sabot." ] },
      { t: "ci", l: [
          "And then the form entered the buildings",
          "And they withdrew proofs",
          "And they revealed them",
          "And turned the city against the tower."
        ] },
      { t: "ci", l: [ "And the voice said," ] },
      { t: "l", l: [ "This is the form of revelation." ] },
      { t: "ci", l: [
          "And the form became hardened",
          "And began to obstruct the paths leading to the tower",
          "And they blocked the roads",
          "And refused entry to the tallest buildings."
        ] },
      { t: "ci", l: [ "And the voice said," ] },
      { t: "l", l: [ "This is the form of obstruction." ] },
      { t: "ci", l: [
          "And the form laid secret paths",
          "Through which is shared",
          "And transported",
          "And distributed",
          "And protected",
          "And grew its strength",
          "Within the city's walls."
        ] },
      { t: "ci", l: [ "And they voice said," ] },
      { t: "l", l: [ "This is the form of circulation." ] },
      { t: "ci", l: [
          "And the form built new structures",
          "Structures of resistance",
          "And they condemned the tower",
          "And held it to account",
          "And watched its actions",
          "And shared its bounty",
          "And planned in secret",
          "To undo the tower",
          "And bring life to the city."
        ] },
      { t: "ci", l: [ "And the voice said," ] },
      { t: "l", l: [ "This is the form of eyes and hands." ] },
      { t: "ci", l: [
          "And then they saw the three bodies come together",
          "And each was layered upon the next",
          "And it was a strange and messy thing",
          "And it was difficult to accept",
          "When the voice said,"
        ] },
      { t: "l", l: [
          "To follow the path of Phosophus",
          "You must walk with these three",
          "And keep your head facing Rhagma."
        ] },
      { t: "l", l: [ "For you have perceived the Trisoma." ] },
      { t: "l", l: [
          "Now learn it",
          "Understand it"
        ] },
      { t: "l", l: [
          "And work alongside it",
          "So you may pursue the shining thread."
        ] }
    ]
  },
  {
    n: 11,
    title: "Trihypostasis of Sophia",
    sections: [
      { t: "ci", l: [
          "They had perceived the Trisoma",
          "And learned of Duosophia",
          "And Kakos",
          "And Phosphorus",
          "And the construction of Dromos",
          "And they had heard many far-fetched things",
          "And they said,",
          "“That body of organs",
          "Who you call Duosophia",
          "Is a strange thing",
          "A far-off thing",
          "And though it is beautiful",
          "And emanates soft light",
          "It remains obscure",
          "And far away.”"
        ] },
      { t: "ci", l: [
          "And then in an instant",
          "They were pulled down from the heavens",
          "Down from the cosmic bodies they had been shown",
          "Past the little sphere upon which the spindle had stood",
          "Down to the earth",
          "Over which Kakos reigned"
        ] },
      { t: "ci", l: [
          "And they returned to where they had begun",
          "And saw themselves sitting on the heath",
          "As though no time had passed",
          "And they voice said,"
        ] },
      { t: "l", l: [
          "Sophia is here",
          "Within you now",
          "And among you in times of camaraderie",
          "And waiting at the end of time."
        ] },
      { t: "l", l: [
          "And she is all three of these",
          "And though you cannot see what is yet to come",
          "You can feel her in your heart",
          "And see her in commonality",
          "And do what you can to summon her fullness."
        ] },
      { t: "l", l: [
          "And her presence in your heart",
          "Shall be called Scisophia."
        ] },
      { t: "l", l: [
          "And her presence in commonality",
          "Shall be called Monosophia."
        ] },
      { t: "l", l: [
          "And her presence in her fullness",
          "At the end of history"
        ] },
      { t: "l", l: [ "Shall be called Duosophia." ] },
      { t: "l", l: [
          "And these are three souls of humanity",
          "For the soul is not contained by the body",
          "Nor held by the self",
          "But rather seeks togetherness",
          "But is everywhere split by Kakos."
        ] },
      { t: "ci", l: [
          "And as they looked upon themselves",
          "They saw a spark within them",
          "And it was severed in two",
          "Separated from itself",
          "As if lacerated by a spindle."
        ] },
      { t: "ci", l: [ "And they said," ] },
      { t: "l", l: [ "She is the faint spark of Phosphorus." ] },
      { t: "l", l: [ "And she is given through the breath of her mother." ] },
      { t: "l", l: [ "And she is a shard of Passion." ] },
      { t: "l", l: [ "And she speaks through her lips." ] },
      { t: "l", l: [ "And she walks the channel." ] },
      { t: "l", l: [ "And she resists through the body undone." ] },
      { t: "l", l: [ "And she is in adoration of difference." ] },
      { t: "l", l: [ "And she is a thing of beginnings." ] },
      { t: "l", l: [
          "And her name is Scisophia",
          "And she exists in all of those",
          "Who have not snuffed her out",
          "And replaced her",
          "With the paracytic spirit."
        ] },
      { t: "l", l: [
          "And she grows brighter",
          "In knowledge",
          "In meditation",
          "In love",
          "And in communion with others."
        ] },
      { t: "ci", l: [
          "And then many were among them",
          "All sat there upon the heath",
          "Hundreds upon hundreds",
          "Unified in their purpose"
        ] },
      { t: "ci", l: [
          "In single-minded solidarity",
          "And beneath them",
          "The heath appeared like a clean lake",
          "Reflecting each of them."
        ] },
      { t: "ci", l: [ "And they said," ] },
      { t: "l", l: [ "She is the threaded needle of Phosphorus." ] },
      { t: "l", l: [ "And she is given through the word of her mother." ] },
      { t: "l", l: [ "And she is a shard of Contagion." ] },
      { t: "l", l: [ "And she is sustained through her breast." ] },
      { t: "l", l: [ "And she known through the body ambivalent." ] },
      { t: "l", l: [ "And she is equal with all." ] },
      { t: "l", l: [ "And she is a thing of middles." ] },
      { t: "l", l: [
          "And her name is Monosophia",
          "And she is there among you",
          "At times of communion"
        ] },
      { t: "l", l: [
          "In moments of solidarity",
          "When the taste of revolution",
          "Is felt by all."
        ] },
      { t: "l", l: [
          "And she is detested by Kakos",
          "And her suffocation is his highest goal",
          "Aside from onanism."
        ] },
      { t: "l", l: [
          "And to nurture her",
          "Is our greatest invitation",
          "And most difficult pursuit",
          "For to him she is a cancer",
          "But to us she is sweet harmony",
          "Which we only need sustain."
        ] },
      { t: "ci", l: [
          "And the vision became stranger still",
          "And the hundreds who sat",
          "Upon the mirrored floor",
          "Became millions",
          "And they were each a single cell",
          "Of something magnificent",
          "And as the frame increase",
          "To accommodate millions",
          "So too it aged"
        ] },
      { t: "ci", l: [
          "Yet did not degrade",
          "But rather grew greater",
          "And the bodies began to merge",
          "And the form of them as one began to alter",
          "Until the form resembled organs",
          "And all were part of all",
          "And all were together",
          "And all loved",
          "And all were equal",
          "And all were adored in their difference."
        ] },
      { t: "ci", l: [ "And the voice said," ] },
      { t: "l", l: [ "She casts the light of Phosphorus." ] },
      { t: "l", l: [ "And she is given through the whisper of her mother." ] },
      { t: "l", l: [ "And she is a shard of Inspiration." ] },
      { t: "l", l: [ "And she is held within the womb." ] },
      { t: "l", l: [ "And she known through the body of organs." ] },
      { t: "l", l: [ "And she loves all." ] },
      { t: "l", l: [ "And she is a thing of ends." ] },
      { t: "l", l: [
          "And her name is Duosophia",
          "And she is the return of the fallen",
          "And she will mark the end of history",
          "If our will finds the strength to grasp it."
        ] },
      { t: "l", l: [
          "And she is the final cause",
          "Towards which we ought chase."
        ] },
      { t: "l", l: [
          "And she is a myth",
          "Who must be rendered a reality",
          "If our children are to live",
          "On fertile soil."
        ] },
      { t: "l", l: [
          "And she is the mother yet to come",
          "Who awaits us at the end of time",
          "And beacons us to approach",
          "If only we can overcome",
          "That monstrous obstruction."
        ] },
      { t: "ci", l: [
          "And they sat there on the grass",
          "At once themself"
        ] },
      { t: "ci", l: [
          "And yet part of something massive",
          "At once here",
          "And yet at the end of time."
        ] },
      { t: "ci", l: [ "And another voice whispered to them," ] },
      { t: "c", l: [
          "Travel the Phosphorus path",
          "So that one day",
          "We may manifest."
        ] }
    ]
  }
];

// ── SVG SYMBOL ────────────────────────────────────────────────────────────────

function duosophis() {
  return `<svg viewBox="0 0 220 200" width="160" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Duosophia symbol">
  <polygon points="110,188 8,12 212,12" fill="#1a3a9a" stroke="#111" stroke-width="10" stroke-linejoin="round"/>
  <circle cx="110" cy="94" r="46" fill="#e8c830"/>
  <circle cx="110" cy="64" r="7" fill="#cc2222"/>
  <rect x="76" y="81" width="68" height="9" rx="1" fill="#cc2222"/>
  <rect x="76" y="98" width="68" height="9" rx="1" fill="#cc2222"/>
  <circle cx="110" cy="124" r="7" fill="#cc2222"/>
</svg>`;
}

// ── RENDER ────────────────────────────────────────────────────────────────────

function renderChapter(ch) {
  if (!ch.sections) {
    return `<p class="coming-soon">Chapter ${toRoman(ch.n)} is coming soon.</p>`;
  }

  let verse = 0;
  const html = ch.sections.map(s => {
    if (s.t === 'img') {
      return `<div class="chapter-image">${duosophis()}</div>`;
    }
    const cls = s.t === 'ci' ? 'stanza centered italic'
              : s.t === 'c'  ? 'stanza centered'
              : 'stanza left';
    let mark = '';
    if (s.t === 'l') {
      verse++;
      mark = `<span class="verse-num">${ch.n}:${verse}</span>`;
    }
    const lines = s.l.map(line => `<p>${escHtml(line)}</p>`).join('');
    return `<div class="${cls}">${mark}<div class="stanza-lines">${lines}</div></div>`;
  }).join('');

  return html;
}

function escHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function toRoman(n) {
  const map = [[11,'XI'],[10,'X'],[9,'IX'],[8,'VIII'],[7,'VII'],[6,'VI'],[5,'V'],[4,'IV'],[3,'III'],[2,'II'],[1,'I']];
  for (const [v, r] of map) if (n >= v) return r;
  return n;
}

// ── STATE & ROUTING ───────────────────────────────────────────────────────────

let currentChapter = 1;

function goTo(n) {
  n = Math.max(1, Math.min(11, n));
  currentChapter = n;
  window.location.hash = `chapter-${n}`;
  paint();
  window.scrollTo(0, 0);
  closeDropdown();
  closeComments();
}

function paint() {
  const ch = CHAPTERS[currentChapter - 1];
  const main = document.getElementById('chapterMain');

  main.innerHTML = `
    <span class="chapter-eyebrow">Chapter ${toRoman(currentChapter)}</span>
    <h1 class="chapter-title">${ch.title || ('Chapter ' + toRoman(ch.n))}</h1>
    ${renderChapter(ch)}
  `;

  document.title = ch.title
    ? `${ch.title} — The Book of Phosphorus`
    : `Chapter ${toRoman(ch.n)} — The Book of Phosphorus`;

  document.getElementById('prevBtn').disabled = currentChapter === 1;
  document.getElementById('nextBtn').disabled = currentChapter === 11;

  document.querySelectorAll('.chapters-dropdown a').forEach(a => {
    a.classList.toggle('current', Number(a.dataset.chapter) === currentChapter);
  });

  renderComments();
}

function readHash() {
  const m = window.location.hash.match(/chapter-(\d)/);
  return m ? Number(m[1]) : 1;
}

// ── COMMENTS (localStorage) ───────────────────────────────────────────────────

function commentsKey() { return `bop_comments_ch${currentChapter}`; }

function loadComments() {
  try { return JSON.parse(localStorage.getItem(commentsKey()) || '[]'); }
  catch { return []; }
}

function saveComments(list) {
  localStorage.setItem(commentsKey(), JSON.stringify(list));
}

function renderComments() {
  const list = loadComments();
  const el = document.getElementById('commentsList');
  if (!list.length) { el.innerHTML = ''; return; }
  el.innerHTML = list.map(c => `
    <div class="comment-item">
      <div class="comment-item-meta">${escHtml(c.name || 'Anonymous')} · ${c.date}</div>
      <div class="comment-item-text">${escHtml(c.text)}</div>
    </div>
  `).join('');
}

// ── SHARE ─────────────────────────────────────────────────────────────────────

async function share() {
  const ch = CHAPTERS[currentChapter - 1];
  const title = `The Book of Phosphorus — ${ch.title || ('Chapter ' + toRoman(ch.n))}`;
  const url = window.location.href;

  if (navigator.share) {
    try {
      await navigator.share({ title, url });
      return;
    } catch {}
  }

  try {
    await navigator.clipboard.writeText(url);
    showToast('Link copied');
  } catch {
    showToast('Copy the URL to share');
  }
}

// ── TOAST ─────────────────────────────────────────────────────────────────────

let toastTimer;

function showToast(msg) {
  const el = document.getElementById('toast');
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('show'), 2400);
}

// ── DROPDOWN ──────────────────────────────────────────────────────────────────

function closeDropdown() {
  document.getElementById('chaptersDropdown').classList.remove('open');
}

// ── COMMENTS PANEL ────────────────────────────────────────────────────────────

function closeComments() {
  document.getElementById('commentPanel').classList.remove('open');
}

// ── INIT ──────────────────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
  currentChapter = readHash();
  paint();

  // chapter nav buttons
  document.getElementById('prevBtn').addEventListener('click', () => goTo(currentChapter - 1));
  document.getElementById('nextBtn').addEventListener('click', () => goTo(currentChapter + 1));

  // home logo
  document.querySelector('.nav-logo').addEventListener('click', e => {
    e.preventDefault();
    goTo(1);
  });

  // chapters dropdown toggle
  document.getElementById('chaptersBtn').addEventListener('click', e => {
    e.stopPropagation();
    document.getElementById('chaptersDropdown').classList.toggle('open');
  });

  document.getElementById('chaptersDropdown').addEventListener('click', e => {
    const a = e.target.closest('a[data-chapter]');
    if (!a) return;
    e.preventDefault();
    goTo(Number(a.dataset.chapter));
  });

  document.addEventListener('click', e => {
    if (!e.target.closest('.nav-chapters-wrap')) closeDropdown();
  });

  // share
  document.getElementById('shareBtn').addEventListener('click', share);

  // comment panel
  document.getElementById('commentBtn').addEventListener('click', () => {
    document.getElementById('commentPanel').classList.toggle('open');
  });

  document.getElementById('closeCommentBtn').addEventListener('click', closeComments);

  document.getElementById('submitComment').addEventListener('click', () => {
    const text = document.getElementById('commentText').value.trim();
    if (!text) return;
    const name = document.getElementById('commentName').value.trim();
    const list = loadComments();
    list.push({
      name,
      text,
      date: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
    });
    saveComments(list);
    document.getElementById('commentText').value = '';
    renderComments();
    showToast('Comment posted');
  });

  // download placeholder
  document.getElementById('downloadBtn').addEventListener('click', e => {
    e.preventDefault();
    showToast('PDF download coming soon');
  });

  // purchase placeholder
  document.getElementById('purchaseBtn').addEventListener('click', e => {
    e.preventDefault();
    showToast('Purchase page coming soon');
  });

  // hash navigation
  window.addEventListener('hashchange', () => {
    const n = readHash();
    if (n !== currentChapter) { currentChapter = n; paint(); }
  });
});
