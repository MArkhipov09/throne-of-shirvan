Audio file referenced by src/game.js:

  music.mp3 — single ambient track, plays on loop while music is toggled on

The game references this path and fails gracefully if the file is absent.
Drop the audio file into this directory when ready.

The track plays continuously across cards, results, and the ending screen.
It pauses when the user toggles audio off and resumes when toggled back on.
Browser autoplay rules prevent it from starting before the first user gesture
on the page; once any click or key press occurs, queued playback proceeds.
