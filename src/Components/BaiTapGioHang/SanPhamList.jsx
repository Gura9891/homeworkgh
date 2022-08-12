import React, { Component } from "react";
import dataSanPham from '../../Data/dataSanPham.json'
import SanPham from "./SanPham";


export default class SanPhamList extends Component {
  renderPhone = () => {
    return dataSanPham.map((item) => {
      return (
        <SanPham
        themGioHang={this.props.themGioHang}
          xemChiTiet={this.props.xemChiTiet}
          phone={item}
        />
      );
    });
  };
  render() {
    return (
      <div>

        <div className="row">{this.renderPhone()}</div>
      </div>
    );
  }
}
