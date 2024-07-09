import React from "react";
import Layout from "../../components/Layout/Layout";
import UserMenu from "../../components/Layout/UserMenu";
import { useAuth } from "../../context/auth";
const Dashboard = () => {
  const [auth] = useAuth();
  return (
    <Layout title={"Dashboard - Ecommerce App"}>
      <div className="container-flui m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-9">
          <div className="d-flex justify-content-center my-5">
    <div className="card w-75 shadow-lg">
        <div className="card-header bg-dark text-white">
            <h3 className="mb-0">Your Information</h3>
        </div>
        <div className="card-body">
            <h5 className="card-title">Name: <span className="text-secondary">{auth?.user?.name}</span></h5>
            <h5 className="card-title">Email: <span className="text-secondary">{auth?.user?.email}</span></h5>
            <h5 className="card-title">Address: <span className="text-secondary">{auth?.user?.address}</span></h5>
        </div>
    </div>
</div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
