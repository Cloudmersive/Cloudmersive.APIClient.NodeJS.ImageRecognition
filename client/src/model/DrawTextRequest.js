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
    define(['ApiClient', 'model/DrawTextInstance'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DrawTextInstance'));
  } else {
    // Browser globals (root is window)
    if (!root.CloudmersiveImageApiClient) {
      root.CloudmersiveImageApiClient = {};
    }
    root.CloudmersiveImageApiClient.DrawTextRequest = factory(root.CloudmersiveImageApiClient.ApiClient, root.CloudmersiveImageApiClient.DrawTextInstance);
  }
}(this, function(ApiClient, DrawTextInstance) {
  'use strict';




  /**
   * The DrawTextRequest model module.
   * @module model/DrawTextRequest
   * @version 1.1.6
   */

  /**
   * Constructs a new <code>DrawTextRequest</code>.
   * Request to draw one or more pieces of text onto an image
   * @alias module:model/DrawTextRequest
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>DrawTextRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DrawTextRequest} obj Optional instance to populate.
   * @return {module:model/DrawTextRequest} The populated <code>DrawTextRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('BaseImageBytes')) {
        obj['BaseImageBytes'] = ApiClient.convertToType(data['BaseImageBytes'], 'Blob');
      }
      if (data.hasOwnProperty('BaseImageUrl')) {
        obj['BaseImageUrl'] = ApiClient.convertToType(data['BaseImageUrl'], 'String');
      }
      if (data.hasOwnProperty('TextToDraw')) {
        obj['TextToDraw'] = ApiClient.convertToType(data['TextToDraw'], [DrawTextInstance]);
      }
    }
    return obj;
  }

  /**
   * Image to draw text on, in bytes.  You can also use the BaseImageUrl instead to supply image input as a URL
   * @member {Blob} BaseImageBytes
   */
  exports.prototype['BaseImageBytes'] = undefined;
  /**
   * Image to draw text on, as an HTTP or HTTPS fully-qualified URL
   * @member {String} BaseImageUrl
   */
  exports.prototype['BaseImageUrl'] = undefined;
  /**
   * One or more pieces of text to draw onto the image
   * @member {Array.<module:model/DrawTextInstance>} TextToDraw
   */
  exports.prototype['TextToDraw'] = undefined;



  return exports;
}));


