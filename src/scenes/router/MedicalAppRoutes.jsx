import {Navigate, Routes, Route} from 'react-router-dom';
import { Dashboard } from '../dashboard';


export const MedicalAppRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Dashboard/>} />

        <Route path='/*' element={ <Navigate to="/" /> } />
    </Routes>
  )
}
