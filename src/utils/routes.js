import Home from '../containers/Home';
import Buy from '../containers/Buy';
import Result from '../components/Result';
import Layout from '../components/Layout';
import LayoutForm from '../components/LayoutForm';
import Constants from './constants';

const Routes = [
  {
    layout: Layout,
    subRoutes: [
      {
        exact: true,
        path: Constants.home,
        component: Home,
      },
    ],
  },
  {
    layout: LayoutForm,
    subRoutes: [
      {
        path: Constants.sellHouse,
        component: Buy,
      },
      {
        path: Constants.result,
        component: Result,
      },
    ],
  },
];

export default Routes;
