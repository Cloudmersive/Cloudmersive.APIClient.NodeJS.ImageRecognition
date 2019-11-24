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
    root.CloudmersiveImageApiClient.FindSymbolResult = factory(root.CloudmersiveImageApiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The FindSymbolResult model module.
   * @module model/FindSymbolResult
   * @version 1.2.5
   */

  /**
   * Constructs a new <code>FindSymbolResult</code>.
   * Result of a find symbol operation on an input image
   * @alias module:model/FindSymbolResult
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>FindSymbolResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FindSymbolResult} obj Optional instance to populate.
   * @return {module:model/FindSymbolResult} The populated <code>FindSymbolResult</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Successful')) {
        obj['Successful'] = ApiClient.convertToType(data['Successful'], 'Boolean');
      }
      if (data.hasOwnProperty('XLeft')) {
        obj['XLeft'] = ApiClient.convertToType(data['XLeft'], 'Number');
      }
      if (data.hasOwnProperty('YTop')) {
        obj['YTop'] = ApiClient.convertToType(data['YTop'], 'Number');
      }
      if (data.hasOwnProperty('Width')) {
        obj['Width'] = ApiClient.convertToType(data['Width'], 'Number');
      }
      if (data.hasOwnProperty('Height')) {
        obj['Height'] = ApiClient.convertToType(data['Height'], 'Number');
      }
    }
    return obj;
  }

  /**
   * True if successful, false otherwise
   * @member {Boolean} Successful
   */
  exports.prototype['Successful'] = undefined;
  /**
   * X location of the left edge of the found location in pixels
   * @member {Number} XLeft
   */
  exports.prototype['XLeft'] = undefined;
  /**
   * Y location of the top edge of the found location in pixels
   * @member {Number} YTop
   */
  exports.prototype['YTop'] = undefined;
  /**
   * Width of the found location in pixels
   * @member {Number} Width
   */
  exports.prototype['Width'] = undefined;
  /**
   * Height of the found location in pixels
   * @member {Number} Height
   */
  exports.prototype['Height'] = undefined;



  return exports;
}));


