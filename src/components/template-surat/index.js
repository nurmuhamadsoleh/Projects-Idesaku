import React from "react";
import { Button, Card, Container, Row, Col, Input, Label, CardBody, CardTitle,CardSubtitle, 
    CardText, FormGroup } from "reactstrap";
import { SubTitle } from "..";
const Templatesurat = () =>{
    return (
      <Container fluid className="px-2">
        <SubTitle title="Jenis Surat" />
        <Row className="mt-4">
          <Col xs="4">
            <Card>
              <CardBody>
                <CardTitle tag="h5">Atribut</CardTitle>
                <hr />
                <FormGroup>
                  <Label for="exampleEmail">
                    Code <span className="text-danger">*</span>{" "}
                  </Label>
                  <Input
                    id="exampleEmail"
                    name="email"
                    placeholder="SRT002"
                    type="email"
                  />
                </FormGroup>

                <FormGroup className="mt-3">
                  <Label for="exampleEmail">
                    Nama Judul Di Naskah Surat{" "}
                    <span className="text-danger">*</span>{" "}
                  </Label>
                  <Input
                    id="exampleEmail"
                    name="email"
                    placeholder="Surat Tugas/Perintah"
                    type="email"
                  />
                </FormGroup>

                <FormGroup className="mt-3">
                  <Label for="exampleEmail">
                    Nama Surat Di Aplikasi{" "}
                    <span className="text-danger">*</span>{" "}
                  </Label>
                  <Input
                    id="exampleEmail"
                    name="email"
                    placeholder="Masukkan nama surat"
                    type="email"
                  />
                </FormGroup>
              </CardBody>
            </Card>
          </Col>
          <Col xs="8">
            <Card>
              <CardBody>
                <CardTitle tag="h5">Card title</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  Card subtitle
                </CardSubtitle>
                <CardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </CardText>
                <Button>Button</Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    );
}
export default Templatesurat;