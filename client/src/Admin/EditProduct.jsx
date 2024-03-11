import React, { useState, useEffect } from 'react';

function EditProduct({ product, onSaveChanges }) {
    const [formData, setFormData] = useState({
        image: '',
        name: '',
        price: '',
        description: ''
    });

    useEffect(() => {
        // Set giá trị ban đầu cho formData khi product thay đổi
        setFormData({
            image: product.image,
            name: product.name,
            price: product.price,
            description: product.description
        });
    }, [product]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSaveChanges(formData);
    };

    return (
        <div className="bg-form">
            <form onSubmit={handleSubmit}>
                <h3>Edit Product</h3>
                <div className="form-group">
                    <label htmlFor="image">Hình ảnh:</label>
                    <input type="text" id="image" name="image" className="form-control" value={formData.image} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="name">Tên sản phẩm:</label>
                    <input type="text" id="name" name="name" className="form-control" value={formData.name} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="price">Giá:</label>
                    <input type="text" id="price" name="price" className="form-control" value={formData.price} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Mô tả:</label>
                    <textarea id="description" name="description" className="form-control" value={formData.description} onChange={handleChange} />
                </div>
                <button type="submit" className="btn btn-primary">Lưu thay đổi</button>
            </form>
        </div>
    );
}

export default EditProduct;
