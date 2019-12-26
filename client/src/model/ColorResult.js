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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.CloudmersiveImageApiClient) {
      root.CloudmersiveImageApiClient = {};
    }
    root.CloudmersiveImageApiClient.ColorResult = factory(root.CloudmersiveImageApiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ColorResult model module.
   * @module model/ColorResult
   * @version 1.3.1
   */

  /**
   * Constructs a new <code>ColorResult</code>.
   * Individual color
   * @alias module:model/ColorResult
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>ColorResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ColorResult} obj Optional instance to populate.
   * @return {module:model/ColorResult} The populated <code>ColorResult</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('R')) {
        obj['R'] = ApiClient.convertToType(data['R'], 'Number');
      }
      if (data.hasOwnProperty('G')) {
        obj['G'] = ApiClient.convertToType(data['G'], 'Number');
      }
      if (data.hasOwnProperty('B')) {
        obj['B'] = ApiClient.convertToType(data['B'], 'Number');
      }
    }
    return obj;
  }

  /**
   * Red (R) channel pixel value of this color
   * @member {Number} R
   */
  exports.prototype['R'] = undefined;
  /**
   * Green (G) channel pixel value of this color
   * @member {Number} G
   */
  exports.prototype['G'] = undefined;
  /**
   * Blue (B) channel pixel value of this color
   * @member {Number} B
   */
  exports.prototype['B'] = undefined;



  return exports;
}));


