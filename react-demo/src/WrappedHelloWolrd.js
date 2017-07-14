import React from 'react';
import { LazilyLoadFactory } from './LazilyLoad';

function WrappedHelloWolrd({HelloWolrd}) {
    return <HelloWolrd />
}

export default LazilyLoadFactory(WrappedHelloWolrd, {
    HelloWolrd: () => import(/* webpackChunkName: "helloworld" */'./HelloWorld')
})
