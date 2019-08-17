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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.CloudmersiveImageApiClient);
  }
}(this, function(expect, CloudmersiveImageApiClient) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new CloudmersiveImageApiClient.FaceApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('FaceApi', function() {
    describe('faceCompare', function() {
      it('should call faceCompare successfully', function(done) {
        //uncomment below and update the code to test faceCompare
        //instance.faceCompare(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('faceCropFirst', function() {
      it('should call faceCropFirst successfully', function(done) {
        //uncomment below and update the code to test faceCropFirst
        //instance.faceCropFirst(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('faceCropFirstRound', function() {
      it('should call faceCropFirstRound successfully', function(done) {
        //uncomment below and update the code to test faceCropFirstRound
        //instance.faceCropFirstRound(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('faceDetectAge', function() {
      it('should call faceDetectAge successfully', function(done) {
        //uncomment below and update the code to test faceDetectAge
        //instance.faceDetectAge(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('faceDetectGender', function() {
      it('should call faceDetectGender successfully', function(done) {
        //uncomment below and update the code to test faceDetectGender
        //instance.faceDetectGender(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('faceLocate', function() {
      it('should call faceLocate successfully', function(done) {
        //uncomment below and update the code to test faceLocate
        //instance.faceLocate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('faceLocateWithLandmarks', function() {
      it('should call faceLocateWithLandmarks successfully', function(done) {
        //uncomment below and update the code to test faceLocateWithLandmarks
        //instance.faceLocateWithLandmarks(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
