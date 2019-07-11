# CloudmersiveImageApiClient.DrawPolygonRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**baseImageBytes** | **Blob** | Image to draw polygons on, in bytes.  You can also use the BaseImageUrl instead to supply image input as a URL | [optional] 
**baseImageUrl** | **String** | Image to draw polygons on, as an HTTP or HTTPS fully-qualified URL | [optional] 
**polygonsToDraw** | [**[DrawPolygonInstance]**](DrawPolygonInstance.md) | Polygons to draw on the image.  Polygons are drawn in index order. | [optional] 


