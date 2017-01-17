"use strict";

const name = "spec:201112";

const spec = {
  "/AudioContext": { "global": "AudioContext" },
  "/AudioContext/createAnalyser": {},
  "/AudioContext/createBiquadFilter": {},
  "/AudioContext/createBuffer": { "mixToMono": true },
  "/AudioContext/createBufferSource": {},
  "/AudioContext/createChannelMerger": {},
  "/AudioContext/createChannelSplitter": {},
  "/AudioContext/createConvolver": {},
  "/AudioContext/createDelayNode": {},
  "/AudioContext/createDynamicsCompressor": {},
  "/AudioContext/createGainNode": {},
  "/AudioContext/createJavaScriptNode": {},
  "/AudioContext/createPanner": {},
  "/AudioContext/currentTime": {},
  "/AudioContext/decodeAudioData": { "void": true },
  "/AudioContext/destination": {},
  "/AudioContext/listener": {},
  "/AudioContext/sampleRate": {},

  "/AudioNode": { "global": "AudioNode", "protected": true },
  "/AudioNode/connect": { "void": true },
  "/AudioNode/context": {},
  "/AudioNode/disconnect": {},
  "/AudioNode/numberOfInputs": {},
  "/AudioNode/numberOfOutputs": {},

  "/AudioSourceNode": { "global": "AudioSourceNode", "protected": true },

  "/AudioDestinationNode": { "global": "AudioDestinationNode", "protected": true },
  "/AudioDestinationNode/numberOfChannels": {},

  "/AudioParam": { "global": "AudioParam", "protected": true },
  "/AudioParam/cancelScheduledValues": { "void": true },
  "/AudioParam/defaultValue": {},
  "/AudioParam/exponentialRampToValueAtTime": { "void": true },
  "/AudioParam/linearRampToValueAtTime": { "void": true },
  "/AudioParam/maxValue": {},
  "/AudioParam/minValue": {},
  "/AudioParam/name": {},
  "/AudioParam/setTargetValueAtTime": { "void": true },
  "/AudioParam/setValueAtTime": { "void": true },
  "/AudioParam/setValueCurveAtTime": { "void": true },
  "/AudioParam/units": {},
  "/AudioParam/value": {},

  "/GainNode": { "global": "AudioGainNode", "protected": true },
  "/GainNode/gain": {},

  "/DelayNode": { "global": "DelayNode", "protected": true },
  "/DelayNode/delayTime": {},

  "/AudioBuffer": { "global": "AudioBuffer", "protected": true },
  "/AudioBuffer/duration": {},
  "/AudioBuffer/gain": {},
  "/AudioBuffer/getChannelData": {},
  "/AudioBuffer/length": {},
  "/AudioBuffer/numberOfChannels": {},
  "/AudioBuffer/sampleRate": {},

  "/AudioBufferSourceNode": { "global": "AudioBufferSourceNode", "protected": true },
  "/AudioBufferSourceNode/buffer": {},
  "/AudioBufferSourceNode/gain": {},
  "/AudioBufferSourceNode/loop": {},
  "/AudioBufferSourceNode/noteGrainOn": {},
  "/AudioBufferSourceNode/noteOff": {},
  "/AudioBufferSourceNode/noteOn": {},
  "/AudioBufferSourceNode/playbackRate": {},

  "/MediaElementAudioSourceNode": { "global": "MediaElementAudioSourceNode", "protected": true },

  "/ScriptProcessorNode": { "global": "JavaScriptAudioNode", "protected": true },
  "/ScriptProcessorNode/bufferSize": {},
  "/ScriptProcessorNode/onaudioprocess": {},

  "/PannerNode": { "global": "AudioPannerNode", "protected": true },
  "/PannerNode/EQUALPOWER": {},
  "/PannerNode/HRTF": {},
  "/PannerNode/SOUNDFIELD": {},
  "/PannerNode/coneGain": {},
  "/PannerNode/coneInnerAngle": {},
  "/PannerNode/coneOuterAngle": {},
  "/PannerNode/coneOuterGain": {},
  "/PannerNode/distanceGain": {},
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
  "/AudioListener/gain": {},
  "/AudioListener/setOrientation": {},
  "/AudioListener/setPosition": {},
  "/AudioListener/setVelocity": {},
  "/AudioListener/speedOfSound": {},

  "/ConvolverNode": { "global": "ConvolverNode", "protected": true },
  "/ConvolverNode/buffer": {},

  "/AnalyserNode": { "global": "RealtimeAnalyserNode", "protected": true },
  "/AnalyserNode/fftSize": {},
  "/AnalyserNode/frequencyBinCount": {},
  "/AnalyserNode/getByteFrequencyData": {},
  "/AnalyserNode/getByteTimeDomainData": {},
  "/AnalyserNode/getFloatFrequencyData": {},
  "/AnalyserNode/maxDecibels": {},
  "/AnalyserNode/minDecibels": {},
  "/AnalyserNode/smoothingTimeConstant": {},

  "/ChannelSplitterNode": { "global": "AudioChannelSplitter", "protected": true },

  "/ChannelMergerNode": { "global": "AudioChannelMerger", "protected": true },

  "/DynamicsCompressorNode": { "global": "DynamicsCompressorNode", "protected": true },

  "/BiquadFilterNode": { "global": "BiquadFilterNode", "protected": true },
  "/BiquadFilterNode/ALLPASS": {},
  "/BiquadFilterNode/BANDPASS": {},
  "/BiquadFilterNode/HIGHPASS": {},
  "/BiquadFilterNode/HIGHSHELF": {},
  "/BiquadFilterNode/LOWPASS": {},
  "/BiquadFilterNode/LOWSHELF": {},
  "/BiquadFilterNode/NOTCH": {},
  "/BiquadFilterNode/PEAKING": {},
  "/BiquadFilterNode/frequency": {},
  "/BiquadFilterNode/gain": {},
  "/BiquadFilterNode/Q": {},
  "/BiquadFilterNode/type": {},

  "/WaveShaperNode": { "global": "WaveShaperNode", "protected": true },
  "/WaveShaperNode/curve": {}
};

module.exports = { name, spec };
