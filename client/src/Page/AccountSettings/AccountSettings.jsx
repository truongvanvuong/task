import { useState } from "react";
import PropTypes from "prop-types";
import { Avatar, Upload, Modal } from "antd";
import ImgCrop from "antd-img-crop";
import { Input, Button } from "../../Component";
const AccountSettings = ({ isModalOpen, setIsModalOpen }) => {
  const [editFields, setEditField] = useState({
    fullName: false,
    userName: false,
    email: false,
    avatar: false,
  });
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handleEdit = (field) => {
    setEditField((prevEditField) => ({
      ...prevEditField,
      [field]: true,
    }));
  };
  const onSave = () => {};

  const onCancel = (field) => {
    setEditField((prevEditField) => ({
      ...prevEditField,
      [field]: false,
    }));
  };
  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };
  return (
    <Modal
      centered
      width={1280}
      title="Basic Modal"
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <div className="my-16 flex gap-20">
        <div className="w-[24%] flex flex-col items-center">
          <Avatar
            size={200}
            src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg"
          />
          <div className="mt-4 text-center font-normal">
            <h4 className="font-light">Trương Văn Vượng</h4>
            <p className="font-extralight">@vancuong</p>
          </div>
        </div>
        <div className="w-[60%] px-3">
          <h1 className="text-[26px] font-semibold py-3 mb-5 border-b border-defaultBorder dark:border-defaultBorderDark">
            Thông tin cá nhân
          </h1>
          <div className="pt-4 pb-5 flex items-center justify-between">
            <div className="flex-1 max-w-[500px]">
              <label htmlFor="fullname">Họ và tên</label>
              <Input
                type="text"
                id="fullname"
                className="!py-0"
                readOnly={!editFields.fullName}
              />
            </div>
            <div className="flex">
              {editFields.fullName ? (
                <div className="flex items-center gap-3 animate__animated animate__fadeInLeft">
                  <Button
                    onClick={onSave}
                    outline
                    small
                    roundedBorder
                    className="text-[#0000008a] font-normal border-primaryColor !text-primaryColor"
                  >
                    Lưu
                  </Button>
                  <Button
                    onClick={() => onCancel("fullName")}
                    outline
                    small
                    roundedBorder
                    className="text-[#0000008a] font-normal"
                  >
                    Hủy
                  </Button>
                </div>
              ) : (
                <Button
                  onClick={() => handleEdit("fullName")}
                  outline
                  small
                  roundedBorder
                  className="text-[#0000008a] font-normal animate__animated animate__fadeInRight"
                >
                  Chỉnh sửa
                </Button>
              )}
            </div>
          </div>
          <div className="pt-4 pb-5 flex items-center justify-between">
            <div className="flex-1 max-w-[500px]">
              <label htmlFor="username">Tên người dùng</label>
              <Input
                type="text"
                id="username"
                className="!py-0"
                readOnly={!editFields.userName}
              />
            </div>
            <div className="flex">
              {editFields.userName ? (
                <div className="flex items-center gap-3 animate__animated animate__fadeInLeft">
                  <Button
                    onClick={onSave}
                    outline
                    small
                    roundedBorder
                    className="text-[#0000008a] font-normal border-primaryColor !text-primaryColor"
                  >
                    Lưu
                  </Button>
                  <Button
                    onClick={() => onCancel("userName")}
                    outline
                    small
                    roundedBorder
                    className="text-[#0000008a] font-normal"
                  >
                    Hủy
                  </Button>
                </div>
              ) : (
                <Button
                  onClick={() => handleEdit("userName")}
                  outline
                  small
                  roundedBorder
                  className="text-[#0000008a] font-normal animate__animated animate__fadeInRight"
                >
                  Chỉnh sửa
                </Button>
              )}
            </div>
          </div>
          <div className="pt-4 pb-5 flex items-center justify-between">
            <div className="flex-1 max-w-[500px]">
              <label htmlFor="email">Email</label>
              <Input
                type="Email"
                id="email"
                className="!py-0"
                readOnly={!editFields.email}
              />
            </div>
            <div className="flex">
              {editFields.email ? (
                <div className="flex items-center gap-3 animate__animated animate__fadeInLeft">
                  <Button
                    onClick={onSave}
                    outline
                    small
                    roundedBorder
                    className="text-[#0000008a] font-normal border-primaryColor !text-primaryColor"
                  >
                    Lưu
                  </Button>
                  <Button
                    onClick={() => onCancel("email")}
                    outline
                    small
                    roundedBorder
                    className="text-[#0000008a] font-normal"
                  >
                    Hủy
                  </Button>
                </div>
              ) : (
                <Button
                  onClick={() => handleEdit("email")}
                  outline
                  small
                  roundedBorder
                  className="text-[#0000008a] font-normal animate__animated animate__fadeInRight"
                >
                  Chỉnh sửa
                </Button>
              )}
            </div>
          </div>
          <div className="pt-4 pb-5 flex items-center justify-between">
            <div className="flex-1 max-w-[500px]">
              <label>Avatar</label>
              <ImgCrop rotationSlider>
                <Upload
                  className="!inline-flex justify-end"
                  action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
                  listType="picture-circle"
                  maxCount={1}
                  onPreview={onPreview}
                >
                  Upload
                </Upload>
              </ImgCrop>
            </div>
            <div className="flex">
              {editFields.avatar ? (
                <div className="flex items-center gap-3 animate__animated animate__fadeInLeft">
                  <Button
                    onClick={onSave}
                    outline
                    small
                    roundedBorder
                    className="text-[#0000008a] font-normal border-primaryColor !text-primaryColor"
                  >
                    Lưu
                  </Button>
                  <Button
                    onClick={() => onCancel("avatar")}
                    outline
                    small
                    roundedBorder
                    className="text-[#0000008a] font-normal"
                  >
                    Hủy
                  </Button>
                </div>
              ) : (
                <Button
                  onClick={() => handleEdit("avatar")}
                  outline
                  small
                  roundedBorder
                  className="text-[#0000008a] font-normal animate__animated animate__fadeInRight"
                >
                  Chỉnh sửa
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

AccountSettings.propTypes = {};

export default AccountSettings;
