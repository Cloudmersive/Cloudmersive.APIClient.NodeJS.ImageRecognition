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
    instance = new CloudmersiveImageApiClient.ImageMetadataExifValue();
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

  describe('ImageMetadataExifValue', function() {
    it('should create an instance of ImageMetadataExifValue', function() {
      // uncomment below and update the code to test ImageMetadataExifValue
      //var instane = new CloudmersiveImageApiClient.ImageMetadataExifValue();
      //expect(instance).to.be.a(CloudmersiveImageApiClient.ImageMetadataExifValue);
    });

    it('should have the property tag (base name: "Tag")', function() {
      // uncomment below and update the code to test the property tag
      //var instane = new CloudmersiveImageApiClient.ImageMetadataExifValue();
      //expect(instance).to.be();
    });

    it('should have the property dataType (base name: "DataType")', function() {
      // uncomment below and update the code to test the property dataType
      //var instane = new CloudmersiveImageApiClient.ImageMetadataExifValue();
      //expect(instance).to.be();
    });

    it('should have the property dataValue (base name: "DataValue")', function() {
      // uncomment below and update the code to test the property dataValue
      //var instane = new CloudmersiveImageApiClient.ImageMetadataExifValue();
      //expect(instance).to.be();
    });

  });

}));
