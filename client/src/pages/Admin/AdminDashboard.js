import React from "react";
import AdminMenu from "../../components/Layout/AdminMenu";
import Layout from "./../../components/Layout/Layout";
import { useAuth } from "../../context/auth";
const AdminDashboard = () => {
  const [auth] = useAuth();
  return (
    <Layout>
      <div className="container-fluid m-3 p-3 dashboard">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
          <div className="d-flex justify-content-center my-5">
            <div className="card w-75 shadow-lg">
              <div className="card-header bg-dark text-white">
                <h3 className="mb-0">Admin Information</h3>
              </div>
              <div className="card-body">
                  <h5 className="card-title">Admin Name: <span className="text-secondary">{auth?.user?.name}</span></h5>
                  <h5 className="card-title">Admin Email: <span className="text-secondary">{auth?.user?.email}</span></h5>
                  <h5 className="card-title">Admin Contact: <span className="text-secondary">{auth?.user?.phone}</span></h5>
              </div>
            </div>
          </div>
          </div>
          </div>
        </div>
      
    </Layout>
  );
};

export default AdminDashboard;
