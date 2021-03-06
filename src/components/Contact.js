import React from 'react';
import PropTypes from 'prop-types';
import { handleSubmit } from '../util/handleSubmit';

const Contact = ({ pageState, setPageState }) => {
  const { contactName, contactEmail, contactMessage, interestOneOnOne, interestGroup, interestWorkshop, messageSent, error } = pageState;
  return (
    <section id="contact" className="main style1">
      <div className="container">
        <header className="major special">
          <h2>Contact</h2>
        </header>
      </div>
      <form onSubmit={(e) => handleSubmit(e, pageState, setPageState)}>
        <div className="grid-wrapper">
          <div className="col-12">
            <label>Name</label>
            <input
              required
              type="text" 
              value={contactName}
              onChange={(e) => setPageState({ contactName: e.target.value })}
            />
            <label>Email</label>
            <input
              required
              type="email"
              value={contactEmail}
              onChange={(e) => setPageState({ contactEmail: e.target.value })}
            />
            <label>Message</label>
            <textarea
              required
              value={contactMessage}
              onChange={(e) => setPageState({ contactMessage: e.target.value })}
            />
            <label>Coaching I&apos;m interested in (Select all that apply)</label>
          </div>
        </div>
        <div className="grid-wrapper align-left-in-desktop">
          <div className="col-4">
            <input
              type="checkbox"
              name="coaching"
              id="one-on-one"
              value="one-on-one"
              checked={interestOneOnOne}
              onChange={() => setPageState({ interestOneOnOne: !interestOneOnOne})}
            />
            <label htmlFor="one-on-one">One-on-One Coaching</label>
          </div>
          <div className="col-4 align-center-in-desktop">
            <input
              type="checkbox"
              name="coaching"
              id="group-coaching"
              value="group-coaching"
              checked={interestGroup}
              onChange={() => setPageState({ interestGroup: !interestGroup })}
            />
            <label htmlFor="group-coaching">Group Coaching</label>

          </div>
          <div className="col-4 align-right-in-desktop">
            <input
              type="checkbox"
              name="coaching"
              id="live-workshop"
              value="live-workshop"
              checked={interestWorkshop}
              onChange={() => setPageState({ interestWorkshop: !interestWorkshop })}
            />
            <label htmlFor="live-workshop">Live Workshop</label>
          </div>
        </div>
        <div className="grid-wrapper">
          <div className="col-12 align-center">
            <ul className="actions uniform">
              <li>
                {messageSent ? (
                  <span>Message Sent!</span>
                ) : error ? (
                  <span>Sorry, there was an error!</span>
                ) : (
                  <button type="submit" className="button">Send</button>
                )}
              </li>
            </ul>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Contact;

Contact.propTypes = {
  setPageState: PropTypes.func,
  pageState: PropTypes.object
};