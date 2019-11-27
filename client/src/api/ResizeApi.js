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
    root.CloudmersiveImageApiClient.ResizeApi = factory(root.CloudmersiveImageApiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * Resize service.
   * @module api/ResizeApi
   * @version 1.2.9
   */

  /**
   * Constructs a new ResizeApi. 
   * @alias module:api/ResizeApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the resizePost operation.
     * @callback module:api/ResizeApi~resizePostCallback
     * @param {String} error Error message, if any.
     * @param {'Blob'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Resize an image while preserving aspect ratio
     * Resize an image to a maximum width and maximum height, while preserving the image&#39;s original aspect ratio
     * @param {Number} maxWidth Maximum width of the output image - final image will be as large as possible while less than or equial to this width
     * @param {Number} maxHeight Maximum height of the output image - final image will be as large as possible while less than or equial to this height
     * @param {File} imageFile Image file to perform the operation on.  Common file formats such as PNG, JPEG are supported.
     * @param {module:api/ResizeApi~resizePostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'Blob'}
     */
    this.resizePost = function(maxWidth, maxHeight, imageFile, callback) {
      var postBody = null;

      // verify the required parameter 'maxWidth' is set
      if (maxWidth === undefined || maxWidth === null) {
        throw new Error("Missing the required parameter 'maxWidth' when calling resizePost");
      }

      // verify the required parameter 'maxHeight' is set
      if (maxHeight === undefined || maxHeight === null) {
        throw new Error("Missing the required parameter 'maxHeight' when calling resizePost");
      }

      // verify the required parameter 'imageFile' is set
      if (imageFile === undefined || imageFile === null) {
        throw new Error("Missing the required parameter 'imageFile' when calling resizePost");
      }


      var pathParams = {
        'maxWidth': maxWidth,
        'maxHeight': maxHeight
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
      var accepts = ['image/png'];
      var returnType = 'Blob';

      return this.apiClient.callApi(
        '/image/resize/preserveAspectRatio/{maxWidth}/{maxHeight}', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the resizeResizeSimple operation.
     * @callback module:api/ResizeApi~resizeResizeSimpleCallback
     * @param {String} error Error message, if any.
     * @param {'Blob'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Resize an image
     * Resize an image to a specific width and specific height
     * @param {Number} width 
     * @param {Number} height 
     * @param {File} imageFile Image file to perform the operation on.  Common file formats such as PNG, JPEG are supported.
     * @param {module:api/ResizeApi~resizeResizeSimpleCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'Blob'}
     */
    this.resizeResizeSimple = function(width, height, imageFile, callback) {
      var postBody = null;

      // verify the required parameter 'width' is set
      if (width === undefined || width === null) {
        throw new Error("Missing the required parameter 'width' when calling resizeResizeSimple");
      }

      // verify the required parameter 'height' is set
      if (height === undefined || height === null) {
        throw new Error("Missing the required parameter 'height' when calling resizeResizeSimple");
      }

      // verify the required parameter 'imageFile' is set
      if (imageFile === undefined || imageFile === null) {
        throw new Error("Missing the required parameter 'imageFile' when calling resizeResizeSimple");
      }


      var pathParams = {
        'width': width,
        'height': height
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
      var accepts = ['image/png'];
      var returnType = 'Blob';

      return this.apiClient.callApi(
        '/image/resize/target/{width}/{height}', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
