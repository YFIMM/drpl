import React from 'react';

export default class AdComponent extends React.Component {
    componentDidMount () {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
    }

    render () {
        return (
            <ins className='adsbygoogle'
                 style={{ display: 'block' }}
                 data-ad-client='ca-pub-7268777113992602'
                 data-ad-slot='4969624332'
                 data-ad-format='auto' />
        );
    }
}