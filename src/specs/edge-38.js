"use strict";

const name = "edge:38";
const released = "2016-08-02";
const spec = {
  "/AudioContext": { "global": "AudioContext" },
  "/AudioContext/close": {},
  "/AudioContext/createAnalyser": {},
  "/AudioContext/createBiquadFilter": {},
  "/AudioContext/createBuffer": {},
  "/AudioContext/createBufferSource": {},
  "/AudioContext/createChannelMerger": {},
  "/AudioContext/createChannelSplitter": {},
  "/AudioContext/createConvolver": {},
  "/AudioContext/createDelay": {},
  "/AudioContext/createDynamicsCompressor": {},
  "/AudioContext/createGain": {},
  "/AudioContext/createIIRFilter": {},
  "/AudioContext/createMediaElementSource": {},
  "/AudioContext/createMediaStreamSource": {},
  "/AudioContext/createOscillator": {},
  "/AudioContext/createPanner": {},
  "/AudioContext/createPeriodicWave": {},
  "/AudioContext/createScriptProcessor": {},
  "/AudioContext/createStereoPanner": {},
  "/AudioContext/createWaveShaper": {},
  "/AudioContext/currentTime": {},
  "/AudioContext/decodeAudioData": { "promise": true },
  "/AudioContext/destination": {},
  "/AudioContext/listener": {},
  "/AudioContext/onstatechange": {},
  "/AudioContext/resume": {},
  "/AudioContext/sampleRate": {},
  "/AudioContext/state": {},
  "/AudioContext/suspend": {},

  "/OfflineAudioContext": { "global": "OfflineAudioContext" },
  "/OfflineAudioContext/length": {},
  "/OfflineAudioContext/oncomplete": {},
  "/OfflineAudioContext/startRendering": {},
  "/OfflineAudioContext/suspend": {},

  "/AudioNode": { "global": "AudioNode", "protected": true },
  "/AudioNode/channelCount": {},
  "/AudioNode/channelCountMode": {},
  "/AudioNode/channelInterpretation": {},
  "/AudioNode/connect": { "chain": true },
  "/AudioNode/context": {},
  "/AudioNode/disconnect": { "selective": true },
  "/AudioNode/numberOfInputs": {},
  "/AudioNode/numberOfOutputs": {},

  "/AudioDestinationNode": { "global": "AudioDestinationNode", "protected": true },
  "/AudioDestinationNode/maxChannelCount": {},

  "/AudioParam": { "global": "AudioParam", "protected": true },
  "/AudioParam/cancelScheduledValues": { "chain": true },
  "/AudioParam/defaultValue": {},
  "/AudioParam/exponentialRampToValueAtTime": { "chain": true },
  "/AudioParam/linearRampToValueAtTime": { "chain": true },
  "/AudioParam/setTargetAtTime": { "chain": true },
  "/AudioParam/setValueAtTime": { "chain": true },
  "/AudioParam/setValueCurveAtTime": { "chain": true },
  "/AudioParam/value": {},

  "/GainNode": { "global": "GainNode", "protected": true },
  "/GainNode/gain": {},

  "/DelayNode": { "global": "DelayNode", "protected": true },
  "/DelayNode/delayTime": {},

  "/AudioBuffer": { "global": "AudioBuffer", "protected": true },
  "/AudioBuffer/copyFromChannel": {},
  "/AudioBuffer/copyToChannel": {},
  "/AudioBuffer/duration": {},
  "/AudioBuffer/getChannelData": {},
  "/AudioBuffer/length": {},
  "/AudioBuffer/numberOfChannels": {},
  "/AudioBuffer/sampleRate": {},

  "/AudioBufferSourceNode": { "global": "AudioBufferSourceNode", "protected": true },
  "/AudioBufferSourceNode/buffer": {},
  "/AudioBufferSourceNode/detune": {},
  "/AudioBufferSourceNode/loop": {},
  "/AudioBufferSourceNode/loopEnd": {},
  "/AudioBufferSourceNode/loopStart": {},
  "/AudioBufferSourceNode/onended": {},
  "/AudioBufferSourceNode/playbackRate": {},
  "/AudioBufferSourceNode/start": {},
  "/AudioBufferSourceNode/stop": {},

  "/MediaElementAudioSourceNode": { "global": "MediaElementAudioSourceNode", "protected": true },

  "/ScriptProcessorNode": { "global": "ScriptProcessorNode", "protected": true },
  "/ScriptProcessorNode/bufferSize": {},
  "/ScriptProcessorNode/onaudioprocess": {},

  "/PannerNode": { "global": "PannerNode", "protected": true },
  "/PannerNode/coneInnerAngle": {},
  "/PannerNode/coneOuterAngle": {},
  "/PannerNode/coneOuterGain": {},
  "/PannerNode/distanceModel": {},
  "/PannerNode/maxDistance": {},
  "/PannerNode/panningModel": {},
  "/PannerNode/refDistance": {},
  "/PannerNode/rolloffFactor": {},
  "/PannerNode/setOrientation": {},
  "/PannerNode/setPosition": {},
  "/PannerNode/setVelocity": {},

  "/AudioListener": { "global": "AudioListener", "protected": true },
  "/AudioListener/dopplerFactor": {},
  "/AudioListener/setOrientation": {},
  "/AudioListener/setPosition": {},
  "/AudioListener/setVelocity": {},
  "/AudioListener/speedOfSound": {},

  "/StereoPannerNode": { "global": "StereoPannerNode", "protected": true },
  "/StereoPannerNode/pan": {},

  "/ConvolverNode": { "global": "ConvolverNode", "protected": true },
  "/ConvolverNode/buffer": {},
  "/ConvolverNode/normalize": {},

  "/AnalyserNode": { "global": "AnalyserNode", "protected": true },
  "/AnalyserNode/fftSize": {},
  "/AnalyserNode/frequencyBinCount": {},
  "/AnalyserNode/getByteFrequencyData": {},
  "/AnalyserNode/getByteTimeDomainData": {},
  "/AnalyserNode/getFloatFrequencyData": {},
  "/AnalyserNode/getFloatTimeDomainData": {},
  "/AnalyserNode/maxDecibels": {},
  "/AnalyserNode/minDecibels": {},
  "/AnalyserNode/smoothingTimeConstant": {},

  "/ChannelSplitterNode": { "global": "ChannelSplitterNode", "protected": true },

  "/ChannelMergerNode": { "global": "ChannelMergerNode", "protected": true },

  "/DynamicsCompressorNode": { "global": "DynamicsCompressorNode", "protected": true },
  "/DynamicsCompressorNode/attack": {},
  "/DynamicsCompressorNode/knee": {},
  "/DynamicsCompressorNode/ratio": {},
  "/DynamicsCompressorNode/reduction": { "number": true },
  "/DynamicsCompressorNode/release": {},
  "/DynamicsCompressorNode/threshold": {},

  "/BiquadFilterNode": { "global": "BiquadFilterNode", "protected": true },
  "/BiquadFilterNode/detune": {},
  "/BiquadFilterNode/frequency": {},
  "/BiquadFilterNode/gain": {},
  "/BiquadFilterNode/getFrequencyResponse": {},
  "/BiquadFilterNode/Q": {},
  "/BiquadFilterNode/type": {},

  "/IIRFilterNode": { "global": "IIRFilterNode", "protected": true },
  "/IIRFilterNode/getFrequencyResponse": {},

  "/WaveShaperNode": { "global": "WaveShaperNode", "protected": true },
  "/WaveShaperNode/curve": {},
  "/WaveShaperNode/oversample": {},

  "/OscillatorNode": { "global": "OscillatorNode", "protected": true },
  "/OscillatorNode/detune": {},
  "/OscillatorNode/frequency": {},
  "/OscillatorNode/onended": {},
  "/OscillatorNode/setPeriodicWave": {},
  "/OscillatorNode/start": {},
  "/OscillatorNode/stop": {},
  "/OscillatorNode/type": {},

  "/PeriodicWave": { "global": "PeriodicWave", "protected": true },

  "/MediaStreamAudioSourceNode": { "global": "MediaStreamAudioSourceNode", "protected": true }
};

module.exports = { name, released, spec };
