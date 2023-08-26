import React, {Suspense, lazy, useEffect, useState} from "react";
import {openSource} from "../../portfolio";
import Contact from "../contact/Contact";
import Loading from "../loading/Loading";

const renderLoader = () => <Loading />;
const GithubProfileCard = lazy(() =>
  import("../../components/githubProfileCard/GithubProfileCard")
);
export default function Profile() {
  const [prof, setrepo] = useState([]);
  function setProfileFunction(array) {
    setrepo(array);
  }

  useEffect(() => {
    if (openSource.showGithubProfile === "true") {
      const getProfileData = () => {
        fetch("/profile.json")
          .then(result => {
            var user = {
              data: {
                user: {
                  name: "Baptiste Seux",
                  bio: "Sr Mobile Developer - Specialized in Flutter Mobile Apps",
                  avatarUrl:
                    "https://avatars.githubusercontent.com/u/9638281?u=467564517d1e97d26026512bad2d44a768451bb5&v=4",
                  location: "French, about to live in Barcelona, Spain",
                  pinnedItems: {totalCount: 0, edges: []}
                }
              }
            };
            return user;
            // if (result.ok) {
            //   return result.json(); // not working
            // }
          })
          .then(response => {
            setProfileFunction(response.data.user);
          })
          .catch(function (error) {
            console.error(
              `${error} (because of this error GitHub contact section could not be displayed. Contact section has reverted to default)`
            );
            setProfileFunction("Error");
            openSource.showGithubProfile = "false";
          });
      };
      getProfileData();
    }
  }, []);
  if (
    openSource.display &&
    openSource.showGithubProfile === "true" &&
    !(typeof prof === "string" || prof instanceof String)
  ) {
    return (
      <Suspense fallback={renderLoader()}>
        <GithubProfileCard prof={prof} key={prof.id} />
      </Suspense>
    );
  } else {
    return <Contact />;
  }
}
