import React, { Component } from 'react'
import dataSanPham from '../../Data/dataSanPham.json'
import SanPham from './SanPham'
import SanPhamChiTiet from './SanPhamChiTiet'
import SanPhamList from './SanPhamList'
import SanPhamModal from './SanPhamModal'

export default class BaiTapProps extends Component {
    state = {
        modalState: dataSanPham[0],
        itemList: [],
      };
    
  xemChiTiet = (phone) => {
    this.setState({
      modalState: phone,
    });
  };

  themGioHang = (phone) => {
    const dataCart = [...this.state.itemList];

    const index = dataCart.findIndex((item) => {
      return item.maSP === phone.maSP;
    });

    if (index !== -1) {
        dataCart[index].soLuong += 1;
      } else {
        dataCart.push({ ...phone, soLuong: 1 });
      }
  
      this.setState({
        itemList: dataCart,
      });
    };
  
    handleClick = (phone, SL) => {
      const dataCart = [...this.state.itemList];
  
      const index = dataCart.findIndex((item) => item.maSP === phone.maSP);
  
      if (index === -1) {
       return;
      }
  
      if (SL) {
        dataCart[index].soLuong += 1;
      } else if (dataCart[index].soLuong > 1) {
        dataCart[index].soLuong -= 1;
      } else if (window.confirm("")) {
        dataCart.splice(index, 1);
      }
  
      this.setState({
        itemList: dataCart,
      });
    };
  
    deletedPhone = (phone) => {
      const dataCart = [...this.state.itemList];
  
      const index = dataCart.findIndex((item) => item.maSP === phone.maSP);
  
      if (window.confirm("Xóa sản phẩm ra khỏi giỏ hàng?")) {
        dataCart.splice(index, 1);
      }
  
      this.setState({
        itemList: dataCart,
      });
    };
  





  render() {
    return (
      <div className='container'>
        <h3 className='text-center text-success'>Bài Tập Giỏ Hàng</h3>
        {/* MODAL */}
        <SanPhamModal
          handleClick={this.handleClick}
          itemList={this.state.itemList}
          deletedPhone={this.deletedPhone}
        />

        {/* PRODUCT LIST */}
        <SanPhamList
          themGioHang={this.themGioHang}
          xemChiTiet={this.xemChiTiet}
        />

        {/* ProductDetail */}
        <SanPhamChiTiet modalState={this.state.modalState} />  


        
      </div>
    )
  }
}
