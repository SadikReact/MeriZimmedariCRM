import React from "react";
import {
  Card,
  CardBody,
  Row,
  Col,
  Form,
  Label,
  Input,
  Button,
} from "reactstrap";
import { Route } from "react-router-dom";
import axiosConfig from "../../../axiosConfig";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "../../../assets/scss/plugins/extensions/editor.scss";
import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb";
import swal from "sweetalert";

class AddPlanType extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      planType: "",
      desc: "",
    };
  }
  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
      desc: draftToHtml(convertToRaw(editorState.getCurrentContent())),
    });
  };
  // changeHandler1 = (e) => {
  //   this.setState({ status: e.target.value });
  // };
  // changeHandler = (e) => {
  //   this.setState({ [e.target.name]: e.target.value });
  // };
  handleFileChange = (event) => {
    // console.log(event.target.files[0]);
    this.setState({ files: event.target.files[0] });
  };

  submitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", this.state.files);
    axiosConfig
      .post("/admin/import-data", formData)
      .then((response) => {
        console.log(response.data.message);
      })
      .catch((error) => {
        console.error(error);
      });
    // const description = {
    //   plan_type: this.state.planType,
    //   plan_desc: this.state.desc,
    // };

    // axiosConfig
    //   .post("", description)
    //   .then((response) => {
    //     console.log(response);
    //     swal("Success!", "Submitted SuccessFull!", "success");
    //     this.setState({ desc: "" });
    //     this.props.history.push("/app/plan/PlanTypeList");
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };

  render() {
    return (
      <div>
        <Breadcrumbs
          breadCrumbTitle="Add Assets"
          breadCrumbParent="Home"
          breadCrumbActive="Add Assets"
        />
        <Card>
          <Row className="m-2">
            <Col>
              <h1 col-sm-6 className="float-left">
                Add Assets
              </h1>
            </Col>
            <Col>
              <Route
                render={({ history }) => (
                  <Button
                    className=" btn btn-danger float-right"
                    onClick={() => history.push("/app/plan/PlanTypeList")}
                  >
                    Back
                  </Button>
                )}
              />
            </Col>
          </Row>
          <CardBody>
            <Form className="m-1" onSubmit={this.submitHandler}>
              <Row>
                <Col lg="6" md="6" sm="12" className="mb-2">
                  <Label>Assets</Label>
                  <Input
                    type="file"
                    name="assetName"
                    onChange={this.handleFileChange}
                  />
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Button.Ripple
                    color="primary"
                    type="submit"
                    className="mr-1 mb-1"
                  >
                    Submit
                  </Button.Ripple>
                </Col>
              </Row>
            </Form>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default AddPlanType;
