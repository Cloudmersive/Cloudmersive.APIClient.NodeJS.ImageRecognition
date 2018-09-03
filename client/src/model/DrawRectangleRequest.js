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
    define(['ApiClient', 'model/DrawRectangleInstance'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DrawRectangleInstance'));
  } else {
    // Browser globals (root is window)
    if (!root.CloudmersiveImageApiClient) {
      root.CloudmersiveImageApiClient = {};
    }
    root.CloudmersiveImageApiClient.DrawRectangleRequest = factory(root.CloudmersiveImageApiClient.ApiClient, root.CloudmersiveImageApiClient.DrawRectangleInstance);
  }
}(this, function(ApiClient, DrawRectangleInstance) {
  'use strict';




  /**
   * The DrawRectangleRequest model module.
   * @module model/DrawRectangleRequest
   * @version 1.1.2
   */

  /**
   * Constructs a new <code>DrawRectangleRequest</code>.
   * Request to draw one or more rectangles on a base image
   * @alias module:model/DrawRectangleRequest
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>DrawRectangleRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DrawRectangleRequest} obj Optional instance to populate.
   * @return {module:model/DrawRectangleRequest} The populated <code>DrawRectangleRequest</code> instance.
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
      if (data.hasOwnProperty('RectanglesToDraw')) {
        obj['RectanglesToDraw'] = ApiClient.convertToType(data['RectanglesToDraw'], [DrawRectangleInstance]);
      }
    }
    return obj;
  }

  /**
   * Image to draw rectangles on, in bytes.  You can also use the BaseImageUrl instead to supply image input as a URL
   * @member {Blob} BaseImageBytes
   */
  exports.prototype['BaseImageBytes'] = undefined;
  /**
   * Image to draw rectangles on, as an HTTP or HTTPS fully-qualified URL
   * @member {String} BaseImageUrl
   */
  exports.prototype['BaseImageUrl'] = undefined;
  /**
   * Rectangles to draw on the image.  Rectangles are drawn in index order.
   * @member {Array.<module:model/DrawRectangleInstance>} RectanglesToDraw
   */
  exports.prototype['RectanglesToDraw'] = undefined;



  return exports;
}));


