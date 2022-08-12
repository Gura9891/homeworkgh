import React, { Component } from "react";

export default class SanPhamChiTiet extends Component {
  render() {
    return (
      <div className="row mt-5">
        <div className="col-5">
          <h4>{this.props.modalState.tenSP}</h4>
          <img
            src={this.props.modalState.hinhAnh}
            className="img-fluid"
            alt="phone"
          />
        </div>
        <div className="col-7">
          <h4 className="mb-5">THÔNG SỐ KỸ THUẬT</h4>
          <table className="table">
            <tbody>
              <tr>
                <td>Màn hình</td>
                <td>{this.props.modalState.manHinh}</td>
              </tr>
              <tr>
                <td>Hệ điều hành</td>
                <td>{this.props.modalState.heDieuHanh}</td>
              </tr>
              <tr>
                <td>Camera trước</td>
                <td>{this.props.modalState.cameraTruoc}</td>
              </tr>
              <tr>
                <td>Camera sau</td>
                <td>{this.props.modalState.cameraSau}</td>
              </tr>
              <tr>
                <td>RAM</td>
                <td>{this.props.modalState.ram}</td>
              </tr>
              <tr>
                <td>ROM</td>
                <td>{this.props.modalState.rom}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
