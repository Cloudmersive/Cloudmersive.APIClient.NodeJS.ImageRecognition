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
    define(['ApiClient', 'model/DrawRectangleRequest', 'model/DrawTextRequest'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/DrawRectangleRequest'), require('../model/DrawTextRequest'));
  } else {
    // Browser globals (root is window)
    if (!root.CloudmersiveImageApiClient) {
      root.CloudmersiveImageApiClient = {};
    }
    root.CloudmersiveImageApiClient.EditApi = factory(root.CloudmersiveImageApiClient.ApiClient, root.CloudmersiveImageApiClient.DrawRectangleRequest, root.CloudmersiveImageApiClient.DrawTextRequest);
  }
}(this, function(ApiClient, DrawRectangleRequest, DrawTextRequest) {
  'use strict';

  /**
   * Edit service.
   * @module api/EditApi
   * @version 1.1.2
   */

  /**
   * Constructs a new EditApi. 
   * @alias module:api/EditApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the editCompositeBasic operation.
     * @callback module:api/EditApi~editCompositeBasicCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Composite two images together
     * Composites two input images together; a layered image onto a base image.  The first image you input is the base image.  The second image (the layered image) will be composited on top of this base image.  Supports PNG transparency.  To control padding you can include transparent pixels at the border(s) of your layered images as appropriate.
     * @param {String} location Location to composite the layered images; possible values are: \&quot;center\&quot;, \&quot;top-left\&quot;, \&quot;top-center\&quot;, \&quot;top-right\&quot;, \&quot;center-left\&quot;, \&quot;center-right\&quot;, \&quot;bottom-left\&quot;, \&quot;bottom-center\&quot;, \&quot;bottom-right\&quot;
     * @param {File} baseImage Image file to perform the operation on.  Common file formats such as PNG, JPEG are supported.
     * @param {File} layeredImage Image to layer on top of the base image.
     * @param {module:api/EditApi~editCompositeBasicCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.editCompositeBasic = function(location, baseImage, layeredImage, callback) {
      var postBody = null;

      // verify the required parameter 'location' is set
      if (location === undefined || location === null) {
        throw new Error("Missing the required parameter 'location' when calling editCompositeBasic");
      }

      // verify the required parameter 'baseImage' is set
      if (baseImage === undefined || baseImage === null) {
        throw new Error("Missing the required parameter 'baseImage' when calling editCompositeBasic");
      }

      // verify the required parameter 'layeredImage' is set
      if (layeredImage === undefined || layeredImage === null) {
        throw new Error("Missing the required parameter 'layeredImage' when calling editCompositeBasic");
      }


      var pathParams = {
        'location': location
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
        'baseImage': baseImage,
        'layeredImage': layeredImage
      };

      var authNames = ['Apikey'];
      var contentTypes = ['multipart/form-data'];
      var accepts = ['image/png'];
      var returnType = Object;

      return this.apiClient.callApi(
        '/image/edit/composite/{location}', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the editDrawRectangle operation.
     * @callback module:api/EditApi~editDrawRectangleCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Draw rectangle onto an image
     * Draw one or more rectangles, with customized visuals, onto an image
     * @param {module:model/DrawRectangleRequest} request 
     * @param {module:api/EditApi~editDrawRectangleCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.editDrawRectangle = function(request, callback) {
      var postBody = request;

      // verify the required parameter 'request' is set
      if (request === undefined || request === null) {
        throw new Error("Missing the required parameter 'request' when calling editDrawRectangle");
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
      var accepts = ['image/png'];
      var returnType = Object;

      return this.apiClient.callApi(
        '/image/edit/draw/rectangle', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the editDrawText operation.
     * @callback module:api/EditApi~editDrawTextCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Draw text onto an image
     * Draw one or more pieces of text, with customized visuals, onto an image
     * @param {module:model/DrawTextRequest} request 
     * @param {module:api/EditApi~editDrawTextCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.editDrawText = function(request, callback) {
      var postBody = request;

      // verify the required parameter 'request' is set
      if (request === undefined || request === null) {
        throw new Error("Missing the required parameter 'request' when calling editDrawText");
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
      var accepts = ['image/png'];
      var returnType = Object;

      return this.apiClient.callApi(
        '/image/edit/draw/text', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));