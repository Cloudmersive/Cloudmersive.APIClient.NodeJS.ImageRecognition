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
    root.CloudmersiveImageApiClient.PersonWithAge = factory(root.CloudmersiveImageApiClient.ApiClient, root.CloudmersiveImageApiClient.Face);
  }
}(this, function(ApiClient, Face) {
  'use strict';




  /**
   * The PersonWithAge model module.
   * @module model/PersonWithAge
   * @version 1.3.5
   */

  /**
   * Constructs a new <code>PersonWithAge</code>.
   * A person identified in an image age classification operation
   * @alias module:model/PersonWithAge
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>PersonWithAge</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PersonWithAge} obj Optional instance to populate.
   * @return {module:model/PersonWithAge} The populated <code>PersonWithAge</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('FaceLocation')) {
        obj['FaceLocation'] = Face.constructFromObject(data['FaceLocation']);
      }
      if (data.hasOwnProperty('AgeClassificationConfidence')) {
        obj['AgeClassificationConfidence'] = ApiClient.convertToType(data['AgeClassificationConfidence'], 'Number');
      }
      if (data.hasOwnProperty('AgeClass')) {
        obj['AgeClass'] = ApiClient.convertToType(data['AgeClass'], 'String');
      }
      if (data.hasOwnProperty('Age')) {
        obj['Age'] = ApiClient.convertToType(data['Age'], 'Number');
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
   * Confidence level of age classification; possible values are between 0.0 and 1.0; higher is better, with values &gt; 0.50 being high confidence results
   * @member {Number} AgeClassificationConfidence
   */
  exports.prototype['AgeClassificationConfidence'] = undefined;
  /**
   * The person's age range classification result in years; possible values are \"0-2\", \"4-6\", \"8-13\", \"15-20\", \"25-32\", \"38-43\", \"48-53\", \"60+\"
   * @member {String} AgeClass
   */
  exports.prototype['AgeClass'] = undefined;
  /**
   * @member {Number} Age
   */
  exports.prototype['Age'] = undefined;



  return exports;
}));


