import React from 'react';
import App from './App';
import HomePage from './pages/HomePage';
import UsersListPage from './pages/UsersListPage';
import AdminsListPage from './pages/AdminsListPage';
import NotFoundPage from './pages/NotFoundPage';


export default [
  {
    ...App,
    routes: [
      {
        ...HomePage,
        path: '/',
        exact: true
      },
      {
        ...UsersListPage,
        path:'/users',
      },
      {
        ...AdminsListPage,
        path:'/admins',
      },
      {
        ...NotFoundPage
      }
    ]
  }
];

// Use different syntax for react-router-config
// export default () => {
//   return (
//     <div>
//       <Route exact path='/' component={Home} />
//       <Route path='/users' component={UsersList} />
//     </div>
//   );
// };
