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
    root.CloudmersiveImageApiClient.DrawRectangleInstance = factory(root.CloudmersiveImageApiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The DrawRectangleInstance model module.
   * @module model/DrawRectangleInstance
   * @version 1.1.6
   */

  /**
   * Constructs a new <code>DrawRectangleInstance</code>.
   * Rectangle instance to draw on an image
   * @alias module:model/DrawRectangleInstance
   * @class
   */
  var exports = function() {
    var _this = this;








  };

  /**
   * Constructs a <code>DrawRectangleInstance</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DrawRectangleInstance} obj Optional instance to populate.
   * @return {module:model/DrawRectangleInstance} The populated <code>DrawRectangleInstance</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('BorderColor')) {
        obj['BorderColor'] = ApiClient.convertToType(data['BorderColor'], 'String');
      }
      if (data.hasOwnProperty('BorderWidth')) {
        obj['BorderWidth'] = ApiClient.convertToType(data['BorderWidth'], 'Number');
      }
      if (data.hasOwnProperty('FillColor')) {
        obj['FillColor'] = ApiClient.convertToType(data['FillColor'], 'String');
      }
      if (data.hasOwnProperty('X')) {
        obj['X'] = ApiClient.convertToType(data['X'], 'Number');
      }
      if (data.hasOwnProperty('Y')) {
        obj['Y'] = ApiClient.convertToType(data['Y'], 'Number');
      }
      if (data.hasOwnProperty('Width')) {
        obj['Width'] = ApiClient.convertToType(data['Width'], 'Number');
      }
      if (data.hasOwnProperty('Height')) {
        obj['Height'] = ApiClient.convertToType(data['Height'], 'Number');
      }
    }
    return obj;
  }

  /**
   * Border Color to use - can be a hex value (with #) or HTML common color name.  Transparent colors are supported.
   * @member {String} BorderColor
   */
  exports.prototype['BorderColor'] = undefined;
  /**
   * Width in pixels of the border.  Pass in 0 to draw a rectangle with no border
   * @member {Number} BorderWidth
   */
  exports.prototype['BorderWidth'] = undefined;
  /**
   * Fill Color to use - can be a hex value (with #) or HTML common color name.  Transparent colors are supported.  Leave blank to not fill the rectangle.
   * @member {String} FillColor
   */
  exports.prototype['FillColor'] = undefined;
  /**
   * Pixel location of the left edge of the rectangle location
   * @member {Number} X
   */
  exports.prototype['X'] = undefined;
  /**
   * Pixel location of the top edge of the rectangle location
   * @member {Number} Y
   */
  exports.prototype['Y'] = undefined;
  /**
   * Width in pixels of the rectangle
   * @member {Number} Width
   */
  exports.prototype['Width'] = undefined;
  /**
   * Height in pixels of the rectangle
   * @member {Number} Height
   */
  exports.prototype['Height'] = undefined;



  return exports;
}));


