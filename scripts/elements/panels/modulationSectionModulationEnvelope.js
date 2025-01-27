/*
 *  JSS-01 |JavaScript Software Synthesizer
 *  Copyright (c) 2022 Michael Kolesidis
 *  MIT License
 *
 */

export default function modulationSectionModulationEnvelope() {
    return /*html*/ `
<div class="component">
    <p class="label">
    Attack &nbsp;&nbsp; Decay &nbsp;&nbsp; Sustain &nbsp;&nbsp;
    Release
    </p>
    <div id="modulation-adsr"></div>
</div>
<div class="component">
    <p class="label">Attack Curve</p>
    <div id="modulation-attack-curve"></div>
    <p class="label list">Decay Curve</p>
    <div id="modulation-decay-curve"></div>
    <p class="label list">Release Curve</p>
    <div id="modulation-release-curve"></div>
</div>
`
}