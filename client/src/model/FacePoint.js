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
    root.CloudmersiveImageApiClient.FacePoint = factory(root.CloudmersiveImageApiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The FacePoint model module.
   * @module model/FacePoint
   * @version 1.1.5
   */

  /**
   * Constructs a new <code>FacePoint</code>.
   * Point location within a face
   * @alias module:model/FacePoint
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>FacePoint</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FacePoint} obj Optional instance to populate.
   * @return {module:model/FacePoint} The populated <code>FacePoint</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

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
   * X location, where 0 is the left-most pixel
   * @member {Number} X
   */
  exports.prototype['X'] = undefined;
  /**
   * Y location, where 0 is the top-most pixel
   * @member {Number} Y
   */
  exports.prototype['Y'] = undefined;



  return exports;
}));

