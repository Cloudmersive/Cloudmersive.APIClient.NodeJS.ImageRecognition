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
    define(['ApiClient', 'model/PersonWithAge'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PersonWithAge'));
  } else {
    // Browser globals (root is window)
    if (!root.CloudmersiveImageApiClient) {
      root.CloudmersiveImageApiClient = {};
    }
    root.CloudmersiveImageApiClient.AgeDetectionResult = factory(root.CloudmersiveImageApiClient.ApiClient, root.CloudmersiveImageApiClient.PersonWithAge);
  }
}(this, function(ApiClient, PersonWithAge) {
  'use strict';




  /**
   * The AgeDetectionResult model module.
   * @module model/AgeDetectionResult
   * @version 1.2.5
   */

  /**
   * Constructs a new <code>AgeDetectionResult</code>.
   * Result from classifying the Age of people in an image
   * @alias module:model/AgeDetectionResult
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>AgeDetectionResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AgeDetectionResult} obj Optional instance to populate.
   * @return {module:model/AgeDetectionResult} The populated <code>AgeDetectionResult</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Successful')) {
        obj['Successful'] = ApiClient.convertToType(data['Successful'], 'Boolean');
      }
      if (data.hasOwnProperty('PeopleWithAge')) {
        obj['PeopleWithAge'] = ApiClient.convertToType(data['PeopleWithAge'], [PersonWithAge]);
      }
      if (data.hasOwnProperty('PeopleIdentified')) {
        obj['PeopleIdentified'] = ApiClient.convertToType(data['PeopleIdentified'], 'Number');
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
   * People in the image annotated with age information
   * @member {Array.<module:model/PersonWithAge>} PeopleWithAge
   */
  exports.prototype['PeopleWithAge'] = undefined;
  /**
   * Number of people identified in the image with an age
   * @member {Number} PeopleIdentified
   */
  exports.prototype['PeopleIdentified'] = undefined;



  return exports;
}));


