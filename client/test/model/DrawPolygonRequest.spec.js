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
    instance = new CloudmersiveImageApiClient.DrawPolygonRequest();
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

  describe('DrawPolygonRequest', function() {
    it('should create an instance of DrawPolygonRequest', function() {
      // uncomment below and update the code to test DrawPolygonRequest
      //var instane = new CloudmersiveImageApiClient.DrawPolygonRequest();
      //expect(instance).to.be.a(CloudmersiveImageApiClient.DrawPolygonRequest);
    });

    it('should have the property baseImageBytes (base name: "BaseImageBytes")', function() {
      // uncomment below and update the code to test the property baseImageBytes
      //var instane = new CloudmersiveImageApiClient.DrawPolygonRequest();
      //expect(instance).to.be();
    });

    it('should have the property baseImageUrl (base name: "BaseImageUrl")', function() {
      // uncomment below and update the code to test the property baseImageUrl
      //var instane = new CloudmersiveImageApiClient.DrawPolygonRequest();
      //expect(instance).to.be();
    });

    it('should have the property polygonsToDraw (base name: "PolygonsToDraw")', function() {
      // uncomment below and update the code to test the property polygonsToDraw
      //var instane = new CloudmersiveImageApiClient.DrawPolygonRequest();
      //expect(instance).to.be();
    });

  });

}));
