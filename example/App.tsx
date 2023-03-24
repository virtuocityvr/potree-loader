
import React, { useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, OrthographicCamera } from '@react-three/drei'
import './main.css'
import { PointCloudOctree, Potree } from '../src';
import { Pointcloud } from './Pointcloud';

export function App() {

    return (
        <div className="App">
            <Canvas>
                <ambientLight />
                <OrbitControls />
                <OrthographicCamera
                    makeDefault
                    zoom={1}
                    top={200}
                    bottom={-200}
                    left={200}
                    right={-200}
                    near={1}
                    far={2000}
                    position={[0, 100, 0]} />
                <Pointcloud />
            </Canvas>
        </div>
    )
}
