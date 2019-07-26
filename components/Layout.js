import { Provider } from 'react-redux'
import store from '../redux/store'
import BottomNav from './BottomNav'

const Layout = (Page) => {
  return (
    class PageLayout extends React.Component {
      render() {
        return(
          <Provider store={store} >
            <Page />
            <div className="bottomNav">
              <BottomNav/>
            </div>
          </Provider>
        )
      }
    }
  )
}

export default Layout