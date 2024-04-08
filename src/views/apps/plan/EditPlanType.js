import React, { Component } from "react";
import {
  Card,
  CardBody,
  Row,
  Col,
  Form,
  Label,
  Input,
  Button,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import ReactHtmlParser from "react-html-parser";
import {
  ContentState,
  EditorState,
  convertFromHTML,
  convertToRaw,
} from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import { Route } from "react-router-dom";
import axiosConfig from "../../../axiosConfig";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "../../../assets/scss/plugins/extensions/editor.scss";
import swal from "sweetalert";
export default class EditPlanType extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // file(uploadPolicy),
      policynumber: "",
      policyIssuersName: "",
      ReEnterPolicyNumber: "",
      // status:""
    };
  }
  componentDidMount() {
    let { id } = this.props.match.params;
    axiosConfig
      .get(`/asset/view-asset-by-id/${id}`)
      .then((response) => {
        const { policyIssuersName, policynumber, ReEnterPolicyNumber, status } =
          response.data.Asset;
        this.setState({
          policynumber: policynumber,
          policyIssuersName: policyIssuersName,
          ReEnterPolicyNumber: ReEnterPolicyNumber,
        });
      })
      .catch((error) => {
        console.log(error.response);
      });
  }
  changeHandler1 = (e) => {
    this.setState({ status: e.target.value });
  };

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitHandler = (e) => {
    const payload = {
      policynumber: this.state.policynumber,
      policyIssuersName: this.state.policyIssuersName,
      ReEnterPolicyNumber: this.state.ReEnterPolicyNumber,
      // file (uploadPolicy),policynumber,policyIssuersName,ReEnterPolicyNumber,userId
    };
    e.preventDefault();
    let { id } = this.props.match.params;
    axiosConfig
      .put(`/asset/update-asset/${id}`, payload)
      .then((response) => {
        swal("Success!", "Submitted SuccessFull!", "success");
        this.props.history.push(`/app/assets/AsstesList`);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  render() {
    return (
      <div>
        
        <Card>
          <Row className="m-2">
            <Col>
              <h1 col-sm-6 className="float-left">
                Edit Asset
              </h1>
            </Col>
            <Col>
              <Route
                render={({ history }) => (
                  <Button
                    className=" btn btn-danger float-right"
                    onClick={() => history.push("/app/assets/AsstesList")}
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
              <Label style={{fontSize:'18px'}}>Asset Name</Label>
              <Input
              style={{fontSize:'18px'}}
                type="text"
                name="policynumber"
                placeholder="Asset Name"
                value={this.state.policynumber}
                onChange={this.changeHandler}
              />
            </Col>
            </Row>
              <Row>
             
                <Col lg="6" md="6" sm="12" className="mb-2">
                  <Label style={{fontSize:'18px'}}>Field 1</Label>
                  <Input
                  style={{fontSize:'18px'}}
                    type="text"
                    name="policyIssuersName"
                    placeholder="policyIssuersName"
                    value={this.state.policyIssuersName}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="6" md="6" sm="12" className="mb-2">
                  <Label style={{fontSize:'18px'}}>Field 2</Label>
                  <Input
                  style={{fontSize:'18px'}}
                    type="text"
                    name="ReEnterPolicyNumber"
                    placeholder="ReEnterPolicyNumber"
                    value={this.state.ReEnterPolicyNumber}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="6" md="6" sm="12" className="mb-2">
                  <Label style={{fontSize:'18px'}}>Field 3</Label>
                  <Input
                  style={{fontSize:'18px'}}
                    type="text"
                    name="ReEnterPolicyNumber"
                    placeholder="ReEnterPolicyNumber"
                    value={this.state.ReEnterPolicyNumber}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="6" md="6" sm="12" className="mb-2">
                  <Label style={{fontSize:'18px'}}>Field 4</Label>
                  <Input
                  style={{fontSize:'18px'}}
                    type="text"
                    name="ReEnterPolicyNumber"
                    placeholder="ReEnterPolicyNumber"
                    value={this.state.ReEnterPolicyNumber}
                    onChange={this.changeHandler}
                  />
                </Col>
                {/* <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label className="mb-1">Status</Label>
                  <div
                    className="form-label-group"
                    onChange={(e) => this.changeHandler1(e)}
                  >
                    <input
                      style={{ marginRight: "3px" }}
                      type="radio"
                      name="status"
                      value="Active"
                    />
                    <span style={{ marginRight: "20px" }}>Active</span>

                    <input
                      style={{ marginRight: "3px" }}
                      type="radio"
                      name="status"
                      value="false"
                    />
                    <span style={{ marginRight: "3px" }}>Deactive</span>
                  </div>
                </Col> */}
              </Row>
              <div style={{justifyContent:'right',display:'flex'}}>
              <Button.Ripple
              style={{backgroundColor:'#2966ac'}}
               type="submit"
               className="mr-1 mb-1"
             >
               Update 
             </Button.Ripple>
              </div>
            </Form>
          </CardBody>
        </Card>
      </div>
    );
  }
}
