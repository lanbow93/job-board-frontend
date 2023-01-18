import {createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom'
import App from './App'
import Index from './pages/Index';
import Show from './pages/Show';
import NewAppForm from './pages/NewAppForm';
import ApplicationIndex from './pages/ApplicationIndex';
import { createApplicationAction } from './actions';

import { postingLoader, postLoader, applicationsLoader } from './loaders';


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<App/>}>
            <Route path=''/>
            <Route path='/users' element={<Index />} loader={postingLoader} />
            <Route path='/users/:id' element={<Show />} loader={postLoader} />
            <Route path='/users/:id/apply' element={<NewAppForm/>}/>
            <Route path='/create/users' action={createApplicationAction}/>
            <Route path='/recruiters' />
            <Route path='/jsapplications' element={<ApplicationIndex />} loader={applicationsLoader}/>
        </Route>
    )
)

export default router;