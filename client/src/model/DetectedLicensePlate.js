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
    root.CloudmersiveImageApiClient.DetectedLicensePlate = factory(root.CloudmersiveImageApiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The DetectedLicensePlate model module.
   * @module model/DetectedLicensePlate
   * @version 1.2.2
   */

  /**
   * Constructs a new <code>DetectedLicensePlate</code>.
   * License plate found in the image
   * @alias module:model/DetectedLicensePlate
   * @class
   */
  var exports = function() {
    var _this = this;








  };

  /**
   * Constructs a <code>DetectedLicensePlate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DetectedLicensePlate} obj Optional instance to populate.
   * @return {module:model/DetectedLicensePlate} The populated <code>DetectedLicensePlate</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('LocationX')) {
        obj['LocationX'] = ApiClient.convertToType(data['LocationX'], 'Number');
      }
      if (data.hasOwnProperty('LocationY')) {
        obj['LocationY'] = ApiClient.convertToType(data['LocationY'], 'Number');
      }
      if (data.hasOwnProperty('Width')) {
        obj['Width'] = ApiClient.convertToType(data['Width'], 'Number');
      }
      if (data.hasOwnProperty('Height')) {
        obj['Height'] = ApiClient.convertToType(data['Height'], 'Number');
      }
      if (data.hasOwnProperty('LicensePlateText_BestMatch')) {
        obj['LicensePlateText_BestMatch'] = ApiClient.convertToType(data['LicensePlateText_BestMatch'], 'String');
      }
      if (data.hasOwnProperty('LicensePlateText_RunnerUp')) {
        obj['LicensePlateText_RunnerUp'] = ApiClient.convertToType(data['LicensePlateText_RunnerUp'], 'String');
      }
      if (data.hasOwnProperty('LicensePlateRecognitionConfidenceLevel')) {
        obj['LicensePlateRecognitionConfidenceLevel'] = ApiClient.convertToType(data['LicensePlateRecognitionConfidenceLevel'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {Number} LocationX
   */
  exports.prototype['LocationX'] = undefined;
  /**
   * @member {Number} LocationY
   */
  exports.prototype['LocationY'] = undefined;
  /**
   * @member {Number} Width
   */
  exports.prototype['Width'] = undefined;
  /**
   * @member {Number} Height
   */
  exports.prototype['Height'] = undefined;
  /**
   * Text from the license plate, highest-confidence result
   * @member {String} LicensePlateText_BestMatch
   */
  exports.prototype['LicensePlateText_BestMatch'] = undefined;
  /**
   * Alternate text from the license plate, based on second-highest-confidence result
   * @member {String} LicensePlateText_RunnerUp
   */
  exports.prototype['LicensePlateText_RunnerUp'] = undefined;
  /**
   * Confidence score on a range of 0.0 - 1.0 of the accuracy of the detected license plate, with higher scores being better; values about 0.75 are high confidence
   * @member {Number} LicensePlateRecognitionConfidenceLevel
   */
  exports.prototype['LicensePlateRecognitionConfidenceLevel'] = undefined;



  return exports;
}));


