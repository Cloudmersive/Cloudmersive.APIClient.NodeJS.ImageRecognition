# cloudmersive-image-api-client

CloudmersiveImageApiClient - JavaScript client for cloudmersive-image-api-client
Image Recognition and Processing APIs let you use Machine Learning to recognize and process images, and also perform useful image modification operations.
[Cloudmersive Image Recognition and Computer Vision API](https://www.cloudmersive.com/image-recognition-and-processing-api) provides advanced computer vision and image recognition capabilities.

- API version: v1
- Package version: 1.1.4


## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install cloudmersive-image-api-client --save
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing 
into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

Finally, switch to the directory you want to use your cloudmersive-image-api-client from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

You should now be able to `require('cloudmersive-image-api-client')` in javascript files from the directory you ran the last 
command above from.

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file, that's to say your javascript file where you actually 
use this library):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var CloudmersiveImageApiClient = require('cloudmersive-image-api-client');

var defaultClient = CloudmersiveImageApiClient.ApiClient.instance;

// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix['Apikey'] = "Token"

var api = new CloudmersiveImageApiClient.ArtisticApi()

var style = "style_example"; // {String} The style of the painting to apply.  To start, try \"udnie\" a painting style.  Possible values are: \"udnie\", \"wave\", \"la_muse\", \"rain_princess\".

var imageFile = "/path/to/file.txt"; // {File} Image file to perform the operation on.  Common file formats such as PNG, JPEG are supported.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.artisticPainting(style, imageFile, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://api.cloudmersive.com*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*CloudmersiveImageApiClient.ArtisticApi* | [**artisticPainting**](docs/ArtisticApi.md#artisticPainting) | **POST** /image/artistic/painting/{style} | Transform an image into an artistic painting automatically
*CloudmersiveImageApiClient.EditApi* | [**editCompositeBasic**](docs/EditApi.md#editCompositeBasic) | **POST** /image/edit/composite/{location} | Composite two images together
*CloudmersiveImageApiClient.EditApi* | [**editDrawRectangle**](docs/EditApi.md#editDrawRectangle) | **POST** /image/edit/draw/rectangle | Draw rectangle onto an image
*CloudmersiveImageApiClient.EditApi* | [**editDrawText**](docs/EditApi.md#editDrawText) | **POST** /image/edit/draw/text | Draw text onto an image
*CloudmersiveImageApiClient.FaceApi* | [**faceCropFirst**](docs/FaceApi.md#faceCropFirst) | **POST** /image/face/crop/first | Crop image to face (square)
*CloudmersiveImageApiClient.FaceApi* | [**faceCropFirstRound**](docs/FaceApi.md#faceCropFirstRound) | **POST** /image/face/crop/first/round | Crop image to face (round)
*CloudmersiveImageApiClient.FaceApi* | [**faceDetectAge**](docs/FaceApi.md#faceDetectAge) | **POST** /image/face/detect-age | Detect the age of people in an image
*CloudmersiveImageApiClient.FaceApi* | [**faceLocate**](docs/FaceApi.md#faceLocate) | **POST** /image/face/locate | Find faces in an image
*CloudmersiveImageApiClient.NsfwApi* | [**nsfwClassify**](docs/NsfwApi.md#nsfwClassify) | **POST** /image/nsfw/classify | Not safe for work (NSFW) racy content classification
*CloudmersiveImageApiClient.RecognizeApi* | [**recognizeDescribe**](docs/RecognizeApi.md#recognizeDescribe) | **POST** /image/recognize/describe | Describe an image in natural language
*CloudmersiveImageApiClient.RecognizeApi* | [**recognizeDetectAndUnskewDocument**](docs/RecognizeApi.md#recognizeDetectAndUnskewDocument) | **POST** /image/recognize/detect-document/unskew | Detect and unskew a photo of a document
*CloudmersiveImageApiClient.RecognizeApi* | [**recognizeDetectObjects**](docs/RecognizeApi.md#recognizeDetectObjects) | **POST** /image/recognize/detect-objects | Detect objects, including types and locations, in an image
*CloudmersiveImageApiClient.RecognizeApi* | [**recognizeDetectPeople**](docs/RecognizeApi.md#recognizeDetectPeople) | **POST** /image/recognize/detect-people | Detect people, including locations, in an image
*CloudmersiveImageApiClient.RecognizeApi* | [**recognizeDetectVehicleLicensePlates**](docs/RecognizeApi.md#recognizeDetectVehicleLicensePlates) | **POST** /image/recognize/detect-vehicle-license-plates | Detect vehicle license plates in an image
*CloudmersiveImageApiClient.ResizeApi* | [**resizePost**](docs/ResizeApi.md#resizePost) | **POST** /image/resize/preserveAspectRatio/{maxWidth}/{maxHeight} | Resize an image with parameters


## Documentation for Models

 - [CloudmersiveImageApiClient.AgeDetectionResult](docs/AgeDetectionResult.md)
 - [CloudmersiveImageApiClient.DetectedLicensePlate](docs/DetectedLicensePlate.md)
 - [CloudmersiveImageApiClient.DetectedObject](docs/DetectedObject.md)
 - [CloudmersiveImageApiClient.DrawRectangleInstance](docs/DrawRectangleInstance.md)
 - [CloudmersiveImageApiClient.DrawRectangleRequest](docs/DrawRectangleRequest.md)
 - [CloudmersiveImageApiClient.DrawTextInstance](docs/DrawTextInstance.md)
 - [CloudmersiveImageApiClient.DrawTextRequest](docs/DrawTextRequest.md)
 - [CloudmersiveImageApiClient.Face](docs/Face.md)
 - [CloudmersiveImageApiClient.FaceLocateResponse](docs/FaceLocateResponse.md)
 - [CloudmersiveImageApiClient.ImageDescriptionResponse](docs/ImageDescriptionResponse.md)
 - [CloudmersiveImageApiClient.NsfwResult](docs/NsfwResult.md)
 - [CloudmersiveImageApiClient.ObjectDetectionResult](docs/ObjectDetectionResult.md)
 - [CloudmersiveImageApiClient.PersonWithAge](docs/PersonWithAge.md)
 - [CloudmersiveImageApiClient.RecognitionOutcome](docs/RecognitionOutcome.md)
 - [CloudmersiveImageApiClient.VehicleLicensePlateDetectionResult](docs/VehicleLicensePlateDetectionResult.md)


## Documentation for Authorization


### Apikey

- **Type**: API key
- **API key parameter name**: Apikey
- **Location**: HTTP header

