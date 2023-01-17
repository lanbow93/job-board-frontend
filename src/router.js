import {createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom'
import App from './App'
import Index from './pages/Index';
import Show from './pages/Show';
import NewAppForm from './pages/NewAppForm';

import { postingLoader, postLoader } from './loaders';


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<App/>}>
            <Route path='/users' element={<Index />} loader={postingLoader} />
            <Route path='/users/:id' element={<Show />} loader={postLoader} />
            <Route path='/users/:id/apply' element={<NewAppForm/>}/>
        </Route>
    )
)

export default router;