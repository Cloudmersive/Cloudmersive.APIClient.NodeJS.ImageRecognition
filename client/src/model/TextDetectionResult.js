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
    define(['ApiClient', 'model/TextItem'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./TextItem'));
  } else {
    // Browser globals (root is window)
    if (!root.CloudmersiveImageApiClient) {
      root.CloudmersiveImageApiClient = {};
    }
    root.CloudmersiveImageApiClient.TextDetectionResult = factory(root.CloudmersiveImageApiClient.ApiClient, root.CloudmersiveImageApiClient.TextItem);
  }
}(this, function(ApiClient, TextItem) {
  'use strict';




  /**
   * The TextDetectionResult model module.
   * @module model/TextDetectionResult
   * @version 1.2.3
   */

  /**
   * Constructs a new <code>TextDetectionResult</code>.
   * Result of an operation to detect text in a photo
   * @alias module:model/TextDetectionResult
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>TextDetectionResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TextDetectionResult} obj Optional instance to populate.
   * @return {module:model/TextDetectionResult} The populated <code>TextDetectionResult</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Successful')) {
        obj['Successful'] = ApiClient.convertToType(data['Successful'], 'Boolean');
      }
      if (data.hasOwnProperty('TextItems')) {
        obj['TextItems'] = ApiClient.convertToType(data['TextItems'], [TextItem]);
      }
      if (data.hasOwnProperty('TextItemsCount')) {
        obj['TextItemsCount'] = ApiClient.convertToType(data['TextItemsCount'], 'Number');
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
   * Text items found in the input image
   * @member {Array.<module:model/TextItem>} TextItems
   */
  exports.prototype['TextItems'] = undefined;
  /**
   * Count of text items found in the input image
   * @member {Number} TextItemsCount
   */
  exports.prototype['TextItemsCount'] = undefined;



  return exports;
}));


