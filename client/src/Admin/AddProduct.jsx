import React, { useState } from 'react';

function AddProduct({ onAddProduct }) {
    const [formData, setFormData] = useState({
        image: '',
        name: '',
        price: '',
        description: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddProduct(formData);
        setFormData({
            image: '',
            name: '',
            price: '',
            description: ''
        });
    };

    return (
        <div className="bg-form">
            <form className='add-product-form' onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="image">Hình ảnh:</label>
                    <input type="text" id="image" name="image" className="form-control" placeholder="URL hình ảnh" value={formData.image} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="name">Tên sản phẩm:</label>
                    <input type="text" id="name" name="name" className="form-control" placeholder="Tên sản phẩm" value={formData.name} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="price">Giá:</label>
                    <input type="text" id="price" name="price" className="form-control" placeholder="Giá sản phẩm" value={formData.price} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Mô tả:</label>
                    <textarea id="description" name="description" className="form-control description" placeholder="Mô tả sản phẩm" value={formData.description} onChange={handleChange} />
                </div>
                <button type="submit" className="btn btn-primary">Thêm sản phẩm</button>
            </form>
        </div>
    );
}

export default AddProduct;
