"use strict";

const ChannelCountMode = require("../types/ChannelCountMode");
const OverSampleType = require("../types/OverSampleType");
const defaults = require("../utils/defaults");
const lock = require("../utils/lock");

const DEFAULT_OVERSAMPLE = OverSampleType.NONE;

function create(api, AudioNode) {
  class WaveShaperNode extends AudioNode {
    /**
     * @param {AudioContext} context
     * @param {Object} [opts]
     */
    constructor(context, opts = {}) {
      if (lock.checkIllegalConstructor(api, "/WaveShaperNode")) {
        throw new TypeError("Illegal constructor");
      }

      /** @type {Float32Array?} */
      const curve = defaults(opts.curve, null);
      /** @type {OverSampleType} */
      const oversample = defaults(opts.oversample, DEFAULT_OVERSAMPLE);

      lock.unlock();
      super(context, opts, {
        inputs: [ 1 ],
        outputs: [ 1 ],
        channelCount: 2,
        channelCountMode: ChannelCountMode.MAX,
      });
      lock.lock();

      this._.className = "WaveShaperNode";
      this._.curve = curve;
      this._.oversample = oversample;
    }

    /**
     * @type {Float32Array?}
     */
    get curve() {
      return this._.curve;
    }

    set curve(value) {
      this._.curve = value;
    }

    /**
     * @type {OverSampleType}
     */
    get oversample() {
      return this._.oversample;
    }

    set oversample(value) {
      this._.oversample = value;
    }
  }
  return WaveShaperNode;
}

module.exports = { create };
