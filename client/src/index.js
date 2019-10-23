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

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/AgeDetectionResult', 'model/ColorResult', 'model/DetectedLicensePlate', 'model/DetectedObject', 'model/DominantColorResult', 'model/DrawPolygonInstance', 'model/DrawPolygonRequest', 'model/DrawRectangleInstance', 'model/DrawRectangleRequest', 'model/DrawTextInstance', 'model/DrawTextRequest', 'model/Face', 'model/FaceCompareResponse', 'model/FaceLocateResponse', 'model/FaceLocateWithLandmarksResponse', 'model/FaceMatch', 'model/FacePoint', 'model/FaceWithLandmarks', 'model/FineTextDetectionResult', 'model/FineTextItem', 'model/GenderDetectionResult', 'model/ImageDescriptionResponse', 'model/NsfwResult', 'model/ObjectDetectionResult', 'model/PersonWithAge', 'model/PersonWithGender', 'model/PolygonPoint', 'model/RecognitionOutcome', 'model/TextDetectionResult', 'model/TextItem', 'model/VehicleLicensePlateDetectionResult', 'api/ArtisticApi', 'api/EditApi', 'api/FaceApi', 'api/InfoApi', 'api/NsfwApi', 'api/RecognizeApi', 'api/ResizeApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/AgeDetectionResult'), require('./model/ColorResult'), require('./model/DetectedLicensePlate'), require('./model/DetectedObject'), require('./model/DominantColorResult'), require('./model/DrawPolygonInstance'), require('./model/DrawPolygonRequest'), require('./model/DrawRectangleInstance'), require('./model/DrawRectangleRequest'), require('./model/DrawTextInstance'), require('./model/DrawTextRequest'), require('./model/Face'), require('./model/FaceCompareResponse'), require('./model/FaceLocateResponse'), require('./model/FaceLocateWithLandmarksResponse'), require('./model/FaceMatch'), require('./model/FacePoint'), require('./model/FaceWithLandmarks'), require('./model/FineTextDetectionResult'), require('./model/FineTextItem'), require('./model/GenderDetectionResult'), require('./model/ImageDescriptionResponse'), require('./model/NsfwResult'), require('./model/ObjectDetectionResult'), require('./model/PersonWithAge'), require('./model/PersonWithGender'), require('./model/PolygonPoint'), require('./model/RecognitionOutcome'), require('./model/TextDetectionResult'), require('./model/TextItem'), require('./model/VehicleLicensePlateDetectionResult'), require('./api/ArtisticApi'), require('./api/EditApi'), require('./api/FaceApi'), require('./api/InfoApi'), require('./api/NsfwApi'), require('./api/RecognizeApi'), require('./api/ResizeApi'));
  }
}(function(ApiClient, AgeDetectionResult, ColorResult, DetectedLicensePlate, DetectedObject, DominantColorResult, DrawPolygonInstance, DrawPolygonRequest, DrawRectangleInstance, DrawRectangleRequest, DrawTextInstance, DrawTextRequest, Face, FaceCompareResponse, FaceLocateResponse, FaceLocateWithLandmarksResponse, FaceMatch, FacePoint, FaceWithLandmarks, FineTextDetectionResult, FineTextItem, GenderDetectionResult, ImageDescriptionResponse, NsfwResult, ObjectDetectionResult, PersonWithAge, PersonWithGender, PolygonPoint, RecognitionOutcome, TextDetectionResult, TextItem, VehicleLicensePlateDetectionResult, ArtisticApi, EditApi, FaceApi, InfoApi, NsfwApi, RecognizeApi, ResizeApi) {
  'use strict';

  /**
   * Image_Recognition_and_Processing_APIs_let_you_use_Machine_Learning_to_recognize_and_process_images_and_also_perform_useful_image_modification_operations_.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var CloudmersiveImageApiClient = require('index'); // See note below*.
   * var xxxSvc = new CloudmersiveImageApiClient.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new CloudmersiveImageApiClient.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new CloudmersiveImageApiClient.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new CloudmersiveImageApiClient.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 1.2.4
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The AgeDetectionResult model constructor.
     * @property {module:model/AgeDetectionResult}
     */
    AgeDetectionResult: AgeDetectionResult,
    /**
     * The ColorResult model constructor.
     * @property {module:model/ColorResult}
     */
    ColorResult: ColorResult,
    /**
     * The DetectedLicensePlate model constructor.
     * @property {module:model/DetectedLicensePlate}
     */
    DetectedLicensePlate: DetectedLicensePlate,
    /**
     * The DetectedObject model constructor.
     * @property {module:model/DetectedObject}
     */
    DetectedObject: DetectedObject,
    /**
     * The DominantColorResult model constructor.
     * @property {module:model/DominantColorResult}
     */
    DominantColorResult: DominantColorResult,
    /**
     * The DrawPolygonInstance model constructor.
     * @property {module:model/DrawPolygonInstance}
     */
    DrawPolygonInstance: DrawPolygonInstance,
    /**
     * The DrawPolygonRequest model constructor.
     * @property {module:model/DrawPolygonRequest}
     */
    DrawPolygonRequest: DrawPolygonRequest,
    /**
     * The DrawRectangleInstance model constructor.
     * @property {module:model/DrawRectangleInstance}
     */
    DrawRectangleInstance: DrawRectangleInstance,
    /**
     * The DrawRectangleRequest model constructor.
     * @property {module:model/DrawRectangleRequest}
     */
    DrawRectangleRequest: DrawRectangleRequest,
    /**
     * The DrawTextInstance model constructor.
     * @property {module:model/DrawTextInstance}
     */
    DrawTextInstance: DrawTextInstance,
    /**
     * The DrawTextRequest model constructor.
     * @property {module:model/DrawTextRequest}
     */
    DrawTextRequest: DrawTextRequest,
    /**
     * The Face model constructor.
     * @property {module:model/Face}
     */
    Face: Face,
    /**
     * The FaceCompareResponse model constructor.
     * @property {module:model/FaceCompareResponse}
     */
    FaceCompareResponse: FaceCompareResponse,
    /**
     * The FaceLocateResponse model constructor.
     * @property {module:model/FaceLocateResponse}
     */
    FaceLocateResponse: FaceLocateResponse,
    /**
     * The FaceLocateWithLandmarksResponse model constructor.
     * @property {module:model/FaceLocateWithLandmarksResponse}
     */
    FaceLocateWithLandmarksResponse: FaceLocateWithLandmarksResponse,
    /**
     * The FaceMatch model constructor.
     * @property {module:model/FaceMatch}
     */
    FaceMatch: FaceMatch,
    /**
     * The FacePoint model constructor.
     * @property {module:model/FacePoint}
     */
    FacePoint: FacePoint,
    /**
     * The FaceWithLandmarks model constructor.
     * @property {module:model/FaceWithLandmarks}
     */
    FaceWithLandmarks: FaceWithLandmarks,
    /**
     * The FineTextDetectionResult model constructor.
     * @property {module:model/FineTextDetectionResult}
     */
    FineTextDetectionResult: FineTextDetectionResult,
    /**
     * The FineTextItem model constructor.
     * @property {module:model/FineTextItem}
     */
    FineTextItem: FineTextItem,
    /**
     * The GenderDetectionResult model constructor.
     * @property {module:model/GenderDetectionResult}
     */
    GenderDetectionResult: GenderDetectionResult,
    /**
     * The ImageDescriptionResponse model constructor.
     * @property {module:model/ImageDescriptionResponse}
     */
    ImageDescriptionResponse: ImageDescriptionResponse,
    /**
     * The NsfwResult model constructor.
     * @property {module:model/NsfwResult}
     */
    NsfwResult: NsfwResult,
    /**
     * The ObjectDetectionResult model constructor.
     * @property {module:model/ObjectDetectionResult}
     */
    ObjectDetectionResult: ObjectDetectionResult,
    /**
     * The PersonWithAge model constructor.
     * @property {module:model/PersonWithAge}
     */
    PersonWithAge: PersonWithAge,
    /**
     * The PersonWithGender model constructor.
     * @property {module:model/PersonWithGender}
     */
    PersonWithGender: PersonWithGender,
    /**
     * The PolygonPoint model constructor.
     * @property {module:model/PolygonPoint}
     */
    PolygonPoint: PolygonPoint,
    /**
     * The RecognitionOutcome model constructor.
     * @property {module:model/RecognitionOutcome}
     */
    RecognitionOutcome: RecognitionOutcome,
    /**
     * The TextDetectionResult model constructor.
     * @property {module:model/TextDetectionResult}
     */
    TextDetectionResult: TextDetectionResult,
    /**
     * The TextItem model constructor.
     * @property {module:model/TextItem}
     */
    TextItem: TextItem,
    /**
     * The VehicleLicensePlateDetectionResult model constructor.
     * @property {module:model/VehicleLicensePlateDetectionResult}
     */
    VehicleLicensePlateDetectionResult: VehicleLicensePlateDetectionResult,
    /**
     * The ArtisticApi service constructor.
     * @property {module:api/ArtisticApi}
     */
    ArtisticApi: ArtisticApi,
    /**
     * The EditApi service constructor.
     * @property {module:api/EditApi}
     */
    EditApi: EditApi,
    /**
     * The FaceApi service constructor.
     * @property {module:api/FaceApi}
     */
    FaceApi: FaceApi,
    /**
     * The InfoApi service constructor.
     * @property {module:api/InfoApi}
     */
    InfoApi: InfoApi,
    /**
     * The NsfwApi service constructor.
     * @property {module:api/NsfwApi}
     */
    NsfwApi: NsfwApi,
    /**
     * The RecognizeApi service constructor.
     * @property {module:api/RecognizeApi}
     */
    RecognizeApi: RecognizeApi,
    /**
     * The ResizeApi service constructor.
     * @property {module:api/ResizeApi}
     */
    ResizeApi: ResizeApi
  };

  return exports;
}));
