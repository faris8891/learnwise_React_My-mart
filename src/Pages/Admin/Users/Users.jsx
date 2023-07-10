import { useEffect, useState } from "react";
import style from "./Users.module.css";
import IMAGES from "../../../assets/images/Image";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../../services/AdminApi";
import { setUsers } from "../../../Redux/AdminSlice";
import ConfirmModal from "../../../Components/ConfirmModal/ConfirmModal";
import AddModal from "../../../Components/AddModal/AddModal";
import UpdateModal from "../../../Components/UpdateModal/UpdateModal";
import {
  addUser,
  deleteUser,
  disableUser,
  editUser,
} from "../../../services/Admin/Users";

export default function Users() {
  const [trigger, setTrigger] = useState(false);
  // get users
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      try {
        const res = await getUsers();
        const data = res.data;
        dispatch(setUsers(data));
      } catch (error) {
        console.log(error);
      }
    })();
  }, [trigger, dispatch]);
  const users = useSelector((store) => store.admin.users);

  // Add users
  const addUserHandler = (data) => {
    addUser(data, setTrigger, trigger);
  };

  // edit user
  const editHandler = (id, data) => {
    editUser(id, data, setTrigger, trigger);
  };

  // disable/ enable user
  const toggleHandler = (id, userStatus) => {
    disableUser(id, userStatus, setTrigger, trigger);
  };

  // delete User
  const deleteHandler = (id) => {
    deleteUser(id, setTrigger, trigger);
  };
  return (
    <>
      <div id={style.search_container} className="container-fluid py-4">
        <div className="container ">
          <div className="row ">
            <div
              id={style.searchBar}
              className="col-11 p-0 pe-4 d-flex justify-content-center align-items-center"
            >
              <input id={style.search_input} type="text"></input>

              <i
                id={style.searchButton}
                className="bx bx-search-alt-2 bx-sm"
              ></i>
            </div>

            <div className="col-1 p-0 d-flex ">
              <AddModal title="Add new user" handler={addUserHandler}>
                <button id={style.AddButton}>
                  <div className="d-flex justify-content-center align-items-center">
                    <box-icon size="md" color="#f8f8f8" name="plus"></box-icon>
                  </div>
                </button>
              </AddModal>
            </div>
          </div>
        </div>
      </div>

      <div className="container  my-4">
        <div className="row">
          <div className="col ps-0">
            <div id={style.filterCard} className="container ms-0 px-0">
              <h5 className="fs-6">Filter & Refine </h5>
              <div className="container">
                <p className="m-1">Disabled users</p>
                <p className="m-1">Enabled users</p>
                <p className="m-1">Top Purchased users</p>
              </div>
              <hr />
              <h5 className="fs-6">Registered Date</h5>
              <div className="container">
                <div className="row">
                  <div className="col-5 p-0 me-1">
                    <div className="w-100">
                      <input
                        id={style.filterDate1}
                        type="date"
                        className="w-100  px-2"
                        placeholder="From"
                      />
                    </div>
                  </div>

                  <div className="col-5  p-0">
                    <div className="w-100 m-0">
                      <input
                        id={style.filterDate2}
                        type="date"
                        className="w-100 p-2"
                        placeholder="From"
                      />
                    </div>
                  </div>
                  <div className="col p-0 ms-2 d-flex w-100 justify-content-center align-items-center ">
                    <div
                      id={style.ArrowBtn}
                      className="w-100  d-flex justify-content-center align-items-center "
                    >
                      <i className=" bx bx-chevron-right bx-sm"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-9 p-0">
            {/* user card start */}
            {users.map((e) => {
              return (
                <div key={e._id}>
                  <div id={style.UserCard} className="container bg-light mb-3">
                    <div className="row">
                      <div className="col-auto bg p-3">
                        <div
                          id={style.image_container}
                          className=" d-flex justify-content-center align-items-center"
                        >
                          <img
                            src={IMAGES.User1}
                            className=" float-left w-100  "
                            alt="shop image"
                          />
                        </div>
                      </div>
                      <div
                        id={style.dealer_details}
                        className="col-6 py-2 ps-0 "
                      >
                        <h5 className="fs-5 m-1">{e.fullName}</h5>
                        <p className="m-1">Id: {e._id}</p>
                        <p className="m-1">Location: {e.location}</p>
                        <p className="m-1">Mobile: {e.phone}</p>
                        <p className="m-1">
                          Status: {e.active ? "Active" : "Inactive"}
                        </p>
                        <div id={style.vl}></div>
                      </div>
                      <div className="col ">
                        <div className="container-fluid d-flex flex-column justify-content-center align-items-center h-100">
                          <p className="m-1 fs-5">{e.fullName}</p>
                          <p className="m-0 fs-6">
                            {e.active ? "Active" : "Inactive"}
                          </p>
                          <p className="m-0 fs-6">Cart: {e.cart.length}</p>
                          <div className="d-flex justify-content-center align-items-center mt-3">
                            {/* Edit button */}
                            <UpdateModal
                              _id={e._id}
                              handler={editHandler}
                              title={`Edit ${e.fullName}`}
                              a={e.fullName}
                            >
                              <div id={style.editButton} className="m-1">
                                <i className="bx bxs-pencil bx-sm p-2"></i>
                              </div>
                            </UpdateModal>
                            {/* disable toggle */}
                            <ConfirmModal
                              title={
                                e.active
                                  ? `Disable ${e.fullName}`
                                  : `Enable ${e.fullName}`
                              }
                              body={
                                e.active
                                  ? `Click ok to disable ${e.fullName}`
                                  : `Click ok to enable ${e.fullName}`
                              }
                              handler={toggleHandler}
                              _id={e._id}
                              data={e.active}
                            >
                              <div id={style.editButton} className="m-1">
                                {e.active ? (
                                  <i className="bx bx-toggle-right bx-sm p-2"></i>
                                ) : (
                                  <i className="bx bx-toggle-left bx-sm p-2"></i>
                                )}
                              </div>
                            </ConfirmModal>

                            {/* delete button */}
                            <ConfirmModal
                              title={`Delete ${e.fullName}`}
                              body={`Click ok to Confirm`}
                              _id={e._id}
                              handler={deleteHandler}
                            >
                              <div id={style.editButton} className="m-1">
                                <i className="bx bxs-trash-alt bx-sm p-2"></i>
                              </div>
                            </ConfirmModal>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            {/* user card start */}
          </div>
        </div>
      </div>
    </>
  );
}
