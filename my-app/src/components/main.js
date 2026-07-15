import React from 'react';
import Home from './home';
import Resume from './resume';
import Blog from './blog';
import Projects from './projects';
import Contact from './contact';

import RingBox from './projects/engagement_ring_box';
import ElectricBMX from './projects/electric_bmx_bike';
import WoodRouter from './projects/cnc_wood_router';
import MeadBrewing from './projects/mead_brewing';
import LaserTurret from './projects/laser_turret';
import ThisPage from './projects/this_page';
import InfinityMirror from './projects/infinity_mirror';

import DaisyWheelStamper from './projects/daisywheel_stamper';
import M100CAM from './projects/M100_cam';
import PartUnloader from './projects/part_unloader';
import PlateDragga from './projects/hydraulic_systems';
import PlateConveyor from './projects/plate_conveyor';
import CSharpSolidworks from './projects/csharp_solidworks';
import EulerAngles from './projects/euler_angles';
import TasteTech from './projects/tastetech_sensors';

import Storylines from './blog/storylines';
import GoogleUX from './blog/google_ux_course';
import DesignScale from './blog/design_scale';
import Workmanship from './blog/workmanship';
import RightToRepair from './blog/right_to_repair';

import { Routes, Route } from 'react-router-dom';


const Main = () => (
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/blog" element={<Blog />}/>
        <Route path="/projects" element={<Projects />}/>
        <Route path="/resume" element={<Resume />}/>
        <Route path="/contact" element={<Contact />}/>

        <Route path="/projects/engagement_ring_box" element={<RingBox />}/>
        <Route path="/projects/electric_bmx_bike" element={<ElectricBMX />}/>
        <Route path="/projects/cnc_wood_router" element={<WoodRouter />}/>
        <Route path="/projects/mead_brewing" element={<MeadBrewing />}/>
        <Route path="/projects/laser_turret" element={<LaserTurret />}/>
        <Route path="/projects/this_page" element={<ThisPage />}/>
        <Route path="/projects/infinity_mirror" element={<InfinityMirror />}/>

        <Route path="/projects/daisywheel_stamper" element={<DaisyWheelStamper />}/>
        <Route path="/projects/M100_cam" element={<M100CAM />}/>
        <Route path="/projects/part_unloader" element={<PartUnloader />}/>
        <Route path="/projects/hydraulic_systems" element={<PlateDragga />}/>
        <Route path="/projects/plate_conveyor" element={<PlateConveyor />}/>
        <Route path="/projects/csharp_solidworks" element={<CSharpSolidworks />}/>
        <Route path="/projects/euler_angles" element={<EulerAngles />}/>
        <Route path="/projects/tastetech_sensors" element={<TasteTech />}/>

        <Route path="/blog/right_to_repair" element={<RightToRepair />}/>
        <Route path="/blog/storylines" element={<Storylines />}/>
        <Route path="/blog/google_ux_course" element={<GoogleUX />}/>
        <Route path="/blog/design_scale" element={<DesignScale />}/>
        <Route path="/blog/workmanship" element={<Workmanship />}/>
    </Routes>
)

export default Main;