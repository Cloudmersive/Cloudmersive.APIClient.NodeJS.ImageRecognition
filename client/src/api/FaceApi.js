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
    define(['ApiClient', 'model/AgeDetectionResult', 'model/FaceCompareResponse', 'model/FaceLocateResponse', 'model/FaceLocateWithLandmarksResponse', 'model/GenderDetectionResult'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/AgeDetectionResult'), require('../model/FaceCompareResponse'), require('../model/FaceLocateResponse'), require('../model/FaceLocateWithLandmarksResponse'), require('../model/GenderDetectionResult'));
  } else {
    // Browser globals (root is window)
    if (!root.CloudmersiveImageApiClient) {
      root.CloudmersiveImageApiClient = {};
    }
    root.CloudmersiveImageApiClient.FaceApi = factory(root.CloudmersiveImageApiClient.ApiClient, root.CloudmersiveImageApiClient.AgeDetectionResult, root.CloudmersiveImageApiClient.FaceCompareResponse, root.CloudmersiveImageApiClient.FaceLocateResponse, root.CloudmersiveImageApiClient.FaceLocateWithLandmarksResponse, root.CloudmersiveImageApiClient.GenderDetectionResult);
  }
}(this, function(ApiClient, AgeDetectionResult, FaceCompareResponse, FaceLocateResponse, FaceLocateWithLandmarksResponse, GenderDetectionResult) {
  'use strict';

  /**
   * Face service.
   * @module api/FaceApi
   * @version 1.2.9
   */

  /**
   * Constructs a new FaceApi. 
   * @alias module:api/FaceApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the faceCompare operation.
     * @callback module:api/FaceApi~faceCompareCallback
     * @param {String} error Error message, if any.
     * @param {module:model/FaceCompareResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Compare and match faces
     * Find the faces in an input image, and compare against a reference image to determine if there is a match against the face in the reference image.  The reference image (second parameter) should contain exactly one face.
     * @param {File} inputImage Image file to perform the operation on; this image can contain one or more faces which will be matched against face provided in the second image.  Common file formats such as PNG, JPEG are supported.
     * @param {File} matchFace Image of a single face to compare and match against.
     * @param {module:api/FaceApi~faceCompareCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/FaceCompareResponse}
     */
    this.faceCompare = function(inputImage, matchFace, callback) {
      var postBody = null;

      // verify the required parameter 'inputImage' is set
      if (inputImage === undefined || inputImage === null) {
        throw new Error("Missing the required parameter 'inputImage' when calling faceCompare");
      }

      // verify the required parameter 'matchFace' is set
      if (matchFace === undefined || matchFace === null) {
        throw new Error("Missing the required parameter 'matchFace' when calling faceCompare");
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
        'inputImage': inputImage,
        'matchFace': matchFace
      };

      var authNames = ['Apikey'];
      var contentTypes = ['multipart/form-data'];
      var accepts = ['application/json', 'text/json', 'application/xml', 'text/xml'];
      var returnType = FaceCompareResponse;

      return this.apiClient.callApi(
        '/image/face/compare-and-match', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the faceCropFirst operation.
     * @callback module:api/FaceApi~faceCropFirstCallback
     * @param {String} error Error message, if any.
     * @param {'Blob'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Crop image to face (square)
     * Crop an image to the face (rectangular crop).  If there is more than one face present, choose the first one.
     * @param {File} imageFile Image file to perform the operation on.  Common file formats such as PNG, JPEG are supported.
     * @param {module:api/FaceApi~faceCropFirstCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'Blob'}
     */
    this.faceCropFirst = function(imageFile, callback) {
      var postBody = null;

      // verify the required parameter 'imageFile' is set
      if (imageFile === undefined || imageFile === null) {
        throw new Error("Missing the required parameter 'imageFile' when calling faceCropFirst");
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
        '/image/face/crop/first', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the faceCropFirstRound operation.
     * @callback module:api/FaceApi~faceCropFirstRoundCallback
     * @param {String} error Error message, if any.
     * @param {'Blob'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Crop image to face (round)
     * Crop an image to the face (circular/round crop).  If there is more than one face present, choose the first one.
     * @param {File} imageFile Image file to perform the operation on.  Common file formats such as PNG, JPEG are supported.
     * @param {module:api/FaceApi~faceCropFirstRoundCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'Blob'}
     */
    this.faceCropFirstRound = function(imageFile, callback) {
      var postBody = null;

      // verify the required parameter 'imageFile' is set
      if (imageFile === undefined || imageFile === null) {
        throw new Error("Missing the required parameter 'imageFile' when calling faceCropFirstRound");
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
        '/image/face/crop/first/round', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the faceDetectAge operation.
     * @callback module:api/FaceApi~faceDetectAgeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AgeDetectionResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Detect the age of people in an image
     * Identify the age, position, and size of human faces in an image, along with a recognition confidence level.  People in the image do NOT need to be facing the camera; they can be facing away, edge-on, etc.
     * @param {File} imageFile Image file to perform the operation on.  Common file formats such as PNG, JPEG are supported.
     * @param {module:api/FaceApi~faceDetectAgeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AgeDetectionResult}
     */
    this.faceDetectAge = function(imageFile, callback) {
      var postBody = null;

      // verify the required parameter 'imageFile' is set
      if (imageFile === undefined || imageFile === null) {
        throw new Error("Missing the required parameter 'imageFile' when calling faceDetectAge");
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
      var returnType = AgeDetectionResult;

      return this.apiClient.callApi(
        '/image/face/detect-age', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the faceDetectGender operation.
     * @callback module:api/FaceApi~faceDetectGenderCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GenderDetectionResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Detect the gender of people in an image
     * Identify the gender, position, and size of human faces in an image, along with a recognition confidence level.  People in the image should be facing the camera.
     * @param {File} imageFile Image file to perform the operation on.  Common file formats such as PNG, JPEG are supported.
     * @param {module:api/FaceApi~faceDetectGenderCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GenderDetectionResult}
     */
    this.faceDetectGender = function(imageFile, callback) {
      var postBody = null;

      // verify the required parameter 'imageFile' is set
      if (imageFile === undefined || imageFile === null) {
        throw new Error("Missing the required parameter 'imageFile' when calling faceDetectGender");
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
      var returnType = GenderDetectionResult;

      return this.apiClient.callApi(
        '/image/face/detect-gender', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the faceLocate operation.
     * @callback module:api/FaceApi~faceLocateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/FaceLocateResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Find faces in an image
     * Locate the positions of all faces in an image
     * @param {File} imageFile Image file to perform the operation on.  Common file formats such as PNG, JPEG are supported.
     * @param {module:api/FaceApi~faceLocateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/FaceLocateResponse}
     */
    this.faceLocate = function(imageFile, callback) {
      var postBody = null;

      // verify the required parameter 'imageFile' is set
      if (imageFile === undefined || imageFile === null) {
        throw new Error("Missing the required parameter 'imageFile' when calling faceLocate");
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
      var returnType = FaceLocateResponse;

      return this.apiClient.callApi(
        '/image/face/locate', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the faceLocateWithLandmarks operation.
     * @callback module:api/FaceApi~faceLocateWithLandmarksCallback
     * @param {String} error Error message, if any.
     * @param {module:model/FaceLocateWithLandmarksResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Find faces and face landmarks (eyes, eye brows, nose, mouth) in an image
     * Locate the positions of all faces in an image, along with the eyes, eye brows, nose and mouth components of each
     * @param {File} imageFile Image file to perform the operation on.  Common file formats such as PNG, JPEG are supported.
     * @param {module:api/FaceApi~faceLocateWithLandmarksCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/FaceLocateWithLandmarksResponse}
     */
    this.faceLocateWithLandmarks = function(imageFile, callback) {
      var postBody = null;

      // verify the required parameter 'imageFile' is set
      if (imageFile === undefined || imageFile === null) {
        throw new Error("Missing the required parameter 'imageFile' when calling faceLocateWithLandmarks");
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
      var returnType = FaceLocateWithLandmarksResponse;

      return this.apiClient.callApi(
        '/image/face/locate-with-landmarks', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
