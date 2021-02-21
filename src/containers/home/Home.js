import React from 'react';
import { Col, Row, Form, Jumbotron } from 'react-bootstrap';
import NavigationBar from '../../components/navigation_bar/NavigationBar';
import './Home.scss';

class Home extends React.Component {
  constructor() {
    super();
  
    this.state ={
    };
    this.onInputchange = this.onInputchange.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = { random: 0 };
    }

    handleClick() {
      const min = 1;
      const max = 200;
      const rand = min + Math.random() * (max - min);
      if(rand > 1500) { 
        console.log('hello');
      }

      this.setState({ random: this.state.random + rand });

    }

    onInputchange(event) {
      this.setState({
        [event.target.name]: event.target.value
      });
    }
  
    onSubmitForm() {
      console.log(this.state);
      const formData = new FormData();
      formData.append('myImage',this.state.file);
      const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    };
    }

render() {
  return (
      <>
      <div className="dashboard-container">
          <div className="d-flex justify-content-between text-center pdb-24">
            <p alt="sort-icon" />
            <p className="mb-0 fs-14 text-center">Panghegar App (JDS-TEST)</p>
            <p className="kirito" alt="mood-icon" />
          </div>
    
       <div className="pd-0">
        <form>
          <div>
          <Form.Group as={Row}>
          <Form.Label className="fs-13" column sm="2">
            Nama
          </Form.Label>
          <Col sm="10">
            <input
              name="nama"
              type="text"
              value={this.state.nama}
              onChange={this.onInputchange}
              required
            />
          </Col>
          </Form.Group>
        <div>
          <Form.Group as={Row}>
          <Form.Label className="fs-13" column sm="2">
            Nomer Induk Keluarga
            </Form.Label>
            <Col sm="10">
            <input
              name="nik"
              type="number"
              value={this.state.nik}
              onChange={this.onInputchange}
              required
            />
          </Col>
          </Form.Group>
        </div>
        <div>
          <Form.Group as={Row}>
          <Form.Label className="fs-13" column sm="2">
            Nomer Kartu Keluarga
            </Form.Label>
            <Col sm="10">
            <input
              name="nkk"
              type="number"
              value={this.state.nkk}
              onChange={this.onInputchange}
              required
            />
          </Col>
          </Form.Group>
        </div>
        <div>
          <Form.Group as={Row}>
          <Form.Label className="fs-13" column sm="2">
            Foto KTP :
            </Form.Label>
            <Col sm="10">
            <form onSubmit={this.onFormSubmit}>
                <input type="file" name="fotoktp" onChange= {this.onChange} required/>
          </form>
          </Col>
          </Form.Group>
        </div>
        <div>
          <Form.Group as={Row}>
          <Form.Label className="fs-13" column sm="2">
            Foto Keluarga :
            </Form.Label>
            <Col sm="10">
            <form onSubmit={this.onFormSubmit}>
                <input type="file" name="fotokeluarga" onChange= {this.onChange} required/>
          </form>
          </Col>
          </Form.Group>
        </div>
        <div>
          <Form.Group as={Row}>
          <Form.Label className="fs-13" column sm="2">
            Jenis Kelamin :
            </Form.Label>
            <Col sm="10">
            <Form.Control as="select" required>
            <option>L</option>
            <option>P</option>
            </Form.Control>
           </Col>
          </Form.Group>
        </div>
        <div>
          <Form.Group as={Row}>
          <Form.Label className="fs-13" column sm="2">
            Alamat :
            </Form.Label>
            <Col sm="10">
            <input
              name="alamat"
              type="string"
              value={this.state.alamat}
              maxLength="255"
              required
            />
           </Col>
          </Form.Group>
        </div>
        <div>
          <Form.Group as={Row} controlId="formPlaintextEmail">
          <Form.Label className="fs-13" column sm="2">
            RT :
            </Form.Label>
            <Col sm="10">
            <input
              name="rt"
              type="string"
              value={this.state.rt}
              required
            />
           </Col>
          </Form.Group>
        </div>
        <div>
          <Form.Group as={Row} controlId="formPlaintextEmail">
          <Form.Label className="fs-13" column sm="2">
            RW
            </Form.Label>
            <Col sm="10">
            <input
              name="rw"
              type="string"
              value={this.state.rw}
              required
            />
           </Col>
          </Form.Group>
        </div>
        <div>
          <Form.Group as={Row} controlId="formPlaintextEmail">
          <Form.Label className="fs-13" column sm="2">
            Penghasilan Sebelum Pandemi
            </Form.Label>
            <Col sm="10">
            <input
              name="penghasilanbp"
              type="number"
              value={this.state.penghasilanbp}
              required
            />
           </Col>
          </Form.Group>
        </div>
        <div>
          <Form.Group as={Row} controlId="formPlaintextEmail">
          <Form.Label className="fs-13" column sm="2">
            Penghasilan Sesudah Pandemi
            </Form.Label>
            <Col sm="10">
            <input
              name="penghasilansp"
              type="number"
              value={this.state.penghasilansp}
              required
            />
           </Col>
          </Form.Group>
        </div>
        <div>
          <Form.Group as={Row} controlId="formPlaintextEmail">
          <Form.Label className="fs-13" column sm="2">
            Alasan membutuhkan bantuan
            </Form.Label>
            <Col sm="10">
            <Form.Control as="Select" required>
            <option>Kehilangan pekerjaan</option>
            <option>Kepala keluarga terdampak atau korban Covid</option>
            <option>Tergolong fakir/miskin semenjak sebelum Covid</option>
            <option>Lainnya :  pekerjaan</option>
            </Form.Control>
            <disabled
              name="penghasilansp"
              type="enum|string"
              value={this.state.penghasilansp}
            />
           </Col>
          </Form.Group>
        </div>
          <div className="form-group form-check">
            <input type="checkbox" className="form-check-input" required />
            <p className="fs-13">
            Saya menyatakan bahwa data yang diisikan adalah benar dan siap mempertanggungjawabkan apabila ditemukan ketidaksesuaian dalam data tersebut.
            </p>
          </div>
          <button onClick={this.handleClick.bind(this)}>Submit</button>
          <div>The number is:{this.state.random}</div>
          </div>
        </form>
        <NavigationBar />
      </div>
      </div>
      </>
    );
  }
}

export default Home;