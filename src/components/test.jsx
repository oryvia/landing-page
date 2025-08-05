import React from 'react';

function Test({  image, imageAlt = 'Service image', services = [] }) {
    return (
        <div className='flex   gap-6 max-w-3xl mx-auto'>
            {/* Image Section */}
            <div className="relative w-1/4 bg-cover bg-center overflow-hidden rounded-xl" style={{ backgroundImage: `url('${image}')` }} aria-label={imageAlt}>
                <span className="sr-only">{imageAlt}</span>
            </div>

            {/* Content Section */}
            <div className='space-y-4 flex-1'>
                {services.map((item, index) => (
                    <div key={index}>
                        <h3 className='para1'>• {item.title}</h3>
                        <p className='para3 whitespace-pre-line text-justify'>{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Test;
