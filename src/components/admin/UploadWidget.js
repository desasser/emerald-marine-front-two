import React from 'react';
import { WidgetLoader, Widget } from 'react-cloudinary-upload-widget'
import store from '../../utils/store';

const UploadWidget = () => {
    const successCallback = result => {
        console.log(result.info.url)
        store.dispatch({
            type: 'FETCH_IMAGE_URL',
            payload: {
                url: result.info.url
            }
        });
    }

    const failureCallback = response => {
        console.log(response)
    }

    return (
        <div>
            <WidgetLoader/>
            <Widget
            sources={'local'}
            resourceType={'image'}
            uploadPreset={'txcgfxda'}
            cloudName={'dccnlakey'}
            buttonText={'Upload Photo'}
            style={{
                color: 'white',
                border: 'none',
                width: '120px',
                backgroundColor: 'green',
                borderRadius: '4px',
                height: '25px'
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