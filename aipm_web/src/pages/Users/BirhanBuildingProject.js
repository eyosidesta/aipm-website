import React from "react";
import Project from "../../components/Shared/Project";
import imageOne from "../../assets/ProjectImages/BirhanBuilding/birhanBuildingOne.png";
import imageTwo from "../../assets/ProjectImages/BirhanBuilding/birhanBuildingTwo.png";
import imageThree from "../../assets/ProjectImages/BirhanBuilding/birhanBuildingThree.png";
import imageFour from "../../assets/ProjectImages/BirhanBuilding/birhanBuildingFour.png";
import imageFive from "../../assets/ProjectImages/BirhanBuilding/birhanBuildingFive.png";
import imageSix from "../../assets/ProjectImages/BirhanBuilding/birhanBuildingSix.png";
import imageSeven from "../../assets/ProjectImages/BirhanBuilding/birhanBuildingSeven.png";

const BirhanBuildingProject = () => {
  const data = {
    title: "Birhan Building",
    projectImage: imageOne,
    supportMessage: "Support AIPM Ministry by Building Birhan Building",
    firstParagraph: `During the 2nd week of October 2021, AIPM held its annual Missions
        Conference in Durame. This year we also hosted 100 university students
        and a few high school students that are very interested in serving the
        Lord as missionaries. In total 250 attended the conference. The
        conference was led by Dr. Desta and Justin Slemp. Justin is a bord
        member from AIPM USA. The following is the report from both Dr. Desta
        and Justin. During the 2nd week of October 2021, AIPM held its annual
        Missions Conference in Durame. This year we also hosted 100 university
        students and a few high school students that are very interested in
        serving the Lord as missionaries. In total 250 attended the conference.
        The conference was led by Dr. Desta and Justin Slemp. Justin is a bord
        member from AIPM USA. The following is the report from both Dr. Desta
        and Justin.`,
    projectImageLists: [
      imageOne,
      imageTwo,
      imageThree,
      imageFour,
      imageFive,
      imageSix,
      imageSeven,
    ],
    secondTitle: "this is how it's going on",
    secondparagraph: `During the 2nd week of October 2021, AIPM held its annual Missions Conference in Durame. This year we also hosted 100 university students and a few 
    high school students that are very interested in serving the Lord as missionaries. In total 250 attended the conference. The conference was led by 
    Dr. Desta and Justin Slemp. Justin is a bord member from AIPM USA. The following is the report from both Dr. Desta and Justin. During the 2nd week of 
    October 2021, AIPM held its annual Missions Conference in Durame. This year we also hosted 100 university students and a few high school students that 
    are very interested in serving the Lord as missionaries. In total 250 attended the conference. The conference was led by Dr. Desta and Justin Slemp. Justin 
    is a bord member from AIPM USA. The following is the report from both Dr. Desta and Justin.`,
    supprtTitle: "Support AIPM Ministry by building Birhan Bank",
    bankName: "Commercial Bank of Ethiopia",
    bankAccount: "1000000000000000000",
    payOnline: "Pay Online",
    payLink: "Click here",
  };
  return (
    <div>
      <Project data={data} />
    </div>
  );
};

export default BirhanBuildingProject;
