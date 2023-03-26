import React from "react";
import EventList from "../components/events/EventList";
// import NewsLetterRegistration from "../components/input/NewsLetterRegistration";
import NewsletterRegistration from "../components/input/NewsletterRegistration";
import { getFeaturedEvents } from "../helpers/api-util";

const HomePage = (props) => {
  const { featuredEvents } = props;
  return (
    <div>
      <NewsletterRegistration />
      <EventList items={featuredEvents} />
    </div>
  );
};

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();

  return { props: { featuredEvents }, revalidate: 1800 };
}

export default HomePage;
