# CloudmersiveImageApiClient.ResizeApi

All URIs are relative to *https://api.cloudmersive.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**resizePost**](ResizeApi.md#resizePost) | **POST** /image/resize/preserveAspectRatio/{maxWidth}/{maxHeight} | Resize an image with parameters


<a name="resizePost"></a>
# **resizePost**
> &#39;Blob&#39; resizePost(maxWidth, maxHeight, imageFile)

Resize an image with parameters

Resize an image to a maximum width and maximum height, while preserving the image&#39;s original aspect ratio

### Example
```javascript
var CloudmersiveImageApiClient = require('cloudmersive-image-api-client');
var defaultClient = CloudmersiveImageApiClient.ApiClient.instance;

// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new CloudmersiveImageApiClient.ResizeApi();

var maxWidth = 56; // Number | Maximum width of the output image - final image will be as large as possible while less than or equial to this width

var maxHeight = 56; // Number | Maximum height of the output image - final image will be as large as possible while less than or equial to this height

var imageFile = "/path/to/file.txt"; // File | Image file to perform the operation on.  Common file formats such as PNG, JPEG are supported.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.resizePost(maxWidth, maxHeight, imageFile, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **maxWidth** | **Number**| Maximum width of the output image - final image will be as large as possible while less than or equial to this width | 
 **maxHeight** | **Number**| Maximum height of the output image - final image will be as large as possible while less than or equial to this height | 
 **imageFile** | **File**| Image file to perform the operation on.  Common file formats such as PNG, JPEG are supported. | 

### Return type

**&#39;Blob&#39;**

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: image/png

