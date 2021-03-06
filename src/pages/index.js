import React, { Fragment } from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/layout';

import AboutCaitlin from '../components/AboutCaitlin';
import CoachingOptions from '../components/CoachingOptions';
import Contact from '../components/Contact';
import GetCurious from '../components/GetCurious';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';
import WonderWhatsNext from '../components/WonderWhatsNext';
import WonderYourWay from '../components/WonderYourWay';
import AreYouMissoungOut from '../components/AreYouMissoungOut';
import Header from '../components/Header';
import header from '../assets/images/header.jpg';

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ebookEmail: '',
      contactName: '',
      contactEmail: '',
      contactMessage: '',
      interestOneOnOne: false,
      interestGroup: false,
      interestWorkshop: false,
      messageSent: false,
      error: false,
    };

    this.setState = this.setState.bind(this);
  }

  render() {
    const siteTitle = 'Home | Experiment With Wonder';

    return (
      <Layout>
        <Helmet title={siteTitle}>
        </Helmet>
        <Header
          setPageState={this.setState}
          buttonType="coaching"
          backgroundImg={header}
        >
          <Fragment>
            <span className="icon major fa-flask"></span>
            <h1>
              <span style={{fontSize: '2rem'}}>Experiment with Wonder</span><br style={{ display: 'inline' }} />
              <strong>Transformational Coaching<br /><span className="space">&nbsp;</span>to Explore&nbsp;Life’s&nbsp;Possibilities</strong>
            </h1>
          </Fragment>
        </Header>
        <GetCurious />
        <AreYouMissoungOut />
        <WonderWhatsNext />
        <WonderYourWay />
        <CoachingOptions />
        <HowItWorks setPageState={this.setState} />
        {/* <EBookGiveaway pageState={this.state} setPageState={this.setState} /> */}
        <Testimonials />
        <AboutCaitlin />
        <Contact pageState={this.state} setPageState={this.setState} />
      </Layout>
    );
  }
}

export default Homepage;