import React, { useEffect, useState } from "react";
import { Pagination } from "@material-ui/lab";
import { CircularProgress, makeStyles } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { getStaffMembersAction } from "../../../store/actions";
import { getStaffMembers } from "../../../utils/ApiService/staff.members";
import StaffListItem from "./StaffListItem";

const useStyles = makeStyles((theme) => ({
  circularProgress: {
    textAlign: "center",
  },
  pagination: {
    marginTop: 30,
    justifyContent: "center",
    paddingLeft: "30%",
  },
}));
const StaffList = () => {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const staffMembersState = useSelector((state) => state.staffMembers);
  const [data, setData] = useState(
    staffMembersState ? staffMembersState.slice(0, 3) : []
  );

  const dispatch = useDispatch();

  const handlePaginationChange = (event, value) => {
    setData(staffMembersState.slice((value - 1) * 3, value * 3));
  };
  const count =
    staffMembersState.length / 3 - parseInt(staffMembersState.length / 3) !== 0
      ? parseInt(staffMembersState.length / 3) + 1
      : parseInt(staffMembersState.length / 3);

  const items = [
    {
      id: 1,
      fullName: "Dr. Desta Langena",
      staffLocation: "Ethiopia",
      gender: "Male",
      aipmService: "AIPM Ethiopia Board Director",
      whoIsHe: `During the 2nd week of October 2021, AIPM held its annual Missions 
      Conference in Durame. This year we also hosted 100 university students and
      a few high school students that are very interested in serving the Lord as 
      missionaries. In total 250 attended the conference. The conference was led by 
      Dr. Desta and Justin Slemp. Justin is a bord member from AIPM USA. The 
      following is the report from both Dr. Desta and Justin. During the 2nd week of 
      October 2021, AIPM held its annual Missions Conference in Durame. This year 
      we also hosted 100 university students and a few high school students that `,
      responsibility: `are very interested in serving the Lord as missionaries. In total 250 attended the conference. 
      The conference was led by Dr. Desta and Justin Slemp. Justin is a bord member from AIPM USA. 
      The following is the report from both Dr. Desta and Justin.`,
      passion: `are very interested in serving the Lord as missionaries. In total 250 attended the conference. 
      The conference was led by Dr. Desta and Justin Slemp. Justin is a bord member from AIPM USA. 
      The following is the report from both Dr. Desta and Justin.`,
      imageUrl:
        "https://s3.amazonaws.com/media.cloversites.com/e1/e165fffc-7054-48fb-a10c-09c8496cb4f6/site-images/814755c2-b71f-4e73-94b6-6d33885c3a5e@2x.png",
    },
    {
      id: 2,
      fullName: "Eyosias Desta",
      staffLocation: "Ethiopia",
      gender: "Male",
      aipmService: "AIPM Ethiopia Board Director",
      whoIsHe: `During the 2nd week of October 2021, AIPM held its annual Missions 
        Conference in Durame. This year we also hosted 100 university students and
        a few high school students that are very interested in serving the Lord as 
        missionaries. In total 250 attended the conference. The conference was led by 
        Dr. Desta and Justin Slemp. Justin is a bord member from AIPM USA. The 
        following is the report from both Dr. Desta and Justin. During the 2nd week of 
        October 2021, AIPM held its annual Missions Conference in Durame. This year 
        we also hosted 100 university students and a few high school students that `,
      responsibility: `are very interested in serving the Lord as missionaries. In total 250 attended the conference. 
        The conference was led by Dr. Desta and Justin Slemp. Justin is a bord member from AIPM USA. 
        The following is the report from both Dr. Desta and Justin.`,
      passion: `are very interested in serving the Lord as missionaries. In total 250 attended the conference. 
        The conference was led by Dr. Desta and Justin Slemp. Justin is a bord member from AIPM USA. 
        The following is the report from both Dr. Desta and Justin.`,
      imageUrl:
        "https://s3.amazonaws.com/media.cloversites.com/e1/e165fffc-7054-48fb-a10c-09c8496cb4f6/site-images/814755c2-b71f-4e73-94b6-6d33885c3a5e@2x.png",
    },
    {
      id: 3,
      fullName: "Jusitin Slemp",
      staffLocation: "USA",
      gender: "Male",
      aipmService: "AIPM USA Board Member",
      whoIsHe: `During the 2nd week of October 2021, AIPM held its annual Missions 
        Conference in Durame. This year we also hosted 100 university students and
        a few high school students that are very interested in serving the Lord as 
        missionaries. In total 250 attended the conference. The conference was led by 
        Dr. Desta and Justin Slemp. Justin is a bord member from AIPM USA. The 
        following is the report from both Dr. Desta and Justin. During the 2nd week of 
        October 2021, AIPM held its annual Missions Conference in Durame. This year 
        we also hosted 100 university students and a few high school students that `,
      responsibility: `are very interested in serving the Lord as missionaries. In total 250 attended the conference. 
        The conference was led by Dr. Desta and Justin Slemp. Justin is a bord member from AIPM USA. 
        The following is the report from both Dr. Desta and Justin.`,
      passion: `are very interested in serving the Lord as missionaries. In total 250 attended the conference. 
        The conference was led by Dr. Desta and Justin Slemp. Justin is a bord member from AIPM USA. 
        The following is the report from both Dr. Desta and Justin.`,
      imageUrl:
        "https://scontent.fadd1-1.fna.fbcdn.net/v/t1.18169-9/10612535_10204442747098269_4116553910097276460_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=RrFfcVxd2eUAX-VfHLs&tn=3GjAtmoDN068ugAL&_nc_ht=scontent.fadd1-1.fna&oh=00_AT8jtjUk6BLAZaypWVCeHKal0A7BY2ZWLEZvXn3I-5djNA&oe=625FE239",
    },
    {
      id: 4,
      fullName: "Roberth Hogarth",
      staffLocation: "USA",
      gender: "Male",
      aipmService: "AIPM USA Board Chariman",
      whoIsHe: `During the 2nd week of October 2021, AIPM held its annual Missions 
        Conference in Durame. This year we also hosted 100 university students and
        a few high school students that are very interested in serving the Lord as 
        missionaries. In total 250 attended the conference. The conference was led by 
        Dr. Desta and Justin Slemp. Justin is a bord member from AIPM USA. The 
        following is the report from both Dr. Desta and Justin. During the 2nd week of 
        October 2021, AIPM held its annual Missions Conference in Durame. This year 
        we also hosted 100 university students and a few high school students that `,
      responsibility: `are very interested in serving the Lord as missionaries. In total 250 attended the conference. 
        The conference was led by Dr. Desta and Justin Slemp. Justin is a bord member from AIPM USA. 
        The following is the report from both Dr. Desta and Justin.`,
      passion: `are very interested in serving the Lord as missionaries. In total 250 attended the conference. 
        The conference was led by Dr. Desta and Justin Slemp. Justin is a bord member from AIPM USA. 
        The following is the report from both Dr. Desta and Justin.`,
      imageUrl:
        "https://s3.amazonaws.com/media.cloversites.com/e1/e165fffc-7054-48fb-a10c-09c8496cb4f6/site-images/814755c2-b71f-4e73-94b6-6d33885c3a5e@2x.png",
    },
    {
      id: 5,
      fullName: "Zenebech Oushe",
      staffLocation: "Ethiopia",
      gender: "Female",
      aipmService: "AIPM Ethiopia Board Member",
      whoIsHe: `During the 2nd week of October 2021, AIPM held its annual Missions 
        Conference in Durame. This year we also hosted 100 university students and
        a few high school students that are very interested in serving the Lord as 
        missionaries. In total 250 attended the conference. The conference was led by 
        Dr. Desta and Justin Slemp. Justin is a bord member from AIPM USA. The 
        following is the report from both Dr. Desta and Justin. During the 2nd week of 
        October 2021, AIPM held its annual Missions Conference in Durame. This year 
        we also hosted 100 university students and a few high school students that `,
      responsibility: `are very interested in serving the Lord as missionaries. In total 250 attended the conference. 
        The conference was led by Dr. Desta and Justin Slemp. Justin is a bord member from AIPM USA. 
        The following is the report from both Dr. Desta and Justin.`,
      passion: `are very interested in serving the Lord as missionaries. In total 250 attended the conference. 
        The conference was led by Dr. Desta and Justin Slemp. Justin is a bord member from AIPM USA. 
        The following is the report from both Dr. Desta and Justin.`,
      imageUrl:
        "https://s3.amazonaws.com/media.cloversites.com/e1/e165fffc-7054-48fb-a10c-09c8496cb4f6/site-images/814755c2-b71f-4e73-94b6-6d33885c3a5e@2x.png",
    },
  ];

  const fetchStaffmembers = async () => {
    setLoading(true);
    const res = await getStaffMembers();
    setLoading(false);
    dispatch(getStaffMembersAction(items));
    setData(items.slice(0, 3));
  };

  useEffect(() => {
    fetchStaffmembers();
  }, []);

  return (
    <div>
      {loading ? (
        <div className={classes.circularProgress}>
          <CircularProgress size={24} />
        </div>
      ) : (
        <div>
          {data.map((item, index) => {
            return <StaffListItem data={item} key={item.id} />;
          })}
          {staffMembersState.length > 3 && (
            <Pagination
              className={classes.pagination}
              onChange={handlePaginationChange}
              count={count}
              variant="outlined"
              shape="rounded"
            />
          )}
        </div>
      )}
    </div>
  );
};

export default StaffList;
