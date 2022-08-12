import React, { Component } from "react";

export default class SanPhamModal extends Component {
  renderCartList = () => {
    return this.props.itemList.map((item) => {
      return (
        <tr key={item.maSP}>
          <td>{item.maSP}</td>
          <td>
            <img
              width={50}
              src={item.hinhAnh}
              className="img-fluid"
              alt="phone"
            />
          </td>
          <td>{item.tenSP}</td>
          <td>
            <button
              onClick={() => this.props.handleClick(item, false)}
              className="btn btn-primary"
            >
              -
            </button>
            <span className="mx-1">{item.soLuong}</span>
            <button
              onClick={() => this.props.handleClick(item, true)}
              className="btn btn-primary"
            >
              +
            </button>
          </td>
          <td>{item.giaBan.toLocaleString()}</td>
          <td>{(item.giaBan * item.soLuong).toLocaleString()}</td>
          <td>
            <button
              onClick={() => this.props.deletedPhone(item)}
              className="btn btn-danger"
            >
              Xóa
            </button>
          </td>
        </tr>
      );
    });
  };

  render() {
    let sum = 0;
    this.props.itemList.forEach((num) => {
      const { soLuong } = num;
      sum += soLuong;
    });
    return (
      <div>
        <div className="d-flex justify-content-end mb-2">
          <button
            type="button"
            className="btn bg-white btn-lg text-danger border-0"
            data-bs-toggle="modal" data-bs-target="#exampleModal"
          >
            Giỏ hàng ({sum})
          </button>
        </div>
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="modelTitleId"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Giỏ hàng</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <table class="table">
                  <thead>
                    <tr>
                      <th>Mã SP</th>
                      <th>Hình Ảnh</th>
                      <th>Tên SP</th>
                      <th>Số lượng</th>
                      <th>Đơn Giá</th>
                      <th>Thành Tiền</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>{this.renderCartList()}</tbody>
                </table>
              </div>
              <div className="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}







