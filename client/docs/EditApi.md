# CloudmersiveImageApiClient.EditApi

All URIs are relative to *https://api.cloudmersive.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**editAutoOrient**](EditApi.md#editAutoOrient) | **POST** /image/edit/auto-orient/remove-exif | Normalizes image rotation and removes EXIF rotation data
[**editCompositeBasic**](EditApi.md#editCompositeBasic) | **POST** /image/edit/composite/{location} | Composite two images together
[**editCompositePrecise**](EditApi.md#editCompositePrecise) | **POST** /image/edit/composite/precise | Composite two images together precisely
[**editContrastAdaptive**](EditApi.md#editContrastAdaptive) | **POST** /image/edit/contrast/{gamma}/adaptive | Adaptively adjust the contrast of the image to be more appealing and easy to see
[**editCropCircle**](EditApi.md#editCropCircle) | **POST** /image/edit/crop/circle/{left}/{top}/{radius} | Crop an image to an circular area
[**editCropRectangle**](EditApi.md#editCropRectangle) | **POST** /image/edit/crop/rectangle/{left}/{top}/{width}/{height} | Crop an image to a rectangular area
[**editDrawPolygon**](EditApi.md#editDrawPolygon) | **POST** /image/edit/draw/polygon | Draw a polygon onto an image
[**editDrawRectangle**](EditApi.md#editDrawRectangle) | **POST** /image/edit/draw/rectangle | Draw a rectangle onto an image
[**editDrawText**](EditApi.md#editDrawText) | **POST** /image/edit/draw/text | Draw text onto an image
[**editDropShadow**](EditApi.md#editDropShadow) | **POST** /image/edit/drop-shadow/{X}/{Y}/{sigma}/{opacity} | Add a customizeable drop shadow to an image
[**editInvert**](EditApi.md#editInvert) | **POST** /image/edit/invert | Invert, negate the colors in the image
[**editRemoveExifData**](EditApi.md#editRemoveExifData) | **POST** /image/edit/remove-exif | Remove EXIF data from the image
[**editRemoveTransparency**](EditApi.md#editRemoveTransparency) | **POST** /image/edit/remove-transparency | Remove transparency from the image
[**editRotate**](EditApi.md#editRotate) | **POST** /image/edit/rotate/{degrees}/angle | Rotate an image any number of degrees


<a name="editAutoOrient"></a>
# **editAutoOrient**
> &#39;Blob&#39; editAutoOrient(imageFile)

Normalizes image rotation and removes EXIF rotation data

Automatically orients the input image based on EXIF information and then removes the EXIF information.  EXIF is an additional set of information stored in some images taken with cell phone cameras based on the orientation of the camera.  By normalizing rotation and removing EXIF data these images become much easier to process.

### Example
```javascript
var CloudmersiveImageApiClient = require('cloudmersive-image-api-client');
var defaultClient = CloudmersiveImageApiClient.ApiClient.instance;

// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new CloudmersiveImageApiClient.EditApi();

var imageFile = "/path/to/file.txt"; // File | Image file to perform the operation on.  Common file formats such as PNG, JPEG are supported.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.editAutoOrient(imageFile, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **imageFile** | **File**| Image file to perform the operation on.  Common file formats such as PNG, JPEG are supported. | 

### Return type

**&#39;Blob&#39;**

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/octet-stream

<a name="editCompositeBasic"></a>
# **editCompositeBasic**
> &#39;Blob&#39; editCompositeBasic(location, baseImage, layeredImage)

Composite two images together

Composites two input images together; a layered image onto a base image.  The first image you input is the base image.  The second image (the layered image) will be composited on top of this base image.  Supports PNG transparency.  To control padding you can include transparent pixels at the border(s) of your layered images as appropriate.

### Example
```javascript
var CloudmersiveImageApiClient = require('cloudmersive-image-api-client');
var defaultClient = CloudmersiveImageApiClient.ApiClient.instance;

// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new CloudmersiveImageApiClient.EditApi();

var location = "location_example"; // String | Location to composite the layered images; possible values are: \"center\", \"top-left\", \"top-center\", \"top-right\", \"center-left\", \"center-right\", \"bottom-left\", \"bottom-center\", \"bottom-right\"

var baseImage = "/path/to/file.txt"; // File | Image file to perform the operation on.  Common file formats such as PNG, JPEG are supported.

var layeredImage = "/path/to/file.txt"; // File | Image to layer on top of the base image.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.editCompositeBasic(location, baseImage, layeredImage, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **location** | **String**| Location to composite the layered images; possible values are: \&quot;center\&quot;, \&quot;top-left\&quot;, \&quot;top-center\&quot;, \&quot;top-right\&quot;, \&quot;center-left\&quot;, \&quot;center-right\&quot;, \&quot;bottom-left\&quot;, \&quot;bottom-center\&quot;, \&quot;bottom-right\&quot; | 
 **baseImage** | **File**| Image file to perform the operation on.  Common file formats such as PNG, JPEG are supported. | 
 **layeredImage** | **File**| Image to layer on top of the base image. | 

### Return type

**&#39;Blob&#39;**

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/octet-stream

<a name="editCompositePrecise"></a>
# **editCompositePrecise**
> &#39;Blob&#39; editCompositePrecise(baseImage, layeredImage, opts)

Composite two images together precisely

Composites two input images together; a layered image onto a base image. Position is based on distance in pixels from each side.  The first image you input is the base image.  The second image (the layered image) will be composited on top of this base image.  Supports PNG transparency.  To control padding you can include transparent pixels at the border(s) of your layered images as appropriate.  Providing multiple parameters in a single axis (for example top and bottom) is not recommended, since only one of the parameters will be used per axis.

### Example
```javascript
var CloudmersiveImageApiClient = require('cloudmersive-image-api-client');
var defaultClient = CloudmersiveImageApiClient.ApiClient.instance;

// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new CloudmersiveImageApiClient.EditApi();

var baseImage = "/path/to/file.txt"; // File | Image file to perform the operation on.  Common file formats such as PNG, JPEG are supported.

var layeredImage = "/path/to/file.txt"; // File | Image to layer on top of the base image.

var opts = { 
  'top': 56, // Number | Optional; Desired distance in pixels from the top of the base image to the top of the layered image.
  'bottom': 56, // Number | Optional; Desired distance in pixels from the bottom of the base image to the bottom of the layered image.
  'left': 56, // Number | Optional; Desired distance in pixels from the left side of the base image to the left side of the layered image.
  'right': 56, // Number | Optional; Desired distance in pixels from the right side of the base image to the right side of the layered image.
  'width': 56, // Number | Optional; Desired width of the layered image in pixels. Leave height empty or 0 to automatically scale the image proportionally.
  'height': 56 // Number | Optional; Desired height of the layered image in pixels. Leave width empty or 0 to automatically scale the image proportionally.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.editCompositePrecise(baseImage, layeredImage, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseImage** | **File**| Image file to perform the operation on.  Common file formats such as PNG, JPEG are supported. | 
 **layeredImage** | **File**| Image to layer on top of the base image. | 
 **top** | **Number**| Optional; Desired distance in pixels from the top of the base image to the top of the layered image. | [optional] 
 **bottom** | **Number**| Optional; Desired distance in pixels from the bottom of the base image to the bottom of the layered image. | [optional] 
 **left** | **Number**| Optional; Desired distance in pixels from the left side of the base image to the left side of the layered image. | [optional] 
 **right** | **Number**| Optional; Desired distance in pixels from the right side of the base image to the right side of the layered image. | [optional] 
 **width** | **Number**| Optional; Desired width of the layered image in pixels. Leave height empty or 0 to automatically scale the image proportionally. | [optional] 
 **height** | **Number**| Optional; Desired height of the layered image in pixels. Leave width empty or 0 to automatically scale the image proportionally. | [optional] 

### Return type

**&#39;Blob&#39;**

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/octet-stream

<a name="editContrastAdaptive"></a>
# **editContrastAdaptive**
> &#39;Blob&#39; editContrastAdaptive(gamma, imageFile)

Adaptively adjust the contrast of the image to be more appealing and easy to see

Uses Gamma to adjust the contrast adaptively the way the human eye sees the world.  Results significantly improve the viewability and visual appeal of the image.

### Example
```javascript
var CloudmersiveImageApiClient = require('cloudmersive-image-api-client');
var defaultClient = CloudmersiveImageApiClient.ApiClient.instance;

// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new CloudmersiveImageApiClient.EditApi();

var gamma = 1.2; // Number | Gamma value to adjust the contrast in the image.  Recommended value is 2.0.  Values between 0.0 and 1.0 will reduce contrast, while values above 1.0 will increase contrast.

var imageFile = "/path/to/file.txt"; // File | Image file to perform the operation on.  Common file formats such as PNG, JPEG are supported.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.editContrastAdaptive(gamma, imageFile, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gamma** | **Number**| Gamma value to adjust the contrast in the image.  Recommended value is 2.0.  Values between 0.0 and 1.0 will reduce contrast, while values above 1.0 will increase contrast. | 
 **imageFile** | **File**| Image file to perform the operation on.  Common file formats such as PNG, JPEG are supported. | 

### Return type

**&#39;Blob&#39;**

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/octet-stream

<a name="editCropCircle"></a>
# **editCropCircle**
> &#39;Blob&#39; editCropCircle(left, top, radius, imageFile)

Crop an image to an circular area

Crop an image to a target circular area

### Example
```javascript
var CloudmersiveImageApiClient = require('cloudmersive-image-api-client');
var defaultClient = CloudmersiveImageApiClient.ApiClient.instance;

// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new CloudmersiveImageApiClient.EditApi();

var left = 56; // Number | The left edge of the circular crop area in pixels (X).

var top = 56; // Number | The top edge of the circular crop area in pixels (Y).

var radius = 56; // Number | The radius of the circular crop area in pixels.

var imageFile = "/path/to/file.txt"; // File | Image file to perform the operation on.  Common file formats such as PNG, JPEG are supported.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.editCropCircle(left, top, radius, imageFile, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **left** | **Number**| The left edge of the circular crop area in pixels (X). | 
 **top** | **Number**| The top edge of the circular crop area in pixels (Y). | 
 **radius** | **Number**| The radius of the circular crop area in pixels. | 
 **imageFile** | **File**| Image file to perform the operation on.  Common file formats such as PNG, JPEG are supported. | 

### Return type

**&#39;Blob&#39;**

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/octet-stream

<a name="editCropRectangle"></a>
# **editCropRectangle**
> &#39;Blob&#39; editCropRectangle(left, top, width, height, imageFile)

Crop an image to a rectangular area

Crop an image to a target rectangular area

### Example
```javascript
var CloudmersiveImageApiClient = require('cloudmersive-image-api-client');
var defaultClient = CloudmersiveImageApiClient.ApiClient.instance;

// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new CloudmersiveImageApiClient.EditApi();

var left = 56; // Number | The left edge of the rectangular crop area in pixels (X).

var top = 56; // Number | The top edge of the rectangular crop area in pixels (Y).

var width = 56; // Number | The width of the rectangular crop area in pixels.

var height = 56; // Number | The height of the rectangular crop area in pixels.

var imageFile = "/path/to/file.txt"; // File | Image file to perform the operation on.  Common file formats such as PNG, JPEG are supported.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.editCropRectangle(left, top, width, height, imageFile, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **left** | **Number**| The left edge of the rectangular crop area in pixels (X). | 
 **top** | **Number**| The top edge of the rectangular crop area in pixels (Y). | 
 **width** | **Number**| The width of the rectangular crop area in pixels. | 
 **height** | **Number**| The height of the rectangular crop area in pixels. | 
 **imageFile** | **File**| Image file to perform the operation on.  Common file formats such as PNG, JPEG are supported. | 

### Return type

**&#39;Blob&#39;**

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/octet-stream

<a name="editDrawPolygon"></a>
# **editDrawPolygon**
> &#39;Blob&#39; editDrawPolygon(request)

Draw a polygon onto an image

Draw one or more polygons, with customized visuals, onto an image

### Example
```javascript
var CloudmersiveImageApiClient = require('cloudmersive-image-api-client');
var defaultClient = CloudmersiveImageApiClient.ApiClient.instance;

// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new CloudmersiveImageApiClient.EditApi();

var request = new CloudmersiveImageApiClient.DrawPolygonRequest(); // DrawPolygonRequest | Polygon drawing request parameters


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.editDrawPolygon(request, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**DrawPolygonRequest**](DrawPolygonRequest.md)| Polygon drawing request parameters | 

### Return type

**&#39;Blob&#39;**

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/octet-stream

<a name="editDrawRectangle"></a>
# **editDrawRectangle**
> &#39;Blob&#39; editDrawRectangle(request)

Draw a rectangle onto an image

Draw one or more rectangles, with customized visuals, onto an image

### Example
```javascript
var CloudmersiveImageApiClient = require('cloudmersive-image-api-client');
var defaultClient = CloudmersiveImageApiClient.ApiClient.instance;

// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new CloudmersiveImageApiClient.EditApi();

var request = new CloudmersiveImageApiClient.DrawRectangleRequest(); // DrawRectangleRequest | Draw rectangle parameters


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.editDrawRectangle(request, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**DrawRectangleRequest**](DrawRectangleRequest.md)| Draw rectangle parameters | 

### Return type

**&#39;Blob&#39;**

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/octet-stream

<a name="editDrawText"></a>
# **editDrawText**
> &#39;Blob&#39; editDrawText(request)

Draw text onto an image

Draw one or more pieces of text, with customized visuals, onto an image

### Example
```javascript
var CloudmersiveImageApiClient = require('cloudmersive-image-api-client');
var defaultClient = CloudmersiveImageApiClient.ApiClient.instance;

// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new CloudmersiveImageApiClient.EditApi();

var request = new CloudmersiveImageApiClient.DrawTextRequest(); // DrawTextRequest | Draw text parameters


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.editDrawText(request, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**DrawTextRequest**](DrawTextRequest.md)| Draw text parameters | 

### Return type

**&#39;Blob&#39;**

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/octet-stream

<a name="editDropShadow"></a>
# **editDropShadow**
> &#39;Blob&#39; editDropShadow(X, Y, sigma, opacity, imageFile)

Add a customizeable drop shadow to an image

Add a customizeable drop shadow to the image

### Example
```javascript
var CloudmersiveImageApiClient = require('cloudmersive-image-api-client');
var defaultClient = CloudmersiveImageApiClient.ApiClient.instance;

// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new CloudmersiveImageApiClient.EditApi();

var X = 56; // Number | Horizontal (X) offset of the drop shadow

var Y = 56; // Number | Vertical (Y) offset of the drop shadow

var sigma = 56; // Number | Sigma (blur distance) of the drop shadow

var opacity = 56; // Number | Opacity of the drop shadow; 0 is 0% and 100 is 100%

var imageFile = "/path/to/file.txt"; // File | Image file to perform the operation on.  Common file formats such as PNG, JPEG are supported.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.editDropShadow(X, Y, sigma, opacity, imageFile, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **X** | **Number**| Horizontal (X) offset of the drop shadow | 
 **Y** | **Number**| Vertical (Y) offset of the drop shadow | 
 **sigma** | **Number**| Sigma (blur distance) of the drop shadow | 
 **opacity** | **Number**| Opacity of the drop shadow; 0 is 0% and 100 is 100% | 
 **imageFile** | **File**| Image file to perform the operation on.  Common file formats such as PNG, JPEG are supported. | 

### Return type

**&#39;Blob&#39;**

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/octet-stream

<a name="editInvert"></a>
# **editInvert**
> &#39;Blob&#39; editInvert(imageFile)

Invert, negate the colors in the image

Inverts (negates) all of the colors in the image.  If the image contains transparency, the transparency will first be removed prior to inverting the image.

### Example
```javascript
var CloudmersiveImageApiClient = require('cloudmersive-image-api-client');
var defaultClient = CloudmersiveImageApiClient.ApiClient.instance;

// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new CloudmersiveImageApiClient.EditApi();

var imageFile = "/path/to/file.txt"; // File | Image file to perform the operation on.  Common file formats such as PNG, JPEG are supported.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.editInvert(imageFile, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **imageFile** | **File**| Image file to perform the operation on.  Common file formats such as PNG, JPEG are supported. | 

### Return type

**&#39;Blob&#39;**

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/octet-stream

<a name="editRemoveExifData"></a>
# **editRemoveExifData**
> &#39;Blob&#39; editRemoveExifData(imageFile)

Remove EXIF data from the image

Removes any EXIF data and profiles .

### Example
```javascript
var CloudmersiveImageApiClient = require('cloudmersive-image-api-client');
var defaultClient = CloudmersiveImageApiClient.ApiClient.instance;

// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new CloudmersiveImageApiClient.EditApi();

var imageFile = "/path/to/file.txt"; // File | Image file to perform the operation on.  Common file formats such as PNG, JPEG are supported.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.editRemoveExifData(imageFile, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **imageFile** | **File**| Image file to perform the operation on.  Common file formats such as PNG, JPEG are supported. | 

### Return type

**&#39;Blob&#39;**

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/octet-stream

<a name="editRemoveTransparency"></a>
# **editRemoveTransparency**
> &#39;Blob&#39; editRemoveTransparency(imageFile)

Remove transparency from the image

Removes any active transparency in the image.  Effectively renders the image at the same resolution, in the same file format, over a white background, thus removing transparency.

### Example
```javascript
var CloudmersiveImageApiClient = require('cloudmersive-image-api-client');
var defaultClient = CloudmersiveImageApiClient.ApiClient.instance;

// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new CloudmersiveImageApiClient.EditApi();

var imageFile = "/path/to/file.txt"; // File | Image file to perform the operation on.  Common file formats such as PNG, JPEG are supported.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.editRemoveTransparency(imageFile, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **imageFile** | **File**| Image file to perform the operation on.  Common file formats such as PNG, JPEG are supported. | 

### Return type

**&#39;Blob&#39;**

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/octet-stream

<a name="editRotate"></a>
# **editRotate**
> &#39;Blob&#39; editRotate(degrees, imageFile)

Rotate an image any number of degrees

Rotates an image by an arbitrary number of degrees

### Example
```javascript
var CloudmersiveImageApiClient = require('cloudmersive-image-api-client');
var defaultClient = CloudmersiveImageApiClient.ApiClient.instance;

// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new CloudmersiveImageApiClient.EditApi();

var degrees = 1.2; // Number | Degrees to rotate the image; values range from 0.0 to 360.0.

var imageFile = "/path/to/file.txt"; // File | Image file to perform the operation on.  Common file formats such as PNG, JPEG are supported.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.editRotate(degrees, imageFile, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **degrees** | **Number**| Degrees to rotate the image; values range from 0.0 to 360.0. | 
 **imageFile** | **File**| Image file to perform the operation on.  Common file formats such as PNG, JPEG are supported. | 

### Return type

**&#39;Blob&#39;**

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/octet-stream

