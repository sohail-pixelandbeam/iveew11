import React, { useState, useRef } from 'react';
import './Form.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Swal from 'sweetalert2';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Form = () => {
  const [numberofrooms, setNumberOfRooms] = useState('');
  const [occupancy, setOccupancy] = useState('');
  const [avgdailyrate, setAvgDailyRate] = useState('');
  const [otacommission, setOtaCommission] = useState('');
  const [directbookingconversion, setDirectBookingConversion] = useState('');
  const [savings, setSavings] = useState('');

  const modalRef = useRef(null);

  const handleSubmit = () => {
    const netrooms = numberofrooms * (occupancy / 100);
    let netamount = netrooms * avgdailyrate;
    netamount = netamount * (otacommission / 100);
    netamount = netamount * 365;
    netamount = netamount * (directbookingconversion / 100);
    const formattedNumber = netamount.toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
    setSavings(`$${formattedNumber}`);

    const url = `https://script.google.com/macros/s/AKfycbzyyhC4CG9VFSZpZ6Zq4ToEnCY_0Vn-srrXDsostf3W-vQv1ppZZE5U8zlOx0rAdmhiwA/exec?numberofrooms=${numberofrooms}&occupancy=${occupancy}&avgdailyrate=${avgdailyrate}&otacommission=${otacommission}&directbookingconversion=${directbookingconversion}&savings=${formattedNumber}`;
    fetch(url, {
      method: 'GET',
      mode: 'no-cors'
    });

    setNumberOfRooms('');
    setOccupancy('');
    setAvgDailyRate('');
    setOtaCommission('');
    setDirectBookingConversion('');

    Swal.fire('Entry Added Successfully', '', 'success').then(() => {
      // Close the modal
      const modalElement = modalRef.current;
      const modalInstance = window.bootstrap.Modal.getInstance(modalElement);
      modalInstance.hide();
    });
  };

  return (
    <div className="container-form">
      <button className="gradient-button" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Open Dialog
      </button>

      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{marginTop:'80px'}} ref={modalRef}>
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Submit Entry</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="container">
                <div className="row">
                  <div className="col-lg-2"></div>
                  <div className="col-lg-4">
                    <label>Number of Rooms:</label>
                  </div>
                  <div className="col-lg-4">
                    <input
                      type="text"
                      className="form-control"
                      value={numberofrooms}
                      onChange={(e) => setNumberOfRooms(e.target.value)}
                      placeholder="Enter No of Rooms"
                    />
                  </div>
                </div>
                <br />
                <div className="row">
                  <div className="col-lg-2"></div>
                  <div className="col-lg-4">
                    <label>Occupancy (%):</label>
                  </div>
                  <div className="col-lg-4">
                    <input
                      type="text"
                      className="form-control"
                      value={occupancy}
                      onChange={(e) => setOccupancy(e.target.value)}
                      placeholder="Enter Occupancy %"
                    />
                  </div>
                </div>
                <br />
                <div className="row">
                  <div className="col-lg-2"></div>
                  <div className="col-lg-4">
                    <label>Avg Daily Rate (ADR):</label>
                  </div>
                  <div className="col-lg-4">
                    <input
                      type="text"
                      className="form-control"
                      value={avgdailyrate}
                      onChange={(e) => setAvgDailyRate(e.target.value)}
                      placeholder="Enter Avg Daily Rate"
                    />
                  </div>
                </div>
                <br />
                <div className="row">
                  <div className="col-lg-2"></div>
                  <div className="col-lg-4">
                    <label>OTA Commission (%):</label>
                  </div>
                  <div className="col-lg-4">
                    <input
                      type="text"
                      className="form-control"
                      value={otacommission}
                      onChange={(e) => setOtaCommission(e.target.value)}
                      placeholder="Enter OTA Commission"
                    />
                  </div>
                </div>
                <br />
                <div className="row">
                  <div className="col-lg-2"></div>
                  <div className="col-lg-4">
                    <label>Direct Booking Conversion (%):</label>
                  </div>
                  <div className="col-lg-4">
                    <input
                      type="text"
                      className="form-control"
                      value={directbookingconversion}
                      onChange={(e) => setDirectBookingConversion(e.target.value)}
                      placeholder="Enter Direct Booking Conv"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn gradient-button" onClick={handleSubmit}>Submit</button>
            </div>
          </div>
        </div>
      </div>

      <br />
      <div className="row">
        <div className="col-lg-6">
          <hr />
        </div>
      </div>
      
      <div className="row">
        <div className="col-lg-2">
          <label>Total Savings (Per Year):</label>
        </div>
        <div className="col-lg-3">
          <input type="text" className="form-control" value={savings} readOnly />
        </div>
      </div>
    </div>
  );
};

export default Form;
