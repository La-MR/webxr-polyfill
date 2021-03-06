/*
 * Copyright 2017 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import EventTarget from '../lib/EventTarget';

export default class PolyfilledXRDevice extends EventTarget {
  /**
   * Takes a VRDisplay object from the WebVR 1.1 spec.
   *
   * @param {Object} global
   */
  constructor(global) {
    super();

    this.global = global;
    this.onWindowResize = this.onWindowResize.bind(this);

    this.global.window.addEventListener('resize', this.onWindowResize);
  }

  /**
   * @return {number}
   */
  get depthNear() { throw new Error('Not implemented'); }

  /**
   * @param {number}
   */
  set depthNear(val) { throw new Error('Not implemented'); }

  /**
   * @return {number}
   */
  get depthFar() { throw new Error('Not implemented'); }

  /**
   * @param {number}
   */
  set depthFar(val) { throw new Error('Not implemented'); }

  /**
   * Called when a XRSession has a `baseLayer` property set.
   *
   * @param {number} sessionId
   * @param {XRWebGLLayer} layer
   */
  onBaseLayerSet(sessionId, layer) { throw new Error('Not implemented'); }

  /**
   * @param {XRSessionCreationOptions} options
   * @return {boolean}
   */
  supportsSession(options={}) { throw new Error('Not implemented'); }

  /**
   * Returns a promise if creating a session is successful.
   * Usually used to set up presentation in the polyfilled device.
   *
   * @param {XRSessionCreationOptions} options
   * @return {Promise<number>}
   */
  async requestSession(options={}) { throw new Error('Not implemented'); }

  /**
   * @return {Function}
   */
  requestAnimationFrame(callback) { throw new Error('Not implemented'); }

  /**
   * @param {number} sessionId
   */
  onFrameStart(sessionId) { throw new Error('Not implemented'); }

  /**
   * @param {number} sessionId
   */
  onFrameEnd(sessionId) { throw new Error('Not implemented'); }

  /**
   * @return {Object?}
   */
  requestStageBounds() { throw new Error('Not implemented'); }

  /**
   * Returns a promise resolving to a transform if PolyfilledXRDevice
   * can support frame of reference and provides its own values.
   * Can resolve to `undefined` if the polyfilled API can provide
   * a default. Rejects if this PolyfilledXRDevice cannot
   * support the frame of reference.
   *
   * @param {XRFrameOfReferenceType} type
   * @param {XRFrameOfReferenceOptions} options
   * @return {Promise<XRFrameOfReference>}
   */
  async requestFrameOfReferenceTransform(type, options) {
    return undefined;
  }

  /**
   * @param {number} handle
   */
  cancelAnimationFrame(handle) { throw new Error('Not implemented'); }

  /**
   * @param {number} sessionId
   */
  endSession(sessionId) { throw new Error('Not implemented'); }

  /**
   * Takes a XREye and a target to apply properties of
   * `x`, `y`, `width` and `height` on. Returns a boolean
   * indicating if it successfully was able to populate
   * target's values.
   *
   * @param {number} sessionId
   * @param {XREye} eye
   * @param {XRWebGLLayer} layer
   * @param {Object?} target
   * @return {boolean}
   */
  getViewport(sessionId, eye, layer, target) { throw new Error('Not implemented'); }

  /**
   * @param {XREye} eye
   * @return {Float32Array}
   */
  getProjectionMatrix(eye) { throw new Error('Not implemented'); }

  /**
   * Get model matrix unaffected by frame of reference.
   *
   * @return {Float32Array}
   */
  getBasePoseMatrix() { throw new Error('Not implemented'); }

  /**
   * Get view matrix unaffected by frame of reference.
   *
   * @param {XREye} eye
   * @return {Float32Array}
   */
  getBaseViewMatrix(eye) { throw new Error('Not implemented'); }

  /**
   * Get a list of input sources.
   *
   * @return {Array<XRInputSource>}
   */
  getInputSources() { throw new Error('Not implemented'); }

  /**
   * Get the current pose of an input source.
   *
   * @param {XRInputSource} inputSource
   * @param {XRCoordinateSystem} coordinateSystem
   * @return {XRInputPose}
   */
  getInputPose(inputSource, coordinateSystem) { throw new Error('Not implemented'); }

  /**
   * Called on window resize.
   */
  onWindowResize() {
    // Bound by PolyfilledXRDevice and called on resize, but
    // this will call child class onWindowResize (or, if not defined,
    // call an infinite loop I guess)
    this.onWindowResize();
  }
}
