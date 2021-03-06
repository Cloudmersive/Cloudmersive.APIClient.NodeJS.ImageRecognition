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
    root.CloudmersiveImageApiClient.FaceLocateResponse = factory(root.CloudmersiveImageApiClient.ApiClient, root.CloudmersiveImageApiClient.Face);
  }
}(this, function(ApiClient, Face) {
  'use strict';




  /**
   * The FaceLocateResponse model module.
   * @module model/FaceLocateResponse
   * @version 1.3.5
   */

  /**
   * Constructs a new <code>FaceLocateResponse</code>.
   * Results of locating faces in an image
   * @alias module:model/FaceLocateResponse
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>FaceLocateResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FaceLocateResponse} obj Optional instance to populate.
   * @return {module:model/FaceLocateResponse} The populated <code>FaceLocateResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Successful')) {
        obj['Successful'] = ApiClient.convertToType(data['Successful'], 'Boolean');
      }
      if (data.hasOwnProperty('Faces')) {
        obj['Faces'] = ApiClient.convertToType(data['Faces'], [Face]);
      }
      if (data.hasOwnProperty('FaceCount')) {
        obj['FaceCount'] = ApiClient.convertToType(data['FaceCount'], 'Number');
      }
      if (data.hasOwnProperty('ErrorDetails')) {
        obj['ErrorDetails'] = ApiClient.convertToType(data['ErrorDetails'], 'String');
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
   * Array of faces found in the image
   * @member {Array.<module:model/Face>} Faces
   */
  exports.prototype['Faces'] = undefined;
  /**
   * Number of faces found in the image
   * @member {Number} FaceCount
   */
  exports.prototype['FaceCount'] = undefined;
  /**
   * Details of any errors that occurred
   * @member {String} ErrorDetails
   */
  exports.prototype['ErrorDetails'] = undefined;



  return exports;
}));


