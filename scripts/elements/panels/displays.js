/*
 *  JSS-01 |JavaScript Software Synthesizer
 *  Copyright (c) 2022 Michael Kolesidis
 *  MIT License
 *
 */

export default function displays() {
    return /*html*/ `
<div>
  <p class="label">MIDI</p>
  <div id="midi-display"></div>
</div>
<div >
  <p class="label">Oscilloscope</p>
  <div id="oscilloscope"></div>
</div>
<div >
  <p class="label">Spectrogram</p>
  <div id="spectrogram"></div>
</div>
<div >
  <p class="label">Meter</p>
  <div id="meter"></div>
</div>
`
}