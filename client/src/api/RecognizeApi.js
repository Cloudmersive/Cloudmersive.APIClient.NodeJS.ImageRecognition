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
    define(['ApiClient', 'model/ImageDescriptionResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ImageDescriptionResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.CloudmersiveImageApiClient) {
      root.CloudmersiveImageApiClient = {};
    }
    root.CloudmersiveImageApiClient.RecognizeApi = factory(root.CloudmersiveImageApiClient.ApiClient, root.CloudmersiveImageApiClient.ImageDescriptionResponse);
  }
}(this, function(ApiClient, ImageDescriptionResponse) {
  'use strict';

  /**
   * Recognize service.
   * @module api/RecognizeApi
   * @version 1.0.8
   */

  /**
   * Constructs a new RecognizeApi. 
   * @alias module:api/RecognizeApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the recognizeDescribe operation.
     * @callback module:api/RecognizeApi~recognizeDescribeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ImageDescriptionResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Describe an image in natural language
     * Generate an English language text description of the image as a sentence.
     * @param {File} imageFile Image file to perform the operation on.  Common file formats such as PNG, JPEG are supported.
     * @param {module:api/RecognizeApi~recognizeDescribeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ImageDescriptionResponse}
     */
    this.recognizeDescribe = function(imageFile, callback) {
      var postBody = null;

      // verify the required parameter 'imageFile' is set
      if (imageFile === undefined || imageFile === null) {
        throw new Error("Missing the required parameter 'imageFile' when calling recognizeDescribe");
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
      var returnType = ImageDescriptionResponse;

      return this.apiClient.callApi(
        '/image/recognize/describe', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
