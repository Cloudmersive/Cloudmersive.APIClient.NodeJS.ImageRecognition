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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.CloudmersiveImageApiClient) {
      root.CloudmersiveImageApiClient = {};
    }
    root.CloudmersiveImageApiClient.DrawTextInstance = factory(root.CloudmersiveImageApiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The DrawTextInstance model module.
   * @module model/DrawTextInstance
   * @version 1.2.1
   */

  /**
   * Constructs a new <code>DrawTextInstance</code>.
   * Text instance to draw on an image
   * @alias module:model/DrawTextInstance
   * @class
   */
  var exports = function() {
    var _this = this;









  };

  /**
   * Constructs a <code>DrawTextInstance</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DrawTextInstance} obj Optional instance to populate.
   * @return {module:model/DrawTextInstance} The populated <code>DrawTextInstance</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Text')) {
        obj['Text'] = ApiClient.convertToType(data['Text'], 'String');
      }
      if (data.hasOwnProperty('FontFamilyName')) {
        obj['FontFamilyName'] = ApiClient.convertToType(data['FontFamilyName'], 'String');
      }
      if (data.hasOwnProperty('FontSize')) {
        obj['FontSize'] = ApiClient.convertToType(data['FontSize'], 'Number');
      }
      if (data.hasOwnProperty('Color')) {
        obj['Color'] = ApiClient.convertToType(data['Color'], 'String');
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
   * Text string to draw
   * @member {String} Text
   */
  exports.prototype['Text'] = undefined;
  /**
   * Font Family to use.  Leave blank to default to \"Arial\".
   * @member {String} FontFamilyName
   */
  exports.prototype['FontFamilyName'] = undefined;
  /**
   * Font size to use.
   * @member {Number} FontSize
   */
  exports.prototype['FontSize'] = undefined;
  /**
   * Color to use - can be a hex value (with #) or HTML common color name
   * @member {String} Color
   */
  exports.prototype['Color'] = undefined;
  /**
   * Pixel location of the left edge of the text location
   * @member {Number} X
   */
  exports.prototype['X'] = undefined;
  /**
   * Pixel location of the top edge of the text location
   * @member {Number} Y
   */
  exports.prototype['Y'] = undefined;
  /**
   * Width in pixels of the text box to draw the text in; text will wrap inside this box
   * @member {Number} Width
   */
  exports.prototype['Width'] = undefined;
  /**
   * Height in pixels of the text box to draw the text in; text will wrap inside this box
   * @member {Number} Height
   */
  exports.prototype['Height'] = undefined;



  return exports;
}));


