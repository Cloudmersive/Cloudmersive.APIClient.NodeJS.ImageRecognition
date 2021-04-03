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
    define(['ApiClient', 'model/CreateHandwritingRequest'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/CreateHandwritingRequest'));
  } else {
    // Browser globals (root is window)
    if (!root.CloudmersiveImageApiClient) {
      root.CloudmersiveImageApiClient = {};
    }
    root.CloudmersiveImageApiClient.TextGenerationApi = factory(root.CloudmersiveImageApiClient.ApiClient, root.CloudmersiveImageApiClient.CreateHandwritingRequest);
  }
}(this, function(ApiClient, CreateHandwritingRequest) {
  'use strict';

  /**
   * TextGeneration service.
   * @module api/TextGenerationApi
   * @version 1.3.5
   */

  /**
   * Constructs a new TextGenerationApi. 
   * @alias module:api/TextGenerationApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the textGenerationCreateHandwritingPng operation.
     * @callback module:api/TextGenerationApi~textGenerationCreateHandwritingPngCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create an image of handwriting in PNG format
     * Uses Deep Learning to generate realistic handwriting and returns the result as a PNG image
     * @param {module:model/CreateHandwritingRequest} request Draw text parameters
     * @param {module:api/TextGenerationApi~textGenerationCreateHandwritingPngCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.textGenerationCreateHandwritingPng = function(request, callback) {
      var postBody = request;

      // verify the required parameter 'request' is set
      if (request === undefined || request === null) {
        throw new Error("Missing the required parameter 'request' when calling textGenerationCreateHandwritingPng");
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
      };

      var authNames = ['Apikey'];
      var contentTypes = ['application/json', 'text/json', 'application/xml', 'text/xml', 'application/x-www-form-urlencoded'];
      var accepts = ['application/octet-stream'];
      var returnType = Object;

      return this.apiClient.callApi(
        '/image/text/create/handwriting/png', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
