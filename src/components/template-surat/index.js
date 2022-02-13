import React from "react";
import { Container, Card, CardHeader, CardTitle, CardText, Button, Row, Col, Form, FormGroup, Label, Input, CustomInput, Table} from "reactstrap";
const TemplateSurat = () =>{
    return(
        <Container>
            <Card className="my-3" >
                <CardHeader className="py-3 bg-white rounded-3">
                    <h5 className="m-0 p-0 align-middle fw-bold
                    ">Jenis Surat</h5>
                </CardHeader>
            </Card>
            <Row className="mt-4">
                <Col sm="4">
                    <Card body>
                        <CardTitle tag="h6" className="fw-bold">Atribute</CardTitle>
                        <Form>
                            <FormGroup>
                                <Label for="code" className="fw-bolder">Code <sup className="fw-bold text-danger">*</sup> </Label>
                                <Input type="text" name="text" id="code" placeholder="STR002" disabled/>
                            </FormGroup>
                            <FormGroup className="mt-2">
                                <Label for="title" className="fw-bolder">Nama Judul di Naskah Surat <sup className="fw-bold text-danger">*</sup> </Label>
                                <Input type="text" name="text" id="title" placeholder="Surat Tugas/Perintah" disabled/>
                            </FormGroup>
                            <FormGroup className="mt-2">
                                <Label for="name" className="fw-bolder">Nama Surat di Aplikasi</Label>
                                <Input type="text" name="text" id="name"/>
                            </FormGroup>
                            <FormGroup className="mt-2">
                                <Label for="target" className="fw-bolder">Target <sup className="fw-bold text-danger">*</sup></Label>
                                <Input type="select" name="select" id="target">
                                <option>All</option>
                                <option>2</option>
                                </Input>
                            </FormGroup>
                            <FormGroup className="mt-2">
                                <Label for="status" className="fw-bolder">Status <sup className="fw-bold text-danger">*</sup></Label>
                                <Input type="select" name="select" id="status">
                                <option>Aktif</option>
                                <option>Non Aktif</option>
                                </Input>
                            </FormGroup>
                            <FormGroup check className="mt-3">
                                <Input type="checkbox" name="check" id="apps"/>
                                <Label for="apps" check className="fw-bolder">Tampilkan di Apps</Label>
                            </FormGroup>
                            <FormGroup check className="mt-1">
                                <Input type="checkbox" name="check" id="kop"/>
                                <Label for="kop" check className="fw-bolder">KOP Surat</Label>
                            </FormGroup>
                            <FormGroup check className="mt-1">
                                <Input type="checkbox" name="check" id="title"/>
                                <Label for="title" check className="fw-bolder">Judul Surat</Label>
                            </FormGroup>
                        </Form>
                    </Card>
                </Col>
                <Col sm="8">
                    <Card body>
                        <CardTitle tag="h5" className="fw-bold mb-4">Template</CardTitle>
                        <Row>
                            <Col sm="2">
                                <FormGroup>
                                    <CustomInput type="select" name="customSelect" style={{fontWeight:'bold'}}>
                                    <option value="">Provinsi *</option>
                                    <option>Value 1</option>
                                    </CustomInput>
                                </FormGroup>
                            </Col>
                            <Col sm="2" className="ms-2">
                                <FormGroup>
                                    <CustomInput type="select" name="customSelect" style={{fontWeight:'bold'}}>
                                    <option value="">Kota *</option>
                                    <option>Value 1</option>
                                    </CustomInput>
                                </FormGroup>
                            </Col>
                            <Col sm="2" className="me-4">
                                <FormGroup>
                                    <CustomInput type="select" name="customSelect" style={{fontWeight:'bold'}}>
                                    <option value="">Kecamatan *</option>
                                    <option>Value 1</option>
                                    </CustomInput>
                                </FormGroup>
                            </Col>
                            <Col sm="2" className="ms-2">
                                <FormGroup>
                                    <CustomInput type="select" name="customSelect" style={{fontWeight:'bold'}}>
                                    <option value="">Desa *</option>
                                    <option>Value 1</option>
                                    </CustomInput>
                                </FormGroup>
                            </Col>
                            <Col sm="2">
                                <FormGroup>
                                    <CustomInput type="select" name="customSelect" style={{fontWeight:'bold'}}>
                                    <option value="">Tanggal Surat *</option>
                                    <option>Value 1</option>
                                    </CustomInput>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row className="mt-3">
                            <Col sm="2">
                                <FormGroup>
                                    <CustomInput type="select" name="customSelect" style={{fontWeight:'bold'}}>
                                    <option value="">Jabatan *</option>
                                    <option>Value 1</option>
                                    </CustomInput>
                                </FormGroup>
                            </Col>
                            <Col sm="4" className="ms-3">
                                <FormGroup>
                                    <CustomInput type="select" name="customSelect" style={{fontWeight:'bold'}}>
                                    <option value="">Jabatan Sekdes & Kasi *</option>
                                    <option>Value 1</option>
                                    </CustomInput>
                                </FormGroup>
                            </Col>
                            <Col sm="3" className="ms-1">
                                <FormGroup>
                                    <CustomInput type="select" name="customSelect" style={{fontWeight:'bold'}}>
                                    <option value="">Nomor Surat *</option>
                                    <option>Value 1</option>
                                    </CustomInput>
                                </FormGroup>
                            </Col>
                            <Col sm="2">
                                <FormGroup>
                                    <CustomInput type="select" name="customSelect" className="is-invalid"  style={{fontWeight:'bold'}}>
                                    <option value="">Penjabat *</option>
                                    <option>Value 1</option>
                                    </CustomInput>
                                    {/* <div className="invalid-feedback">
                                        Please select a valid state.
                                    </div> */}
                                </FormGroup>
                            </Col>
                        </Row>
                    </Card>
                    <Row className="d-flex">
                        <Col sm='12'>
                            <Card className="my-3" >
                                <CardHeader className="bg-white rounded-3">
                                    <h6 className="align-middle fw-bold
                                    ">Syarat dan Ketentuan</h6>
                                </CardHeader>
                            </Card>
                        </Col>
                        <Col sm='12'>
                            <Card className="my-3" >
                                <CardHeader className="py-1 bg-white rounded d-flex">
                                    <h6 className=" mt-2 align-middle fw-bold">Field</h6>
                                    <div className="ms-auto">
                                        <Button color="primary" className="me-3 p-1">Pilih Field</Button>{' '}
                                        <Button color="primary" className="p-1 ms-2">Tambah Field</Button>{' '}
                                    </div>
                                </CardHeader>
                            </Card>
                        </Col>
                        <Col sm='12'>
                            <Card className="my-3" >
                                <Table responsive>
                                    <thead>
                                        <tr>
                                            <th>
                                                FIELD
                                            </th>
                                            <th>
                                                HIDEN
                                            </th>
                                            <th>
                                                AKSI
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">
                                                Surat Dikeluarkan Berdasarkan atau Tindak Lanjut dari Instansi / Lembaga / Pemerintah
                                            </th>
                                            <td>
                                                Tidak
                                            </td>
                                            <td>
                                                <div
                                                className="btn btn-sm"
                                                title="Delete"
                                                // onClick={() => handleDelete(data.UUID)}
                                                // style={{ margin: '3px' }}
                                                >
                                                <i class="far fa-trash-alt text-danger"></i>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">
                                                Nomor
                                            </th>
                                            <td>
                                                Tidak
                                            </td>
                                            <td>
                                                <div
                                                className="btn btn-sm"
                                                title="Delete"
                                                // onClick={() => handleDelete(data.UUID)}
                                                // style={{ margin: '3px' }}
                                                >
                                                <i class="far fa-trash-alt text-danger"></i>
                                                </div>
                                            </td>
                                        </tr> 
                                        <tr>
                                            <th scope="row">
                                                Tanggal
                                            </th>
                                            <td>
                                                Tidak
                                            </td>
                                            <td>
                                                <div
                                                className="btn btn-sm"
                                                title="Delete"
                                                // onClick={() => handleDelete(data.UUID)}
                                                // style={{ margin: '3px' }}
                                                >
                                                <i class="far fa-trash-alt text-danger"></i>
                                                </div>
                                            </td>
                                        </tr> 
                                        <tr>
                                            <th scope="row">
                                                Perihal
                                            </th>
                                            <td>
                                                Tidak
                                            </td>
                                            <td>
                                                <div
                                                className="btn btn-sm"
                                                title="Delete"
                                                // onClick={() => handleDelete(data.UUID)}
                                                // style={{ margin: '3px' }}
                                                >
                                                <i class="far fa-trash-alt text-danger"></i>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">
                                                NIK
                                            </th>
                                            <td>
                                                Ya
                                            </td>
                                            <td>
                                                <div
                                                className="btn btn-sm"
                                                title="Delete"
                                                // onClick={() => handleDelete(data.UUID)}
                                                // style={{ margin: '3px' }}
                                                >
                                                <i class="far fa-trash-alt text-danger"></i>
                                                </div>
                                            </td>
                                        </tr> 
                                        <tr>
                                            <th scope="row">
                                                Nama
                                            </th>
                                            <td>
                                                Ya
                                            </td>
                                            <td>
                                                <div
                                                className="btn btn-sm"
                                                title="Delete"
                                                // onClick={() => handleDelete(data.UUID)}
                                                // style={{ margin: '3px' }}
                                                >
                                                <i class="far fa-trash-alt text-danger"></i>
                                                </div>
                                            </td>
                                        </tr> 
                                        <tr>
                                            <th scope="row">
                                                Tanggal Lahir
                                            </th>
                                            <td>
                                                Ya
                                            </td>
                                            <td>
                                                <div
                                                className="btn btn-sm"
                                                title="Delete"
                                                // onClick={() => handleDelete(data.UUID)}
                                                // style={{ margin: '3px' }}
                                                >
                                                <i class="far fa-trash-alt text-danger"></i>
                                                </div>
                                            </td>
                                        </tr> 
                                        <tr>
                                            <th scope="row">
                                                Jenis Kelamin
                                            </th>
                                            <td>
                                                Ya
                                            </td>
                                            <td>
                                                <div
                                                className="btn btn-sm"
                                                title="Delete"
                                                // onClick={() => handleDelete(data.UUID)}
                                                // style={{ margin: '3px' }}
                                                >
                                                <i class="far fa-trash-alt text-danger"></i>
                                                </div>
                                            </td>
                                        </tr> 
                                        <tr>
                                            <th scope="row">
                                                Pekerjaan
                                            </th>
                                            <td>
                                                Ya
                                            </td>
                                            <td>
                                                <div
                                                className="btn btn-sm"
                                                title="Delete"
                                                // onClick={() => handleDelete(data.UUID)}
                                                // style={{ margin: '3px' }}
                                                >
                                                <i class="far fa-trash-alt text-danger"></i>
                                                </div>
                                            </td>
                                        </tr> 
                                        <tr>
                                            <th scope="row">
                                                Alamat
                                            </th>
                                            <td>
                                                Ya
                                            </td>
                                            <td>
                                                <div
                                                className="btn btn-sm"
                                                title="Delete"
                                                // onClick={() => handleDelete(data.UUID)}
                                                // style={{ margin: '3px' }}
                                                >
                                                <i class="far fa-trash-alt text-danger"></i>
                                                </div>
                                            </td>
                                        </tr> 
                                        <tr>
                                            <th scope="row">
                                                Jabatan
                                            </th>
                                            <td>
                                                Tidak
                                            </td>
                                            <td>
                                                <div
                                                className="btn btn-sm"
                                                title="Delete"
                                                // onClick={() => handleDelete(data.UUID)}
                                                // style={{ margin: '3px' }}
                                                >
                                                <i class="far fa-trash-alt text-danger"></i>
                                                </div>
                                            </td>
                                        </tr> 
                                        <tr>
                                            <th scope="row">
                                                Tugas atau Perintah yang Diberikan 
                                            </th>
                                            <td>
                                                Tidak
                                            </td>
                                            <td>
                                                <div
                                                className="btn btn-sm"
                                                title="Delete"
                                                // onClick={() => handleDelete(data.UUID)}
                                                // style={{ margin: '3px' }}
                                                >
                                                <i class="far fa-trash-alt text-danger"></i>
                                                </div>
                                            </td>
                                        </tr> 
                                        <tr>
                                            <th scope="row">
                                                Hari Pelaksaan / Kegiatan
                                            </th>
                                            <td>
                                                Tidak
                                            </td>
                                            <td>
                                                <div
                                                className="btn btn-sm"
                                                title="Delete"
                                                // onClick={() => handleDelete(data.UUID)}
                                                // style={{ margin: '3px' }}
                                                >
                                                <i class="far fa-trash-alt text-danger"></i>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">
                                                Tanggal Pelaksanaan / Kegiatan 
                                            </th>
                                            <td>
                                                Tidak 
                                            </td>
                                            <td>
                                                <div
                                                className="btn btn-sm"
                                                title="Delete"
                                                // onClick={() => handleDelete(data.UUID)}
                                                // style={{ margin: '3px' }}
                                                >
                                                <i class="far fa-trash-alt text-danger"></i>
                                                </div>
                                            </td>
                                        </tr> 
                                        <tr>
                                            <th scope="row">
                                                Waktu Pelaksanaan / Kegiatan
                                            </th>
                                            <td>
                                                Tidak 
                                            </td>
                                            <td>
                                                <div
                                                className="btn btn-sm"
                                                title="Delete"
                                                // onClick={() => handleDelete(data.UUID)}
                                                // style={{ margin: '3px' }}
                                                >
                                                <i class="far fa-trash-alt text-danger"></i>
                                                </div>
                                            </td>
                                        </tr> 
                                        <tr>
                                            <th scope="row">
                                                Tempat Pelaksanaan / Kegiatan 
                                            </th>
                                            <td>
                                                Tidak
                                            </td>
                                            <td>
                                                <div
                                                className="btn btn-sm"
                                                title="Delete"
                                                // onClick={() => handleDelete(data.UUID)}
                                                // style={{ margin: '3px' }}
                                                >
                                                <i class="far fa-trash-alt text-danger"></i>
                                                </div>
                                            </td>
                                        </tr>  
                                    </tbody>
                                </Table>
                                <div className="ms-auto mb-3 me-1">
                                    <Button outline className="p-1 rounded me-4">
                                        Cancel
                                    </Button>
                                    {' '}
                                    <Button
                                        color="primary" className="p-1 rounded"
                                    >
                                        Simpan
                                    </Button>
                                    {' '}
                                </div>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}
export default TemplateSurat;