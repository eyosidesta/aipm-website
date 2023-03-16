import React, { useEffect, useState } from "react";
import { Pagination } from "@material-ui/lab";
import { CircularProgress, makeStyles } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { getAdminListAction } from "../../../store/actions";
import { getAdminList } from "../../../utils/ApiService/admins.api";
import AdminListItem from "./AdminListItem";

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
const AdminList = () => {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const adminListState = useSelector((state) => state.admins);
  const [data, setData] = useState(
    adminListState ? adminListState.slice(0, 3) : []
  );

  const dispatch = useDispatch();

  const handlePaginationChange = (event, value) => {
    setData(adminListState.slice((value - 1) * 3, value * 3));
  };
  const count =
    adminListState.length / 3 - parseInt(adminListState.length / 3) !== 0
      ? parseInt(adminListState.length / 3) + 1
      : parseInt(adminListState.length / 3);

  const items = [
    {
      id: 1,
      fullName: "Desta Langena",
      email: "destalangena7@ggmail.com",
      role: "Super Admin",
      roleCode: "SuPA",
      aipmService: "AIPM Ethiopia Board Director",
      imageUrl:
        "https://s3.amazonaws.com/media.cloversites.com/e1/e165fffc-7054-48fb-a10c-09c8496cb4f6/site-images/814755c2-b71f-4e73-94b6-6d33885c3a5e@2x.png",
    },
    {
      id: 2,
      fullName: "Eyosias Desta",
      email: "destalangena7@ggmail.com",
      role: "Super Admin",
      roleCode: "SuPA",
      aipmService: "AIPM Ethiopia Board Director",
      imageUrl:
        "https://s3.amazonaws.com/media.cloversites.com/e1/e165fffc-7054-48fb-a10c-09c8496cb4f6/site-images/814755c2-b71f-4e73-94b6-6d33885c3a5e@2x.png",
    },
    {
      id: 3,
      fullName: "Justin Slemp",
      email: "destalangena7@ggmail.com",
      role: "Super Admin",
      roleCode: "SuPA",
      aipmService: "AIPM Ethiopia Board Director",
      imageUrl:
        "https://scontent.fadd1-1.fna.fbcdn.net/v/t1.18169-9/10612535_10204442747098269_4116553910097276460_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=RrFfcVxd2eUAX-VfHLs&tn=3GjAtmoDN068ugAL&_nc_ht=scontent.fadd1-1.fna&oh=00_AT8jtjUk6BLAZaypWVCeHKal0A7BY2ZWLEZvXn3I-5djNA&oe=625FE239",
    },
    {
      id: 4,
      fullName: "Roberth Hogharth",
      email: "destalangena7@ggmail.com",
      role: "Super Admin",
      roleCode: "SuPA",
      aipmService: "AIPM Ethiopia Board Director",
      imageUrl:
        "https://s3.amazonaws.com/media.cloversites.com/e1/e165fffc-7054-48fb-a10c-09c8496cb4f6/site-images/814755c2-b71f-4e73-94b6-6d33885c3a5e@2x.png",
    },
    {
      id: 5,
      fullName: "Eyosias Desta",
      email: "destalangena7@ggmail.com",
      role: "Super Admin",
      roleCode: "SuPA",
      aipmService: "AIPM Ethiopia Board Director",
      imageUrl:
        "https://s3.amazonaws.com/media.cloversites.com/e1/e165fffc-7054-48fb-a10c-09c8496cb4f6/site-images/814755c2-b71f-4e73-94b6-6d33885c3a5e@2x.png",
    },
    {
      id: 6,
      fullName: "Justin Slemp",
      email: "destalangena7@ggmail.com",
      role: "Super Admin",
      roleCode: "SuPA",
      aipmService: "AIPM Ethiopia Board Director",
      imageUrl:
        "https://s3.amazonaws.com/media.cloversites.com/e1/e165fffc-7054-48fb-a10c-09c8496cb4f6/site-images/814755c2-b71f-4e73-94b6-6d33885c3a5e@2x.png",
    },
    {
      id: 7,
      fullName: "Roberth Hogharth",
      email: "destalangena7@ggmail.com",
      role: "Super Admin",
      roleCode: "SuPA",
      aipmService: "AIPM Ethiopia Board Director",
      imageUrl:
        "https://s3.amazonaws.com/media.cloversites.com/e1/e165fffc-7054-48fb-a10c-09c8496cb4f6/site-images/814755c2-b71f-4e73-94b6-6d33885c3a5e@2x.png",
    },
  ];

  const fetchAdminLists = async () => {
    setLoading(true);
    const res = await getAdminList();
    setLoading(false);
    dispatch(getAdminListAction(items));
    setData(items.slice(0, 3));
  };

  useEffect(() => {
    fetchAdminLists();
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
            return <AdminListItem data={item} key={item.id} />;
          })}
          {adminListState.length > 3 && (
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

export default AdminList;

