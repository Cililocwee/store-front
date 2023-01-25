import React from "react";

export default function ContactPage() {
  return (
    <div className="page">
      <main id="main-contact">
        <h2>Where are we located?</h2>
        <div id="contact-information">
          <p>
            We're located on the corner of Cach Mang Thang 8 and Dien Bien Phu
            in Ho Chi Minh City.
          </p>
          <div id="contact-map-hours">
            <iframe
              title="location"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d244.96570750618494!2d106.6836127389863!3d10.776703993891273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1670916675412!5m2!1sen!2s"
              width="250"
              height="250"
              style={{ border: "0" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
            <ul>
              <strong>
                <span className="opening-hours">Opening Hours:</span>
              </strong>
              <br />
              <li>Monday: 8:00 - 22:00</li>
              <li>Tuesday: 8:00 - 22:00</li>
              <li>Wednesday: 8:00 - 22:00</li>
              <li>Thursday: 8:00 - 22:00</li>
              <li>Friday: 8:00 - 22:30</li>
              <li>Saturday: 12:00 - 22:30</li>
              <li>Sunday: 12:00 - 22:30</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
