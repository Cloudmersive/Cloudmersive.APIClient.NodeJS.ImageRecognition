/**
 * imageapi
 * Image Recognition and Processing APIs let you use Machine Learning to recognize and process images, and also perform useful image modification operations.
 *
 * OpenAPI spec version: v1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: unset
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.CloudmersiveImageApiClient) {
      root.CloudmersiveImageApiClient = {};
    }
    root.CloudmersiveImageApiClient.DetectedObject = factory(root.CloudmersiveImageApiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The DetectedObject model module.
   * @module model/DetectedObject
   * @version 1.2.4
   */

  /**
   * Constructs a new <code>DetectedObject</code>.
   * Single object instance, and associated details, detected in an image
   * @alias module:model/DetectedObject
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>DetectedObject</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DetectedObject} obj Optional instance to populate.
   * @return {module:model/DetectedObject} The populated <code>DetectedObject</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('ObjectClassName')) {
        obj['ObjectClassName'] = ApiClient.convertToType(data['ObjectClassName'], 'String');
      }
      if (data.hasOwnProperty('Height')) {
        obj['Height'] = ApiClient.convertToType(data['Height'], 'Number');
      }
      if (data.hasOwnProperty('Width')) {
        obj['Width'] = ApiClient.convertToType(data['Width'], 'Number');
      }
      if (data.hasOwnProperty('Score')) {
        obj['Score'] = ApiClient.convertToType(data['Score'], 'Number');
      }
      if (data.hasOwnProperty('X')) {
        obj['X'] = ApiClient.convertToType(data['X'], 'Number');
      }
      if (data.hasOwnProperty('Y')) {
        obj['Y'] = ApiClient.convertToType(data['Y'], 'Number');
      }
    }
    return obj;
  }

  /**
   * Class of the object.  Example values are \"person\", \"car\", \"dining table\", etc.
   * @member {String} ObjectClassName
   */
  exports.prototype['ObjectClassName'] = undefined;
  /**
   * Height, in pixels, of the object
   * @member {Number} Height
   */
  exports.prototype['Height'] = undefined;
  /**
   * Width, in pixels, of the object
   * @member {Number} Width
   */
  exports.prototype['Width'] = undefined;
  /**
   * Confidence score of detected object; possible values are between 0.0 and 1.0; values closer to 1.0 are higher confidence
   * @member {Number} Score
   */
  exports.prototype['Score'] = undefined;
  /**
   * X location, in pixels, of the left side location of the object, with the right side being X + Width
   * @member {Number} X
   */
  exports.prototype['X'] = undefined;
  /**
   * Y location, in pixels, of the top side location of the object, with the bottom side being Y + Height
   * @member {Number} Y
   */
  exports.prototype['Y'] = undefined;



  return exports;
}));


