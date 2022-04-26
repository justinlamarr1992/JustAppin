import React, { useState } from "react";
import { Modal, Button } from "antd";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { StarOutlined } from "@ant-design/icons";
import { useNavigate, useParams } from "react-router";

const RatingModal = ({ children }) => {
  const { active } = useSelector((state) => ({ ...state }));
  const [modalVisible, setModalVisible] = useState(false);
  let navigate = useNavigate();
  let { slug } = useParams();
  const handleModal = () => {
    if (active && active.token) {
      setModalVisible(true);
    } else {
      navigate({ pathname: "/login", state: { from: `/product/${slug}` } });
    }
  };
  return (
    <>
      <div onClick={handleModal}>
        <StarOutlined className="text-danger" />
        <br />
        {active ? "Leave Rating" : "Log in to Leave Ratings"}
      </div>
      <Modal
        title="Leave Your Rating"
        centered
        visible={modalVisible}
        onOk={() => {
          setModalVisible(false);
          toast.success("Thanks for the Review");
        }}
        onCancel={() => setModalVisible(false)}
      >
        {children}
      </Modal>
    </>
  );
};
export default RatingModal;
