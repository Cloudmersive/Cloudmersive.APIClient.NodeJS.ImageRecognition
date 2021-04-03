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
    root.CloudmersiveImageApiClient.FilterApi = factory(root.CloudmersiveImageApiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * Filter service.
   * @module api/FilterApi
   * @version 1.3.5
   */

  /**
   * Constructs a new FilterApi. 
   * @alias module:api/FilterApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the filterBlackAndWhite operation.
     * @callback module:api/FilterApi~filterBlackAndWhiteCallback
     * @param {String} error Error message, if any.
     * @param {'Blob'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Convert image to black-and-white grayscale
     * Remove color from the image by converting to a grayscale, black-and-white image
     * @param {File} imageFile Image file to perform the operation on.  Common file formats such as PNG, JPEG are supported.
     * @param {module:api/FilterApi~filterBlackAndWhiteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'Blob'}
     */
    this.filterBlackAndWhite = function(imageFile, callback) {
      var postBody = null;

      // verify the required parameter 'imageFile' is set
      if (imageFile === undefined || imageFile === null) {
        throw new Error("Missing the required parameter 'imageFile' when calling filterBlackAndWhite");
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
      var accepts = ['application/octet-stream'];
      var returnType = 'Blob';

      return this.apiClient.callApi(
        '/image/filter/black-and-white', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the filterDespeckle operation.
     * @callback module:api/FilterApi~filterDespeckleCallback
     * @param {String} error Error message, if any.
     * @param {'Blob'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Despeckle to remove point noise from the image
     * Remove point noise / despeckle the input image
     * @param {File} imageFile Image file to perform the operation on.  Common file formats such as PNG, JPEG are supported.
     * @param {module:api/FilterApi~filterDespeckleCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'Blob'}
     */
    this.filterDespeckle = function(imageFile, callback) {
      var postBody = null;

      // verify the required parameter 'imageFile' is set
      if (imageFile === undefined || imageFile === null) {
        throw new Error("Missing the required parameter 'imageFile' when calling filterDespeckle");
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
      var accepts = ['application/octet-stream'];
      var returnType = 'Blob';

      return this.apiClient.callApi(
        '/image/filter/despeckle', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the filterEdgeDetect operation.
     * @callback module:api/FilterApi~filterEdgeDetectCallback
     * @param {String} error Error message, if any.
     * @param {'Blob'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Detect and highlight edges in an image
     * Perform an edge detection operation on the input image
     * @param {Number} radius Radius in pixels of the edge detection operation; a larger radius will produce a greater effect
     * @param {File} imageFile Image file to perform the operation on.  Common file formats such as PNG, JPEG are supported.
     * @param {module:api/FilterApi~filterEdgeDetectCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'Blob'}
     */
    this.filterEdgeDetect = function(radius, imageFile, callback) {
      var postBody = null;

      // verify the required parameter 'radius' is set
      if (radius === undefined || radius === null) {
        throw new Error("Missing the required parameter 'radius' when calling filterEdgeDetect");
      }

      // verify the required parameter 'imageFile' is set
      if (imageFile === undefined || imageFile === null) {
        throw new Error("Missing the required parameter 'imageFile' when calling filterEdgeDetect");
      }


      var pathParams = {
        'radius': radius
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
      var accepts = ['application/octet-stream'];
      var returnType = 'Blob';

      return this.apiClient.callApi(
        '/image/filter/edge-detect/{radius}', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the filterEmboss operation.
     * @callback module:api/FilterApi~filterEmbossCallback
     * @param {String} error Error message, if any.
     * @param {'Blob'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Emboss an image
     * Perform an emboss operation on the input image
     * @param {Number} radius Radius in pixels of the emboss operation; a larger radius will produce a greater effect
     * @param {Number} sigma Sigma, or variance, of the emboss operation
     * @param {File} imageFile Image file to perform the operation on.  Common file formats such as PNG, JPEG are supported.
     * @param {module:api/FilterApi~filterEmbossCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'Blob'}
     */
    this.filterEmboss = function(radius, sigma, imageFile, callback) {
      var postBody = null;

      // verify the required parameter 'radius' is set
      if (radius === undefined || radius === null) {
        throw new Error("Missing the required parameter 'radius' when calling filterEmboss");
      }

      // verify the required parameter 'sigma' is set
      if (sigma === undefined || sigma === null) {
        throw new Error("Missing the required parameter 'sigma' when calling filterEmboss");
      }

      // verify the required parameter 'imageFile' is set
      if (imageFile === undefined || imageFile === null) {
        throw new Error("Missing the required parameter 'imageFile' when calling filterEmboss");
      }


      var pathParams = {
        'radius': radius,
        'sigma': sigma
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
      var accepts = ['application/octet-stream'];
      var returnType = 'Blob';

      return this.apiClient.callApi(
        '/image/filter/emboss/{radius}/{sigma}', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the filterGaussianBlur operation.
     * @callback module:api/FilterApi~filterGaussianBlurCallback
     * @param {String} error Error message, if any.
     * @param {'Blob'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Perform a guassian blur on the input image
     * Perform a gaussian blur on the input image
     * @param {Number} radius Radius in pixels of the blur operation; a larger radius will produce a greater blur effect
     * @param {Number} sigma Sigma, or variance, of the gaussian blur operation
     * @param {File} imageFile Image file to perform the operation on.  Common file formats such as PNG, JPEG are supported.
     * @param {module:api/FilterApi~filterGaussianBlurCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'Blob'}
     */
    this.filterGaussianBlur = function(radius, sigma, imageFile, callback) {
      var postBody = null;

      // verify the required parameter 'radius' is set
      if (radius === undefined || radius === null) {
        throw new Error("Missing the required parameter 'radius' when calling filterGaussianBlur");
      }

      // verify the required parameter 'sigma' is set
      if (sigma === undefined || sigma === null) {
        throw new Error("Missing the required parameter 'sigma' when calling filterGaussianBlur");
      }

      // verify the required parameter 'imageFile' is set
      if (imageFile === undefined || imageFile === null) {
        throw new Error("Missing the required parameter 'imageFile' when calling filterGaussianBlur");
      }


      var pathParams = {
        'radius': radius,
        'sigma': sigma
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
      var accepts = ['application/octet-stream'];
      var returnType = 'Blob';

      return this.apiClient.callApi(
        '/image/filter/blur/guassian/{radius}/{sigma}', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the filterMotionBlur operation.
     * @callback module:api/FilterApi~filterMotionBlurCallback
     * @param {String} error Error message, if any.
     * @param {'Blob'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Perform a motion blur on the input image
     * Perform a motion blur on the input image at a specific angle
     * @param {Number} radius Radius in pixels of the blur operation; a larger radius will produce a greater blur effect
     * @param {Number} sigma Sigma, or variance, of the motion blur operation
     * @param {Number} angle Angle of the motion blur in degrees
     * @param {File} imageFile Image file to perform the operation on.  Common file formats such as PNG, JPEG are supported.
     * @param {module:api/FilterApi~filterMotionBlurCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'Blob'}
     */
    this.filterMotionBlur = function(radius, sigma, angle, imageFile, callback) {
      var postBody = null;

      // verify the required parameter 'radius' is set
      if (radius === undefined || radius === null) {
        throw new Error("Missing the required parameter 'radius' when calling filterMotionBlur");
      }

      // verify the required parameter 'sigma' is set
      if (sigma === undefined || sigma === null) {
        throw new Error("Missing the required parameter 'sigma' when calling filterMotionBlur");
      }

      // verify the required parameter 'angle' is set
      if (angle === undefined || angle === null) {
        throw new Error("Missing the required parameter 'angle' when calling filterMotionBlur");
      }

      // verify the required parameter 'imageFile' is set
      if (imageFile === undefined || imageFile === null) {
        throw new Error("Missing the required parameter 'imageFile' when calling filterMotionBlur");
      }


      var pathParams = {
        'radius': radius,
        'sigma': sigma,
        'angle': angle
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
      var accepts = ['application/octet-stream'];
      var returnType = 'Blob';

      return this.apiClient.callApi(
        '/image/filter/blur/motion/{radius}/{sigma}/{angle}', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the filterPosterize operation.
     * @callback module:api/FilterApi~filterPosterizeCallback
     * @param {String} error Error message, if any.
     * @param {'Blob'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Posterize the image by reducing distinct colors
     * Reduce the unique number of colors in the image to the specified level
     * @param {Number} levels Number of unique colors to retain in the output image
     * @param {File} imageFile Image file to perform the operation on.  Common file formats such as PNG, JPEG are supported.
     * @param {module:api/FilterApi~filterPosterizeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'Blob'}
     */
    this.filterPosterize = function(levels, imageFile, callback) {
      var postBody = null;

      // verify the required parameter 'levels' is set
      if (levels === undefined || levels === null) {
        throw new Error("Missing the required parameter 'levels' when calling filterPosterize");
      }

      // verify the required parameter 'imageFile' is set
      if (imageFile === undefined || imageFile === null) {
        throw new Error("Missing the required parameter 'imageFile' when calling filterPosterize");
      }


      var pathParams = {
      };
      var queryParams = {
        'levels': levels,
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
      var accepts = ['application/octet-stream'];
      var returnType = 'Blob';

      return this.apiClient.callApi(
        '/image/filter/posterize', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the filterSwirl operation.
     * @callback module:api/FilterApi~filterSwirlCallback
     * @param {String} error Error message, if any.
     * @param {'Blob'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Swirl distort the image
     * Swirl distort the image by the specified number of degrees
     * @param {Number} degrees Degrees of swirl
     * @param {File} imageFile Image file to perform the operation on.  Common file formats such as PNG, JPEG are supported.
     * @param {module:api/FilterApi~filterSwirlCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'Blob'}
     */
    this.filterSwirl = function(degrees, imageFile, callback) {
      var postBody = null;

      // verify the required parameter 'degrees' is set
      if (degrees === undefined || degrees === null) {
        throw new Error("Missing the required parameter 'degrees' when calling filterSwirl");
      }

      // verify the required parameter 'imageFile' is set
      if (imageFile === undefined || imageFile === null) {
        throw new Error("Missing the required parameter 'imageFile' when calling filterSwirl");
      }


      var pathParams = {
      };
      var queryParams = {
        'degrees': degrees,
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
      var accepts = ['application/octet-stream'];
      var returnType = 'Blob';

      return this.apiClient.callApi(
        '/image/filter/swirl', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
