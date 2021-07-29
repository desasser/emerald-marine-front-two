import React from 'react';
import { WidgetLoader, Widget } from 'react-cloudinary-upload-widget'
import store from '../../utils/store';

const UploadWidget = ({ successCallback, failureCallback }) => {

  return (
    <div>
      <WidgetLoader />
      <Widget
        sources={'local'}
        resourceType={'image'}
        uploadPreset={'txcgfxda'}
        cloudName={'dccnlakey'}
        buttonText={'UPLOAD PHOTO'}
        style={{ 
          backgroundColor: '#f5ed5e', 
          margin: '5px', 
          boxShadow: '1px 1px 1px 1px rgba(0, 0, 0, .3)', 
          border: 'none',
          fontSize: '1rem',
          fontFamily: 'Roboto',
          fontWeight: '500',
          padding: '15px',
          borderRadius: '4px'
        }}
        folder={'Emerald Marine Images'}
        use_filename={true}
        onSuccess={successCallback}
        onFailure={failureCallback}
      />
    </div>
  )
}

export default UploadWidget;