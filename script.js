/*****
DONE: Add author to the tweet
DONE: Add typewriter.js to make generator look more interactive
DONE: Add scan effect to the whole thing
DONE: NEON button

TODO: Mobile responsiveness
TODO: Fix the tweeting feature 140 character tweet limit
TODO: Random number/quote on click shouldn't sometimes be the same as the previous one, making the quote form look unresponsive/broken
TODO: Rotating phone from landscape to portrait causes height issues
TODO: Give users the ability to add quotes and/or upvote or rate their favorite quotes -- could be abused though.
TODO: More quotes!
TODO: Add more cyberpunk-y effects and animations namely the "glitch" effect to the quote block, old low-fi CRT monitor effect, maybe blur effect.


*****/

$(document).ready(function() {
  var quoteList = [
    { author: "Jess C. Scott", source: "The Darker Side of Life", quote: "The brightest light casts the darkest shadow." },
    { author: "Neal Stephenson", source: "Snow Crash", quote: "To condense fact from the vapor of nuance." },
    { author: "William Gibson", source: "Neuromancer", quote: "Falling burned and blinded through a Siberian sky." },
    { author: "Anna L. Davis", source: "Open Source", quote: "I’d been an outcast my entire life. Growing up with technophobe parents in the dawn of a Cyborg Age did that to a person." },
    { author: "Eric Schmidth", source: "Dystopian Times", quote: "The Internet is the first thing that humanity has built that humanity doesn’t understand, the largest experiment in anarchy that we have ever had." },
    { author: "Philip K. Dick", source: "Do Androids Dream of Electric Sheep?", quote: "You will be required to do wrong no matter where you go. It is the basic condition of life, to be required to violate your own identity." },
    { author: "William Gibson", source: "Johnny Mnemonic", quote: "It’s impossible to move, to live, to operate at any level without leaving traces, bits, seemingly meaningless fragments of personal information. Fragments that can be retrieved, amplified…" },
    { author: "Lain Iwakura", source: "Serial Experiments: Lain", quote: "No matter where you go, everyone’s connected." },
    { author: "William Gibson", source: "Zero History", quote: "When you want to know how things really work, study them when they’re coming apart." },
    { author: "Jeff Somers", source: "The Electric Church", quote: "Let me show you an endless trail of sunsets." },
    { author: "Roy Batty", source: "Blade Runner", quote: "I've seen things you people wouldn't believe. Attack ships on fire off the shoulder of Orion. I watched c-beams glitter in the dark near the Tannhäuser Gate. All those moments will be lost in time, like tears in rain. Time to die." },
    { author: "Neal Stephenson", source: "Snow Crash", quote: "See, the world is full of things more powerful than us. But if you know how to catch a ride, you can go places." },
    { author: "Neal Stephenson", source: "Snow Crash", quote: "Jack the sound barrier. Bring the noise." },
    { author: "Cooper", source: "Interstellar", quote: "We used to look up at the sky and wonder at our place in the stars. Now we just look down and worry about our place in the dirt."},
    { author: "Cooper", source: "Interstellar", quote: "Murphy's Law doesn't mean that something bad will happen. What it means is, whatever can happen, will happen." },
    { author: "TARS", source: "Interstellar", quote: "Absolute honesty isn't always the most diplomatic, nor the safest form of communication with emotional beings." },
    { author: "Donald", source: "Interstellar", quote: "'Don't trust the right thing done for the wrong reason. The why of the thing, that's the foundation.'" },
    { author: "Dr. Mann", source: "Interstellar", quote: "Our survival instinct is our single greatest source of inspiration." },
    { author: "Neal Stephenson", source: "Snow Crash", quote: "Well, all information looks like noise until you break the code." },
    { author: "Morpheus", source: "Matrix", quote: "What is real? How do you define 'real'? If you're talking about what you can feel, what you can smell, what you can taste and see, then 'real' is simply electrical signals interpreted by your brain." },
    { author: "Morpheus", source: "Matrix", quote: "You have to let it all go, Neo. Fear, doubt, and disbelief. Free your mind." },
    { author: "Morpheus", source: "Matrix", quote: "Have you ever had a dream, Neo, that you were so sure was real? What if you were unable to wake from that dream? How would you know the difference between the dream world and the real world?" },
    { author: "Morpheus", source: "Matrix", quote: "What is real? How do you define 'real'? If you're talking about what you can feel, what you can smell, what you can taste and see, then 'real' is simply electrical signals interpreted by your brain." },
    { author: "Dr Ian Malcolm", source: "Jurassic Park", quote: "If I may... Um, I'll tell you the problem with the scientific power that you're using here, it didn't require any discipline to attain it. You read what others had done and you took the next step. You didn't earn the knowledge for yourselves, so you don't take any responsibility for it. You stood on the shoulders of geniuses to accomplish something as fast as you could, and before you even knew what you had, you patented it, and packaged it, and slapped it on a plastic lunchbox, and now you're selling it, you wanna sell it. Well..." },
    { author: "Agent Smith", source: "Matrix", quote: "Did you know that the first Matrix was designed to be a perfect human world? Where none suffered, where everyone would be happy. It was a disaster. No one would accept the program. Entire crops were lost. Some believed we lacked the programming language to describe your perfect world. But I believe that, as a species, human beings define their reality through suffering and misery. The perfect world was a dream that your primitive cerebrum kept trying to wake up from. Which is why the Matrix was redesigned to this: the peak of your civilization. I say your civilization, because as soon as we started thinking for you it really became our civilization, which is of course what this is all about. Evolution, Morpheus, evolution. Like the dinosaur. Look out that window. You've had your time. The future is *our* world, Morpheus. The future is our time." },
    { author: "Ripley", source: "Aliens", quote: "Get away from her, you bitch!" },
    { author: "Hudson", source:"Aliens", quote: "We're On An Express Elevator To Hell, Goin' Down!" },
    { author: "Corporal Hicks", source:"Aliens", quote: "Yo! Stop Your Grinnin' And Drop Your Linen!" },
    { author: "Hudson", source:"Aliens", quote: "Game Over, Man! Game Over!" },
    { author: "Dutch", source: "Predator", quote: "If it bleeds... we can kill it." },
    { author: "Officer John Anderton", source: "Minority Report", quote: "Hello, Lamar. I just wanted to congratulate you. You did it: you created a world without murder. And all you had to do was kill someone to do it." },
    { author: "Officer John Anderton", source: "Minority Report", quote: "There hasn't been a murder in six years. The system, it is perfect." },
    { author: "Niander Wallace", source: "Blade Runner 2049", quote: "Pain reminds you the joy you felt was real. More joy, then! Do not be afraid." },
    { author: "Sapper Morton", source: "Blade Runner 2049", quote: "You newer models are happy scraping the shit... because you've never seen a miracle." },
    { author: "Niander Wallace", source: "Blade Runner 2049", quote: "Pain reminds you the joy you felt was real. More joy, then! Do not be afraid." },
    { author: "K", source: "Blade Runner 2049", quote: "All the best memories are hers." },
    { author: "Niander Wallace", source: "Blade Runner 2049", quote: "Every leap of civilization was built on the back of a disposable workforce, but I can only make so many." },
    { author: "K", source: "Blade Runner 2049", quote: " I have memories, but they're not real. They're just implants." },
    { author: "K", source: "Blade Runner 2049", quote: " I've never retired something that was born before." }
  ];

// var quoteRandomize = '';
// var quoteMain = '';
// var quoteAuthor = '';
// var quoteSource = '';
  
  function quoteGenerate() {  
    var quoteRandomize = Math.floor(Math.random() * quoteList.length);
    var quoteMain = quoteList[quoteRandomize].quote;
    var quoteAuthor = quoteList[quoteRandomize].author;
    var quoteSource = quoteList[quoteRandomize].source;
    
    $("#quote").text(quoteMain);
    $("#author").text(quoteAuthor);
    $("#source").text(quoteSource);

    var part1 = document.getElementById('quote');
    var part2 = document.getElementById('author');
    var part3 = document.getElementById('source');
    


    var typewriter = new Typewriter(part1, {
      delay: 1
                    });

    typewriter.typeString(""+ quoteMain +"")
   
              .start();

                    
    var typewriter2 = new Typewriter(part2, {
                    cursor: '‎ '
                    });

    typewriter2.pauseFor(5000)
                .typeString(""+ quoteAuthor +"")
                
                .start();

                    
    var typewriter3 = new Typewriter(part3, {
                    cursor: '‎ '
                    });

    typewriter3.pauseFor(5500)
               .typeString(""+ quoteSource +"")
               .start(); 

              

    }
               
  
  /**** Quote Limit Test ****/
  // function quoteTweet() {   
  //   if((quoteMain + quoteAuthor).length > 140 ){
  //     alert("no");
  //   } else {
  //     quoteTweet();
  //   }
  //   window.open("https://twitter.com/home/?status=" + "\"" + $("#quote").text() + "\"" + " - " + $("#author").text(), '_blank');
  // };
  
  $(".tweet").on("click", function() {
    window.open("https://twitter.com/home/?status=" + "\"" + $("#quote").text() + "\"" + " - " + $("#author").text(), '_blank');
    });
  
  // $(".tweet").on("click", function() {
  //  quoteTweet();
  // });

  let wrapmid = document.querySelector('.wrap-mid');


  $("#new-quote").on("click", function() {
    quoteGenerate();
    // wrapmid.style.visibility = "hidden";
    // wrapmid.style.display = "none";

  });


  // quoteTweet();
  quoteGenerate();
});