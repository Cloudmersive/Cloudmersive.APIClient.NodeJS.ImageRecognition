# CloudmersiveImageApiClient.DrawRectangleRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**baseImageBytes** | **Blob** | Image to draw rectangles on, in bytes.  You can also use the BaseImageUrl instead to supply image input as a URL | [optional] 
**baseImageUrl** | **String** | Image to draw rectangles on, as an HTTP or HTTPS fully-qualified URL | [optional] 
**rectanglesToDraw** | [**[DrawRectangleInstance]**](DrawRectangleInstance.md) | Rectangles to draw on the image.  Rectangles are drawn in index order. | [optional] 


