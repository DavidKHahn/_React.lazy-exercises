import React, { Component, Suspense } from 'react';
import './App.css';
// import AsyncComponent from './components/AsyncComponent';
// import Page1 from './components/Page1';
const Page1 = React.lazy(() => import('./components/Page1'));
const Page2 = React.lazy(() => import('./components/Page2'));
const Page3 = React.lazy(() => import('./components/Page3'));

class App extends Component {
  constructor() {
    super();
    this.state = {
        route: 'page1',
        component: null
      }
  }

  onRouteChange = (route) => {
    // No Code Splitting:
    this.setState({ route: route });
    // With Code Splitting (import files only when needed):
    // if (route === 'page1') {
    //   this.setState({ route: route })
    // } else if (route === 'page2') {
    //   import('./components/Page2').then((Page2) => {
    //     this.setState({ route: route, component: Page2.default })
    //   })
    // } else if (route === 'page3') {
    //   import('./components/Page3').then((Page3) => {
    //     this.setState({ route: route, component: Page3.default })
    //   })
    // }
  }

  render() {
    // USING React.lazy():
    if (this.state.route === 'page1') {
      return (
        <div>
          <Suspense fallback={<div>Loading...</div>}>
            <Page1 onRouteChange={this.onRouteChange}/>
          </Suspense>
        </div>
      )
    } else if (this.state.route === 'page2') {
      return (
        <div>
          <Suspense fallback={<div>Loading...</div>}>
            <Page2 onRouteChange={this.onRouteChange}/>
          </Suspense>
        </div>
      )
      // const AsyncPage2 = AsyncComponent(() => import('./components/Page2'));
      // return <AsyncPage2 onRouteChange={this.onRouteChange}/>
    } else if (this.state.route === 'page3') {
      return (
        <div>
          <Suspense fallback={<div>Loading...</div>}>
            <Page3 onRouteChange={this.onRouteChange} />
          </Suspense>
        </div>
      )
      // const AsyncPage3 = AsyncComponent(() => import('./components/Page3'));
      // return <AsyncPage3 onRouteChange={this.onRouteChange}/>
    }
    // if (this.state.route === 'page1') {
    //   return <Page1 onRouteChange={this.onRouteChange}/>
    // } else if (this.state.route === 'page2') {
    //   const AsyncPage2 = AsyncComponent(() => import('./components/Page2'));
    //   return <AsyncPage2 onRouteChange={this.onRouteChange}/>
    // } else if (this.state.route === 'page3') {
    //   const AsyncPage3 = AsyncComponent(() => import('./components/Page3'));
    //   return <AsyncPage3 onRouteChange={this.onRouteChange}/>
    // }
    // if (this.state.route==='page1'){
    //   return <Page1 onRouteChange={this.onRouteChange} />
    // } else {
    //   return <this.state.component onRouteChange={this.onRouteChange} />
    // }
  }
}

export default App;
