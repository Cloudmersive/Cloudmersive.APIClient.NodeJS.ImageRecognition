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
    define(['ApiClient', 'model/Face'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Face'));
  } else {
    // Browser globals (root is window)
    if (!root.CloudmersiveImageApiClient) {
      root.CloudmersiveImageApiClient = {};
    }
    root.CloudmersiveImageApiClient.PersonWithGender = factory(root.CloudmersiveImageApiClient.ApiClient, root.CloudmersiveImageApiClient.Face);
  }
}(this, function(ApiClient, Face) {
  'use strict';




  /**
   * The PersonWithGender model module.
   * @module model/PersonWithGender
   * @version 1.2.5
   */

  /**
   * Constructs a new <code>PersonWithGender</code>.
   * A person identified in an image gender classification operation
   * @alias module:model/PersonWithGender
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>PersonWithGender</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PersonWithGender} obj Optional instance to populate.
   * @return {module:model/PersonWithGender} The populated <code>PersonWithGender</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('FaceLocation')) {
        obj['FaceLocation'] = Face.constructFromObject(data['FaceLocation']);
      }
      if (data.hasOwnProperty('GenderClassificationConfidence')) {
        obj['GenderClassificationConfidence'] = ApiClient.convertToType(data['GenderClassificationConfidence'], 'Number');
      }
      if (data.hasOwnProperty('GenderClass')) {
        obj['GenderClass'] = ApiClient.convertToType(data['GenderClass'], 'String');
      }
    }
    return obj;
  }

  /**
   * Location and other information about the person's face corresponding to this age classification
   * @member {module:model/Face} FaceLocation
   */
  exports.prototype['FaceLocation'] = undefined;
  /**
   * Confidence level of gender classification; possible values are between 0.0 and 1.0; higher is better, with values &gt; 0.50 being high confidence results
   * @member {Number} GenderClassificationConfidence
   */
  exports.prototype['GenderClassificationConfidence'] = undefined;
  /**
   * The person's identified gender; possible values are \"Male\", \"Female\" and \"Unknown\"
   * @member {String} GenderClass
   */
  exports.prototype['GenderClass'] = undefined;



  return exports;
}));


