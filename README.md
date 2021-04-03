# cloudmersive-image-api-client

CloudmersiveImageApiClient - JavaScript client for cloudmersive-image-api-client
Image Recognition and Processing APIs let you use Machine Learning to recognize and process images, and also perform useful image modification operations.
[Cloudmersive Image Recognition and Computer Vision API](https://www.cloudmersive.com/image-recognition-and-processing-api) provides advanced computer vision and image recognition capabilities.

- API version: v1
- Package version: 1.3.5


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
*CloudmersiveImageApiClient.ConvertApi* | [**convertToBmp**](docs/ConvertApi.md#convertToBmp) | **POST** /image/convert/to/bmp | Convert input image to Bitmap BMP format
*CloudmersiveImageApiClient.ConvertApi* | [**convertToGif**](docs/ConvertApi.md#convertToGif) | **POST** /image/convert/to/gif | Convert input image to GIF format
*CloudmersiveImageApiClient.ConvertApi* | [**convertToJpg**](docs/ConvertApi.md#convertToJpg) | **POST** /image/convert/to/jpg/{quality} | Convert input image to JPG, JPEG format
*CloudmersiveImageApiClient.ConvertApi* | [**convertToPhotoshop**](docs/ConvertApi.md#convertToPhotoshop) | **POST** /image/convert/to/psd | Convert input image to Photoshop PSD format
*CloudmersiveImageApiClient.ConvertApi* | [**convertToPng**](docs/ConvertApi.md#convertToPng) | **POST** /image/convert/to/png | Convert input image to PNG format
*CloudmersiveImageApiClient.ConvertApi* | [**convertToTiff**](docs/ConvertApi.md#convertToTiff) | **POST** /image/convert/to/tiff | Convert input image to TIFF format
*CloudmersiveImageApiClient.ConvertApi* | [**convertToWebP**](docs/ConvertApi.md#convertToWebP) | **POST** /image/convert/to/webp | Convert input image to WebP format
*CloudmersiveImageApiClient.EditApi* | [**editAutoOrient**](docs/EditApi.md#editAutoOrient) | **POST** /image/edit/auto-orient/remove-exif | Normalizes image rotation and removes EXIF rotation data
*CloudmersiveImageApiClient.EditApi* | [**editCompositeBasic**](docs/EditApi.md#editCompositeBasic) | **POST** /image/edit/composite/{location} | Composite two images together
*CloudmersiveImageApiClient.EditApi* | [**editCompositePrecise**](docs/EditApi.md#editCompositePrecise) | **POST** /image/edit/composite/precise | Composite two images together precisely
*CloudmersiveImageApiClient.EditApi* | [**editContrastAdaptive**](docs/EditApi.md#editContrastAdaptive) | **POST** /image/edit/contrast/{gamma}/adaptive | Adaptively adjust the contrast of the image to be more appealing and easy to see
*CloudmersiveImageApiClient.EditApi* | [**editCropCircle**](docs/EditApi.md#editCropCircle) | **POST** /image/edit/crop/circle/{left}/{top}/{radius} | Crop an image to an circular area
*CloudmersiveImageApiClient.EditApi* | [**editCropRectangle**](docs/EditApi.md#editCropRectangle) | **POST** /image/edit/crop/rectangle/{left}/{top}/{width}/{height} | Crop an image to a rectangular area
*CloudmersiveImageApiClient.EditApi* | [**editDrawPolygon**](docs/EditApi.md#editDrawPolygon) | **POST** /image/edit/draw/polygon | Draw a polygon onto an image
*CloudmersiveImageApiClient.EditApi* | [**editDrawRectangle**](docs/EditApi.md#editDrawRectangle) | **POST** /image/edit/draw/rectangle | Draw a rectangle onto an image
*CloudmersiveImageApiClient.EditApi* | [**editDrawText**](docs/EditApi.md#editDrawText) | **POST** /image/edit/draw/text | Draw text onto an image
*CloudmersiveImageApiClient.EditApi* | [**editDropShadow**](docs/EditApi.md#editDropShadow) | **POST** /image/edit/drop-shadow/{X}/{Y}/{sigma}/{opacity} | Add a customizeable drop shadow to an image
*CloudmersiveImageApiClient.EditApi* | [**editInvert**](docs/EditApi.md#editInvert) | **POST** /image/edit/invert | Invert, negate the colors in the image
*CloudmersiveImageApiClient.EditApi* | [**editRemoveExifData**](docs/EditApi.md#editRemoveExifData) | **POST** /image/edit/remove-exif | Remove EXIF data from the image
*CloudmersiveImageApiClient.EditApi* | [**editRemoveTransparency**](docs/EditApi.md#editRemoveTransparency) | **POST** /image/edit/remove-transparency | Remove transparency from the image
*CloudmersiveImageApiClient.EditApi* | [**editRotate**](docs/EditApi.md#editRotate) | **POST** /image/edit/rotate/{degrees}/angle | Rotate an image any number of degrees
*CloudmersiveImageApiClient.FaceApi* | [**faceCompare**](docs/FaceApi.md#faceCompare) | **POST** /image/face/compare-and-match | Compare and match faces
*CloudmersiveImageApiClient.FaceApi* | [**faceCropFirst**](docs/FaceApi.md#faceCropFirst) | **POST** /image/face/crop/first | Crop image to face with square crop
*CloudmersiveImageApiClient.FaceApi* | [**faceCropFirstRound**](docs/FaceApi.md#faceCropFirstRound) | **POST** /image/face/crop/first/round | Crop image to face with round crop
*CloudmersiveImageApiClient.FaceApi* | [**faceDetectAge**](docs/FaceApi.md#faceDetectAge) | **POST** /image/face/detect-age | Detect the age of people in an image
*CloudmersiveImageApiClient.FaceApi* | [**faceDetectGender**](docs/FaceApi.md#faceDetectGender) | **POST** /image/face/detect-gender | Detect the gender of people in an image
*CloudmersiveImageApiClient.FaceApi* | [**faceLocate**](docs/FaceApi.md#faceLocate) | **POST** /image/face/locate | Detect and find faces in an image
*CloudmersiveImageApiClient.FaceApi* | [**faceLocateWithLandmarks**](docs/FaceApi.md#faceLocateWithLandmarks) | **POST** /image/face/locate-with-landmarks | Detect and find faces and landmarks eyes and nose and mouth in image
*CloudmersiveImageApiClient.FilterApi* | [**filterBlackAndWhite**](docs/FilterApi.md#filterBlackAndWhite) | **POST** /image/filter/black-and-white | Convert image to black-and-white grayscale
*CloudmersiveImageApiClient.FilterApi* | [**filterDespeckle**](docs/FilterApi.md#filterDespeckle) | **POST** /image/filter/despeckle | Despeckle to remove point noise from the image
*CloudmersiveImageApiClient.FilterApi* | [**filterEdgeDetect**](docs/FilterApi.md#filterEdgeDetect) | **POST** /image/filter/edge-detect/{radius} | Detect and highlight edges in an image
*CloudmersiveImageApiClient.FilterApi* | [**filterEmboss**](docs/FilterApi.md#filterEmboss) | **POST** /image/filter/emboss/{radius}/{sigma} | Emboss an image
*CloudmersiveImageApiClient.FilterApi* | [**filterGaussianBlur**](docs/FilterApi.md#filterGaussianBlur) | **POST** /image/filter/blur/guassian/{radius}/{sigma} | Perform a guassian blur on the input image
*CloudmersiveImageApiClient.FilterApi* | [**filterMotionBlur**](docs/FilterApi.md#filterMotionBlur) | **POST** /image/filter/blur/motion/{radius}/{sigma}/{angle} | Perform a motion blur on the input image
*CloudmersiveImageApiClient.FilterApi* | [**filterPosterize**](docs/FilterApi.md#filterPosterize) | **POST** /image/filter/posterize | Posterize the image by reducing distinct colors
*CloudmersiveImageApiClient.FilterApi* | [**filterSwirl**](docs/FilterApi.md#filterSwirl) | **POST** /image/filter/swirl | Swirl distort the image
*CloudmersiveImageApiClient.InfoApi* | [**infoGetDominantColor**](docs/InfoApi.md#infoGetDominantColor) | **POST** /image/get-info/dominant-color | Returns the dominant colors of the image
*CloudmersiveImageApiClient.InfoApi* | [**infoGetMetadata**](docs/InfoApi.md#infoGetMetadata) | **POST** /image/get-info/metadata | Returns the image metadata including EXIF and resolution
*CloudmersiveImageApiClient.NsfwApi* | [**nsfwClassify**](docs/NsfwApi.md#nsfwClassify) | **POST** /image/nsfw/classify | Not safe for work NSFW racy content classification
*CloudmersiveImageApiClient.RecognizeApi* | [**recognizeDescribe**](docs/RecognizeApi.md#recognizeDescribe) | **POST** /image/recognize/describe | Describe an image in natural language
*CloudmersiveImageApiClient.RecognizeApi* | [**recognizeDetectAndUnskewDocument**](docs/RecognizeApi.md#recognizeDetectAndUnskewDocument) | **POST** /image/recognize/detect-document/unskew | Detect and unskew a photo of a document
*CloudmersiveImageApiClient.RecognizeApi* | [**recognizeDetectObjects**](docs/RecognizeApi.md#recognizeDetectObjects) | **POST** /image/recognize/detect-objects | Detect objects including types and locations in an image
*CloudmersiveImageApiClient.RecognizeApi* | [**recognizeDetectPeople**](docs/RecognizeApi.md#recognizeDetectPeople) | **POST** /image/recognize/detect-people | Detect people including locations in an image
*CloudmersiveImageApiClient.RecognizeApi* | [**recognizeDetectTextFine**](docs/RecognizeApi.md#recognizeDetectTextFine) | **POST** /image/recognize/detect-text/fine | Detect fine text in a photo of a document
*CloudmersiveImageApiClient.RecognizeApi* | [**recognizeDetectTextLarge**](docs/RecognizeApi.md#recognizeDetectTextLarge) | **POST** /image/recognize/detect-text/large | Detect large text in a photo
*CloudmersiveImageApiClient.RecognizeApi* | [**recognizeDetectVehicleLicensePlates**](docs/RecognizeApi.md#recognizeDetectVehicleLicensePlates) | **POST** /image/recognize/detect-vehicle-license-plates | Detect vehicle license plates in an image
*CloudmersiveImageApiClient.RecognizeApi* | [**recognizeFindSymbol**](docs/RecognizeApi.md#recognizeFindSymbol) | **POST** /image/recognize/find/symbol | Find the location of a symbol in an image
*CloudmersiveImageApiClient.RecognizeApi* | [**recognizeSimilarityCompare**](docs/RecognizeApi.md#recognizeSimilarityCompare) | **POST** /image/recognize/similarity/compare | Compare two images for similarity
*CloudmersiveImageApiClient.RecognizeApi* | [**recognizeSimilarityHash**](docs/RecognizeApi.md#recognizeSimilarityHash) | **POST** /image/recognize/similarity/hash | Generate a perceptual image hash
*CloudmersiveImageApiClient.RecognizeApi* | [**recognizeSimilarityHashDistance**](docs/RecognizeApi.md#recognizeSimilarityHashDistance) | **POST** /image/recognize/similarity/hash/distance | Calculates the similarity between two perceptual image hashes
*CloudmersiveImageApiClient.ResizeApi* | [**resizePost**](docs/ResizeApi.md#resizePost) | **POST** /image/resize/preserveAspectRatio/{maxWidth}/{maxHeight} | Resize an image while preserving aspect ratio
*CloudmersiveImageApiClient.ResizeApi* | [**resizeResizeSimple**](docs/ResizeApi.md#resizeResizeSimple) | **POST** /image/resize/target/{width}/{height} | Resize an image
*CloudmersiveImageApiClient.TextGenerationApi* | [**textGenerationCreateHandwritingPng**](docs/TextGenerationApi.md#textGenerationCreateHandwritingPng) | **POST** /image/text/create/handwriting/png | Create an image of handwriting in PNG format


## Documentation for Models

 - [CloudmersiveImageApiClient.AgeDetectionResult](docs/AgeDetectionResult.md)
 - [CloudmersiveImageApiClient.ColorResult](docs/ColorResult.md)
 - [CloudmersiveImageApiClient.CreateHandwritingRequest](docs/CreateHandwritingRequest.md)
 - [CloudmersiveImageApiClient.DetectedLicensePlate](docs/DetectedLicensePlate.md)
 - [CloudmersiveImageApiClient.DetectedObject](docs/DetectedObject.md)
 - [CloudmersiveImageApiClient.DominantColorResult](docs/DominantColorResult.md)
 - [CloudmersiveImageApiClient.DrawPolygonInstance](docs/DrawPolygonInstance.md)
 - [CloudmersiveImageApiClient.DrawPolygonRequest](docs/DrawPolygonRequest.md)
 - [CloudmersiveImageApiClient.DrawRectangleInstance](docs/DrawRectangleInstance.md)
 - [CloudmersiveImageApiClient.DrawRectangleRequest](docs/DrawRectangleRequest.md)
 - [CloudmersiveImageApiClient.DrawTextInstance](docs/DrawTextInstance.md)
 - [CloudmersiveImageApiClient.DrawTextRequest](docs/DrawTextRequest.md)
 - [CloudmersiveImageApiClient.Face](docs/Face.md)
 - [CloudmersiveImageApiClient.FaceCompareResponse](docs/FaceCompareResponse.md)
 - [CloudmersiveImageApiClient.FaceLocateResponse](docs/FaceLocateResponse.md)
 - [CloudmersiveImageApiClient.FaceLocateWithLandmarksResponse](docs/FaceLocateWithLandmarksResponse.md)
 - [CloudmersiveImageApiClient.FaceMatch](docs/FaceMatch.md)
 - [CloudmersiveImageApiClient.FacePoint](docs/FacePoint.md)
 - [CloudmersiveImageApiClient.FaceWithLandmarks](docs/FaceWithLandmarks.md)
 - [CloudmersiveImageApiClient.FindSymbolResult](docs/FindSymbolResult.md)
 - [CloudmersiveImageApiClient.FineTextDetectionResult](docs/FineTextDetectionResult.md)
 - [CloudmersiveImageApiClient.FineTextItem](docs/FineTextItem.md)
 - [CloudmersiveImageApiClient.GenderDetectionResult](docs/GenderDetectionResult.md)
 - [CloudmersiveImageApiClient.ImageDescriptionResponse](docs/ImageDescriptionResponse.md)
 - [CloudmersiveImageApiClient.ImageMetadata](docs/ImageMetadata.md)
 - [CloudmersiveImageApiClient.ImageMetadataExifValue](docs/ImageMetadataExifValue.md)
 - [CloudmersiveImageApiClient.ImageSimilarityComparisonResponse](docs/ImageSimilarityComparisonResponse.md)
 - [CloudmersiveImageApiClient.ImageSimilarityHashDistanceRequest](docs/ImageSimilarityHashDistanceRequest.md)
 - [CloudmersiveImageApiClient.ImageSimilarityHashDistanceResponse](docs/ImageSimilarityHashDistanceResponse.md)
 - [CloudmersiveImageApiClient.ImageSimilarityHashResponse](docs/ImageSimilarityHashResponse.md)
 - [CloudmersiveImageApiClient.NsfwResult](docs/NsfwResult.md)
 - [CloudmersiveImageApiClient.ObjectDetectionResult](docs/ObjectDetectionResult.md)
 - [CloudmersiveImageApiClient.PersonWithAge](docs/PersonWithAge.md)
 - [CloudmersiveImageApiClient.PersonWithGender](docs/PersonWithGender.md)
 - [CloudmersiveImageApiClient.PolygonPoint](docs/PolygonPoint.md)
 - [CloudmersiveImageApiClient.RecognitionOutcome](docs/RecognitionOutcome.md)
 - [CloudmersiveImageApiClient.TextDetectionResult](docs/TextDetectionResult.md)
 - [CloudmersiveImageApiClient.TextItem](docs/TextItem.md)
 - [CloudmersiveImageApiClient.VehicleLicensePlateDetectionResult](docs/VehicleLicensePlateDetectionResult.md)


## Documentation for Authorization


### Apikey

- **Type**: API key
- **API key parameter name**: Apikey
- **Location**: HTTP header

