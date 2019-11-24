/**
 * imageapi
 * Image Recognition and Processing APIs let you use Machine Learning to recognize and process images, and also perform useful image modification operations.
 *
 * OpenAPI spec version: v1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/FacePoint'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./FacePoint'));
  } else {
    // Browser globals (root is window)
    if (!root.CloudmersiveImageApiClient) {
      root.CloudmersiveImageApiClient = {};
    }
    root.CloudmersiveImageApiClient.FaceWithLandmarks = factory(root.CloudmersiveImageApiClient.ApiClient, root.CloudmersiveImageApiClient.FacePoint);
  }
}(this, function(ApiClient, FacePoint) {
  'use strict';




  /**
   * The FaceWithLandmarks model module.
   * @module model/FaceWithLandmarks
   * @version 1.2.5
   */

  /**
   * Constructs a new <code>FaceWithLandmarks</code>.
   * Location of one face in an image
   * @alias module:model/FaceWithLandmarks
   * @class
   */
  var exports = function() {
    var _this = this;














  };

  /**
   * Constructs a <code>FaceWithLandmarks</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FaceWithLandmarks} obj Optional instance to populate.
   * @return {module:model/FaceWithLandmarks} The populated <code>FaceWithLandmarks</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('LeftX')) {
        obj['LeftX'] = ApiClient.convertToType(data['LeftX'], 'Number');
      }
      if (data.hasOwnProperty('TopY')) {
        obj['TopY'] = ApiClient.convertToType(data['TopY'], 'Number');
      }
      if (data.hasOwnProperty('RightX')) {
        obj['RightX'] = ApiClient.convertToType(data['RightX'], 'Number');
      }
      if (data.hasOwnProperty('BottomY')) {
        obj['BottomY'] = ApiClient.convertToType(data['BottomY'], 'Number');
      }
      if (data.hasOwnProperty('LeftEyebrow')) {
        obj['LeftEyebrow'] = ApiClient.convertToType(data['LeftEyebrow'], [FacePoint]);
      }
      if (data.hasOwnProperty('RightEyebrow')) {
        obj['RightEyebrow'] = ApiClient.convertToType(data['RightEyebrow'], [FacePoint]);
      }
      if (data.hasOwnProperty('LeftEye')) {
        obj['LeftEye'] = ApiClient.convertToType(data['LeftEye'], [FacePoint]);
      }
      if (data.hasOwnProperty('RightEye')) {
        obj['RightEye'] = ApiClient.convertToType(data['RightEye'], [FacePoint]);
      }
      if (data.hasOwnProperty('BottomAndSidesOfFace')) {
        obj['BottomAndSidesOfFace'] = ApiClient.convertToType(data['BottomAndSidesOfFace'], [FacePoint]);
      }
      if (data.hasOwnProperty('NoseBridge')) {
        obj['NoseBridge'] = ApiClient.convertToType(data['NoseBridge'], [FacePoint]);
      }
      if (data.hasOwnProperty('NoseBottom')) {
        obj['NoseBottom'] = ApiClient.convertToType(data['NoseBottom'], [FacePoint]);
      }
      if (data.hasOwnProperty('LipsInnerOutline')) {
        obj['LipsInnerOutline'] = ApiClient.convertToType(data['LipsInnerOutline'], [FacePoint]);
      }
      if (data.hasOwnProperty('LipsOuterOutline')) {
        obj['LipsOuterOutline'] = ApiClient.convertToType(data['LipsOuterOutline'], [FacePoint]);
      }
    }
    return obj;
  }

  /**
   * X coordinate of the left side of the face
   * @member {Number} LeftX
   */
  exports.prototype['LeftX'] = undefined;
  /**
   * Y coordinate of the top side of the face
   * @member {Number} TopY
   */
  exports.prototype['TopY'] = undefined;
  /**
   * X coordinate of the right side of the face
   * @member {Number} RightX
   */
  exports.prototype['RightX'] = undefined;
  /**
   * Y coordinate of the bottom side of the face
   * @member {Number} BottomY
   */
  exports.prototype['BottomY'] = undefined;
  /**
   * Point locations of the left eyebrow (the eyebrow cloesest to the left side of the picture)
   * @member {Array.<module:model/FacePoint>} LeftEyebrow
   */
  exports.prototype['LeftEyebrow'] = undefined;
  /**
   * Point locations of the right eyebrow (the eyebrow cloesest to the right side of the picture)
   * @member {Array.<module:model/FacePoint>} RightEyebrow
   */
  exports.prototype['RightEyebrow'] = undefined;
  /**
   * Point locations of the left eye (the eye closest to the left side of the picture)
   * @member {Array.<module:model/FacePoint>} LeftEye
   */
  exports.prototype['LeftEye'] = undefined;
  /**
   * Point locations of the right eye (the eye closest to the right side of the picture)
   * @member {Array.<module:model/FacePoint>} RightEye
   */
  exports.prototype['RightEye'] = undefined;
  /**
   * Point locations of the bottom and sides of the face (cheeks and chin)
   * @member {Array.<module:model/FacePoint>} BottomAndSidesOfFace
   */
  exports.prototype['BottomAndSidesOfFace'] = undefined;
  /**
   * Point locations of the nose bridge (the vertical portion of the nose)
   * @member {Array.<module:model/FacePoint>} NoseBridge
   */
  exports.prototype['NoseBridge'] = undefined;
  /**
   * Point locations of the bottom (nostrils) of the nose
   * @member {Array.<module:model/FacePoint>} NoseBottom
   */
  exports.prototype['NoseBottom'] = undefined;
  /**
   * Point locations of the inner outline of the lips
   * @member {Array.<module:model/FacePoint>} LipsInnerOutline
   */
  exports.prototype['LipsInnerOutline'] = undefined;
  /**
   * Point locations of the outer outline of the lips
   * @member {Array.<module:model/FacePoint>} LipsOuterOutline
   */
  exports.prototype['LipsOuterOutline'] = undefined;



  return exports;
}));


