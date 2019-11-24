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
    define(['ApiClient', 'model/DetectedLicensePlate'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DetectedLicensePlate'));
  } else {
    // Browser globals (root is window)
    if (!root.CloudmersiveImageApiClient) {
      root.CloudmersiveImageApiClient = {};
    }
    root.CloudmersiveImageApiClient.VehicleLicensePlateDetectionResult = factory(root.CloudmersiveImageApiClient.ApiClient, root.CloudmersiveImageApiClient.DetectedLicensePlate);
  }
}(this, function(ApiClient, DetectedLicensePlate) {
  'use strict';




  /**
   * The VehicleLicensePlateDetectionResult model module.
   * @module model/VehicleLicensePlateDetectionResult
   * @version 1.2.5
   */

  /**
   * Constructs a new <code>VehicleLicensePlateDetectionResult</code>.
   * Result of detecting vehicle license plates in an image
   * @alias module:model/VehicleLicensePlateDetectionResult
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>VehicleLicensePlateDetectionResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/VehicleLicensePlateDetectionResult} obj Optional instance to populate.
   * @return {module:model/VehicleLicensePlateDetectionResult} The populated <code>VehicleLicensePlateDetectionResult</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Successful')) {
        obj['Successful'] = ApiClient.convertToType(data['Successful'], 'Boolean');
      }
      if (data.hasOwnProperty('DetectedLicensePlates')) {
        obj['DetectedLicensePlates'] = ApiClient.convertToType(data['DetectedLicensePlates'], [DetectedLicensePlate]);
      }
      if (data.hasOwnProperty('DetectedLicensePlateCount')) {
        obj['DetectedLicensePlateCount'] = ApiClient.convertToType(data['DetectedLicensePlateCount'], 'Number');
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
   * License plates found in the image
   * @member {Array.<module:model/DetectedLicensePlate>} DetectedLicensePlates
   */
  exports.prototype['DetectedLicensePlates'] = undefined;
  /**
   * The number of license plates detected in the image
   * @member {Number} DetectedLicensePlateCount
   */
  exports.prototype['DetectedLicensePlateCount'] = undefined;



  return exports;
}));


