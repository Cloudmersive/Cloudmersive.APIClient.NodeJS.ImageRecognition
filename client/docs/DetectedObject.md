# CloudmersiveImageApiClient.DetectedObject

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**objectClassName** | **String** | Class of the object.  Example values are \&quot;person\&quot;, \&quot;car\&quot;, \&quot;dining table\&quot;, etc. | [optional] 
**height** | **Number** | Height, in pixels, of the object | [optional] 
**width** | **Number** | Width, in pixels, of the object | [optional] 
**score** | **Number** | Confidence score of detected object; possible values are between 0.0 and 1.0; values closer to 1.0 are higher confidence | [optional] 
**X** | **Number** | X location, in pixels, of the left side location of the object, with the right side being X + Width | [optional] 
**Y** | **Number** | Y location, in pixels, of the top side location of the object, with the bottom side being Y + Height | [optional] 


