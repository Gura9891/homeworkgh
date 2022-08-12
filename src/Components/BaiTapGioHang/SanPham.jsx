import React, { Component } from "react";

export default class SanPham extends Component {
  render() {
    const { hinhAnh, tenSP } = this.props.phone;
    return (
      <div className="col-4 text-start">
        <div className="card">
          <img className="card-img-top" src={hinhAnh} alt="..." />
          <div className="card-body">
            <h4 className="card-title">{tenSP}</h4> 
            <div>
              <button
                onClick={() => {
                  this.props.xemChiTiet(this.props.phone);
                }}
                className="btn btn-success"
              >
                XEM CHI TIẾT
              </button>
              <button
                onClick={() => {
                  this.props.themGioHang(this.props.phone);
                }}
                className="btn btn-danger ms-2"
              >
                THÊM GIỎ HÀNG
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
