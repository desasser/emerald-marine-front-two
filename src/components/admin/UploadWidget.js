import React from 'react';
import { WidgetLoader, Widget } from 'react-cloudinary-upload-widget'
import store from '../../utils/store';

const UploadWidget = ({successCallback, failureCallback}) => {

    return (
        <div>
            <WidgetLoader/>
            <Widget
            sources={'local'}
            resourceType={'image'}
            uploadPreset={'txcgfxda'}
            cloudName={'dccnlakey'}
            buttonText={'UPLOAD PHOTO'}
            style={{
                color: 'black',
                border: 'none',
                maxWidth: '60%',
                backgroundColor: '#e0e0e0',
                borderRadius: '4px',
                height: '30px',
                boxShadow: '0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)'
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