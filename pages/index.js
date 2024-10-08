import React from "react";

import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A first meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/a/a0/OfferUp_Community_MeetUp_Spot_Sign.png",
    address: "123 Sydney Australia ",
    description: "This is the first meetup",
  },
  {
    id: "m2",
    title: "A Second meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/a/a0/OfferUp_Community_MeetUp_Spot_Sign.png",
    address: "123 Sydney Australia ",
    description: "This is the second meetup",
  },
];

const HomePage = (props) => {
  return <MeetupList meetups={props.meetups} />;
};

export async function getStaticProps() {
  // FETCH DATA FROM API
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    // revalidate: 10,
  };
}

// export async function getServerSideProps(context) {
//   // const req = context.req;
//   // const res = context.res;

//   // FETCH DATA FROM API
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }

export default HomePage;
