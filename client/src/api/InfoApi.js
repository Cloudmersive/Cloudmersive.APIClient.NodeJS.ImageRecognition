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
    define(['ApiClient', 'model/DominantColorResult', 'model/ImageMetadata'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/DominantColorResult'), require('../model/ImageMetadata'));
  } else {
    // Browser globals (root is window)
    if (!root.CloudmersiveImageApiClient) {
      root.CloudmersiveImageApiClient = {};
    }
    root.CloudmersiveImageApiClient.InfoApi = factory(root.CloudmersiveImageApiClient.ApiClient, root.CloudmersiveImageApiClient.DominantColorResult, root.CloudmersiveImageApiClient.ImageMetadata);
  }
}(this, function(ApiClient, DominantColorResult, ImageMetadata) {
  'use strict';

  /**
   * Info service.
   * @module api/InfoApi
   * @version 1.3.1
   */

  /**
   * Constructs a new InfoApi. 
   * @alias module:api/InfoApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the infoGetDominantColor operation.
     * @callback module:api/InfoApi~infoGetDominantColorCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DominantColorResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns the dominant colors of the image
     * Uses advanced image processing to extract the top 5 dominant colors in the image, returned in the order of dominance with the most-dominant color first.  These are the primary perceptual colors used in the image as perceived by a viewer.
     * @param {File} imageFile Image file to perform the operation on.  Common file formats such as PNG, JPEG are supported.
     * @param {module:api/InfoApi~infoGetDominantColorCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DominantColorResult}
     */
    this.infoGetDominantColor = function(imageFile, callback) {
      var postBody = null;

      // verify the required parameter 'imageFile' is set
      if (imageFile === undefined || imageFile === null) {
        throw new Error("Missing the required parameter 'imageFile' when calling infoGetDominantColor");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
        'imageFile': imageFile
      };

      var authNames = ['Apikey'];
      var contentTypes = ['multipart/form-data'];
      var accepts = ['application/json', 'text/json', 'application/xml', 'text/xml'];
      var returnType = DominantColorResult;

      return this.apiClient.callApi(
        '/image/get-info/dominant-color', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the infoGetMetadata operation.
     * @callback module:api/InfoApi~infoGetMetadataCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ImageMetadata} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns the image metadata including EXIF and resolution
     * Returns the metadata information on the image, including file type, EXIF (if available), and resolution.
     * @param {File} imageFile Image file to perform the operation on.  Common file formats such as PNG, JPEG are supported.
     * @param {module:api/InfoApi~infoGetMetadataCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ImageMetadata}
     */
    this.infoGetMetadata = function(imageFile, callback) {
      var postBody = null;

      // verify the required parameter 'imageFile' is set
      if (imageFile === undefined || imageFile === null) {
        throw new Error("Missing the required parameter 'imageFile' when calling infoGetMetadata");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
        'imageFile': imageFile
      };

      var authNames = ['Apikey'];
      var contentTypes = ['multipart/form-data'];
      var accepts = ['application/json', 'text/json', 'application/xml', 'text/xml'];
      var returnType = ImageMetadata;

      return this.apiClient.callApi(
        '/image/get-info/metadata', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
