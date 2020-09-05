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
    define(['ApiClient', 'model/RecognitionOutcome'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./RecognitionOutcome'));
  } else {
    // Browser globals (root is window)
    if (!root.CloudmersiveImageApiClient) {
      root.CloudmersiveImageApiClient = {};
    }
    root.CloudmersiveImageApiClient.ImageDescriptionResponse = factory(root.CloudmersiveImageApiClient.ApiClient, root.CloudmersiveImageApiClient.RecognitionOutcome);
  }
}(this, function(ApiClient, RecognitionOutcome) {
  'use strict';




  /**
   * The ImageDescriptionResponse model module.
   * @module model/ImageDescriptionResponse
   * @version 1.3.3
   */

  /**
   * Constructs a new <code>ImageDescriptionResponse</code>.
   * Result of recognizing an image
   * @alias module:model/ImageDescriptionResponse
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>ImageDescriptionResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ImageDescriptionResponse} obj Optional instance to populate.
   * @return {module:model/ImageDescriptionResponse} The populated <code>ImageDescriptionResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Successful')) {
        obj['Successful'] = ApiClient.convertToType(data['Successful'], 'Boolean');
      }
      if (data.hasOwnProperty('Highconfidence')) {
        obj['Highconfidence'] = ApiClient.convertToType(data['Highconfidence'], 'Boolean');
      }
      if (data.hasOwnProperty('BestOutcome')) {
        obj['BestOutcome'] = RecognitionOutcome.constructFromObject(data['BestOutcome']);
      }
      if (data.hasOwnProperty('RunnerUpOutcome')) {
        obj['RunnerUpOutcome'] = RecognitionOutcome.constructFromObject(data['RunnerUpOutcome']);
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
   * Is the resulting best outcome recognition a high confidence outcome?
   * @member {Boolean} Highconfidence
   */
  exports.prototype['Highconfidence'] = undefined;
  /**
   * The best Machine Learning outcome
   * @member {module:model/RecognitionOutcome} BestOutcome
   */
  exports.prototype['BestOutcome'] = undefined;
  /**
   * Best backup (\"runner up\") Machine Learning outcome
   * @member {module:model/RecognitionOutcome} RunnerUpOutcome
   */
  exports.prototype['RunnerUpOutcome'] = undefined;



  return exports;
}));


