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
            <style jsx global>{`
              .bottomNav {
                position: fixed;
                bottom: 0;
                left: 0;
                width: 100vw;
              }
              body {
                font-family: 'Open Sans', sans-serif;
              }
              .container {
                padding: 16px;
                overflow: auto;
              }
            `}
            </style>
          </Provider>
        )
      }
    }
  )
}

export default Layout