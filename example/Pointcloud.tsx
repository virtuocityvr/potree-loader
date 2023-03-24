import React, { useEffect, useState } from 'react'
import { PointCloudOctree, Potree } from '../src';
import { useFrame } from '@react-three/fiber';

export function Pointcloud() {

    const potree = new Potree()
    const [pco, setPco] = useState<PointCloudOctree>()

    useFrame(e => {
     if(pco) {
        potree.updatePointClouds([pco], e.camera, e.gl)
     }   
    })


    useEffect(() => {

        async function loadPc() {
            const pointcloud = await potree.loadPointCloud(
                'metadata.json',
                relativeUrl => `/example/downsampled_test_23-03-2023.las_converted/${relativeUrl}`
            )

            setPco(pointcloud)
        }

        loadPc()
    }, [])

    console.log(pco)

    return pco ? (
        <scene>
            <primitive object={pco} />
        </scene>
    ) : <></>
}