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
    define(['ApiClient', 'model/DetectedObject'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DetectedObject'));
  } else {
    // Browser globals (root is window)
    if (!root.CloudmersiveImageApiClient) {
      root.CloudmersiveImageApiClient = {};
    }
    root.CloudmersiveImageApiClient.ObjectDetectionResult = factory(root.CloudmersiveImageApiClient.ApiClient, root.CloudmersiveImageApiClient.DetectedObject);
  }
}(this, function(ApiClient, DetectedObject) {
  'use strict';




  /**
   * The ObjectDetectionResult model module.
   * @module model/ObjectDetectionResult
   * @version 1.1.2
   */

  /**
   * Constructs a new <code>ObjectDetectionResult</code>.
   * Result of detecting objects in an image
   * @alias module:model/ObjectDetectionResult
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>ObjectDetectionResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ObjectDetectionResult} obj Optional instance to populate.
   * @return {module:model/ObjectDetectionResult} The populated <code>ObjectDetectionResult</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Successful')) {
        obj['Successful'] = ApiClient.convertToType(data['Successful'], 'Boolean');
      }
      if (data.hasOwnProperty('Objects')) {
        obj['Objects'] = ApiClient.convertToType(data['Objects'], [DetectedObject]);
      }
      if (data.hasOwnProperty('ObjectCount')) {
        obj['ObjectCount'] = ApiClient.convertToType(data['ObjectCount'], 'Number');
      }
    }
    return obj;
  }

  /**
   * Was the image processed successfully?
   * @member {Boolean} Successful
   */
  exports.prototype['Successful'] = undefined;
  /**
   * Array of objects detected in the scene
   * @member {Array.<module:model/DetectedObject>} Objects
   */
  exports.prototype['Objects'] = undefined;
  /**
   * Number of objects detected in the scene
   * @member {Number} ObjectCount
   */
  exports.prototype['ObjectCount'] = undefined;



  return exports;
}));


