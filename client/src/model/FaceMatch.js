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
    root.CloudmersiveImageApiClient.FaceMatch = factory(root.CloudmersiveImageApiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The FaceMatch model module.
   * @module model/FaceMatch
   * @version 1.2.7
   */

  /**
   * Constructs a new <code>FaceMatch</code>.
   * Location of one face in an image, along with match results
   * @alias module:model/FaceMatch
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>FaceMatch</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FaceMatch} obj Optional instance to populate.
   * @return {module:model/FaceMatch} The populated <code>FaceMatch</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('LeftX')) {
        obj['LeftX'] = ApiClient.convertToType(data['LeftX'], 'Number');
      }
      if (data.hasOwnProperty('TopY')) {
        obj['TopY'] = ApiClient.convertToType(data['TopY'], 'Number');
      }
      if (data.hasOwnProperty('RightX')) {
        obj['RightX'] = ApiClient.convertToType(data['RightX'], 'Number');
      }
      if (data.hasOwnProperty('BottomY')) {
        obj['BottomY'] = ApiClient.convertToType(data['BottomY'], 'Number');
      }
      if (data.hasOwnProperty('HighConfidenceMatch')) {
        obj['HighConfidenceMatch'] = ApiClient.convertToType(data['HighConfidenceMatch'], 'Boolean');
      }
      if (data.hasOwnProperty('MatchScore')) {
        obj['MatchScore'] = ApiClient.convertToType(data['MatchScore'], 'Number');
      }
    }
    return obj;
  }

  /**
   * X coordinate of the left side of the face
   * @member {Number} LeftX
   */
  exports.prototype['LeftX'] = undefined;
  /**
   * Y coordinate of the top side of the face
   * @member {Number} TopY
   */
  exports.prototype['TopY'] = undefined;
  /**
   * X coordinate of the right side of the face
   * @member {Number} RightX
   */
  exports.prototype['RightX'] = undefined;
  /**
   * Y coordinate of the bottom side of the face
   * @member {Number} BottomY
   */
  exports.prototype['BottomY'] = undefined;
  /**
   * True if there is a high confidence match, false otherwise
   * @member {Boolean} HighConfidenceMatch
   */
  exports.prototype['HighConfidenceMatch'] = undefined;
  /**
   * Match score from 0.0 to 1.0 with higher scores indicating a greater match; scores above 0.7 indicate a match
   * @member {Number} MatchScore
   */
  exports.prototype['MatchScore'] = undefined;



  return exports;
}));


