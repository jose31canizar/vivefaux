import React, { Component } from "react";
// import { PasswordForgetForm } from "../password-forget/PasswordForget";
// import PasswordChangeForm from "../../components/password-change";
// import UpdateAccount from "../update-account/UpdateAccount";
import withAuthorization from "../../hocs/withAuthorization";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import InputField from "../../components/input-field";
import "./index.styl";

const MediaUploader = ({ uploadFile, authUser, mediaItemName, loading }) => (
  <div className="media-uploader-container">
    <input
      type="file"
      name="media-file"
      id="media-file"
      onChange={({ target }) => {
        console.log("media item name", mediaItemName);
        const files = target.files;

        if (!!mediaItemName) {
          uploadFile(files, authUser.uid, mediaItemName, false, "media");
        }
        target.value = "";
      }}
    />
    {loading ? (
      <FontAwesomeIcon icon="spinner" spin />
    ) : (
      <label for="media-file" className="file-upload-button">
        upload media
      </label>
    )}
  </div>
);

class AccountProfile extends Component {
  state = {
    imageData: null,
    imageExists: false,
    name: null,
    mediaItemName: "",
    loading: false
  };
  clear;
  uploadFile = (files, id, field, preview, folder) => {
    const { notify } = this.props;
    console.log(files);
    const file = files[0];
    const type = file.type;
    const name = +new Date() + "-" + file.name;
    const metadata = {
      contentType: type
    };
    if (preview) {
      this.previewImage(file, type);
    }
    this.setState({ loading: true });
    storage.uploadFile(name, file, metadata, id, field, folder).then(() => {
      notify("upload");
      this.setState({ loading: false });
    });
  };
  componentDidMount() {
    db.loadAssetIfExists("profile_picture", imageData =>
      this.setState({ imageData, imageExists: true })
    );
    db.loadAssetIfExists("name", name => this.setState({ name }));
  }
  previewImage = (file, type) => {
    let reader = new FileReader();
    reader.onload = e => {
      console.log("loaded preview");
      console.log(e);
      console.log(e.target.result);
      console.log(typeof e.target.result);
      this.setState({
        imageData: e.target.result,
        imageExists: true
      });
    };

    reader.readAsDataURL(file);
  };
  render() {
    const { name, imageData, imageExists, mediaItemName, loading } = this.state;
    const { authUser } = this.props;

    return (
      <div className="account-profile">
        {name ? (
          <div style={{ display: "flex" }}>
            <div className="profile-picture-container">
              <input
                type="file"
                name="file"
                id="file"
                accept=".jpg, .jpeg, .png"
                onChange={({ target }) => {
                  const files = target.files;
                  console.log("f", files);

                  this.uploadFile(files, authUser.uid, "profile_picture", true);
                  target.value = "";
                }}
              />
              <label for="file" className="file-upload-button" />
              {imageExists ? (
                <img src={imageData} alt="could not load profile image" />
              ) : (
                <FontAwesomeIcon icon="camera" />
              )}
            </div>
            <div className="profile-info">
              <h3>Here's your account,</h3>
              <h3>{name}</h3>
              <h5>{authUser.email}</h5>
            </div>
          </div>
        ) : (
          <FontAwesomeIcon icon="spinner" spin />
        )}
        <InputField
          value={mediaItemName}
          field="mediaItemName"
          label="Media Item"
          type="text"
          placeholder="Enter name of your media"
          setState={obj => this.setState(obj)}
        />
        <MediaUploader
          uploadFile={this.uploadFile}
          authUser={authUser}
          mediaItemName={mediaItemName}
          loading={loading}
        />
      </div>
    );
  }
}

class AccountPage extends Component {
  render() {
    return (
      <div className="account">
        {/* <AccountProfile notify={this.props.notify} /> */}
        {/* <UpdateAccount /> */}
        {/* <PasswordForgetForm /> */}
        {/* <PasswordChangeForm /> */}
      </div>
    );
  }
}
const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(AccountPage);
