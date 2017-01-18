"use strict";

const name = "spec:draft";
const released = "draft";
const spec = {
  "/BaseAudioContext": { "global": false, "protected": true },
  "/BaseAudioContext/createAnalyser": {},
  "/BaseAudioContext/createBiquadFilter": {},
  "/BaseAudioContext/createBuffer": {},
  "/BaseAudioContext/createBufferSource": {},
  "/BaseAudioContext/createChannelMerger": {},
  "/BaseAudioContext/createChannelSplitter": {},
  "/BaseAudioContext/createConstantSource": {},
  "/BaseAudioContext/createConvolver": {},
  "/BaseAudioContext/createDelay": {},
  "/BaseAudioContext/createDynamicsCompressor": {},
  "/BaseAudioContext/createGain": {},
  "/BaseAudioContext/createIIRFilter": {},
  "/BaseAudioContext/createOscillator": {},
  "/BaseAudioContext/createPanner": {},
  "/BaseAudioContext/createPeriodicWave": {},
  "/BaseAudioContext/createScriptProcessor": {},
  "/BaseAudioContext/createStereoPanner": {},
  "/BaseAudioContext/createWaveShaper": {},
  "/BaseAudioContext/currentTime": {},
  "/BaseAudioContext/decodeAudioData": { "promise": true },
  "/BaseAudioContext/destination": {},
  "/BaseAudioContext/listener": {},
  "/BaseAudioContext/onstatechange": {},
  "/BaseAudioContext/resume": {},
  "/BaseAudioContext/sampleRate": {},
  "/BaseAudioContext/state": {},

  "/AudioContext": { "global": "AudioContext" },
  "/AudioContext/baseLatency": {},
  "/AudioContext/close": {},
  "/AudioContext/createMediaElementSource": {},
  "/AudioContext/createMediaStreamDestination": {},
  "/AudioContext/createMediaStreamSource": {},
  "/AudioContext/createMediaStreamTrackSource": {},
  "/AudioContext/getOutputTimestamp": {},
  "/AudioContext/outputLatency": {},
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
  "/AudioParam/cancelAndHoldAtTime": { "chain": true },
  "/AudioParam/cancelScheduledValues": { "chain": true },
  "/AudioParam/defaultValue": {},
  "/AudioParam/exponentialRampToValueAtTime": { "chain": true },
  "/AudioParam/linearRampToValueAtTime": { "chain": true },
  "/AudioParam/maxValue": {},
  "/AudioParam/minValue": {},
  "/AudioParam/setTargetAtTime": { "chain": true },
  "/AudioParam/setValueAtTime": { "chain": true },
  "/AudioParam/setValueCurveAtTime": { "chain": true },
  "/AudioParam/value": {},

  "/AudioScheduledSourceNode": { global: "AudioScheduledSourceNode", "protected": true },
  "/AudioScheduledSourceNode/onended": {},
  "/AudioScheduledSourceNode/start": {},
  "/AudioScheduledSourceNode/stop": {},

  "/GainNode": { "global": "GainNode" },
  "/GainNode/gain": {},

  "/DelayNode": { "global": "DelayNode" },
  "/DelayNode/delayTime": {},

  "/AudioBuffer": { "global": "AudioBuffer" },
  "/AudioBuffer/copyFromChannel": {},
  "/AudioBuffer/copyToChannel": {},
  "/AudioBuffer/duration": {},
  "/AudioBuffer/getChannelData": {},
  "/AudioBuffer/length": {},
  "/AudioBuffer/numberOfChannels": {},
  "/AudioBuffer/sampleRate": {},

  "/AudioBufferSourceNode": { "global": "AudioBufferSourceNode" },
  "/AudioBufferSourceNode/buffer": {},
  "/AudioBufferSourceNode/detune": {},
  "/AudioBufferSourceNode/loop": {},
  "/AudioBufferSourceNode/loopEnd": {},
  "/AudioBufferSourceNode/loopStart": {},
  "/AudioBufferSourceNode/playbackRate": {},
  "/AudioBufferSourceNode/start": {},

  "/ConstantSourceNode": { global: "ConstantSourceNode" },
  "/ConstantSourceNode/offset": {},

  "/MediaElementAudioSourceNode": { "global": "MediaElementAudioSourceNode" },

  "/ScriptProcessorNode": { "global": "ScriptProcessorNode", "protected": true },
  "/ScriptProcessorNode/bufferSize": {},
  "/ScriptProcessorNode/onaudioprocess": {},

  "/PannerNode": { "global": "PannerNode" },
  "/PannerNode/coneInnerAngle": {},
  "/PannerNode/coneOuterAngle": {},
  "/PannerNode/coneOuterGain": {},
  "/PannerNode/distanceModel": {},
  "/PannerNode/maxDistance": {},
  "/PannerNode/orientationX": {},
  "/PannerNode/orientationY": {},
  "/PannerNode/orientationZ": {},
  "/PannerNode/panningModel": {},
  "/PannerNode/positionX": {},
  "/PannerNode/positionY": {},
  "/PannerNode/positionZ": {},
  "/PannerNode/refDistance": {},
  "/PannerNode/rolloffFactor": {},
  "/PannerNode/setOrientation": {},
  "/PannerNode/setPosition": {},

  "/AudioListener": { "global": "AudioListener", "protected": true },
  "/AudioListener/forwardX": {},
  "/AudioListener/forwardY": {},
  "/AudioListener/forwardZ": {},
  "/AudioListener/positionX": {},
  "/AudioListener/positionY": {},
  "/AudioListener/positionZ": {},
  "/AudioListener/setOrientation": {},
  "/AudioListener/setPosition": {},
  "/AudioListener/upX": {},
  "/AudioListener/upY": {},
  "/AudioListener/upZ": {},

  "/StereoPannerNode": { "global": "StereoPannerNode" },
  "/StereoPannerNode/pan": {},

  "/ConvolverNode": { "global": "ConvolverNode" },
  "/ConvolverNode/buffer": {},
  "/ConvolverNode/normalize": {},

  "/AnalyserNode": { "global": "AnalyserNode" },
  "/AnalyserNode/fftSize": {},
  "/AnalyserNode/frequencyBinCount": {},
  "/AnalyserNode/getByteFrequencyData": {},
  "/AnalyserNode/getByteTimeDomainData": {},
  "/AnalyserNode/getFloatFrequencyData": {},
  "/AnalyserNode/getFloatTimeDomainData": {},
  "/AnalyserNode/maxDecibels": {},
  "/AnalyserNode/minDecibels": {},
  "/AnalyserNode/smoothingTimeConstant": {},

  "/ChannelSplitterNode": { "global": "ChannelSplitterNode" },

  "/ChannelMergerNode": { "global": "ChannelMergerNode" },

  "/DynamicsCompressorNode": { "global": "DynamicsCompressorNode" },
  "/DynamicsCompressorNode/attack": {},
  "/DynamicsCompressorNode/knee": {},
  "/DynamicsCompressorNode/ratio": {},
  "/DynamicsCompressorNode/reduction": { "number": true },
  "/DynamicsCompressorNode/release": {},
  "/DynamicsCompressorNode/threshold": {},

  "/BiquadFilterNode": { "global": "BiquadFilterNode" },
  "/BiquadFilterNode/detune": {},
  "/BiquadFilterNode/frequency": {},
  "/BiquadFilterNode/gain": {},
  "/BiquadFilterNode/getFrequencyResponse": {},
  "/BiquadFilterNode/Q": {},
  "/BiquadFilterNode/type": {},

  "/IIRFilterNode": { "global": "IIRFilterNode" },
  "/IIRFilterNode/getFrequencyResponse": {},

  "/WaveShaperNode": { "global": "WaveShaperNode" },
  "/WaveShaperNode/curve": {},
  "/WaveShaperNode/oversample": {},

  "/OscillatorNode": { "global": "OscillatorNode" },
  "/OscillatorNode/detune": {},
  "/OscillatorNode/frequency": {},
  "/OscillatorNode/setPeriodicWave": {},
  "/OscillatorNode/type": {},

  "/PeriodicWave": { "global": "PeriodicWave" },

  "/MediaStreamAudioSourceNode": { "global": "MediaStreamAudioSourceNode" },

  "/MediaStreamTrackAudioSourceNode": { "global": "MediaStreamTrackAudioSourceNode" },

  "/MediaStreamAudioDestinationNode": { "global": "MediaStreamAudioDestinationNode" },
  "/MediaStreamAudioDestinationNode/stream": {}
};

module.exports = { name, released, spec };
