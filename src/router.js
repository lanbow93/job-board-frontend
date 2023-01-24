import {createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom'
import App from './App'
import Index from './pages/Index';
import RecruiterIndex from './pages/RecruiterIndex'
import RecruiterStats from './pages/RecruiterStats'
import Show from './pages/Show';
import NewAppForm from './pages/NewAppForm';
import ApplicationIndex from './pages/ApplicationIndex';
import { createApplicationAction, updateApplicationAction } from './actions';

import { postingLoader, postLoader, applicationsLoader, applicationLoader, specificApplicationLoader } from './loaders';
import SeekerApplicationShow from './pages/SeekerApplicationShow';
import Landing from './pages/Landing';


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<App/>}>
            <Route path='' element={<Landing />}/>
            <Route path='/users' element={<Index />} loader={postingLoader} />
            <Route path='/users/:id' element={<Show />} loader={postLoader} />
            <Route path='/users/:id/apply' element={<NewAppForm/>}/>
            <Route path='/create/users' action={createApplicationAction}/>
            <Route path='/recruiters' element={<RecruiterStats />} />
            <Route path='/rapplications' element={<RecruiterIndex />} loader={postingLoader}/>
            <Route path='/rapplications/:id' element={<ApplicationIndex isUser={false} />} loader={specificApplicationLoader} />

            <Route path='/jsapplications' element={<ApplicationIndex isUser={true} />} loader={applicationsLoader}/>
            <Route path='/jsapplications/:id/edit' loader={applicationLoader} element={<SeekerApplicationShow />} />
            <Route path='/jsapplications/:id/update' action={updateApplicationAction} />
        </Route>
    )
)

export default router;