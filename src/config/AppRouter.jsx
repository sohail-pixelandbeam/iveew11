import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/home/Home';
import GeoFencing from '../pages/geoFencing/GeoFencing';
import Message360 from '../pages/message360/Message360';
import SpecialityMessaging from '../pages/speacialityMessaging/SpecialityMessaging';
import GuestRecognition from '../pages/guestRecognition/GuestRecognition';
import ReputationManagement from '../pages/reputationManagement/ReputationManagement';
import BookingEngineScript from '../pages/bookingEngineScript/BookingEngineScript';
import MessageMarketSegmentation from '../pages/messageMarketSegmentaion/MessageMarketSegmentation';
import MobileMarketStrategies from '../pages/mobileMarketStrategies/MobileMarketStrategies';
import AIBot from '../pages/aiBot/AIBot';
import Pricing from '../pages/pricing/Pricing';
import GeoLocationMessagin from '../pages/geoLocationMessaging/GeoLocationMessaging';
import SignUp from '../pages/signUp/SignUp';
import SignIn from '../pages/signIn/SignIn';
import BookingEngineWidget from '../pages/bookingEngineWidget/BookingEngineWidget';
import Personalization from '../pages/personalization/Personalization';
import GuestReturn360 from '../pages/guestReturn360/GuestReturn360';
import GeoReferencing from '../pages/geoReferencing/GeoReferencing';






export default function AppRouter() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/GeoFencing' element={<GeoFencing />}></Route>
                    <Route path='/Message360' element={<Message360 />}></Route>
                    <Route path='/SpecialityMessaging' element={<SpecialityMessaging />}></Route>
                    <Route path='/GuestRecognition' element={<GuestRecognition />}></Route>
                    <Route path='/ReputationManagement' element={<ReputationManagement />}></Route>
                    <Route path='/BookingEngineScript' element={<BookingEngineScript />}></Route>
                    <Route path='/MessageMarketSegmentation' element={<MessageMarketSegmentation />}></Route>
                    <Route path='/MobileMarketStrategies' element={<MobileMarketStrategies />}></Route>
                    <Route path='/AIBot' element={<AIBot />}></Route>
                    <Route path='/Pricing' element={<Pricing />}></Route>
                    <Route path='/Personalization' element={<Personalization />}></Route>
                    <Route path='/GeoLocationMessaging' element={<GeoLocationMessagin />}></Route>
                    <Route path='/BookingEngineWidget' element={<BookingEngineWidget />}></Route>
                    <Route path='/GuestReturn360' element={<GuestReturn360 />}></Route>
                    <Route path='/GeoReferencing' element={<GeoReferencing />}></Route>
                    <Route path='/SignUp' element={<SignUp />}></Route>
                    <Route path='/SignIn' element={<SignIn />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}