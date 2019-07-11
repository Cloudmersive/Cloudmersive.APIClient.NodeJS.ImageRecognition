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
    instance = new CloudmersiveImageApiClient.EditApi();
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

  describe('EditApi', function() {
    describe('editAutoOrient', function() {
      it('should call editAutoOrient successfully', function(done) {
        //uncomment below and update the code to test editAutoOrient
        //instance.editAutoOrient(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('editCompositeBasic', function() {
      it('should call editCompositeBasic successfully', function(done) {
        //uncomment below and update the code to test editCompositeBasic
        //instance.editCompositeBasic(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('editContrastAdaptive', function() {
      it('should call editContrastAdaptive successfully', function(done) {
        //uncomment below and update the code to test editContrastAdaptive
        //instance.editContrastAdaptive(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('editDrawPolygon', function() {
      it('should call editDrawPolygon successfully', function(done) {
        //uncomment below and update the code to test editDrawPolygon
        //instance.editDrawPolygon(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('editDrawRectangle', function() {
      it('should call editDrawRectangle successfully', function(done) {
        //uncomment below and update the code to test editDrawRectangle
        //instance.editDrawRectangle(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('editDrawText', function() {
      it('should call editDrawText successfully', function(done) {
        //uncomment below and update the code to test editDrawText
        //instance.editDrawText(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('editRotate', function() {
      it('should call editRotate successfully', function(done) {
        //uncomment below and update the code to test editRotate
        //instance.editRotate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
