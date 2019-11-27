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
    define(['ApiClient', 'model/DrawPolygonInstance'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DrawPolygonInstance'));
  } else {
    // Browser globals (root is window)
    if (!root.CloudmersiveImageApiClient) {
      root.CloudmersiveImageApiClient = {};
    }
    root.CloudmersiveImageApiClient.DrawPolygonRequest = factory(root.CloudmersiveImageApiClient.ApiClient, root.CloudmersiveImageApiClient.DrawPolygonInstance);
  }
}(this, function(ApiClient, DrawPolygonInstance) {
  'use strict';




  /**
   * The DrawPolygonRequest model module.
   * @module model/DrawPolygonRequest
   * @version 1.2.9
   */

  /**
   * Constructs a new <code>DrawPolygonRequest</code>.
   * Request to draw one or more polygons on a base image
   * @alias module:model/DrawPolygonRequest
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>DrawPolygonRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DrawPolygonRequest} obj Optional instance to populate.
   * @return {module:model/DrawPolygonRequest} The populated <code>DrawPolygonRequest</code> instance.
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
      if (data.hasOwnProperty('PolygonsToDraw')) {
        obj['PolygonsToDraw'] = ApiClient.convertToType(data['PolygonsToDraw'], [DrawPolygonInstance]);
      }
    }
    return obj;
  }

  /**
   * Image to draw polygons on, in bytes.  You can also use the BaseImageUrl instead to supply image input as a URL
   * @member {Blob} BaseImageBytes
   */
  exports.prototype['BaseImageBytes'] = undefined;
  /**
   * Image to draw polygons on, as an HTTP or HTTPS fully-qualified URL
   * @member {String} BaseImageUrl
   */
  exports.prototype['BaseImageUrl'] = undefined;
  /**
   * Polygons to draw on the image.  Polygons are drawn in index order.
   * @member {Array.<module:model/DrawPolygonInstance>} PolygonsToDraw
   */
  exports.prototype['PolygonsToDraw'] = undefined;



  return exports;
}));


