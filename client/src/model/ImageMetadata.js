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
    define(['ApiClient', 'model/ImageMetadataExifValue'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ImageMetadataExifValue'));
  } else {
    // Browser globals (root is window)
    if (!root.CloudmersiveImageApiClient) {
      root.CloudmersiveImageApiClient = {};
    }
    root.CloudmersiveImageApiClient.ImageMetadata = factory(root.CloudmersiveImageApiClient.ApiClient, root.CloudmersiveImageApiClient.ImageMetadataExifValue);
  }
}(this, function(ApiClient, ImageMetadataExifValue) {
  'use strict';




  /**
   * The ImageMetadata model module.
   * @module model/ImageMetadata
   * @version 1.3.5
   */

  /**
   * Constructs a new <code>ImageMetadata</code>.
   * Metadata from an image
   * @alias module:model/ImageMetadata
   * @class
   */
  var exports = function() {
    var _this = this;











  };

  /**
   * Constructs a <code>ImageMetadata</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ImageMetadata} obj Optional instance to populate.
   * @return {module:model/ImageMetadata} The populated <code>ImageMetadata</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Successful')) {
        obj['Successful'] = ApiClient.convertToType(data['Successful'], 'Boolean');
      }
      if (data.hasOwnProperty('IsValidImage')) {
        obj['IsValidImage'] = ApiClient.convertToType(data['IsValidImage'], 'Boolean');
      }
      if (data.hasOwnProperty('FileFormat')) {
        obj['FileFormat'] = ApiClient.convertToType(data['FileFormat'], 'String');
      }
      if (data.hasOwnProperty('Width')) {
        obj['Width'] = ApiClient.convertToType(data['Width'], 'Number');
      }
      if (data.hasOwnProperty('Height')) {
        obj['Height'] = ApiClient.convertToType(data['Height'], 'Number');
      }
      if (data.hasOwnProperty('BitDepth')) {
        obj['BitDepth'] = ApiClient.convertToType(data['BitDepth'], 'Number');
      }
      if (data.hasOwnProperty('HasTransparency')) {
        obj['HasTransparency'] = ApiClient.convertToType(data['HasTransparency'], 'Boolean');
      }
      if (data.hasOwnProperty('ColorSpace')) {
        obj['ColorSpace'] = ApiClient.convertToType(data['ColorSpace'], 'String');
      }
      if (data.hasOwnProperty('ExifProfileName')) {
        obj['ExifProfileName'] = ApiClient.convertToType(data['ExifProfileName'], 'String');
      }
      if (data.hasOwnProperty('ExifValues')) {
        obj['ExifValues'] = ApiClient.convertToType(data['ExifValues'], [ImageMetadataExifValue]);
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
   * True if the input image is a valid image file, false otherwise
   * @member {Boolean} IsValidImage
   */
  exports.prototype['IsValidImage'] = undefined;
  /**
   * File format of the image
   * @member {String} FileFormat
   */
  exports.prototype['FileFormat'] = undefined;
  /**
   * Width of the image in pixels
   * @member {Number} Width
   */
  exports.prototype['Width'] = undefined;
  /**
   * Height of the image in pixels
   * @member {Number} Height
   */
  exports.prototype['Height'] = undefined;
  /**
   * Bits per pixel
   * @member {Number} BitDepth
   */
  exports.prototype['BitDepth'] = undefined;
  /**
   * True if the image has transaprency in the form of an alpha channel, false otherwise
   * @member {Boolean} HasTransparency
   */
  exports.prototype['HasTransparency'] = undefined;
  /**
   * Color space of the image
   * @member {String} ColorSpace
   */
  exports.prototype['ColorSpace'] = undefined;
  /**
   * Name of the EXIF profile used
   * @member {String} ExifProfileName
   */
  exports.prototype['ExifProfileName'] = undefined;
  /**
   * EXIF tags and values embedded in the image
   * @member {Array.<module:model/ImageMetadataExifValue>} ExifValues
   */
  exports.prototype['ExifValues'] = undefined;



  return exports;
}));


