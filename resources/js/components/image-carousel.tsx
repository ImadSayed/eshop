import { useEffect } from 'react';

export default function ImageCarousel(props) {
    useEffect(() => {
        //create jQuery script element
        const jQueryScript = document.createElement('script');
        jQueryScript.src = 'https://code.jquery.com/jquery-3.7.1.min.js';
        jQueryScript.async = false;
        document.body.appendChild(jQueryScript);

        //wait for jQuery to load before loading custom script
        jQueryScript.onload = () => {
            //ensure jQuery is globally available
            window.jQuery = window.$ = window.jQuery || window.$;

            //creates custom script element
            const script = document.createElement('script');
            script.src = '/js/imageslider.js';
            script.async = false;
            document.body.appendChild(script);

            //cleanup both scripts on unmount
            return () => {
                if (document.body.contains(script)) {
                    document.body.removeChild(script);
                }
                if (document.body.contains(jQueryScript)) {
                    document.body.removeChild(jQueryScript);
                }
            };
        };

        //handle jQuery load errors
        jQueryScript.onerror = () => {
            console.error('Failed to load jQuery');
        };
    }, []);

    if (!props.images) {
        return false;
    }

    return (
        <div className="image-carousel">
            <div className="images-wrapper">
                {props.images.map((image, index) => {
                    if (image.imagePath === false) {
                        console.log('returning false');
                        return false;
                    }

                    const src = index < 2 ? image.imagePath : '';
                    const dataSrc = index >= 2 ? image.imagePath : '';
                    const alt = image['name'] ?? '';

                    return (
                        <div className="image-wrapper" key={image.id}>
                            <img src={src} data-src={dataSrc} alt={alt} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
