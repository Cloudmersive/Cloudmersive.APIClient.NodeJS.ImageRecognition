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
    instance = new CloudmersiveImageApiClient.RecognizeApi();
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

  describe('RecognizeApi', function() {
    describe('recognizeDescribe', function() {
      it('should call recognizeDescribe successfully', function(done) {
        //uncomment below and update the code to test recognizeDescribe
        //instance.recognizeDescribe(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('recognizeDetectAndUnskewDocument', function() {
      it('should call recognizeDetectAndUnskewDocument successfully', function(done) {
        //uncomment below and update the code to test recognizeDetectAndUnskewDocument
        //instance.recognizeDetectAndUnskewDocument(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('recognizeDetectObjects', function() {
      it('should call recognizeDetectObjects successfully', function(done) {
        //uncomment below and update the code to test recognizeDetectObjects
        //instance.recognizeDetectObjects(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('recognizeDetectPeople', function() {
      it('should call recognizeDetectPeople successfully', function(done) {
        //uncomment below and update the code to test recognizeDetectPeople
        //instance.recognizeDetectPeople(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('recognizeDetectTextFine', function() {
      it('should call recognizeDetectTextFine successfully', function(done) {
        //uncomment below and update the code to test recognizeDetectTextFine
        //instance.recognizeDetectTextFine(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('recognizeDetectTextLarge', function() {
      it('should call recognizeDetectTextLarge successfully', function(done) {
        //uncomment below and update the code to test recognizeDetectTextLarge
        //instance.recognizeDetectTextLarge(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('recognizeDetectVehicleLicensePlates', function() {
      it('should call recognizeDetectVehicleLicensePlates successfully', function(done) {
        //uncomment below and update the code to test recognizeDetectVehicleLicensePlates
        //instance.recognizeDetectVehicleLicensePlates(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
