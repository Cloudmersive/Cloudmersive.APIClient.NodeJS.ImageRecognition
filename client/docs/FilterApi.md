# CloudmersiveImageApiClient.FilterApi

All URIs are relative to *https://api.cloudmersive.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**filterBlackAndWhite**](FilterApi.md#filterBlackAndWhite) | **POST** /image/filter/black-and-white | Convert image to black-and-white grayscale
[**filterDespeckle**](FilterApi.md#filterDespeckle) | **POST** /image/filter/despeckle | Despeckle to remove point noise from the image
[**filterEdgeDetect**](FilterApi.md#filterEdgeDetect) | **POST** /image/filter/edge-detect/{radius} | Detect and highlight edges in an image
[**filterEmboss**](FilterApi.md#filterEmboss) | **POST** /image/filter/emboss/{radius}/{sigma} | Emboss an image
[**filterGaussianBlur**](FilterApi.md#filterGaussianBlur) | **POST** /image/filter/blur/guassian/{radius}/{sigma} | Perform a guassian blur on the input image
[**filterMotionBlur**](FilterApi.md#filterMotionBlur) | **POST** /image/filter/blur/motion/{radius}/{sigma}/{angle} | Perform a motion blur on the input image
[**filterPosterize**](FilterApi.md#filterPosterize) | **POST** /image/filter/posterize | Posterize the image by reducing distinct colors
[**filterSwirl**](FilterApi.md#filterSwirl) | **POST** /image/filter/swirl | Swirl distort the image


<a name="filterBlackAndWhite"></a>
# **filterBlackAndWhite**
> &#39;Blob&#39; filterBlackAndWhite(imageFile)

Convert image to black-and-white grayscale

Remove color from the image by converting to a grayscale, black-and-white image

### Example
```javascript
var CloudmersiveImageApiClient = require('cloudmersive-image-api-client');
var defaultClient = CloudmersiveImageApiClient.ApiClient.instance;

// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new CloudmersiveImageApiClient.FilterApi();

var imageFile = "/path/to/file.txt"; // File | Image file to perform the operation on.  Common file formats such as PNG, JPEG are supported.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.filterBlackAndWhite(imageFile, callback);
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

<a name="filterDespeckle"></a>
# **filterDespeckle**
> &#39;Blob&#39; filterDespeckle(imageFile)

Despeckle to remove point noise from the image

Remove point noise / despeckle the input image

### Example
```javascript
var CloudmersiveImageApiClient = require('cloudmersive-image-api-client');
var defaultClient = CloudmersiveImageApiClient.ApiClient.instance;

// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new CloudmersiveImageApiClient.FilterApi();

var imageFile = "/path/to/file.txt"; // File | Image file to perform the operation on.  Common file formats such as PNG, JPEG are supported.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.filterDespeckle(imageFile, callback);
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

<a name="filterEdgeDetect"></a>
# **filterEdgeDetect**
> &#39;Blob&#39; filterEdgeDetect(radius, imageFile)

Detect and highlight edges in an image

Perform an edge detection operation on the input image

### Example
```javascript
var CloudmersiveImageApiClient = require('cloudmersive-image-api-client');
var defaultClient = CloudmersiveImageApiClient.ApiClient.instance;

// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new CloudmersiveImageApiClient.FilterApi();

var radius = 56; // Number | Radius in pixels of the edge detection operation; a larger radius will produce a greater effect

var imageFile = "/path/to/file.txt"; // File | Image file to perform the operation on.  Common file formats such as PNG, JPEG are supported.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.filterEdgeDetect(radius, imageFile, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **radius** | **Number**| Radius in pixels of the edge detection operation; a larger radius will produce a greater effect | 
 **imageFile** | **File**| Image file to perform the operation on.  Common file formats such as PNG, JPEG are supported. | 

### Return type

**&#39;Blob&#39;**

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/octet-stream

<a name="filterEmboss"></a>
# **filterEmboss**
> &#39;Blob&#39; filterEmboss(radius, sigma, imageFile)

Emboss an image

Perform an emboss operation on the input image

### Example
```javascript
var CloudmersiveImageApiClient = require('cloudmersive-image-api-client');
var defaultClient = CloudmersiveImageApiClient.ApiClient.instance;

// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new CloudmersiveImageApiClient.FilterApi();

var radius = 56; // Number | Radius in pixels of the emboss operation; a larger radius will produce a greater effect

var sigma = 56; // Number | Sigma, or variance, of the emboss operation

var imageFile = "/path/to/file.txt"; // File | Image file to perform the operation on.  Common file formats such as PNG, JPEG are supported.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.filterEmboss(radius, sigma, imageFile, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **radius** | **Number**| Radius in pixels of the emboss operation; a larger radius will produce a greater effect | 
 **sigma** | **Number**| Sigma, or variance, of the emboss operation | 
 **imageFile** | **File**| Image file to perform the operation on.  Common file formats such as PNG, JPEG are supported. | 

### Return type

**&#39;Blob&#39;**

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/octet-stream

<a name="filterGaussianBlur"></a>
# **filterGaussianBlur**
> &#39;Blob&#39; filterGaussianBlur(radius, sigma, imageFile)

Perform a guassian blur on the input image

Perform a gaussian blur on the input image

### Example
```javascript
var CloudmersiveImageApiClient = require('cloudmersive-image-api-client');
var defaultClient = CloudmersiveImageApiClient.ApiClient.instance;

// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new CloudmersiveImageApiClient.FilterApi();

var radius = 56; // Number | Radius in pixels of the blur operation; a larger radius will produce a greater blur effect

var sigma = 56; // Number | Sigma, or variance, of the gaussian blur operation

var imageFile = "/path/to/file.txt"; // File | Image file to perform the operation on.  Common file formats such as PNG, JPEG are supported.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.filterGaussianBlur(radius, sigma, imageFile, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **radius** | **Number**| Radius in pixels of the blur operation; a larger radius will produce a greater blur effect | 
 **sigma** | **Number**| Sigma, or variance, of the gaussian blur operation | 
 **imageFile** | **File**| Image file to perform the operation on.  Common file formats such as PNG, JPEG are supported. | 

### Return type

**&#39;Blob&#39;**

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/octet-stream

<a name="filterMotionBlur"></a>
# **filterMotionBlur**
> &#39;Blob&#39; filterMotionBlur(radius, sigma, angle, imageFile)

Perform a motion blur on the input image

Perform a motion blur on the input image at a specific angle

### Example
```javascript
var CloudmersiveImageApiClient = require('cloudmersive-image-api-client');
var defaultClient = CloudmersiveImageApiClient.ApiClient.instance;

// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new CloudmersiveImageApiClient.FilterApi();

var radius = 56; // Number | Radius in pixels of the blur operation; a larger radius will produce a greater blur effect

var sigma = 56; // Number | Sigma, or variance, of the motion blur operation

var angle = 56; // Number | Angle of the motion blur in degrees

var imageFile = "/path/to/file.txt"; // File | Image file to perform the operation on.  Common file formats such as PNG, JPEG are supported.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.filterMotionBlur(radius, sigma, angle, imageFile, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **radius** | **Number**| Radius in pixels of the blur operation; a larger radius will produce a greater blur effect | 
 **sigma** | **Number**| Sigma, or variance, of the motion blur operation | 
 **angle** | **Number**| Angle of the motion blur in degrees | 
 **imageFile** | **File**| Image file to perform the operation on.  Common file formats such as PNG, JPEG are supported. | 

### Return type

**&#39;Blob&#39;**

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/octet-stream

<a name="filterPosterize"></a>
# **filterPosterize**
> &#39;Blob&#39; filterPosterize(levels, imageFile)

Posterize the image by reducing distinct colors

Reduce the unique number of colors in the image to the specified level

### Example
```javascript
var CloudmersiveImageApiClient = require('cloudmersive-image-api-client');
var defaultClient = CloudmersiveImageApiClient.ApiClient.instance;

// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new CloudmersiveImageApiClient.FilterApi();

var levels = 56; // Number | Number of unique colors to retain in the output image

var imageFile = "/path/to/file.txt"; // File | Image file to perform the operation on.  Common file formats such as PNG, JPEG are supported.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.filterPosterize(levels, imageFile, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **levels** | **Number**| Number of unique colors to retain in the output image | 
 **imageFile** | **File**| Image file to perform the operation on.  Common file formats such as PNG, JPEG are supported. | 

### Return type

**&#39;Blob&#39;**

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/octet-stream

<a name="filterSwirl"></a>
# **filterSwirl**
> &#39;Blob&#39; filterSwirl(degrees, imageFile)

Swirl distort the image

Swirl distort the image by the specified number of degrees

### Example
```javascript
var CloudmersiveImageApiClient = require('cloudmersive-image-api-client');
var defaultClient = CloudmersiveImageApiClient.ApiClient.instance;

// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new CloudmersiveImageApiClient.FilterApi();

var degrees = 56; // Number | Degrees of swirl

var imageFile = "/path/to/file.txt"; // File | Image file to perform the operation on.  Common file formats such as PNG, JPEG are supported.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.filterSwirl(degrees, imageFile, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **degrees** | **Number**| Degrees of swirl | 
 **imageFile** | **File**| Image file to perform the operation on.  Common file formats such as PNG, JPEG are supported. | 

### Return type

**&#39;Blob&#39;**

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/octet-stream

