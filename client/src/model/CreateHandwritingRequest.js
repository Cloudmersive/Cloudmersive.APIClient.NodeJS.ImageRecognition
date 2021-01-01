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
    root.CloudmersiveImageApiClient.CreateHandwritingRequest = factory(root.CloudmersiveImageApiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CreateHandwritingRequest model module.
   * @module model/CreateHandwritingRequest
   * @version 1.3.4
   */

  /**
   * Constructs a new <code>CreateHandwritingRequest</code>.
   * Request to create a PNG of handwriting
   * @alias module:model/CreateHandwritingRequest
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>CreateHandwritingRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateHandwritingRequest} obj Optional instance to populate.
   * @return {module:model/CreateHandwritingRequest} The populated <code>CreateHandwritingRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('TextInput')) {
        obj['TextInput'] = ApiClient.convertToType(data['TextInput'], 'String');
      }
      if (data.hasOwnProperty('TargetWidth')) {
        obj['TargetWidth'] = ApiClient.convertToType(data['TargetWidth'], 'Number');
      }
      if (data.hasOwnProperty('StrokeWidth')) {
        obj['StrokeWidth'] = ApiClient.convertToType(data['StrokeWidth'], 'Number');
      }
      if (data.hasOwnProperty('Color')) {
        obj['Color'] = ApiClient.convertToType(data['Color'], 'String');
      }
    }
    return obj;
  }

  /**
   * Text to convert to handwriting
   * @member {String} TextInput
   */
  exports.prototype['TextInput'] = undefined;
  /**
   * Desired width in pixels of the resulting image
   * @member {Number} TargetWidth
   */
  exports.prototype['TargetWidth'] = undefined;
  /**
   * Optinoal; Width of the text stroke in pixels; default is 2
   * @member {Number} StrokeWidth
   */
  exports.prototype['StrokeWidth'] = undefined;
  /**
   * HTML hexadecimal color, or HTML common color name (e.g. 'black', 'red'), for the handwriting
   * @member {String} Color
   */
  exports.prototype['Color'] = undefined;



  return exports;
}));


