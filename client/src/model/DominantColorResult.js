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
    define(['ApiClient', 'model/ColorResult'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ColorResult'));
  } else {
    // Browser globals (root is window)
    if (!root.CloudmersiveImageApiClient) {
      root.CloudmersiveImageApiClient = {};
    }
    root.CloudmersiveImageApiClient.DominantColorResult = factory(root.CloudmersiveImageApiClient.ApiClient, root.CloudmersiveImageApiClient.ColorResult);
  }
}(this, function(ApiClient, ColorResult) {
  'use strict';




  /**
   * The DominantColorResult model module.
   * @module model/DominantColorResult
   * @version 1.2.8
   */

  /**
   * Constructs a new <code>DominantColorResult</code>.
   * Result of performing a get dominant color operation
   * @alias module:model/DominantColorResult
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>DominantColorResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DominantColorResult} obj Optional instance to populate.
   * @return {module:model/DominantColorResult} The populated <code>DominantColorResult</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Successful')) {
        obj['Successful'] = ApiClient.convertToType(data['Successful'], 'Boolean');
      }
      if (data.hasOwnProperty('DominantColors')) {
        obj['DominantColors'] = ApiClient.convertToType(data['DominantColors'], [ColorResult]);
      }
    }
    return obj;
  }

  /**
   * True if the operation was successful, false otherwise
   * @member {Boolean} Successful
   */
  exports.prototype['Successful'] = undefined;
  /**
   * Dominant colors in the image, in order where most dominant color is in the first index position (0), the second most-dominant color is in index position 1 and so on
   * @member {Array.<module:model/ColorResult>} DominantColors
   */
  exports.prototype['DominantColors'] = undefined;



  return exports;
}));


